"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Palette,
  Cpu,
  FileCode,
  Figma,
  Database,
  Lightbulb,
  MessageSquare,
  Target,
  Zap,
  Clock,
} from "lucide-react"

type SkillCategory = "design" | "software" | "hardware"

const skills = {
  design: [
    { name: "UI/UX Design", icon: Palette },
    { name: "Figma", icon: Figma },
    { name: "Graphic Design", icon: Palette },
    { name: "Prototyping", icon: Zap },
  ],
  software: [
    { name: "C, C#, Dart", icon: Code2 },
    { name: "JavaScript, TypeScript", icon: FileCode },
    { name: "HTML & CSS", icon: FileCode },
    { name: "Full-Stack Development", icon: Database },
  ],
  hardware: [
    { name: "Arduino", icon: Cpu },
    { name: "Circuit Design", icon: Cpu },
    { name: "Digital Logic", icon: Cpu },
    { name: "Computer Hardware Assembly", icon: Cpu },
  ],
}

const softSkills = [
  { name: "Creativity", icon: Lightbulb },
  { name: "Decision Making", icon: Target },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Target },
  { name: "Flexibility", icon: Zap },
  { name: "Time Management", icon: Clock },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("design")

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A diverse skill set spanning design, development, and hardware engineering
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "design" ? "default" : "outline"}
              onClick={() => setActiveCategory("design")}
              className={activeCategory === "design" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Palette className="mr-2 h-4 w-4" />
              Design
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "software" ? "default" : "outline"}
              onClick={() => setActiveCategory("software")}
              className={
                activeCategory === "software" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Code2 className="mr-2 h-4 w-4" />
              Software
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "hardware" ? "default" : "outline"}
              onClick={() => setActiveCategory("hardware")}
              className={
                activeCategory === "hardware" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Cpu className="mr-2 h-4 w-4" />
              Hardware
            </Button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {skills[activeCategory].map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 h-full">
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-4 bg-card border-border hover:border-primary transition-all duration-300 text-center h-full">
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                      <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    </motion.div>
                    <p className="text-xs font-medium">{skill.name}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
