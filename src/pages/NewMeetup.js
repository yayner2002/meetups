import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const handleMeetUpData = (meetUpData) => {
    
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm sendMeetUp={handleMeetUpData} />
    </section>
  );
}

export default NewMeetupPage;
