import classes from './Layouts.module.css';
import MainNavigation from './MainNavigation';
function Layouts(props){

return( <div>
<MainNavigation/>
<main className={classes.layout}>
    {props.children}
   </main>
   </div>
);


}
export default Layouts;