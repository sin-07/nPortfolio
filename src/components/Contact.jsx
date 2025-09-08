import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-24 flex flex-col items-center text-center"
    >
      {/* Heading */}
      <h2 className="text-white text-2xl pt-2 font-semibold">
        You are here for{"  "}
        <span className="text-[#3be1ac]">. . . .</span>
      </h2>
      <p className="py-4 text-white">
        I think you are here to get to know me. Best way is to start with my
        work.
      </p>

      {/* Social Links */}
      <ul className="flex justify-center mt-8 gap-6">
        {[
          {
            name: "Gmail",
            icon: "ri-mail-line",
            link: "mailto:aniket.singh07vs@gmail.com",
          },
          {
            name: "GitHub",
            icon: "ri-github-line",
            link: "https://github.com/aniketsinghh",
          },
          {
            name: "LinkedIn",
            icon: "ri-linkedin-fill",
            link: "https://www.linkedin.com/in/aniket-singhh/",
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#1a1a1a] border border-gray-600 rounded-lg px-6 py-3 text-white shadow-md cursor-pointer \
                      hover:bg-[#3be1ac] hover:text-black transition-all duration-500 ease-in-out"
          >
            <a href={item.link} className="flex items-center gap-2">
              <i className={`${item.icon} text-xl`}></i>
              <span className="font-semibold">{item.name}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
