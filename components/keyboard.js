import { useContext, useState } from "react"
import { GlobalContext } from "./contextProvider"
import KeyLetter from "../components/keyLetter"

export default function Keyboard() {
	const { value, value2, value3, value4, value5 } = useContext(GlobalContext)
	const [key, setKey] = value
	const [counter, setCounter] = value2
	const [keyStore, setKeyStore] = value3
	const [guess, setGuess] = value4
	const [guessedWords, setGuessedWords] = value5

	if (typeof window === 'object') {
		document.onkeydown = function (evt) {
			evt = evt || window.event
			if (evt.keyCode >= 65 && evt.keyCode < 90) {
				//alert(evt.key)
				setKey(evt.key)
				setCounter(counter < 5 ? counter + 1 : counter)
				setKeyStore([...keyStore, evt.key])
			} else if (evt.keyCode == 8) {
				backspace()
			} else if (evt.keyCode == 13) {
				enter()
			}
		}
	}

	const allGuessedWords = []
	const setCookie = (value) => {
		console.log(value)
		setGuessedWords([...guessedWords, value])
		console.log("GW", guessedWords)
		localStorage["guessedWords"] = JSON.stringify(guessedWords)
	}

	function enter() {
		console.log(guess)
		setGuess(guess)
		if (keyStore.length < 6) {
			setGuess(guess)
			console.log("Please input more values")
		}
		// insert checker for if word is in word list
		else if (guess < 6) {
			setGuess(guess + 1)
			console.log("Keystore:", keyStore)
			setCookie(keyStore.join(""))
		} else {
			setGuess(guess)
		}
	}

	function backspace() {
		if (keyStore[keyStore.length - 1] !== "") {
			keyStore.splice(-1, 1)
			setKeyStore(keyStore)
			setCounter(counter > 0 ? counter - 1 : counter)
			console.log(key)
		} else {
			console.log("No more left!")
		}
	}

	return (
		<div className="flex flex-col flex-wrap justify-center items-center h-1/6 my-auto">
			<div className="flex">
				<KeyLetter letter={"Q"} />
				<KeyLetter letter={"W"} />
				<KeyLetter letter={"E"} />
				<KeyLetter letter={"R"} />
				<KeyLetter letter={"T"} />
				<KeyLetter letter={"Y"} />
				<KeyLetter letter={"U"} />
				<KeyLetter letter={"I"} />
				<KeyLetter letter={"O"} />
				<KeyLetter letter={"P"} />
			</div>
			<div className="flex">
				<KeyLetter letter={"A"} />
				<KeyLetter letter={"S"} />
				<KeyLetter letter={"D"} />
				<KeyLetter letter={"F"} />
				<KeyLetter letter={"G"} />
				<KeyLetter letter={"H"} />
				<KeyLetter letter={"J"} />
				<KeyLetter letter={"K"} />
				<KeyLetter letter={"L"} />
			</div>
			<div className="flex">
				<button className="flex justify-center items-center mx-0.75 my-1 text-sm font-semibold bg-lightGray w-17 h-14 border-0 rounded text-white" onClick={enter}>
					ENTER
				</button>
				<KeyLetter letter={"Z"} />
				<KeyLetter letter={"X"} />
				<KeyLetter letter={"C"} />
				<KeyLetter letter={"V"} />
				<KeyLetter letter={"B"} />
				<KeyLetter letter={"N"} />
				<KeyLetter letter={"M"} />
				<button className="flex justify-center items-center mx-0.75 my-1 text-sm bg-lightGray w-17 h-14 border-0 rounded text-white" onClick={backspace}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path fill="white" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
					</svg>
				</button>
			</div>
		</div>
	)
}