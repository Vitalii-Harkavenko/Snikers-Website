import heroMain from "./assets/Hero-snikers-main.jpg";
import snikers1 from "./assets/snikers1.jpg";
import snikers2 from "./assets/snikers2.jpg";
import snikers3 from "./assets/snikers3.jpg";
import snikers4 from "./assets/snikers4.jpg";
import snikers5 from "./assets/snikers5.jpg";
import snikers6 from "./assets/snikers6.jpg";
import snikers7 from "./assets/snikers7.jpg";
import snikers8 from "./assets/snikers8.jpg";
import snikers9 from "./assets/snikers9.jpg";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <header className="w-full h-[90vh] bg-gradient-to-b from-secondary-bg to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 md:top-1/2 md:-left-[10vw] md:-translate-y-1/2 brightness-[0.4]">
          <div className="absolute w-full h-full backdrop-blur-sm"></div>
          <img src={snikers1} alt="snikers" className="md:h-[60vh] md:w-auto w-screen"/>
        </div>
        <div className="w-[120vw] md:w-[65vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 filter-hero rounded-lg overflow-hidden">
          <img src={heroMain} alt="snikers" />
        </div>
        <div className="absolute bottom-0 right-0 md:top-1/2 md:-right-[10vw] md:-translate-y-1/2 brightness-[0.4]">
          <div className="absolute w-full h-full backdrop-blur-sm"></div>
          <img src={snikers2} alt="snikers" className="md:h-[60vh] md:w-auto w-screen"/>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 text-center items-center flex flex-col">
          <h1>The new collection is out</h1>
          <div className="flex gap-8">
            <button className="p-4 rounded-lg bg-brand hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap h-fit">
              See collection
            </button>
            <button className="p-[calc(1rem-2px)] rounded-lg backdrop-blur-sm border-solid border-brand border-2 hover:bg-black hover:border-black hover:text-white transition-all duration-300 whitespace-nowrap h-fit">
              Our stores
            </button>
          </div>
        </div>
      </header>
      <Navbar />
      <main className="bg-main-bg w-full h-screen flex flex-col py-32 bg-gradient-to-b from-secondary-bg to-main-bg">
        <section className="mx-32 w-[calc(100%-16rem)] h-fit border-y-2 border-solid border-white overflow-hidden">
          <Carousel type={"classic snikers"} />
        </section>
      </main>
    </>
  );
}

export default App;
