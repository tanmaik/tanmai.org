import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

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

export default function Home() {
  return (
    <div className="text-sm text-primary">
      <div className="px-4 sm:w-[25rem] w-full">
        <div className="flex justify-between mt-4 ">
          <div>
            <h1>tanmai kalisipudi</h1>
            <p>
              <a
                href="mailto:tanmai.kalisipudi@gmail.com"
                className="border-b hover:border-black"
              >
                tanmai.kalisipudi@gmail.com
              </a>
            </p>
            <div className="flex gap-2 mt-4 items-center">
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
        <h1>university of pittsburgh, b.s. computer science</h1>
        <h1 className="text-secondary mt-2">graduated in 2023</h1>
        <h1>thomas jefferson high school for science and technology</h1>

        <footer className="mt-20 text-xs text-secondary">
          <a
            href="https://www.ashburncomputing.com/"
            target="_blank"
            className="italic underline"
          >
            looking for our company home?
          </a>
          <p>©2024 Tanmai Kalisipudi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
