import TypeOf from 'prop-types';

export default function Card({rank,cardInfo ,DeleteCard}) {
 
  const cardClass =["card"]
  //console.log(cardInfo.suit);
  if (cardInfo.suit==="♦" || cardInfo.suit==="♥") 
    cardClass.push("redCard");
  else
    cardClass.push("blackCard");
  return (
    <li className={cardClass.join(" ")}>
      {      
      `${cardInfo.rank}  ${cardInfo.suit}`
      }
      <button className="delBtn" onClick={()=>DeleteCard(cardInfo.id)}>&times;</button>   
    </li>
  )
}
Card.propTypes ={
  cardInfo:TypeOf.object,
  DeleteCard:TypeOf.func
  
}