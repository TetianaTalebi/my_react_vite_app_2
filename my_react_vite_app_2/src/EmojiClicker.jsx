import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EmojiClicker(){

    const myEmojis = ["🦀", "🦐", "🦑", "🤩", "⛱️", "🌌", "😄"];
    
    function randomEmoji(){
        return myEmojis[Math.floor(Math.random()*myEmojis.length)]
    }
    
    // "emojis" is an array of objects
    const [emojis, setEmojis] = useState([{id: uuidv4(), emoji: randomEmoji()}]);

    function addEmoji(){
        setEmojis((emojis) => {
            return [...emojis, {id: uuidv4(), emoji: randomEmoji()} ]
        })
    }

    function deleteEmoji(id){
        setEmojis((oldEmojis) => {
            return oldEmojis.filter(e=>e.id!=id);
        })
    }

    function makeEmojisMilkyWay(){
        setEmojis((oldEmojis) => {
            return oldEmojis.map((em)=>({...em, emoji: "🌌"}))
        })
    }

    return (
        <div style={{fontSize: '40px'}}>
            {emojis.map((em)=>(
                 <span onClick={()=>(deleteEmoji(em.id))} key={em.id} style={{fontSize:'80px'}}>{em.emoji}</span>
            ))}
            <br/>
            <button onClick={addEmoji}>Add emoji</button>
            <br/>
            <button onClick={makeEmojisMilkyWay}>Make all emojis Milky Way!</button>
        </div>
    );

}