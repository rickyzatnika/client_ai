import { Link } from "react-router-dom"
import "./homepage.css"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"


const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState('human1');

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="image" className="orbital" />
      <div className="left">
        <h1>HULENX AI</h1>
        <h2>Tingkatkan Kreativitas dan Inovasi dengan Artificial intelligence</h2>
        <Link to="/sign-in" >Ayo Mulai</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "/bot.png"} alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hello bot',
                2000, () => {
                  setTypingStatus("bot");
                },
                'Hello, what can I help you with?',
                2000, () => {
                  setTypingStatus("human2");
                },
                'I produce food for Guinea Pigs',
                2000, () => {
                  setTypingStatus("bot");
                },
                'oh thats sounds great!',
                2000, () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo_.png" alt="" className="img" />
        <div className="links">
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/privacy-of-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage