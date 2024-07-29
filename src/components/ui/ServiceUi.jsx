import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useRef, useEffect} from "react"


export default function ServiceUi({ title, description, items, imageSrc }) {

  const serviceUi = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)
  const services = useRef(null)
  const line = useRef(null)

      
  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      // markers: true,
      start:"150px bottom",
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2)
        .to (line.current, { width: "100%", ease: "power4.inOut", duration: 1.5 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25}, 0.5),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [serviceUi])


//   return (
//     <div ref={serviceUi} className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
//       <div className="space-y-6">
//         <div className="space-y-3 2xl:space-y-10">
//           <h3 ref={heading} className="text-heading-3 2xl:text-7xl font-semibold leading-tight  translate-y-10 opacity-0">
//             {title}
//           </h3>
//           <p ref={body} className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl  translate-y-10 opacity-0">{description}</p>
//         </div>
//         <div ref={line} className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"></div>
//         {imageSrc && <img src={imageSrc} alt="Service Illustration" className="w-3/5 h-auto hidden sm:block" />}
//       </div>

//       <div ref={services}  className=" select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10 opacity-0">
//         {items.map((item, index) => {
//           return (
//             <p key={index} className="font-general text-special 2xl:text-7xl font-extrabold ">
//               {item}
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

return (
  <div ref={serviceUi} className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
    <div className="space-y-6">
      <div className="space-y-3 2xl:space-y-10">
        <h3 ref={heading} className="text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
          {title}
        </h3>
        <p ref={body} className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-0">
          {description}
        </p>
      </div>
      <div ref={line} className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"></div>
      {imageSrc && <img src={imageSrc} alt="Service Illustration" className="w-3/5 h-auto hidden sm:block" />}
    </div>

    <div ref={services} className="select-none translate-y-10 opacity-0 flex items-center justify-center md:justify-start">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center m-2">
            <img src={item.image} alt={item.name} className="w-20 h-20" />
            {/* <p className="text-special 2xl:text-7xl font-extrabold">{item.name}</p> */}
          </div>
        ))}
      </div>
    </div>



  </div>
);
}
