import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

function MainNavigationPage() {
    return ( 
        <header className={}>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/newmeetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorite'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default MainNavigationPage;