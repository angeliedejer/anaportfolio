"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const journeyImages = [
  { src: "/journey-1.jpg", alt: "Playing badminton", span: "md:col-span-1 md:row-span-2" },
  { src: "/journey-2.jpg", alt: "Night of the Broken Code event", span: "md:col-span-2 md:row-span-1" },
  { src: "/journey-3.jpg", alt: "Classroom group photo", span: "md:col-span-1 md:row-span-1" },
  { src: "/journey-4.jpg", alt: "Arduino electronics project", span: "md:col-span-1 md:row-span-1" },
  { src: "/journey-5.jpg", alt: "Team coding session", span: "md:col-span-2 md:row-span-2" },
  { src: "/journey-6.jpg", alt: "UI design presentation", span: "md:col-span-1 md:row-span-1" },
  { src: "/journey-7.jpg", alt: "Server room collaboration", span: "md:col-span-1 md:row-span-2" },
  { src: "/journey-8.jpg", alt: "Tech event group selfie", span: "md:col-span-1 md:row-span-1" },
  { src: "/journey-9.jpg", alt: "Arduino breadboard project", span: "md:col-span-1 md:row-span-1" },
]

export function JourneySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            My college journey has been a mix of challenges and growth, coding late nights, building projects, and
            learning from failures. Along the way, I discovered that persistence, passion, and the people around me
            shaped not only my skills, but the person I'm becoming.
          </p>
        </motion.div>

        {/* Collage Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4 max-w-6xl mx-auto"
        >
          {journeyImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${image.span} group cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Animated border on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
