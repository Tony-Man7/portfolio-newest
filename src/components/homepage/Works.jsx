import clickgadget from "/src/assets/images/ecom-gadget.png";
import ibgroup from "/src/assets/images/ecom-desktop.png";
import memento from "/src/assets/images/portfolio-v1-desktop.png";
import acc from "/src/assets/images/todos-square.png";
import weather from "/src/assets/images/weather-desktop.png";
import emarket from "/src/assets/images/emarketempire.png";
import books from "/src/assets/images/learnpathtowealth.png";
import ecom1 from "/src/assets/images/fashionforwardclothingline.com.png";
import ecom2 from "/src/assets/images/luxurioushairtreatmentonline.com.png";
import dash from "/src/assets/images/dashboard.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://github.com/Tony-Man7/CRUD-admin-panel-with-input-data-product-to-mongoDB"
            img={dash}
            alt="Admin Panel Dashboard"
            name="Admin Panel Dashboard"
            type="Frontend and Backend Development"
            year="2024"
            tools="Bootstrap • NodeJS • ExpressJS • MongoDB"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://fashionforwardclothingline.com/"
            img={ecom1}
            alt="Ecommerce Website"
            name="Ecommerce Website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • PHP • Bootstrap"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://luxurioushairtreatmentonline.com"
            img={ecom2}
            alt="Ecommerce Website"
            name="Ecommerce Website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • PHP • Bootstrap"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://learnpathtowealth.com"
            img={books}
            alt="Ecommerce Website"
            name="Ecommerce Website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • PHP • Bootstrap"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://emarketempire.com/"
            img={emarket}
            alt="Ecommerce Website"
            name="Ecommerce Website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • PHP • Bootstrap"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://clickcommercecrest.com/"
            img={clickgadget}
            alt="Ecommerce Website"
            name="Ecommerce Website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • PHP • Bootstrap"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://patriotzonetribe.com/index.php"
            img={ibgroup}
            alt="Ecommerce Website"
            name="Ecommerce Website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • PHP • Bootstrap"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://portfolio-16c32.web.app/"
            img={memento}
            alt="Portfolio v1"
            name="Portfolio v.1"
            type="Frontend Development"
            year="2023"
            tools="ReactJS • TailwindCSS"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://github.com/Tony-Man7/todo-list/"
            img={acc}
            alt="todos"
            name="What todo's"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 md:col-span-6">
          <Projects
            link="https://github.com/Tony-Man7/weather-app/"
            img={weather}
            alt="Weathering with You"
            name="Weathering with You"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
