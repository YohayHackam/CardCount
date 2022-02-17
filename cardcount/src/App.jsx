import {useState} from "react";
import ListHolder from "./List/ListHolder";


function App() {

  
  const [getArry,setArry]=useState([]);

  function DeleteCard(cardId){
      console.log("delete " +cardId);
      setArry(getArry.filter(card =>{return (card.id!==cardId)}))
  };

 
   function AddCard(){
    let card={
      id: Date.now(),
      suit:document.getElementById("suit").value,
      rank:document.getElementById("rank").value
    }
    console.log(getArry);
    console.log("add " +card.id+ card.suit+ card.rank)
    getArry.unshift(card)
    setArry(getArry.map(card => card))
    
  };

  return (
    <div className="App" dir="rtl">
      
      <h1>יאללה , סופרים קלפים</h1>
      
        <div className="inputBox">
              איזה קלף יצא עכשיו ?
              <br />
            <label htmlFor="suit" >
               צורה (חליפה):
              <select name="suit" id="suit">
                <option value="&clubs;">&clubs;</option>
                <option value="&diams;">&diams;</option>
                <option value="&hearts;">&hearts;</option>
                <option value="&spades;">&spades;</option>
              </select>
            </label>
            <br/>
            <label htmlFor="rank" >
              ערך  (דרגה):
              <select name="rank" id="rank">
                <option value="A">A</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="J">Jack</option>
                <option value="Q">Queen</option>
                <option value="K">King</option>              
              </select>
            </label>
            <br />
            <button className="addBtn" onClick={AddCard}>הוסף לרשימה</button>
        </div> 
        <ListHolder cardList={getArry} DeleteCard={DeleteCard} />

    </div>
  );
}

export default App;
