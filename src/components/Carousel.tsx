import classicSnikers1 from "../assets/classic-snikers/1.jpg";
import classicSnikers2 from "../assets/classic-snikers/2.jpg";
import classicSnikers3 from "../assets/classic-snikers/3.jpg";
import classicSnikers4 from "../assets/classic-snikers/4.jpg";
import classicSnikers5 from "../assets/classic-snikers/5.jpg";
import classicSnikers6 from "../assets/classic-snikers/6.jpg";
import arrow from "../assets/arrow.svg";

const Carousel = ({ type }: { type: string }) => {

	const returnImages = () => {
		if (type === "classic snikers") return [classicSnikers1, classicSnikers2, classicSnikers3, classicSnikers4, classicSnikers5, classicSnikers6];
		else return [];
	};

  	return (
		<>
			<div className="w-full h-fit backdrop-blur-sm brightness-75 flex flex-col items-center gap-8 py-8">
				<h2>Classic Black and White</h2>
				<img src={arrow} className="w-12 h-12 -rotate-90"/>
			</div>
			<div className="relative w-full h-[25vh] backdrop-blur-sm backdrop-brightness-75">
				<div className="absolute top-0 w-full px-32 flex flex-wrap justify-between gap-8">
					{
						returnImages().map(image => (
							<div className="relative w-[20vw] h-[25vh] overflow-hidden rounded-lg">
								<img src={image} alt="snikers" className="w-[25vw] absolute top-1/2 -translate-y-1/2"/>
							</div>
						))
					}
				</div>
			</div>
			<div className="w-full h-fit backdrop-blur-sm brightness-75 flex flex-col items-center gap-8 py-8">
				<img src={arrow} className="w-12 h-12 rotate-90"/>
			</div>
		</>
  	)
}
export default Carousel