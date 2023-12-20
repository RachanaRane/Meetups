import MeetUpsList from "../components/MeetUps/MeetUpsList";
import { useState,useEffect } from "react";

function AllMeetUps(){
  const [isloading,setisloading]=useState(true);
  const [loadedMeetUps,setLoadedMeetUps]=useState([]);
  useEffect(()=>{
    setisloading(true);
  fetch(
    'https://react-meetups-5e92f-default-rtdb.firebaseio.com/meetups.json'
  )
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    const meetups=[];
    for (const key in data){
      const meetup={
        id:key,
        ...data[key]

      };
      meetups.push(meetup);
    }
       setisloading(false);
       setLoadedMeetUps(meetups);
  });

},[]);
  if (isloading){
    return(
      <section>
        <p>Loading....</p>
      </section>
    )
  }

 
    return(
        <section>
          <h1>All MeetUps</h1>
       <MeetUpsList meetups={ loadedMeetUps }/>
       </section>
    );
  
}
export default AllMeetUps;