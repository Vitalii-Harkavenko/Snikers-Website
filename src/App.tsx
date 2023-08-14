import heroMain from "./assets/Hero-snikers-main.jpg";
import snikers1 from "./assets/snikers1.jpg";
import snikers2 from "./assets/snikers2.jpg";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import TextComponent from "./components/TextComponent";
import instagram from "./assets/instagram.svg"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"

function App() {


  return (
    <>
      <header className="w-full h-[90vh] bg-gradient-to-b from-secondary-bg to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 md:top-1/2 md:-left-[10vw] md:-translate-y-1/2 brightness-[0.3]">
          <div className="absolute w-full h-full backdrop-blur-sm"></div>
          <img src={snikers1} alt="snikers" className="md:h-[60vh] md:w-auto w-screen"/>
        </div>
        <div className="w-[150vw] md:w-[65vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 filter-hero rounded-lg overflow-hidden">
          <img src={heroMain} alt="snikers" />
        </div>
        <div className="absolute bottom-0 right-0 md:bottom-auto md:top-1/2 md:-right-[10vw] md:-translate-y-1/2 brightness-[0.3]">
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
      <main className="bg-main-bg w-full flex flex-col py-32 gap-32 bg-gradient-to-b from-secondary-bg to-main-bg">
        <section className="h-fit border-y-2 border-solid border-white overflow-hidden">
          <Carousel type={"classic snikers"} />
        </section>
        <section className="flex flex-col px-8 xl:px-24 gap-16">
          <div className="flex flex-col items-center text-center px-8 xl:px-24 gap-8">
            <h3>Who we are</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="w-full h-[2px] bg-secondary-blue"></div>
          <div className="flex flex-col items-center px-8 xl:px-24 gap-24">
            <h3>Our journey</h3>
            <TextComponent info={{
              title: "The Idea",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus vel arcu ultrices, et laoreet sapien bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus vel arcu ultrices, et laoreet sapien bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              direction: "to right"
            }}/>
            <TextComponent info={{
              title: "The Beginning",
              description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus vel arcu ultrices, et laoreet sapien bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              direction: "to left"
            }}/>
            <TextComponent info={{
              title: "The Growth",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus vel arcu ultrices, et laoreet sapien bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus vel arcu ultrices, consectetur adipiscing elit.",
              direction: "to right"
            }}/>
          </div>
        </section>
        <section className="border-y-2 border-solid border-white overflow-hidden">
          <Carousel type="new collection"/>
        </section>
        <section className="flex md:flex-row flex-col px-8 xl:px-24 gap-8 xl:gap-24 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9531.08202200514!2d-73.99559673492924!3d40.72116431518832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e713d43875%3A0xbfd5eb3c3e1bb328!2sMUSEUM%20OF%20ICE%20CREAM!5e0!3m2!1suk!2slt!4v1692051190423!5m2!1suk!2slt"
            className="min-w-[50vw] h-[50vw]"
            loading="lazy">
          </iframe>
          <div className="flex flex-col w-full">
            <div className="p-4 w-full text-center border-b-2 border-solid border-white">
              <h3>Store One</h3>
              <p>Some Addres 89. str</p>
            </div>
            <div className="p-4 w-full text-center border-b-2 border-solid border-white">
              <h3>Store Two</h3>
              <p>An Addres 4. str</p>
            </div>
            <div className="p-4 w-full text-center border-b-2 border-solid border-white">
              <h3>Store Three</h3>
              <p>Some Long Addres 85. str</p>
            </div>
            <div className="p-4 w-full text-center border-b-2 border-solid border-white">
              <h3>Store Four</h3>
              <p>Some Addres 9. str</p>
            </div>
            <div className="p-4 w-full text-center border-b-2 border-solid border-white">
              <h3>Store Four</h3>
              <p>Addres 19. str</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-secondary-bg px-8 md:px-24 flex flex-col gap-16 py-16">
        <div className="relative flex flex-wrap justify-between my-auto gap-16 md:gap-0">
          <div className="md:px-8 md:w-1/2 w-full">
            <h2>Subsctibe to our news letter</h2>
            <div className="h-12 w-full overflow-hidden border-solid border-2 border-light rounded-lg flex mt-8">
              <input 
                className="w-[70%] h-full px-4"
                placeholder="Enter your email"
              />
              <button className="w-[30%] h-full bg-white text-black">Subscribe</button>
            </div>
          </div>
          <div className="absolute w-full h-[1px] md:w-[1px] md:h-full md:top-0 md:left-1/2 md:-translate-x-1/2 left-0 top-[60%] -translate-y-1/2 md:translate-y-0 bg-secondary-blue"></div>
          <div className="md:px-8 md:w-1/2 w-full flex items-center justify-between">
            <div>
              <p>Blog</p>
              <p>Our Stores</p>
              <p>History</p>
              <p>Careers</p>
            </div>
            <div>
              <h3>Find Us</h3>
              <div className="flex gap-4 h-10 mt-4">
                <img src={instagram}></img>
                <img src={facebook}></img>
                <img src={twitter}></img>
              </div>
            </div>
          </div>
        </div>
        <p className="m-auto">ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
}

export default App;
