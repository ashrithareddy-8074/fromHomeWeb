import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';

let user = null;

const Navigation = () => {
    return (
        <div>
            <h1>Navigation bar</h1>
            {
                !user ? (<Link to='/auth'>SignIn</Link>) : (<Link>SignOut</Link>)
            }
            
            <Outlet/>
        </div>
    )
}

export default Navigation;