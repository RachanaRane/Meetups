import classes from './MeetUpsList.module.css';
import MeetUpsItems from './MeetUpsItems';
function MeetUpsList(props){
    return (
    <ul className={classes.list}>
        {props.meetups.map((meetup)=>(
          <MeetUpsItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          discription={meetup.discription}
          />
        ))}

    </ul>
    );
}
export default MeetUpsList;