import MainContainer from "@/components/main-container";
import LenisScroll from "@/lib/lenis-scroll";

export default function Page() {
  return (
    <main className=" bg-[#122727]">
      <LenisScroll />
      <MainContainer />
    </main>
  );
}