"use client";

import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent 💜!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div id="contact" className="px-4 sm:px-8 md:px-14 mt-30">
  <motion.div
    className="max-w-2xl flex flex-col gap-4 mx-auto"
    initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div
      className="grid text-wrap"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-black font-bold text-3xl">
        Get in touch
      </h1>

      <p className="mt-2 text-gray-600 text-base md:text-lg prose mx-auto">
        I am open to freelance projects, collaborations, or full-time opportunities.
        Feel free to reach out with any inquiries or proposals, and I will respond promptly.
      </p>
    </motion.div>

    <motion.div
      className="py-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full flex-1 bg-[#f2f2f2] border border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full flex-1 bg-[#f2f2f2] border border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
              required
            />
          </motion.div>

          <motion.div
            className="mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <textarea
              placeholder="Hi, Daniel are you up for this role:"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#f2f2f2] border border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none"
            />
          </motion.div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              type="submit"
              disabled={loading}
              className="border rounded-[14px] py-6 inline-flex w-full cursor-pointer bg-black/90 text-white text-base hover:!bg-black/80"
            >
              {loading && <Loader size="2" className="text-white mr-2" />}
              {loading ? "Sending.." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  </motion.div>
</div>
  );
};

export default Contact;
