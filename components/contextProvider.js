import React, { createContext, useState } from "react"

export const GlobalContext = createContext(undefined)

export default function ContextProvider({ children }) {
	const [key, setKey] = useState("")
	const [counter, setCounter] = useState(0)
	const [keyStore, setKeyStore] = useState([key])
	const [guess, setGuess] = useState(1)
	const [guessedWords, setGuessedWords] = useState([keyStore.join("")])

	// keeps the max length of array at 5
	if (keyStore.length >= 5) {
		for (var i = 0; i < keyStore.length - 6; i++) {
			keyStore.splice(-1, 1)
			setKeyStore(keyStore)
		}
		console.log(keyStore)
	} else {
		console.log(keyStore)
	}

	return (
		<GlobalContext.Provider value={{ value: [key, setKey], value2: [counter, setCounter], value3: [keyStore, setKeyStore], value4: [guess, setGuess], value5: [guessedWords, setGuessedWords] }}>
			{children}
		</GlobalContext.Provider>
	)
}