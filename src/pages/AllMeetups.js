import React from "react";
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  fetch("https://reactmeetups-3b740-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

    if(isLoading){
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }
  return (
    <div>
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    </div>
  );
}

export default AllMeetupsPage;
