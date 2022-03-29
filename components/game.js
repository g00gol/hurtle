import React, { useState } from 'react'
import Script from 'next/script'

import TileRow from "../components/tileRow"
import Keyboard from "../components/keyboard"

import { useContext } from "react"
import ContextProvider, { GlobalContext } from "./contextProvider"

export default function Game() {
	const { value, value2, value3, value4 } = useContext(GlobalContext)
	const [key, setKey] = value
	const [counter, setCounter] = value2
	const [keyStore, setKeyStore] = value3
	const [guess, setGuess] = value4

	return (
		<div className="flex flex-col justify-center items-center flex-grow w-min">
			<div className="flex flex-col justify-center items-center w-screen flex-grow">
				<TileRow active={guess == 1 ? true : false} stored={guess > 1 ? true : false} input={key} />
				<TileRow active={guess == 2 ? true : false} stored={guess > 2 ? true : false} input={key} />
				<TileRow active={guess == 3 ? true : false} stored={guess > 3 ? true : false} input={key} />
				<TileRow active={guess == 4 ? true : false} stored={guess > 4 ? true : false} input={key} />
				<TileRow active={guess == 5 ? true : false} stored={guess > 5 ? true : false} input={key} />
				<TileRow active={guess == 6 ? true : false} stored={guess > 6 ? true : false} input={key} />
			</div>

			<Keyboard />
		</div>
	)
}