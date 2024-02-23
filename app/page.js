import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="flex justify-center">
      <div className="px-4 w-[25rem] font-medium">
        <div className="flex justify-between mt-10 sm:mt-20 ">
          <div>
            <h1>Tanmai Kalisipudi</h1>
            <div className="group">
              {" "}
              <h1 className="text-secondary group-hover:hidden">
                tanmai.kalisipudi@gmail.com
              </h1>
              <h1 className="text-secondary hidden group-hover:inline">
                Washington, D.C.
              </h1>
            </div>
          </div>
          <h1 className="hidden">Company home -&gt;</h1>
        </div>

        <h1 className="text-primary mt-8">Experience</h1>

        <h1 className="text-secondary mt-2">Summer 2023</h1>

        <Expandable
          header="SWE @ Lineaje"
          description="Spearheaded a cybersecurity product from start-to-finish that was
              showcased to over 15,000 professionals at a computer security
              conference at Black Hat USA 2023 in Las Vegas. Developed Python tool using conversational AI and natural language
              processing to translate English queries to scan a Software Bill of
              Materials for vulnerabilities in a customer's software supply
              chain. Increased ease-of-use for complying with Executive Order
              14028 by over 400% (in terms of speed)."
        />
        <h1 className="text-secondary mt-2">Summer 2022</h1>

        <Expandable
          header="Intern @ Cisco"
          description="Worked with current Cisco researchers and management to push for a solution to the COVID-induced supply chain crisis using blockchain technology and other Cisco networking solutions such as Meraki and Nexus Dashboard."
        />

        <h1 className="mt-8">Education</h1>

        <h1 className="text-secondary mt-2">In progress – 2026</h1>
        <h1>University of Pittsburgh, B.S. Computer Science</h1>
        <h1 className="text-secondary mt-2">2019 – 2023</h1>
        <h1>Thomas Jefferson High School for Science and Technology</h1>

        <p className="mt-20 text-xs text-secondary font-normal">
          ©2024 Tanmai Kalisipudi. All rights reserved.
        </p>
      </div>
    </div>
  );
}
