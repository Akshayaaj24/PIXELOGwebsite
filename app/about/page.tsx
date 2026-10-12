import { AboutIntro } from "@/components/AboutIntro";
import { HowWeWork } from "@/components/HowWeWork";
import { meta } from "@/lib/page";
export const metadata = meta("About Us: Digital Marketing and IT Company in Thoothukudi", "PIXELOG is a creative digital marketing and IT solutions agency in Thoothukudi (Tuticorin) combining strategy, branding, technology, video and performance marketing.", "/about");
// Same About content as the home page.
export default function About() {
  return (<>
    <h1 className="sr-only">About PIXELOG</h1>
    <AboutIntro />
    <HowWeWork />
  </>);
}
