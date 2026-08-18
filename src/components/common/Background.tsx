"use client";

import { motion } from "framer-motion";

export default function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:56px_56px]
          sm:[background-size:80px_80px]
        "
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          absolute -left-[220px] -top-[200px] h-[440px] w-[440px]
          rotate-[18deg] rounded-[35%] border border-cyan-300/[0.16]
          bg-gradient-to-br from-cyan-400/[0.18] via-blue-500/[0.10] to-transparent
          blur-[1px]
          sm:-left-[260px] sm:-top-[220px] sm:h-[620px] sm:w-[620px]
        "
      />

      <motion.div
        className="
          absolute -left-[140px] -top-[110px] h-[380px] w-[380px] rounded-full
          bg-cyan-500/[0.18] blur-[110px]
          sm:-left-[180px] sm:-top-[130px] sm:h-[520px] sm:w-[520px] sm:blur-[150px]
        "
        animate={{ x: [0, 24, 0], y: [0, -32, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="
          absolute -right-[220px] -top-[150px] h-[420px] w-[420px]
          rotate-[-22deg] rounded-[40%] border border-violet-400/[0.16]
          bg-gradient-to-bl from-violet-500/[0.20] via-purple-500/[0.10] to-transparent
          sm:-right-[280px] sm:-top-[170px] sm:h-[600px] sm:w-[600px]
        "
      />

      <motion.div
        className="
          absolute -right-[120px] top-[30px] h-[360px] w-[360px] rounded-full
          bg-purple-600/[0.20] blur-[120px]
          sm:-right-[150px] sm:top-[40px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]
        "
        animate={{ x: [0, -28, 0], y: [0, 26, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CENTER BLUE GLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="
          absolute left-1/2 top-[32%] h-[420px] w-[420px] -translate-x-1/2
          rounded-full bg-blue-600/[0.10] blur-[130px]
          sm:h-[650px] sm:w-[650px] sm:blur-[180px]
        "
      />

      {/* CENTER DECORATIVE DIAMOND */}
      <motion.div
        initial={{ opacity: 0, rotate: 25 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="
          absolute left-[50%] top-[42%] h-[180px] w-[180px] -translate-x-1/2
          rounded-[32px] border border-white/[0.06]
          bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.06]
          sm:h-[280px] sm:w-[280px] sm:rounded-[45px]
        "
      />

      {/* RIGHT MIDDLE FLOATING SHAPE */}
      <motion.div
        className="
          absolute -right-[140px] top-[48%] h-[300px] w-[300px]
          rotate-[30deg] rounded-[35%] border border-blue-400/[0.09] bg-blue-500/[0.04]
          sm:-right-[180px] sm:h-[420px] sm:w-[420px]
        "
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* BOTTOM LEFT PURPLE SHAPE */}
      <div
        className="
          absolute -bottom-[260px] -left-[160px] h-[460px] w-[460px]
          rotate-[-20deg] rounded-[40%] border border-purple-400/[0.12]
          bg-gradient-to-tr from-purple-600/[0.13] via-blue-600/[0.06] to-transparent
          sm:-bottom-[300px] sm:-left-[200px] sm:h-[650px] sm:w-[650px]
        "
      />

      {/* Bottom glow — floating */}
      <motion.div
        className="
          absolute bottom-[-160px] left-[5%] h-[360px] w-[360px] rounded-full
          bg-purple-600/[0.16] blur-[120px]
          sm:bottom-[-200px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]
        "
        animate={{ x: [0, 18, 0], y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* BOTTOM RIGHT BLUE GLOW — floating */}
      <motion.div
        className="
          absolute -bottom-[200px] -right-[120px] h-[400px] w-[400px] rounded-full
          bg-cyan-500/[0.11] blur-[120px]
          sm:-bottom-[250px] sm:-right-[150px] sm:h-[550px] sm:w-[550px] sm:blur-[160px]
        "
        animate={{ x: [0, 24, 0], y: [0, -32, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}