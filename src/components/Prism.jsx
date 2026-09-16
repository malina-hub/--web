import { useEffect, useRef } from 'react';
import { Renderer, Triangle, Program, Mesh } from 'ogl';
import './Prism.css';

const Prism = ({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1,
  offset = { x: 0, y: 0 },
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5,
  lightMode = false
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const H = Math.max(0.001, height);
    const BW = Math.max(0.001, baseWidth);
    const BASE_HALF = BW * 0.5;
    const GLOW = Math.max(0.0, glow);
    const NOISE = Math.max(0.0, noise);
    const offX = offset?.x ?? 0;
    const offY = offset?.y ?? 0;
    const SAT = transparent ? 1.5 : 1;
    const SCALE = Math.max(0.001, scale);
    const HUE = hueShift || 0;
    const CFREQ = Math.max(0.0, colorFrequency || 1);
    const BLOOM = Math.max(0.0, bloom || 1);
    const TS = Math.max(0, timeScale || 1);
    const HOVSTR = Math.max(0, hoverStrength || 1);
    const INERT = Math.max(0, Math.min(1, inertia || 0.12));

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const renderer = new Renderer({ dpr, alpha: transparent, antialias: false });
    const gl = renderer.gl;
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.BLEND);
    Object.assign(gl.canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
    container.appendChild(gl.canvas);

    const vertex = `attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }`;
    const fragment = `
      precision highp float;
      uniform vec2 iResolution; uniform float iTime; uniform float uHeight; uniform float uBaseHalf;
      uniform mat3 uRot; uniform int uUseBaseWobble; uniform float uGlow; uniform vec2 uOffsetPx;
      uniform float uNoise; uniform float uSaturation; uniform float uScale; uniform float uHueShift;
      uniform float uColorFreq; uniform float uBloom; uniform float uCenterShift; uniform float uInvBaseHalf;
      uniform float uInvHeight; uniform float uMinAxis; uniform float uPxScale; uniform float uTimeScale;
      uniform float uLightMode;
      vec4 tanh4(vec4 x){ vec4 e2x=exp(2.0*x); return (e2x-1.0)/(e2x+1.0); }
      float rand(vec2 co){ return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453123); }
      float sdOctaAnisoInv(vec3 p){ vec3 q=vec3(abs(p.x)*uInvBaseHalf,abs(p.y)*uInvHeight,abs(p.z)*uInvBaseHalf); float m=q.x+q.y+q.z-1.0; return m*uMinAxis*0.5773502691896258; }
      float sdPyramidUpInv(vec3 p){ return max(sdOctaAnisoInv(p),-p.y); }
      mat3 hueRotation(float a){
        float c=cos(a),s=sin(a);
        mat3 W=mat3(.299,.587,.114,.299,.587,.114,.299,.587,.114);
        mat3 U=mat3(.701,-.587,-.114,-.299,.413,-.114,-.300,-.588,.886);
        mat3 V=mat3(.168,-.331,.500,.328,.035,-.500,-.497,.296,.201);
        return W+U*c+V*s;
      }
      void main(){
        vec2 f=(gl_FragCoord.xy-.5*iResolution.xy-uOffsetPx)*uPxScale;
        float z=5.0,d=0.0; vec3 p; vec4 o=vec4(0.0); mat2 wob=mat2(1.0);
        if(uUseBaseWobble==1){ float t=iTime*uTimeScale; float c0=cos(t),c1=cos(t+33.0),c2=cos(t+11.0); wob=mat2(c0,c1,c2,c0); }
        for(int i=0;i<100;i++){ p=vec3(f,z); p.xz=p.xz*wob; p=uRot*p; vec3 q=p; q.y+=uCenterShift; d=.1+.2*abs(sdPyramidUpInv(q)); z-=d; o+=(sin((p.y+z)*uColorFreq+vec4(0.,1.,2.,3.))+1.)/d; }
        o=tanh4(o*o*(uGlow*uBloom)/1e5); vec3 col=o.rgb; col+=(rand(gl_FragCoord.xy+vec2(iTime))-.5)*uNoise; col=clamp(col,0.,1.);
        float L=dot(col,vec3(.2126,.7152,.0722)); col=clamp(mix(vec3(L),col,uSaturation),0.,1.);
        if(abs(uHueShift)>.0001) col=clamp(hueRotation(uHueShift)*col,0.,1.);
        if(uLightMode>.5){ float peak=max(col.r,max(col.g,col.b)); vec3 chroma=pow(clamp(col/max(peak,.0001),0.,1.),vec3(1.14)); gl_FragColor=vec4(mix(vec3(1.),chroma,o.a*.94),1.); }
        else gl_FragColor=vec4(col,o.a);
      }
    `;
    const geometry = new Triangle(gl);
    const iResBuf = new Float32Array(2); const offsetPxBuf = new Float32Array(2); const rotBuf = new Float32Array(9);
    const program = new Program(gl, { vertex, fragment, uniforms: {
      iResolution:{value:iResBuf}, iTime:{value:0}, uHeight:{value:H}, uBaseHalf:{value:BASE_HALF}, uUseBaseWobble:{value:1},
      uRot:{value:new Float32Array([1,0,0,0,1,0,0,0,1])}, uGlow:{value:GLOW}, uOffsetPx:{value:offsetPxBuf}, uNoise:{value:NOISE},
      uSaturation:{value:SAT}, uScale:{value:SCALE}, uHueShift:{value:HUE}, uColorFreq:{value:CFREQ}, uBloom:{value:BLOOM},
      uCenterShift:{value:H*.25}, uInvBaseHalf:{value:1/BASE_HALF}, uInvHeight:{value:1/H}, uMinAxis:{value:Math.min(BASE_HALF,H)},
      uPxScale:{value:1/((gl.drawingBufferHeight||1)*.1*SCALE)}, uTimeScale:{value:TS}, uLightMode:{value:lightMode?1:0}
    }});
    const mesh = new Mesh(gl,{geometry,program});
    const resize = () => { const w=container.clientWidth||1,h=container.clientHeight||1; renderer.setSize(w,h); iResBuf[0]=gl.drawingBufferWidth; iResBuf[1]=gl.drawingBufferHeight; offsetPxBuf[0]=offX*dpr; offsetPxBuf[1]=offY*dpr; program.uniforms.uPxScale.value=1/((gl.drawingBufferHeight||1)*.1*SCALE); };
    const ro = new ResizeObserver(resize); ro.observe(container); resize();
    const setMat3 = (yawY,pitchX,rollZ,out) => { const cy=Math.cos(yawY),sy=Math.sin(yawY),cx=Math.cos(pitchX),sx=Math.sin(pitchX),cz=Math.cos(rollZ),sz=Math.sin(rollZ); out[0]=cy*cz+sy*sx*sz; out[1]=cx*sz; out[2]=-sy*cz+cy*sx*sz; out[3]=-cy*sz+sy*sx*cz; out[4]=cx*cz; out[5]=sy*sz+cy*sx*cz; out[6]=sy*cx; out[7]=-sx; out[8]=cy*cx; return out; };
    let raf=0; const t0=performance.now(); let yaw=0,pitch=0,roll=0; let targetYaw=0,targetPitch=0;
    const rnd=()=>Math.random(); const wX=.3+rnd()*.6,wY=.2+rnd()*.7,wZ=.1+rnd()*.5,phX=rnd()*Math.PI*2,phZ=rnd()*Math.PI*2;
    const pointer={x:0,y:0,inside:true};
    const onMove=e=>{ pointer.x=Math.max(-1,Math.min(1,(e.clientX-window.innerWidth*.5)/(window.innerWidth*.5))); pointer.y=Math.max(-1,Math.min(1,(e.clientY-window.innerHeight*.5)/(window.innerHeight*.5))); pointer.inside=true; };
    const onLeave=()=>{pointer.inside=false;};
    if(animationType==='hover'){ window.addEventListener('pointermove',onMove,{passive:true}); window.addEventListener('mouseleave',onLeave); program.uniforms.uUseBaseWobble.value=0; }
    else if(animationType==='3drotate') program.uniforms.uUseBaseWobble.value=0;
    const draw = now => { const time=(now-t0)*.001; program.uniforms.iTime.value=time;
      if(animationType==='hover'){ targetYaw=(pointer.inside?-pointer.x:0)*.6*HOVSTR; targetPitch=(pointer.inside?pointer.y:0)*.6*HOVSTR; yaw+=(targetYaw-yaw)*INERT; pitch+=(targetPitch-pitch)*INERT; roll*=.9; }
      else if(animationType==='3drotate'){ const ts=time*TS; yaw=ts*wY; pitch=Math.sin(ts*wX+phX)*.6; roll=Math.sin(ts*wZ+phZ)*.5; }
      program.uniforms.uRot.value=setMat3(yaw,pitch,roll,rotBuf); renderer.render({scene:mesh}); raf=requestAnimationFrame(draw); };
    raf=requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); if(animationType==='hover'){ window.removeEventListener('pointermove',onMove); window.removeEventListener('mouseleave',onLeave); } gl.canvas.remove(); };
  }, [height,baseWidth,animationType,glow,noise,offset?.x,offset?.y,scale,transparent,hueShift,colorFrequency,timeScale,hoverStrength,inertia,bloom,suspendWhenOffscreen,lightMode]);
  return <div className="prism-container" ref={containerRef} />;
};

export default Prism;
