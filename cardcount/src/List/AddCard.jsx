


export default function AddCard(props) {
    let key= (props.cardArry.length>1)? props.cardArry[props.cardArry.length - 1].key+ 1 :0;
    props.cardArry.push({key:key,suit:props.suit,rank:props.rank});
   
  
}



// function additem(suit , rank){
//     console.log(suit, rank);
//     let key= (cardArry.length>1)? cardArry[cardArry.length - 1].key+ 1 :0;
//     cardArry.push({key:key,suit:suit,rank:rank});
//     cardArry.forEach(card=>{console.log(card)})
   
//   }
