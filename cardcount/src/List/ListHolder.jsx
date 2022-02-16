import TypeOf from 'prop-types';
import Card from "./Card";

const Style={
   ul:{ 
    
       textAlign: "left",
     listStyle:"none"
    },
    div:{ display:"flex",
        justifyContent:"center"}

}

const ListHolder = (props) => {
    return (
        <div style={Style.div}>
            <ul style={Style.ul}>
                {
                props.cardList.map((card, index) =>
                <Card key={card.id} cardInfo={card} DeleteCard = {props.DeleteCard} />)}           
            </ul>
        </div>
    );
}

ListHolder.propTypes = {
    cardList:TypeOf.array,
    DeleteCard:TypeOf.func
}

export default ListHolder;
