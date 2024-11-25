import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeadingText from "@/shared/HeadingText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, sculpt your body, and achieve your fitness goals. Our weight training classes, led by experienced trainers, will guide you through effective exercises to help you reach your full potential.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your inner peace. Our yoga classes offer a serene and calming environment to reduce stress, improve flexibility, and promote overall well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Sculpt your core and strengthen your entire body. Our ab core classes target your abdominal muscles, lower back, and obliques to improve stability, posture, and overall fitness.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Push your limits, challenge yourself. Our adventure classes combine physical exertion with mental clarity, helping you build strength, endurance, and confidence.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Transform your body, improve your health. Our fitness classes offer a variety of workouts to help you reach your fitness goals, from strength training and cardio to flexibility and balance.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Learn at your own pace, with personalized support. Our training classes provide flexible learning options and dedicated instructors to help you achieve your goals.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeadingText>OUR CLASSES</HeadingText>
            <p className="py-5">
              Find your perfect workout match. Our extensive class schedule
              offers a variety of fun and effective options, including strength
              training, cardio, dance, and mind-body practices.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
