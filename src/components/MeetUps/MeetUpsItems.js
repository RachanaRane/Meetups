import classes from './MeetUpsItems.module.css';
import Card from '../UI/card';
function MeetUpsItems(props){
    return (
        <Card>
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.discription}</p>
        </div>
        <div className={classes.actions}>
            <button>Add to Favourites</button>
        </div>
    </li>
    </Card>
    );
    
}
export default MeetUpsItems;