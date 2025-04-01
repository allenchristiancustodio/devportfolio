import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <>
      <div className="lg:flex items-center lg:h-[80vh]">
        <div className="flex-1 p-8 lg:p-18 xl:p-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="font-bold text-customDark text-[80px] md:text-[100px] text-center">
              AC
            </div>
            <p className="text-customSecondary text-center">
              ................
            </p>
          </motion.div>
        </div>
        <div className="flex-1 p-8 lg:p-18">
          <motion.div
            initial={{ x: 100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-bold text-customDark lg:max-w-[90%] text-[30px] md:text-5xl text-center lg:text-left mt-20 lg:mt-0">
              GET IN TOUCH
            </p>
            <p className="text-customSecondary mt-4 mb-10 text-center lg:text-left">
              Let's connect! Feel free to reach out anytime.
            </p>
            <div className="flex justify-center lg:block">
              <p className="text-customSecondary text-center flex my-4">
                <Mail className="mr-2" /> <span>custodioallenchristian@gmail.com</span>
              </p>
            </div>
            <div className="flex justify-center lg:block">
              <p className="text-customSecondary text-center flex my-4">
                <Phone className="mr-2" /> <span>+1 929 405-6207 </span>
              </p>
            </div>
            <div className="flex justify-center lg:block">
              <p className="text-customSecondary text-center flex my-4">
                <MapPin className="mr-2" />
                <span>1606 Yates Ave. Bronx New York 10461 USA</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
