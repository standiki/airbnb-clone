import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import "./App.css"

import cardData from "./data"


export default function App() {

    const cards = cardData.map(card => {
        return  <Card 
                    key={card.id}
                    {...card}
                />
        })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}