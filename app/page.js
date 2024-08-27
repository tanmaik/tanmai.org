import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import AgeDisplay from "@/components/AgeDisplay";

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
  const birthDate = new Date("2005-07-17"); // Replace with your actual birth date

  return (
    <div className="p-4 text-sm w-[20rem]">
      <div className="flex justify-between mt-4">
        <div>
          <h1>tanmai kalisipudi</h1>

          <AgeDisplay birthDate={birthDate} />
          <p>
            <a
              href="mailto:tanmai.kalisipudi@gmail.com"
              className="border-b hover:border-black"
            >
              tanmai.kalisipudi@gmail.com
            </a>
          </p>

          <div className="flex gap-2 mt-2 items-center">
            <a
              href="https://www.linkedin.com/in/tanmaikalisipudi"
              target="_blank"
            >
              <Image
                width={18}
                height={20}
                className="w-5 h-5"
                src="./linkedin.svg"
                alt="linkedin logo"
              />
            </a>
            <a href="https://www.github.com/tanmaik" target="_blank">
              <Image
                width={18}
                height={20}
                className="w-4 h-4"
                src="./github.svg"
                alt="github logo"
              />
            </a>
            <a href="https://www.x.com/nottanmai" target="_blank">
              <Image
                width={18}
                height={20}
                className="w-4 h-4 ml-1"
                src="./x.svg"
                alt="x logo"
              />
            </a>
          </div>
        </div>
      </div>
      <h1 className="mt-8">experience</h1>
      <h1 className="text-secondary mt-2">summer 2024</h1>
      <Expandable
        header="founder @ gradsteps"
        description={
          <a
            href="https://gradsteps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b hover:border-black"
          >
            gradsteps.com
          </a>
        }
      />
      <h1 className="text-secondary mt-2">summer 2023</h1>
      <Expandable
        header="swe @ lineaje"
        description="spearheaded a cybersecurity product from start-to-finish that was
              showcased to over 15,000 professionals at a computer security
              conference at black hat usa 2023 in las vegas. developed python tool using conversational ai and natural language
              processing to translate english queries to scan a software bill of
              materials for vulnerabilities in a customer's software supply
              chain. increased ease-of-use for complying with executive order
              14028 by over 400% (in terms of speed)."
      />
      <h1 className="text-secondary mt-2">summer 2022</h1>
      <Expandable
        header="intern @ cisco"
        description="worked with current cisco researchers and management to push for a solution to the covid-induced supply chain crisis using blockchain technology and other cisco networking solutions such as meraki and nexus dashboard."
      />
      <h1 className="mt-8">education</h1>
      <h1 className="text-secondary mt-2">in progress until 2026</h1>
      <h1>university of virginia, computer science and math</h1>
      <h1 className="text-secondary mt-2">graduated in 2023</h1>
      <h1>thomas jefferson high school for science and technology</h1>
    </div>
  );
}
