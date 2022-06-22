import { useState } from 'react';
import './App.css';
import {data} from './data';
import React from "react";
import Recipe from './Recipe';



function App() {
  const [cake, setCake] = useState (data);
  const removeCake = (id) => {
    let newCake = cake.filter (element => element.id !==id);
    setCake (newCake)
  }
  return (
    <div className ="block">
        <div className="container">
            <h1>КЛАССИЧЕСКАЯ ШАРЛОТКА</h1>
        </div>
        <div className="container" >
            <p> Шарлотка с яблоками – самый простой и самый вкусный яблочный пирог, который буквально тает во рту, а готовится это объедение очень быстро. Невероятный аромат наполняет всю кухню, и становится так сложно дождаться, когда уже можно будет насладиться шарлоткой с чашечкой чая.</p>
        </div>
        <div  className="container">
            <h2>Все Этапы Приготовления ({cake.length})</h2> 
        </div>
        <div className="container">
            <h3> Ингредиенты на 4 порции :
            <Recipe/>
            </h3>
        </div>

        {cake.map((element => {
          const {id, name, description, images} = element;
        
          return (
            <div key={id}>            
                <div  className="container">
                  <h3> {name}</h3>
                </div>
                <div  className="container">
                  <img src= {images} alt='cakeImage'/>
                </div>
                <div className="container">
                  <p> {description}</p>
                </div>
                <div  className="container">
                  <button className="btn" onClick={()=> removeCake(id)}>Сделано</button>
                </div>
            </div>
          )
        }))}

      <div  className="container">
        <button className="btn" onClick={()=> setCake([])}>Удалить всё</button>
      </div>
  
    </div>
  );
}
export default App;
