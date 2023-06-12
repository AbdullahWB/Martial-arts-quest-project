import React, { useState } from 'react';
import AdminNav from './AdminNav';
import InstructorNav from './InstructorNav';
import StudentNav from './StudentNav';
import Sidebar from '../Sidebar';

const DashboardNav = () => {
    const [userRole, setUserRole] = useState('instructor')
    const renderNavigation = () => {
        if (userRole === 'admin') {
            return <AdminNav />;
        } else if (userRole === 'instructor') {
            return <InstructorNav />;
        } else if (userRole === 'student') {
            return <StudentNav />;
        }
        // Handle other cases or show a default navigation if needed
        return null;
    };
    return (
        <>
            {/* {
                <Sidebar renderNavigation={renderNavigation} />
            } */}
            {
                renderNavigation()
            }
        </>
    );
};

export default DashboardNav;