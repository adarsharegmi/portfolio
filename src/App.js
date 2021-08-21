
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Adarsha from "./components/Adarsha";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900">
      {/* <Navbar /> */}
      {/* <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact /> */}
      <Adarsha />
    </main>
  );
}