import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          meetup={meetup}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
