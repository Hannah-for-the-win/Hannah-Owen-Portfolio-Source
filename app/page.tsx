"use client";

import { useRef } from "react";

const technicalSkills = ["CAD modelling · SolidWorks, AutoCAD", "Programming · Python, Java, C, VBA", "Circuit design, soldering & lab instrumentation", "Simulation, prototyping & product testing"];
const professionalSkills = ["Strong problem-solving & analytical ability", "Leadership through tutoring & mentoring", "Teamwork and clear communication"];

const education = [
  { title: "University of Cape Town — BSc in Mechatronics", year: "2023–Present" },
  { title: "Herschel Girls High School", year: "2018–2022" },
];

const awards = ["Dean’s Merit List (1st–3rd year)", "Maintained an aggregate of 82–85% (1st–3rd year)", "Class Medal for the top mark in Mathematics (1st year)"];

const experience = [
  { title: "Impulse Biomed", year: "2025–2026", text: "Interned for six weeks, developing my 3D modeling and embedded skills." },
  { title: "Personal Tutor", year: "2023–Present", text: "Tutored high school maths as well as various third year mechatronics courses." },
  { title: "HG Molenaar Internship", year: "2024", text: "Job-shadowed for four weeks, gaining factory experience and developing VBA programming skills." },
];

const personal = [
  { slug: "outdoor-adventures", title: "Outdoor adventures", kicker: "", image: "/assets/outdoors.jpeg", text: "Running, hiking, canoeing, camping, rock-climbing, tennis, eating in a park. If I am out in the sun, I am happy.", details: { heading: "Races completed", items: ["Knysna marathon (2026)", "Milkwood half marathon (2024)"] } },
  { slug: "music", title: "Music", kicker: "", image: "/assets/music.jpeg", text: "Piano in the church, saxophone for the jazz, and ukulele for the vibes.", details: { heading: "Qualifications", items: ["Gr 7 piano — ABRSM", "Gr 7 saxophone — Trinity"] } },
  { slug: "creativity", title: "Creativity", kicker: "", image: "/assets/creativity.jpeg", text: "Waterpaint, sewing, knitting, baking. What a joy to create something beautiful." },
];

function FlipCard({ image, title, text, href, video, linkText="More detail", details }: { image:string; title:string; kicker?:string; text:string; href?:string; video?:string; linkText?:string; details?:{heading:string;items:string[]} }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const enter = () => videoRef.current?.play().catch(() => {});
  const leave = () => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } };
  const content = <div className="flipInner">
    <div className="flipFront">
      {video ? <><img src={image} alt={`${title} project`} /><video ref={videoRef} muted loop playsInline src={video} /></> : <img src={image} alt={title} />}
    </div>
    <div className="flipBack"><h3>{title}</h3><p>{text}</p>{details && <div className="flipBackExtras"><h4>{details.heading}</h4>{details.items.map(item=><span key={item}>{item}</span>)}</div>}{href && <b>{linkText} <i>↗</i></b>}</div>
  </div>;
  return href ? <a className={`flipCard${video ? " videoCard" : ""}`} href={href} onMouseEnter={enter} onMouseLeave={leave}>{content}</a> : <div className="flipCard" onMouseEnter={enter} onMouseLeave={leave}>{content}</div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation"><a className="brand" href="#home">HO.</a><div className="navLinks"><a href="#about">About</a><a href="#cv">CV</a><a href="#projects">Projects</a><a href="#personal">Interests</a><a href="#contact">Contact</a></div></nav>
      <header className="hero" id="home"><img src="/assets/sunflower-cover.avif" alt="A sunflower resting in warm window light" /><div className="heroShade"/><div className="heroCopy"><p>Mechatronics engineer in the making</p><h1>Hannah<br/>Owen</h1></div></header>

      <section className="about" id="about"><div className="portraitWrap"><img src="/assets/portrait.jpeg" alt="Portrait of Hannah Owen"/></div><div className="aboutCopy"><h2>Hello, I’m Hannah.</h2><p>I am a fourth-year Mechatronics Engineering student at UCT with a strong academic record and a passion for problem-solving. I love applying my technical knowledge to real-world challenges, with a particular interest in the biomedical field.</p><p>But for me, like a sunflower, I am happiest in the sun. Running, camping, hiking, trying to find my way back after getting lost while hiking, music, art, being with friends—these are all pockets of joy I hold on to.</p></div></section>

      <section className="cv" id="cv"><aside className="cvSidebar"><h2>Curriculum<br/>Vitae</h2><a className="pill cvOpen" href="/assets/Hannah-Owen-CV.pdf" target="_blank">Open CV ↗</a></aside><div className="cvDetails"><section className="cvBlock"><h3>Education</h3>{education.map(item=><article className="cvEntry educationEntry" key={item.title}><div className="cvEntryHead"><h4>{item.title}</h4><time>{item.year}</time></div></article>)}<h3 className="awardsHeading">Awards</h3><ul className="awardsList">{awards.map(award=><li key={award}>{award}</li>)}</ul></section><section className="cvBlock"><h3>Experience</h3>{experience.map(item=><article className="cvEntry" key={item.title}><div className="cvEntryHead"><h4>{item.title}</h4><time>{item.year}</time></div><p>{item.text}</p></article>)}</section></div><div className="cvSkillsBar"><div className="skillGroup"><h3>Technical skills</h3><div className="skills">{technicalSkills.map(skill=><span key={skill}>{skill}</span>)}</div></div><div className="skillGroup"><h3>Professional skills</h3><div className="skills">{professionalSkills.map(skill=><span key={skill}>{skill}</span>)}</div></div></div></section>

      <section className="projects" id="projects"><div className="sectionBanner"><img src="/assets/dandelions.jpg" alt="Soft dandelions in a meadow"/><h2>PROJECTS</h2></div><div className="cardsColumn"><FlipCard href="/projects/barbie" image="/assets/barbie-cutout.png" title="BARBIE" text="Developed the network subsystem for a distributed Antarctic research data-storage mesh."/><FlipCard href="/projects/micromouse" image="/assets/micromouse-lab.png" title="Minimouse" text="Built and programmed a micromouse to autonomously navigate a maze." video="/assets/micromouse.mp4"/><FlipCard href="/projects/suction-cup" image="/assets/suction-cup.jpeg" title="Suction cup" text="Designed, modelled and 3D printed a suction cup to hold a medical device."/></div></section>

      <section className="personal" id="personal"><div className="personalIntro"><h2>INTERESTS</h2></div><div className="cardsColumn personalCards">{personal.map((item)=><FlipCard key={item.slug} {...item}/>)}</div></section>

      <footer id="contact"><div><p>Contact</p><div className="contactDetails"><a href="mailto:hannah.owen84@gmail.com">hannah.owen84@gmail.com</a><a href="tel:+27820933299">082 093 3299</a></div></div><p>Cape Town, South Africa</p><details className="katieSecret"><summary aria-label="A tiny hidden surprise">✦</summary><div><img src="/assets/katie.png" alt="A secret little Katie cameo"/><span>That’s beautiful Katie ♡</span></div></details></footer>
    </main>
  );
}
