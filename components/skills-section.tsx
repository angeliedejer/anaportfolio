"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Code2,
  Palette,
  Cpu,
  Lightbulb,
  MessageSquare,
  Target,
  Zap,
  Clock,
  Wrench,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type SkillCategory = "all" | "languages" | "frameworks" | "hardware" | "tools" | "design"

const allSkillsList = [
  { name: "C", logo: "/techstacklogos/C_Language_Logo.png" },
  { name: "C#", logo: "/techstacklogos/Logo_C_sharp.png" },
  { name: "Dart", logo: "/techstacklogos/Dart_logo.png" },
  { name: "JavaScript", logo: "/techstacklogos/JavaScript-Symbol.png" },
  { name: "TypeScript", logo: "/techstacklogos/Typescript_logo.png" },
  { name: "HTML", logo: "/techstacklogos/HTML5_logo.png" },
  { name: "CSS", logo: "/techstacklogos/css-logo.png" },
  { name: ".NET", logo: "/techstacklogos/NET_logo.png" },
  { name: "Node.js", logo: "/techstacklogos/Node.js_logo.png" },
  { name: "Flutter", logo: "/techstacklogos/flutter_logo.png" },
  { name: "Next.js", logo: "/techstacklogos/next_js_logo.png" },
  { name: "React", logo: "/techstacklogos/React-logo.png" },
  { name: "Arduino", logo: "/techstacklogos/arduino-logo.png" },
  { name: "SolidWorks", logo: "/techstacklogos/SolidWorks-Logo.png" },
  { name: "Cisco Packet Tracer", logo: "/techstacklogos/cisco-packet-tracer.png" },
  { name: "Eagle", logo: "/techstacklogos/eagle-logo.jpg" },
  { name: "TinkerCAD", logo: "/techstacklogos/logo-tinkercad.png" },
  { name: "Git/GitHub", logo: "/techstacklogos/github-logo.png" },
  { name: "VS Code", logo: "/techstacklogos/vscode-logo.png" },
  { name: "Android Studio", logo: "/techstacklogos/Android_Studio_Logo.png" },
  { name: "Word", logo: "/techstacklogos/microsoft-word-logo.png" },
  { name: "PowerPoint", logo: "/techstacklogos/Microsoft_Office_PowerPoint_logo.png" },
  { name: "Excel", logo: "/techstacklogos/Microsoft_Office_Excel_Logo_.png" },
  { name: "Figma", logo: "/techstacklogos/Figma-Logo.png" },
  { name: "Canva", logo: "/techstacklogos/Canva-Logo.png" },
]

const skills = {
  all: allSkillsList,
  languages: [
    { name: "C", logo: "/techstacklogos/C_Language_Logo.png" },
    { name: "C#", logo: "/techstacklogos/Logo_C_sharp.png" },
    { name: "Dart", logo: "/techstacklogos/Dart_logo.png" },
    { name: "JavaScript", logo: "/techstacklogos/JavaScript-Symbol.png" },
    { name: "TypeScript", logo: "/techstacklogos/Typescript_logo.png" },
    { name: "HTML", logo: "/techstacklogos/HTML5_logo.png" },
    { name: "CSS", logo: "/techstacklogos/css-logo.png" },
  ],
  frameworks: [
    { name: ".NET", logo: "/techstacklogos/NET_logo.png" },
    { name: "Node.js", logo: "/techstacklogos/Node.js_logo.png" },
    { name: "Flutter", logo: "/techstacklogos/flutter_logo.png" },
    { name: "Next.js", logo: "/techstacklogos/next_js_logo.png" },
    { name: "React", logo: "/techstacklogos/React-logo.png" },
  ],
  hardware: [
    { name: "Arduino", logo: "/techstacklogos/arduino-logo.png" },
    { name: "SolidWorks", logo: "/techstacklogos/SolidWorks-Logo.png" },
    { name: "Cisco Packet Tracer", logo: "/techstacklogos/cisco-packet-tracer.png" },
    { name: "Eagle", logo: "/techstacklogos/eagle-logo.jpg" },
    { name: "TinkerCAD", logo: "/techstacklogos/logo-tinkercad.png" },
  ],
  tools: [
    { name: "Git/GitHub", logo: "/techstacklogos/github-logo.png" },
    { name: "VS Code", logo: "/techstacklogos/vscode-logo.png" },
    { name: "Android Studio", logo: "/techstacklogos/Android_Studio_Logo.png" },
    { name: "Word", logo: "/techstacklogos/microsoft-word-logo.png" },
    { name: "PowerPoint", logo: "/techstacklogos/Microsoft_Office_PowerPoint_logo.png" },
    { name: "Excel", logo: "/techstacklogos/Microsoft_Office_Excel_Logo_.png" },
  ],
  design: [
    { name: "Figma", logo: "/techstacklogos/Figma-Logo.png" },
    { name: "Canva", logo: "/techstacklogos/Canva-Logo.png" },
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
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all")

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
            A diverse skill set spanning languages, frameworks, hardware, tools, and design
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={activeCategory === "all" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Zap className="mr-2 h-4 w-4" />
              All
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "languages" ? "default" : "outline"}
              onClick={() => setActiveCategory("languages")}
              className={activeCategory === "languages" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Code2 className="mr-2 h-4 w-4" />
              Languages
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "frameworks" ? "default" : "outline"}
              onClick={() => setActiveCategory("frameworks")}
              className={
                activeCategory === "frameworks" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Code2 className="mr-2 h-4 w-4" />
              Frameworks
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "tools" ? "default" : "outline"}
              onClick={() => setActiveCategory("tools")}
              className={
                activeCategory === "tools" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Wrench className="mr-2 h-4 w-4" />
              Tools
            </Button>
          </motion.div>
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
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <TooltipProvider>
              {skills[activeCategory].map((skill, index) => {
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.08, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-32 h-32"
                      >
                        <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 h-full w-full flex flex-col items-center justify-center gap-3">
                          <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <Image
                              src={skill.logo}
                              alt={skill.name}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          </div>
                          <h3 className="font-semibold text-sm text-center line-clamp-2">{skill.name}</h3>
                        </Card>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </TooltipProvider>
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
