import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import styles from "./NewMeetup.module.css";

function NewMeetupPage() {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}

export default NewMeetupPage;
