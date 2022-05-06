import React from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import ScrollButton from './ScrollButton'

export default function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <ScrollButton />
        </>
    )
}