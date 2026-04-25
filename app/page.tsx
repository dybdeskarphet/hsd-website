import { Header } from "@/components/header";
import { AboutUs } from "@/components/about_us";
import { VideoSection } from "@/components/youtube_carousel";
import { InstagramSection } from "@/components/instagram_carousel";
import { SponsorsSection } from "@/components/sponsors_section";
import { MediumSection } from "@/components/medium/MediumSection";
import { Footer } from "@/components/footer";
import { TeamSection } from "@/components/team/team_section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-left justify-baseline md:px-25 md:pt-20 md:pb-10 sm:p-8 p-4">
      <main>
        {/* Grid background */}
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Rest of the components */}
        <Header />
        <AboutUs />
        <VideoSection />
        <InstagramSection />
        <MediumSection />
        <SponsorsSection />
        <TeamSection />
        <Footer />
      </main>
    </div>
  );
}
