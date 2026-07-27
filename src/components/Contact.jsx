import toast from "react-hot-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_meyu7ke",
        "template_ew3n6zp",
        form.current,
        "fgJGLbILJrgD_pN65"
      )
      .then(
        () => {
          toast.success("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          toast.error("Une erreur est survenue.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-15 lg:py-15 bg-white dark:bg-linear-to-b dark:from-[#08131F] dark:via-[#0F172A] dark:to-[#08131F] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="uppercase tracking-[4px] md:tracking-[5px] font-semibold text-[#10B981]">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Travaillons ensemble
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto leading-7 md:leading-8 text-base md:text-lg">
            Vous avez une idée de projet, une collaboration ou une question ?
            N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs
            délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Informations */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="space-y-5 md:space-y-6"
          >

            <div className="rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none p-5 md:p-6 hover:border-[#10B981]/50 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#10B981]/15 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#10B981] text-xl md:text-2xl" />
                </div>

                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-base md:text-lg">
                    Adresse e-mail
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 break-all text-sm md:text-base">
                    dkhyass52@gmail.com
                  </p>
                </div>

              </div>

            </div>
                        <div className="rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none p-5 md:p-6 hover:border-[#10B981]/50 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#10B981]/15 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#10B981] text-xl md:text-2xl" />
                </div>

                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-base md:text-lg">
                    Téléphone
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    +229 01 52 85 25 93
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none p-5 md:p-6 hover:border-[#10B981]/50 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#10B981]/15 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#10B981] text-xl md:text-2xl" />
                </div>

                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-base md:text-lg">
                    Localisation
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    Abomey-calavi, Bénin
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Formulaire */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none rounded-3xl p-5 sm:p-6 lg:p-8 space-y-5 md:space-y-6"
          >

            <div>
              <label className="block text-gray-800 dark:text-white mb-2 font-medium text-sm md:text-base">
                Nom complet
              </label>

              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl
                bg-white dark:bg-[#111827]
                border border-gray-300 dark:border-white/10
                text-gray-900 dark:text-white
                placeholder-gray-500
                outline-none
                focus:border-[#10B981]
                transition"
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-white mb-2 font-medium text-sm md:text-base">
                Adresse e-mail
              </label>

              <input
                type="email"
                name="email"
                placeholder="exemple@email.com"
                required
                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl
                bg-white dark:bg-[#111827]
                border border-gray-300 dark:border-white/10
                text-gray-900 dark:text-white
                placeholder-gray-500
                outline-none
                focus:border-[#10B981]
                transition"
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-white mb-2 font-medium text-sm md:text-base">
                Votre message
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Décrivez votre projet ou votre besoin..."
                required
                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl
                bg-white dark:bg-[#111827]
                border border-gray-300 dark:border-white/10
                text-gray-900 dark:text-white
                placeholder-gray-500
                outline-none
                resize-none
                focus:border-[#10B981]
                transition"
              ></textarea>
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(16,185,129,.35)",
              }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 md:py-4 rounded-xl bg-[#10B981] text-black font-bold flex items-center justify-center gap-3 transition"
            >
              <FaPaperPlane />
              Envoyer le message
            </motion.button>

            <p className="text-center text-gray-600 dark:text-gray-500 text-sm">
              Je réponds généralement sous 24 heures.
            </p>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;