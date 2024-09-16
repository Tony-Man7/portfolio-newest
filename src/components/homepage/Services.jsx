import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

import illustration from "../../assets/images/illustration.png";
import htmlImage from "../../assets/images/html.png";
import cssImage from "../../assets/images/css.png";
import javascriptImage from "../../assets/images/javascript.png";
import phpImage from "../../assets/images/php.png";
import tailwindcssImage from "../../assets/images/tailwindcss.png";
import bootstrapImage from "../../assets/images/bootstrap.png";
import reactjsImage from "../../assets/images/reactjs.png";
import nodejsImage from "../../assets/images/nodejs.png";
import expressImage from "../../assets/images/express.png";
import mongodbImage from "../../assets/images/mongodb.png";
import vueImage from "../../assets/images/vue.png";
import laravelImage from "../../assets/images/laravel.png";


export default function Services() {
  const toolBoxItems = [
    { name: "HTML", image: htmlImage },
    { name: "CSS", image: cssImage },
    { name: "JavaScript", image: javascriptImage },
    { name: "PHP", image: phpImage },
    { name: "TailwindCSS", image: tailwindcssImage },
    { name: "Bootstrap", image: bootstrapImage },
    { name: "ReactJS", image: reactjsImage },
    { name: "NodeJS", image: nodejsImage },
    { name: "ExpressJS", image: expressImage },
    { name: "MongoDB", image: mongodbImage },
    { name: "Laravel", image: vueImage },
    { name: "VueJS", image: laravelImage },

  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="My Tech Stack."
          items={toolBoxItems}
          imageSrc={illustration}
        />
      </div>
    </section>
  );
}
