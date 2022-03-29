import Head from "next/head"
import React, { useState } from "react"

import { useContext } from "react"
import ContextProvider, { GlobalContext } from "../components/contextProvider"

import Nav from "../components/nav"
import Game from "../components/game"

/*
@todo
when user presses enter, store input values into local storage (persists after user leaves page)
  - when pressing enter, clear states of counter, key, and keyStore
  - then store that data to local storage
*/

export default function Home() {
  /* document.body.addEventListener('keydown', function (event) {
    console.log(event.keyCode)
  }) */

  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-center bg-black">
      <Head>
        <title>Hurtle</title>
      </Head>

      <Nav />
      <Game />
    </div>
  )
}
