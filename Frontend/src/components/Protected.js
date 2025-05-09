import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Protected() {
    const navigate = useNavigate();
    
    useEffect(() => {
        try {
            const user = localStorage.getItem("user");
            const userData = JSON.parse(user); // Attempt to parse the user data

            if (!(userData && userData.userType === "Admin")) {
                navigate('/');
            }
        } catch (error) {
            console.error("Failed to parse user data", error);
            navigate('/');
        }
    }, [navigate]);

    // Render the Outlet to display child routes when user is authenticated as admin
    return <Outlet />; 
}

export default Protected;
