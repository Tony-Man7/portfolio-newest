import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import emailjs from '@emailjs/browser';
import ThankYou from '../ui/ThankYou'; 

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [formSubmitted, setFormSubmitted] = useState(false); 

  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);
  const form = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),
      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [contactSection]);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emdu54i', 'template_v2vwib2', form.current, 'gELdBihw1d6rl_c1z')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true); 
      }, (error) => {
        console.log(error.text);
      });
  };

  if (formSubmitted) {
    return <ThankYou />;
  }

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:max-w-3xl 2xl:text-7xl"
          >
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p
            ref={body}
            className="mt-4 max-w-md translate-y-10 text-body-2 text-accent-100 opacity-0 2xl:max-w-2xl 2xl:text-4xl"
          >
            Feel free to approach. My inbox is always open, Whether you have a
            question or just want to say hi.
          </p>
          <form
            name="contact"
            action="/contact"
            autoComplete="off"
            // eslint-disable-next-line react/no-unknown-property
            className="mt-10 font-grotesk"
            method="POST"
            onSubmit={sendEmail}
            ref={form}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  name="user_name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  name="user_email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  name="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your message
                </label>
              </div>
            </div>
            <button
            type="submit"
            className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
          >
            <span className="relative">
              <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <span className="group-hover:text-accent-400">
                Send Message
              </span>
            </span>
          </button>
          </form>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:manansala.anthony23@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>manansala.anthony23@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Find Me Online
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://github.com/Tony-Man7"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-manansala-027691276/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/qwermage/"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:facebook" color="#666" />
                <div className="relative">
                  <span>Facebook</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Magalang, Pampanga. Philippines <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
