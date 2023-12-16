import { IntroFooter } from "@/app/_components/home/introFooter";
import { IntroImageSection } from "@/app/_components/home/introImageSection";
import { IntroParagraph } from "@/app/_components/home/introParagraph";

export default function Home() {
  return (
    <section>
      <IntroParagraph />
      <IntroImageSection />
      <IntroFooter />
    </section>
  );
}
