import { useGSAP } from "@gsap/react";
import React from "react";

const Highlights = () => {
  useGSAP(() => {
    gsap.to(".section-heading", { opacity: 1, y: 0 });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div>
          <h1 id="title" className="section-heading">
            Get the highlight
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
