"use client"

import { motion } from "framer-motion"

interface Props {
  children: JSX.Element
  width?: "fit-content" | "100%"
}

export default function Reveal({ children, width = "fit-content" }: Props) {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  )
}
