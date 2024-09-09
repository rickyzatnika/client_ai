import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import ChatList from "../../components/chatList/ChatList";
import "./dashboardLayout.css"

const DashboardLayout = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in')
    }

  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className='dashboardLayout'>
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout