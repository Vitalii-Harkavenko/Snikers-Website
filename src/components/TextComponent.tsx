const TextComponent = ({ info }: {info: {title: string, description: string, direction: string}}) => {
  	return (
		<div className="flex flex-col gap-6 sm:flex-row sm:gap-24 items-center">
			{info.direction === "to right" && 
				<>
					<h3 className="whitespace-nowrap mr-auto">{info.title}</h3>
					<p>{info.description}</p>
				</>
			}
			{info.direction === "to left" && 
				<>
					<p>{info.description}</p>
					<h3 className="whitespace-nowrap ml-auto">{info.title}</h3>
				</>
			}
        </div>
  	)
}
export default TextComponent