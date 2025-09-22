import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Zap, Layers, LifeBuoy } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    if (!serviceId || !publicKey) {
      console.error("❌ Missing EmailJS configuration. Check your .env file.");
      setStatus({
        loading: false,
        success: null,
        error: "Configuration error. Please contact admin.",
      });
      return;
    }

    try {
      const form = new FormData(formRef.current);

      await emailjs.send(
        serviceId,
        // Using a "blank" template provided by EmailJS
        // (you can create one minimal template if needed)
        "template_blank",
        {
          from_name: form.get("from_name"),
          reply_to: form.get("reply_to"),
          message: form.get("message"),
        },
        publicKey
      );

      setStatus({ loading: false, success: "✅ Message sent — thank you!", error: null });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        loading: false,
        success: null,
        error: "❌ Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-indigo-600">Get In Touch</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Let's Build Something Amazing Together
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-3">
            Ready to transform your ideas into reality? I’m here to help you craft exceptional
            digital experiences that make an impact.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Contact Details</h3>
              <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <MapPin className="w-7 h-7 text-indigo-600" />
                  <span>
                    <strong>Location</strong> <br />
                    Sukkur, Sindh, Pakistan <br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Available for remote & on-site collaboration
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <Mail className="w-7 h-7 text-indigo-600" />
                  <span>
                    <strong>Email</strong> <br />
                    imdadanam4@gmail.com <br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Response within 24 hours
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <Phone className="w-7 h-7 text-indigo-600" />
                  <span>
                    <strong>Phone</strong> <br />
                    +92 323 3****** <br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Available Mon–Fri, 9 AM – 6 PM PKT
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Ready to Start Your Project?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether you need a stunning website, mobile app, or digital strategy, I’ll bring your vision to life with cutting-edge solutions.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid gap-5 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="from_name"
                placeholder="Your name"
                className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="reply_to"
                placeholder="Your email"
                type="email"
                className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Message"
                rows="6"
                className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition"
                disabled={status.loading}
              >
                {status.loading ? "Sending..." : "Send Message"}
              </motion.button>

              {status.success && <p className="text-green-600">{status.success}</p>}
              {status.error && <p className="text-red-600">{status.error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
