import PageBackground from "../common/Background";
import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import MissionVision from "./MissionVision";
import OurValues from "./OurValues";
import MeetOwner from "./MeetOwner";
import MeetTeam from "./MeetTeam";
import OurJourney from "./OurJourney";
import CompanyNumbers from "./CompanyNumbers";
import WhyChooseUs from "./WhyChooseUs";
import FinalCTA from "./FinalCTA";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c17] text-white">
      <PageBackground />

      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <MeetOwner />
      <MeetTeam />
      <OurJourney />
      <CompanyNumbers />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}