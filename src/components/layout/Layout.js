import styles from './Layout.module.css';
import MainNavigationPage from './MainNavigation';
function Layout(props) {
    return ( 
        <div>
            <MainNavigationPage />
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
     );
}

export default Layout;
