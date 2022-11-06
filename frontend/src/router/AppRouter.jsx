import {Route, Routes} from 'react-router-dom';

import { Navbar } from '../navbar/navbar';
import { Users } from '../users/pages/UserPages';
import { Calendar } from '../calendar/pages/CalendarPages';
import { Centers } from '../centers/pages/CenterPage';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/calendar" element={<Calendar />} />
                <Route path="users" element={<Users />} />
                <Route path="centers" element={<Centers />} />
            </Routes>
        </>
    )
}