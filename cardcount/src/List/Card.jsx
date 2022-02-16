import TypeOf from 'prop-types';

export default function Card({rank,cardInfo ,DeleteCard}) {
  return (
    <li>
      {`${cardInfo.rank}  ${cardInfo.suit}`}
      <button className="delBtn" onClick={()=>DeleteCard(cardInfo.id)}>&times;</button>
    
    </li>
  )
}
Card.propTypes ={
  cardInfo:TypeOf.object,
  DeleteCard:TypeOf.func
  
}