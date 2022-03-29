import Tile from "../components/tile"

import { useContext, useEffect } from "react"
import ContextProvider, { GlobalContext } from "./contextProvider"

export default function TileRow(props) {
	const { value, value2, value3, value5 } = useContext(GlobalContext)
	const [key, setKey] = value
	const [counter, setCounter] = value2
	const [keyStore, setKeyStore] = value3
	const [guessedWords, setGuessedWords] = value5

	if (props.active == true) {
		return (
			<span className="inline-flex w-fit">
				<Tile input={counter >= 1 ? keyStore[1] : ""} />
				<Tile input={counter >= 2 ? keyStore[2] : ""} />
				<Tile input={counter >= 3 ? keyStore[3] : ""} />
				<Tile input={counter >= 4 ? keyStore[4] : ""} />
				<Tile input={counter >= 5 ? keyStore[5] : ""} />
			</span>
		)
	} else {
		return (
			<span className="inline-flex w-fit">
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
			</span>
		)
	}
}