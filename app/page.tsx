"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Code, Palette, Database, Globe, Star, Sparkles, Heart } from 'lucide-react'
import Image from "next/image"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "JavaScript", level: 85, icon: <Code className="w-4 h-4" /> },
    { name: "React", level: 80, icon: <Globe className="w-4 h-4" /> },
    { name: "Node.js", level: 75, icon: <Database className="w-4 h-4" /> },
    { name: "Python", level: 70, icon: <Code className="w-4 h-4" /> },
    { name: "UI/UX Design", level: 85, icon: <Palette className="w-4 h-4" /> },
    { name: "Database Management", level: 78, icon: <Database className="w-4 h-4" /> }
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with data visualization",
      tech: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-neutral-100">
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent">
              Christine Laput
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-amber-800 font-semibold"
                      : "text-gray-600 hover:text-amber-800"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 via-stone-800 to-neutral-800 bg-clip-text text-transparent">
                Christine Praise Laput
              </h1>
              <p className="text-xl text-gray-600">IT Student & Future Developer</p>
              <div className="flex items-center gap-2 text-amber-800">
                <GraduationCap className="w-5 h-5" />
                <span>New Era University</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Philippines</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate IT student with a love for creating beautiful, functional web applications. 
              Inspired by the magic of Studio Ghibli and driven by the endless possibilities of technology.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-amber-700 to-stone-700 hover:from-amber-800 hover:to-stone-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="border-amber-700 text-amber-800 hover:bg-amber-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-amber-800 transition-colors">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-amber-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-amber-800 transition-colors">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-stone-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/empink.jpg-RQUZLecqu98qtttSdOmbR7axzsGKXJ.jpeg"
                alt="Christine Praise Laput - IT Student"
                width={400}
                height={400}
                className="relative z-10 rounded-full shadow-2xl animate-float object-cover"
              />
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-yellow-400 rounded-full p-2 animate-bounce">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Study Character"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Hello! I'm Christine Praise Laput, an IT student at New Era University with a passion for 
                    technology and creativity. Like the characters in Studio Ghibli films, I believe in the 
                    magic that happens when determination meets imagination.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I'm currently pursuing my degree in Information Technology, focusing on web development, 
                    database management, and user experience design. My goal is to create digital experiences 
                    that are not only functional but also bring joy to users.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">Problem Solver</Badge>
                    <Badge variant="secondary" className="bg-stone-100 text-stone-800">Creative Thinker</Badge>
                    <Badge variant="secondary" className="bg-neutral-100 text-neutral-800">Team Player</Badge>
                    <Badge variant="secondary" className="bg-amber-50 text-amber-700">Lifelong Learner</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-amber-800">{skill.icon}</div>
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-amber-600 to-stone-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-800">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-amber-50 group-hover:border-amber-700 transition-colors">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-amber-50 to-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent">
            Let's Create Something Magical Together
          </h2>
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Contact Character"
              width={300}
              height={200}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, or anyone who shares 
            a passion for technology and creativity. Let's bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-amber-700 to-stone-700 hover:from-amber-800 hover:to-stone-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              christine.laput@email.com
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-amber-50 hover:border-amber-700 transition-colors">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-amber-50 hover:border-amber-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white/60 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Christine Praise Laput
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Inspired by the magic of Studio Ghibli films
          </p>
        </div>
      </footer>
    </div>
  )
}
