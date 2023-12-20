import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation(){
   return ( <header className={classes.header}>
            <div className={classes.title}>React MeetUps</div>
            <nav>
                <ul className={classes.options}>
                    <li>
                    <Link to='/'>All MeetUps</Link>
                    </li>
                    <li>
                    <Link to='/favourites'>Favourites</Link>
                    </li>
                    <li>
                    <Link to='/newmeetup'>New MeetUps</Link>
                    </li>
                </ul>
            </nav>
        </header>
   );
    
}
export default MainNavigation;