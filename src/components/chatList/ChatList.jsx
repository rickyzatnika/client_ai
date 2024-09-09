import { Link } from "react-router-dom"
import "./chatList.css"

import { useQuery } from '@tanstack/react-query'


const ChatList = () => {



  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });



  return (
    <div className='chatList'>
      <span className="title">Dashboard</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Hulenx AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">Recents Chats</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : !data
            ? "No Conversation"
            : error
              ? "Something went wrong!"
              : data?.map((chat) => (

                <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                  {chat.title}
                </Link>


              ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo_.png" alt="" />
        <div className="texts">
          <span>Upgrade ke Hulenx AI PRO</span>
          <span>Akses Unlimited Ke semua fitur</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList