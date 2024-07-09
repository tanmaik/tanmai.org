"use client";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Secret from "@/components/secret/Secret";

const Expandable = ({ header, description }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{header}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

export default function Home() {
  const [keySequence, setKeySequence] = useState([]);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [password, setPassword] = useState("");
  const [showSecretDiv, setShowSecretDiv] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const newSequence = [...keySequence, event.key];
      setKeySequence(newSequence.slice(-10));
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keySequence]);

  useEffect(() => {
    if (keySequence.join(",") === konamiCode.join(",")) {
      setShowPasswordScreen(true);
    }
  }, [keySequence]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "johanna0207") {
      setShowSecretDiv(true);
      setShowPasswordScreen(false);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {showPasswordScreen ? (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      ) : null}

      {showSecretDiv ? (
        <div className="fixed inset-0 bg-black text-white z-50 flex items-center justify-center">
          <div>
            <Secret />
          </div>
        </div>
      ) : null}

      <div className="flex justify-between mt-4 ">
        <div>
          <h1 className="text-[20rem]">tanmai</h1>
          <h1 className="text-[20rem] -mt-48">kalisipudi</h1>
          <p>
            <a
              href="mailto:tanmai.kalisipudi@gmail.com"
              className="border-b hover:border-black"
            >
              tanmai.kalisipudi@gmail.com
            </a>
          </p>
          <div className="flex gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/tanmaikalisipudi"
              target="_blank"
            >
              <Image
                width={18}
                height={20}
                className="w-5 h-5"
                src="./linkedin.svg"
                alt="Linkedin logo"
              />
            </a>
            <a href="https://www.github.com/tanmaik" target="_blank">
              <Image
                width={18}
                height={20}
                className="w-4 h-4"
                src="./github.svg"
                alt="Github logo"
              />
            </a>
            <a href="https://www.x.com/nottanmai" target="_blank">
              <Image
                width={18}
                height={20}
                className="w-4 h-4 ml-1"
                src="./x.svg"
                alt="X logo"
              />
            </a>
          </div>
        </div>
        <h1 className="hidden">Company home -&gt;</h1>
      </div>
      <h1 className="mt-8">experience</h1>
      <h1 className="text-secondary mt-2">now</h1>
      <Expandable header="ceo @ GradSteps" description="gradsteps.com" />
      <h1 className="text-secondary mt-2">summer 2023</h1>
      <Expandable
        header="swe @ Lineaje"
        description="Spearheaded a cybersecurity product from start-to-finish that was
              showcased to over 15,000 professionals at a computer security
              conference at Black Hat USA 2023 in Las Vegas. Developed Python tool using conversational AI and natural language
              processing to translate English queries to scan a Software Bill of
              Materials for vulnerabilities in a customer's software supply
              chain. Increased ease-of-use for complying with Executive Order
              14028 by over 400% (in terms of speed)."
      />
      <h1 className="text-secondary mt-2">summer 2022</h1>
      <Expandable
        header="intern @ Cisco"
        description="Worked with current Cisco researchers and management to push for a solution to the COVID-induced supply chain crisis using blockchain technology and other Cisco networking solutions such as Meraki and Nexus Dashboard."
      />
      <h1 className="mt-8">education</h1>
      <h1 className="text-secondary mt-2">in progress until 2026</h1>
      <h1>university of virginia, computer science</h1>
      <h1 className="text-secondary mt-2">graduated in 2023</h1>
      <h1>thomas jefferson high school for science and technology</h1>
      <footer className="mt-20 text-xs text-secondary">
        <p>©2024 tanmai kalisipudi. all rights reserved.</p>
      </footer>
    </div>
  );
}
