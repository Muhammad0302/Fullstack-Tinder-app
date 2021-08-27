import React, { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'
import instance from './axios'
function TinderCards() {
    const [people,setpeople] = useState([])

   useEffect(()=>{
    async function fetchData(){
      const req = await axios.get("http://localhost:8001/tinder/cards")
      setpeople(req.data)
    }
    fetchData();
   },[]);
  console.log(people)
     
    const onSwipe = (direction,nameToDelete) => {
        console.log('Removing: ' + nameToDelete);
        // setLastDirection(direction);
      }
      
      const onCardLeftScreen = (name) => {
        console.log(name + ' left the screen')
      }
    return (
        <div className="TinderCards">
            <div className="TinderCards__container">
            {
             people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                onSwipe={(dir)=>onSwipe(dir,person.name)} onCardLeftScreen={() => onCardLeftScreen(person.name)} preventSwipe={['right', 'left']}>
             <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
              <h3>{person.name}</h3>   
             </div>

                </TinderCard>
             ))
            } 
            </div>  
        </div>
    )
}

export default TinderCards
