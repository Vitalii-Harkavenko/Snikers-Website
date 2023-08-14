import classicSnikers1 from "../assets/classic-snikers/1.jpg";
import classicSnikers2 from "../assets/classic-snikers/2.jpg";
import classicSnikers3 from "../assets/classic-snikers/3.jpg";
import classicSnikers4 from "../assets/classic-snikers/4.jpg";
import classicSnikers5 from "../assets/classic-snikers/5.jpg";
import classicSnikers6 from "../assets/classic-snikers/6.jpg";
import snikers1 from "../assets/snikers1.jpg";
import snikers2 from "../assets/snikers2.jpg";
import snikers3 from "../assets/snikers3.jpg";
import snikers4 from "../assets/snikers4.jpg";
import snikers5 from "../assets/snikers5.jpg";
import snikers6 from "../assets/snikers6.jpg";
import snikers7 from "../assets/snikers7.jpg";
import snikers8 from "../assets/snikers8.jpg";
import arrow from "../assets/arrow.svg";

const Carousel = ({ type }: { type: string }) => {

	const returnImages = () => {
		if (type === "classic snikers") return [classicSnikers1, classicSnikers2, classicSnikers3, classicSnikers4, classicSnikers5, classicSnikers6];
		else return [snikers1, snikers2, snikers3, snikers4, snikers5, snikers6, snikers7, snikers8];
	};

  	return (
		<>
			<div className="w-full h-fit backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center gap-8 py-8 text-center">
				<h2>{type === "classic snikers" ? "Classic black and white" : "Meet the new collection"}</h2>
				<img src={arrow} className="w-12 h-12 -rotate-90"/>
			</div>
			<div className="relative w-full h-[25vh] backdrop-blur-sm backdrop-brightness-75">
				<div className="absolute top-0 w-full px-8 xl:px-24 flex flex-wrap justify-between gap-4">
					{
						returnImages().map(image => (
							<div className="relative w-[45%] h-[20vw] md:w-[30%] md:h-[14vw] overflow-hidden rounded-lg">
								<img src={image} alt="snikers" className="absolute top-1/2 -translate-y-1/2"/>
							</div>
						))
					}
				</div>
			</div>
			<div className="w-full h-fit backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center gap-8 py-8">
				<img src={arrow} className="w-12 h-12 rotate-90"/>
			</div>
		</>
  	)
}
export default Carousel