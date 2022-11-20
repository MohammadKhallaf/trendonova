import LeftSide from "../components/home/LeftSide";
import MainSection from "../components/home/MainSection";
import SideNav from "../components/home/SideNav";

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-row">
      <div className="w-[10rem]">
        <SideNav />
      </div>
      <MainSection />

      <aside className="w-[10rem]">
        <LeftSide />
      </aside>
    </div>
  );
};

export default HomePage;
