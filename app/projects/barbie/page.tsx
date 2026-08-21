import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BARBIE | Hannah Owen",
  description: "A LoRa-enabled Antarctic research data-node project by Hannah Owen and Group 12.",
  openGraph: { title:"BARBIE | Hannah Owen", description:"A LoRa-enabled Antarctic research data-node project.", images:["/assets/barbie-cutout.png"] },
  twitter: { card:"summary_large_image", title:"BARBIE | Hannah Owen", description:"A LoRa-enabled Antarctic research data-node project.", images:["/assets/barbie-cutout.png"] },
};

export default function BarbieProject() {
  return <main className="barbiePage">
    <nav className="detailNav barbieNav"><a href="/#projects">← All projects</a><strong>BARBIE</strong><a href="/">HO.</a></nav>
    <section className="barbieCase">
      <article className="barbieDescription"><h2>Description</h2><p>In fourth-year Mechatronics, we were tasked with finding a solution for one of the problems stipulated by an Antarctic researcher. My group and I decided to create BARBIE: a Buoy for Antarctic Research and Basic Information Exchange. I was mainly involved with creating a network system for the buoy capable of communicating with other buoys and with the Antarctic research vessel. The main form of networking used was LoRa for node-to-node communication, and Wifi for node data retrieval when requested by a passing ship. The project involved designing a PCB as well as a user interface for easy node location mapping.</p></article>
      <div className="barbieGallery">
        <figure><img src="/assets/barbie-cutout.png" alt="BARBIE network subsystem electronics"/><figcaption>Network subsystem</figcaption></figure>
        <figure><img src="/assets/barbie-interface.png" alt="BARBIE user interface"/><figcaption>User interface</figcaption></figure>
        <figure><img src="/assets/barbie-final-buoy.png" alt="Final BARBIE buoy project"/><figcaption>Final Buoy project</figcaption></figure>
      </div>
    </section>
  </main>;
}
