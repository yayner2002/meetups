import React from 'react';
import styles from './MeetupItem.module.css';

function MeetupItem(props) {
    const { image, address, description, title } = props.meetup;
    return ( 
        <li className={styles.item}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={styles.actions}>
                <button>To Favorite</button>
            </div>
        </li>
     );
}

export default MeetupItem;