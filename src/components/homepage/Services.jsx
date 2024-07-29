import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";
import illustration from "../../assets/images/illustration.png";

export default function Services() {
  // const expertiseItems = [
  //   "Web Design",
  //   "UI/UX Design",
  //   "Branding",
  //];

  const toolBoxItems = [
    { name: "HTML", image: "src/assets/icons/html.png" },
    { name: "CSS", image: "src/assets/icons/css.png" },
    { name: "JavaScript", image: "src/assets/icons/javascript.png" },
    { name: "PHP", image: "src/assets/icons/php.png" },
    { name: "TailwindCSS", image: "src/assets/icons/tailwindcss.png" },
    { name: "Bootsraps", image: "src/assets/icons/bootstrap.png" },
    { name: "ReactJS", image: "src/assets/icons/reactjs.png" },
    { name: "NodeJS", image: "src/assets/icons/nodejs.png" },
    { name: "ExpressJS", image: "src/assets/icons/express.png" },
    { name: "MongoDB", image: "src/assets/icons/mongodb.png" }
  ];
  
  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        {/* <ServiceUi
          title="My expertises."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        /> */}

        <ServiceUi
          title="My Tech Stack."
          items={toolBoxItems}
          imageSrc={illustration}
        />
      </div>
    </section>
  );
}
