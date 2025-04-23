import MainContainer from "@/components/main-container";
import LenisScroll from "@/lib/lenis-scroll";

export default function Page() {
  return (
    <main className="bg-white dark:bg-[#122727]"> {/* Updated classes for light/dark mode */}
      <LenisScroll />
      <MainContainer />
    </main>
  );
}