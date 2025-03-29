"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-2">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.45,
          }}
          className="text-4xl sm:text-6xl font-bold"
        >
          StableMax
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.45,
            delay: 0.35,
          }}
          className="text-center text-white/60"
        >
          Create Stunning Images with AI models for FREE!!..✨
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.45,
            delay: 0.8,
          }}
        >
          <Link href="/create">
            <Button className="mt-3 font-bold p-5">Start Creating</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
