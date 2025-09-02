import Achievements from "@/components/about/Achievements";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import Breadcrumbs from "@/components/ui/BreadCrumb";

const About = () => {
  return (
    <main className="section-mt">
      <div className="section-pl">
        <Breadcrumbs />
      </div>
      <OurStory />
      <Achievements />
      <OurTeam />
    </main>
  );
};

export default About;
