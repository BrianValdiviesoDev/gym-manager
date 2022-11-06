import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="calendar">Calendario</Link>
            <Link to="users">Users</Link>
            <Link to="centers">Centers</Link>
            <Link to="trainers">Trainers</Link>
        </nav>
    )
}