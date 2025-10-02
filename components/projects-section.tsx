"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Figma, ExternalLink } from "lucide-react"

type ProjectFilter = "all" | "design" | "software"

interface Project {
  id: number
  title: string
  category: "software" | "design" | "both"
  tags: string[]
  description: string
  role: string
  learning: string
  date: string
  image: string
  prototypeImage: string
  showAllButtons?: boolean
  githubUrl?: string
  figmaUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "BaonBuddy",
    category: "software",
    tags: ["C#", "OOP", "Console App", "Finance"],
    description:
      "A simplified expense monitoring system using C# Console Application with OOP principles to help students track allowances and daily spending.",
    role: "Full-Stack Developer – handled both the backend logic (OOP-based expense tracking) and console-based user interface.",
    learning:
      "Learned how to apply object-oriented programming concepts in real-world finance tracking, and how to build simple yet effective console applications.",
    date: "Oct 2023 - Dec 2023",
    image: "/projects/baonbuddy-logo.png",
    prototypeImage: "/projects/baonbuddy-prototype.png",
  },
  {
    id: 2,
    title: "SmashZone: Badminton x Tennis Booking Hub",
    category: "software",
    tags: ["Windows Form", "OOP", "Booking System", "C#"],
    description:
      "A badminton and tennis appointment booking system using C# Windows Form. Integrated OOP principles for efficient management of reservations, scheduling, and availability tracking.",
    role: "Full-Stack Developer – designed the Windows Form UI and developed backend logic for managing booking and scheduling.",
    learning:
      "Improved knowledge in desktop app development, handling booking logic, and applying object-oriented design for system scalability.",
    date: "Mar 2024 - Apr 2024",
    image: "/projects/smashzone-windows-logo.png",
    prototypeImage: "/projects/smashzone-windows-prototype.png",
    githubUrl: "https://github.com/angeliedejer/SmashZone-BadmintonxTennis-BookingHub.git",
  },
  {
    id: 3,
    title: "MentorMatch",
    category: "both",
    tags: [".NET MAUI", "Figma", "UI/UX", "Mobile Design", "Mentorship"],
    description:
      "A Tinder-like platform for mentor-mentee matching. Users start as mentees and can apply to become mentors. Built using .NET MAUI with swipe-based mentor discovery and profile transitions.",
    role: "UI/UX Designer & Front-End Developer – designed Figma prototype and implemented front-end features using .NET MAUI.",
    learning:
      "Learned how to create role-based systems, integrate swipe functionality, and design engaging user flows for mentorship platforms.",
    date: "Jun 2024 - Jul 2024",
    image: "/projects/mentormatch-logo.png",
    prototypeImage: "/projects/mentormatch-prototype.png",
    showAllButtons: true,
    figmaUrl:
      "https://www.figma.com/design/T1zhA46vmmzbTA8egCJVTH/MentorMatch-Prototype?node-id=0-1&t=JYwehYTbv8eUScCi-1",
    githubUrl: "https://github.com/SeesonLau/ProjectMentorMatch.git",
  },
  {
    id: 5,
    title: "SmashZone: Badminton x Tennis Booking Hub",
    category: "design",
    tags: ["Figma", "UI/UX", "Mobile Design", "Sports"],
    description:
      "A mobile UI/UX prototype for a badminton and tennis appointment booking system. Focused on creating intuitive layouts, clean forms, and simple navigation.",
    role: "UI/UX Designer – created high-fidelity prototype and designed user flows for booking sports courts.",
    learning: "Developed strong skills in Figma prototyping, user-friendly booking workflows, and UI consistency.",
    date: "Oct 2024 - Nov 2024",
    image: "/projects/smashzone-mobile-logo.png",
    prototypeImage: "/projects/smashzone-mobile-prototype.png",
    figmaUrl: "https://www.figma.com/design/aNDjXDKBJGzWdBrM7qXA0e/SmashZone?node-id=0-1&t=FJAsf8IxPiB8aa6V-1",
  },
  {
    id: 6,
    title: "OptiCare",
    category: "design",
    tags: ["Figma", "UI/UX", "Web Design", "Healthcare"],
    description:
      "A web-based UI/UX prototype for patient record management, diagnosis, and appointment scheduling for optometry clinics.",
    role: "UI/UX Designer – designed web dashboards and patient record forms using Figma.",
    learning:
      "Learned how to handle input-heavy healthcare interfaces, structure medical data systems, and apply usability principles in clinical workflows.",
    date: "Oct 2024 - Dec 2024",
    image: "/projects/opticare-logo.png",
    prototypeImage: "/projects/opticare-prototype.png",
    figmaUrl: "https://www.figma.com/design/yEy8Fb8PxIs2Am8pZB2rXx/OPTICARE-VER.1?t=yDu0fdAPyzSfVAWw-1",
  },
  {
    id: 7,
    title: "Whaloo",
    category: "both",
    tags: ["Flutter", "Dart", "Android", "Figma", "UI/UX", "Mobile Design", "Education"],
    description:
      "A mobile app built with Flutter and Dart for managing study materials on Android. Features include tracking deadlines, organizing class schedules, and creating to-do lists. Designed in Figma with front-end development implementation.",
    role: "UI/UX Designer & Front-End Developer – built mobile prototypes and implemented UI screens for academic management.",
    learning:
      "Learned how to design education-focused productivity apps, integrate scheduling features, and transition prototypes into front-end code using Flutter.",
    date: "Feb 2025 - Apr 2025",
    image: "/projects/whaloo-logo.png",
    prototypeImage: "/projects/whaloo-prototype.png",
    showAllButtons: true,
    figmaUrl: "https://www.figma.com/design/SpJIYZsLGrxLTC6iDHmeJK/Whaloo-Prototype?t=89MiTZsaOZ96Bh6P-1",
    githubUrl: "https://github.com/settery7/whaloo.git",
  },
  {
    id: 8,
    title: "HanapBuhay",
    category: "both",
    tags: ["React", "Next.js", "TypeScript", "Figma", "UI/UX", "Web Design", "Marketplace"],
    description:
      "A web-based local freelance marketplace built with React, Next.js, and TypeScript that connects clients with skilled informal workers for everyday services like carpentry, tutoring, and babysitting. Includes job posting, worker profiles, chat, and ratings for trust-building.",
    role: "UI/UX Designer & Front-End Developer – designed marketplace workflows, client-worker interactions, and implemented front-end components for core platform features.",
    learning:
      "Gained experience in marketplace platform design, building two-sided user flows, and applying front-end implementation with React and Next.js to transform prototypes into functional components.",
    date: "Aug 2025 - Oct 2025",
    image: "/projects/hanapbuhay-logo.png",
    prototypeImage: "/projects/hanapbuhay-prototype.png",
    showAllButtons: true,
    figmaUrl: "https://www.figma.com/design/YVzfggYikPHsV2M5YtASrI/PROTOTYPE-HANAPBUHAY?t=89MiTZsaOZ96Bh6P-1",
    githubUrl: "https://github.com/SeesonLau/hanapbuhay.git",
    liveUrl: "https://hanapbuhay.vercel.app/",
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter || p.category === "both")

  const handleCardClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects Showcase</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A collection of my work spanning design and software development
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              All Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={filter === "design" ? "default" : "outline"}
              onClick={() => setFilter("design")}
              className={filter === "design" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              Design
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={filter === "software" ? "default" : "outline"}
              onClick={() => setFilter("software")}
              className={filter === "software" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              Software
            </Button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleCardClick(project)}
                className="cursor-pointer"
              >
                <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden bg-background">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-contain p-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, idx) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted mb-3">{project.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-sm text-muted">{selectedProject.date}</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-lg bg-muted">
                    <img
                      src={selectedProject.prototypeImage || "/placeholder.svg"}
                      alt={`${selectedProject.title} prototype`}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Role</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Learning</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.learning}</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {selectedProject.liveUrl && (
                      <Button
                        className="bg-accent hover:bg-accent/90 flex-1"
                        onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    {selectedProject.showAllButtons ? (
                      <>
                        {selectedProject.githubUrl && (
                          <Button
                            className="bg-primary hover:bg-secondary flex-1"
                            onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                        )}
                        {selectedProject.figmaUrl && (
                          <Button
                            variant="outline"
                            className="border-primary flex-1 bg-transparent"
                            onClick={() => window.open(selectedProject.figmaUrl, "_blank")}
                          >
                            <Figma className="h-4 w-4 mr-2" />
                            View Design
                          </Button>
                        )}
                      </>
                    ) : selectedProject.category === "design" || selectedProject.category === "both" ? (
                      <>
                        {selectedProject.githubUrl && (
                          <Button
                            className="bg-primary hover:bg-secondary flex-1"
                            onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                        )}
                        {selectedProject.figmaUrl && (
                          <Button
                            variant="outline"
                            className={`border-primary bg-transparent ${selectedProject.githubUrl ? "flex-1" : "w-full"}`}
                            onClick={() => window.open(selectedProject.figmaUrl, "_blank")}
                          >
                            <Figma className="h-4 w-4 mr-2" />
                            View Design
                          </Button>
                        )}
                      </>
                    ) : (
                      selectedProject.githubUrl && (
                        <Button
                          className="bg-primary hover:bg-secondary w-full"
                          onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
