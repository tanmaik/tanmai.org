import { type Metadata } from "next";
import DeadCollegeTheoryContent from "./DeadCollegeTheoryContent";

export const metadata: Metadata = {
  title: "Dead College Theory",
};

export default function DeadCollegeTheoryPage() {
  return <DeadCollegeTheoryContent />;
}
