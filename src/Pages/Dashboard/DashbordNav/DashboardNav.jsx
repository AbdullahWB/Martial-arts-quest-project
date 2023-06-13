import React, { useState } from 'react';
import AdminNav from './AdminNav';
import InstructorNav from './InstructorNav';
import StudentNav from './StudentNav';
import Sidebar from '../Sidebar';
import useUserType from '../../../Hook/useUserType';

const DashboardNav = () => {
    const userType = useUserType();

    const renderNavigation = () => {
        if (userType.admin) {
            return <AdminNav />;
        } else if (userType.instructor) {
            return <InstructorNav />;
        } else if (userType.student) {
            return <StudentNav />;
        }
        return null;
    };

    return (
        <>
            {
                renderNavigation()
            }
        </>
    );
};

export default DashboardNav;