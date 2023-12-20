import NewMeetUpForm from "../components/MeetUps/NewMeetUpForm";
import {  useNavigate } from 'react-router-dom';


function NewMeetUps(){
    const navigate=useNavigate();

    function AddMeetUpHandler(meetupData){
        fetch(
            'https://react-meetups-5e92f-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type':'application/json'
                }
            }

        ).then(()=>{
            navigate('/');
        });
    }
    return(
        <div>
            <NewMeetUpForm OnAddMeetUp={AddMeetUpHandler}/>
        </div>
    )
}
export default NewMeetUps;