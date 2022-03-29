export default function Tile(props) {
	var withLetter = "flex justify-center items-center w-16 h-16 mr-1 mb-1 border-2 border-borderGray text-white text-4xl font-bold uppercase animate-pop"
	var noLetter = "flex justify-center items-center w-16 h-16 mr-1 mb-1 border-2 border-gray text-white text-4xl font-bold uppercase"

	return (
		<span className={props.input == "" || props.input == null ? noLetter : withLetter}>
			{props.input}
		</span>
	)
}