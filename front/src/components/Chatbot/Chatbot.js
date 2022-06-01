import {useState} from 'react'
import "./chatbot.css"


export default function ChatBot() {

  const [Message, setMessage] = useState("")
  const [Messages, setMessages] = useState([])
  const element = document.getElementById("content");

  function scrollToTop() {
    element.scrollIntoView(true);
  }
  
  function scrollToBottom() {
    element.scrollIntoView(false);
  }
  
  let hide = {
    display:'none'
  }
  let show = {
    display:'block'
  }
  const [chatopen, setchatopen] = useState(false);
  const toggle = e =>{ setchatopen(!chatopen) }

   function onSendButton() {

    let msg1 = { name: "User", message: Message }
        setMessages(p => p.length > 0 ? [...p , msg1] : [msg1])

        console.log('msg1',msg1)
        fetch('http://localhost:3000/predict', {
          method: 'POST',
          body: JSON.stringify({ message: msg1.message }),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(r => r.json()).then(r => {
          let msg2 = { name: "SolveBot", message:  r.answer };
          setMessages( p => [...p , msg2]);
          setMessage("")
        
      }).catch((error) => {
        console.error('Error:', error);
        setMessage("")
      });
  }
  return (
    <div>
    <div className="container">
    <div className="chatbox ">
        <div className="chatbox__support chatbox--active" style = {chatopen ? show:hide}>
            <div className="chatbox__header">
                <div className="chatbox__image--header">
                    <img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/64/000000/external-message-chat-messages-kosonicon-lineal-color-kosonicon-18.png" alt="image" />
                </div>
                <div className="chatbox__content--header">
                    <h4 className="chatbox__heading--header">Chat support</h4>
                    <p className="chatbox__description--header">Hi. My name is SolveBot. How can I help you?</p>
                </div>
            </div>
            <div className="chatbox__messages" id="content">
                <div>
                    {
                      Messages.map(message => <p className={`${message.name === "SolveBot" ? "messages__item messages__item--visitor" 
                      : "messages__item messages__item--operator"
                    }`} key={message.name} >{message.message}</p>)
                    }
                </div>
            </div>
            <div className="chatbox__footer">
                <input value={Message}  onChange={({target})=> setMessage(target.value)} type="text" placeholder="Write a message..." />
                <button  onClick={() => onSendButton()} className="chatbox__send--footer send__button">Send</button>
            </div>
        </div>
        <div className="chatbox__button">
            <button onClick={toggle}><img onClick={toggle} src="https://img.icons8.com/nolan/64/bot.png" alt="image" />
            </button>
        </div>
    </div>
   </div>
  </div>
  )
}