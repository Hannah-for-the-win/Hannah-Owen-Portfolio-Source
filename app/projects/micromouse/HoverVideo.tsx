"use client";

import { useRef } from "react";

export default function HoverVideo(){
  const ref=useRef<HTMLVideoElement>(null);
  const play=()=>ref.current?.play().catch(()=>{});
  const stop=()=>{if(ref.current){ref.current.pause();ref.current.currentTime=0;}};
  return <figure className="hoverVideo" onMouseEnter={play} onMouseLeave={stop} onFocus={play} onBlur={stop} tabIndex={0}><video ref={ref} muted loop playsInline preload="metadata"><source src="/assets/minimouse-video.mp4" type="video/mp4"/></video><figcaption>Demo</figcaption></figure>;
}
