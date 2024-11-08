"use client";

import Image from "next/image";

export default function About() {
  return (
    <section >
      <div className="container">
        <div className="about-section">
          <h1 style={{marginBottom:"20px", fontSize:"2rem"}}>About ME</h1>
          <p className="para">
          


My name is Kiran Ahmed, and I am a dedicated frontend developer with a strong foundation in creating engaging, high-performance applications using Next.js and React. Beyond frontend development, I am actively broadening my expertise in backend development and cloud computing, along with a deep dive into the transformative world of agentic AI. I am passionate about continuous learning and adapting to new technologies, striving to stay at the forefront of industry trends. My goal is to craft innovative and user-friendly digital experiences that drive results and meet the evolving needs of modern users


          </p>
        </div>

        <div className="img-section">
          <Image
          id="about-img"
            width={300}
            height={300}
            alt={"about-logo"}
            src={require("../../../public/picture/pic.jpg")}
          ></Image>
        </div>
      </div>
    </section>
  );
}
