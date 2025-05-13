import { useGSAP } from "@gsap/react";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full padding-common bg-zinc"
    >
      <div>
        <h1 id="title" className="section-heading">
          Get the highlight
        </h1>
      </div>
    </section>
  );
};

export default Highlights;
