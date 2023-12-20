import { useRef } from "react";
import Card from "../UI/card";
import classes from "./NewMeetUpForm.module.css"


function NewMeetUpForm(props){
    const titleInputref=useRef();
   const imageInputref=useRef();
   const addressInputref=useRef();
   const discriptionInputref=useRef();

function SubmitHandler(event){
    event.preventDefault();

    const enteredTitle=titleInputref.current.value;
    const enteredImage=imageInputref.current.value;
    const enteredAddress=addressInputref.current.value;
    const enteredDiscription=discriptionInputref.current.value;
    
    const meetupData={
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        discription: enteredDiscription,

    }
    props.OnAddMeetUp(meetupData);

}
    return(
        <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
            <label htmlFor="title"> MeetUps Title </label>
            <input type='text' required id='title' ref={titleInputref}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type='url' required id='image' ref={imageInputref}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type='text' required id='address' ref={addressInputref}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea  required id='description' rows={7} ref={discriptionInputref}/>
        </div>
        <div className={classes.actions}>
            <button>Add MeetUp</button>
        </div>
        </form>
        </Card>

    );
}
export default NewMeetUpForm;