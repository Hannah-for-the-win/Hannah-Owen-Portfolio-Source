import type { Metadata } from "next";
import HoverVideo from "./HoverVideo";

export const metadata:Metadata={title:"Minimouse | Hannah Owen",description:"A micromouse built and programmed in MATLAB Simulink to autonomously navigate and map a maze.",openGraph:{title:"Minimouse | Hannah Owen",description:"An autonomous maze-navigating micromouse project.",images:["/assets/micromouse-lab.png"]},twitter:{card:"summary_large_image",title:"Minimouse | Hannah Owen",description:"An autonomous maze-navigating micromouse project.",images:["/assets/micromouse-lab.png"]}};

export default function MicromouseProject(){
  return <main className="barbiePage"><nav className="detailNav barbieNav"><a href="/#projects">← All projects</a><strong>MINIMOUSE</strong><a href="/">HO.</a></nav><section className="barbieCase"><article className="barbieDescription"><h2>Description</h2><p>For a third-year Mechatronics project, we were tasked with building a micromouse and coding it using Matlab Simulink to autonomously navigate and map a randomised maze. I named my micromouse Minimouse after the Disney character.</p></article><div className="barbieGallery projectGallery minimouseGallery"><figure><img src="/assets/micromouse-lab.png" alt="The completed Minimouse robot"/><figcaption>Minimouse robot</figcaption></figure><figure><img src="/assets/minnie-mouse.png" alt="Minnie Mouse, the namesake for Minimouse"/><figcaption>Minimouse</figcaption></figure><HoverVideo/></div></section></main>;
}
