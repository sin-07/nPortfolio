import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="mt-[6rem]">
      <img
        src={me}
        alt="logo"
        className="w-[25%]  rounded-[1.5rem] border border-white"
      />

      </div>

      <h3 className="font-extrabold text-4xl text-white my-[2rem]">
        Hi there! I'm{" "}
        <span className="text-[#3be1ac]">
          <Typewriter
            options={{
              strings: [
                "ANIKET SINGH",
                "A FULL STACK DEVELOPER",
                "A COMPUTER SCIENCE ENGINEER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h3>

      <div className="flex flex-col gap-4 mb-7">
        <p className="text-white">
          A dedicated and passionate creator with a love for turning ideas into
          reality. Whether it's crafting compelling narratives, designing
          captivating visuals, or solving complex problems, I thrive on the
          challenges that come with bringing ideas to life.
        </p>
        <p className="text-white">
          Currently immersed in the captivating world of Computer Science{" "}
          <span className="text-[#3be1ac]">Engineering</span> as a college
          student. My educational roots trace back to{" "}
          <span className="text-[#3be1ac]">National High School</span>, where I
          laid the foundation for my academic journey.
        </p>
        <p className="text-white">
          Proficient in <span className="text-[#3be1ac]">web development</span>,
          I've honed my skills in crafting dynamic and user-friendly websites
          that seamlessly blend form and function. Beyond the code, I immerse
          myself in the realm of{" "}
          <span className="text-[#3be1ac]">UI designing</span>, ensuring that
          each digital experience is not just efficient but aesthetically
          pleasing.
        </p>
        <p className="text-white">
          In addition to my academic pursuits, I've embraced the challenges of{" "}
          <span className="text-[#3be1ac]">Data Structures and Algorithms</span>
          , recognizing their fundamental role in building robust and efficient
          software.
        </p>
      </div>

      
    </motion.div>
  );
}
