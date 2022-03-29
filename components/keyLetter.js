import { useContext } from "react"
import ContextProvider, { GlobalContext } from "./contextProvider"

export default function KeyLetter(props) {
	const { value, value2, value3 } = useContext(GlobalContext)
	const [key, setKey] = value
	const [counter, setCounter] = value2
	const [keyStore, setKeyStore] = value3

	function storeKey() {
		setKeyStore([...keyStore, props.letter])
	}

	return (
		<>
			<button
				className="flex justify-center items-center mx-0.75 my-1 bg-lightGray w-11 h-14 border-0 rounded text-sm font-semibold text-white"
				onClick={() => {
					setKey(props.letter)
					setCounter(counter < 5 ? counter + 1 : counter)
					storeKey(props.letter)
				}}>
				{props.letter}
			</button>
		</>
	)
}