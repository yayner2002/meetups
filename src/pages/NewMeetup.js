import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const handleMeetUpData = (meetUpData) => {
    fetch("https://reactmeetups-3b740-default-rtdb.firebaseio.com/meetups.json", {
      method: 'POST',
      body: JSON.stringify(meetUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm sendMeetUp={handleMeetUpData} />
    </section>
  );
}

export default NewMeetupPage;
