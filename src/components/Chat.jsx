import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import "./Chat.css";

const Chat = () => {
  const ref = db.collection("chatdb");
  const [chat, setchat] = useState([]);
  const [data,setData] = useState({
      sender:'',
      receiver:'',
      msg:'',
      time:''
  })

  function getchats() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setchat(items);
    });
  }

  const send=(e)=>{
      e.preventDefault();
  }

  useEffect(() => {
    getchats();
  }, []);

  return (
    <>
      <div className="mainchat">
        {console.log(chat)}
        {chat.map((data) => {
          if (data.sender === "tejas@gmail.com") {
            return (
              <div className="chat_wrapper">
                <div id={data.id} key={data.id} className="your_msg">
                  <h2>you</h2>
                  <p>{data.msg}</p>
                  <p>{data.time}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="chat_wrapper">
                <div id={data.id} key={data.id} className="rec_msg">
                  <h2>{data.sender}</h2>
                  <p>{data.msg}</p>
                  <b>{data.time}</b>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="type_msg">
        <input type="text" name="msg" value={data.msg} />
        <button className="send_btn">send</button>
      </div>
    </>
  );
};

export default Chat;
