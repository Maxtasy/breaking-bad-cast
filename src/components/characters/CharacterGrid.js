import React from 'react'
import { CharacterItem } from "./CharacterItem";
import spinner from "../../img/spinner.gif";

export const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <img src={spinner} className="center" alt=""/>
    ) : (
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}/>
            ))}
        </section>
    )
}
