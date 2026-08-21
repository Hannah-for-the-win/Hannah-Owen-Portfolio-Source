import type { Metadata } from "next";

const projects = {
  "suction-cup": {
    title: "Suction cup",
    image: "/assets/suction-cup.jpeg",
    description: "While working at Impulse Biomedical, I was tasked with designing a suction cup for a drop-test rig. The suction cup needed to securely hold the company’s medical device using a vacuum pump, while also allowing the device to be released cleanly without the vacuum applying any additional force that could influence its fall. This process consisted of designing, 3D modelling using SolidWorks, 3D printing, and testing.",
  },
} as const;

export function generateStaticParams(){ return Object.keys(projects).map(slug=>({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const project=projects[slug as keyof typeof projects];
  return project ? {title:`${project.title} | Hannah Owen`,description:project.description,openGraph:{title:project.title,description:project.description,images:[project.image]},twitter:{card:"summary_large_image",title:project.title,description:project.description,images:[project.image]}} : {};
}

export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects[slug as keyof typeof projects];
  if(!project) return <main className="notFound"><h1>Project not found.</h1><a href="/#projects">Return to projects</a></main>;
  return <main className="barbiePage"><nav className="detailNav barbieNav"><a href="/#projects">← All projects</a><strong>{project.title.toUpperCase()}</strong><a href="/">HO.</a></nav><section className="barbieCase"><article className="barbieDescription"><h2>Description</h2><p>{project.description}</p></article><div className="barbieGallery projectGallery suctionGallery"><figure><img src="/assets/suction-cup.jpeg" alt="The completed suction cup"/><figcaption>Suction cup</figcaption></figure><figure><img src="/assets/suction-design.jpg" alt="SolidWorks design of the suction cup"/><figcaption>3D design</figcaption></figure><figure><img src="/assets/zibi-pen.png" alt="Impulse Biomedical ZibiPen medical device"/><figcaption>Medical Device</figcaption></figure></div></section></main>;
}
