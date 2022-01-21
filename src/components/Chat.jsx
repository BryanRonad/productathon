import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import "./Chat.css";

const Chat = () => {
  const ref = db.collection("chatdb");
  const [chat, setchat] = useState([]);
  const [data, setData] = useState({
    sender: "tejas@gmail.com",
    receiver: "con1@gmail.com",
    msg: "",
    time: "",
  });

  function getchats() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        let temp  = doc.data()
        temp['id'] = doc.id
        items.push(temp);
      });
      setchat(items);
    });
  }

  function Deletechat(e){
      e.preventDefault();
      let id = e.currentTarget.parentElement.id
      ref.doc(id).delete()
  }

  const send = async (e) => {
    e.preventDefault();

    var d = new Date(); 

    data.time = d.toLocaleString();

    await ref.add(data)
  };

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
              <div className="chat_wrapper" key={data.id}>
                <div id={data.id} className="your_msg">
                  <h2>you</h2>
                  <p>{data.msg}</p>
                  <p>{data.time}</p>
                  <button onClick={Deletechat}>X</button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="chat_wrapper" key={data.id}>
                <div id={data.id} className="rec_msg">
                  <h2>{data.sender}</h2>
                  <p>{data.msg}</p>
                  <b>{data.time}</b>
                  <button onClick={Deletechat}>X</button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="type_msg">
        <input
          type="text"
          name="msg"
          value={data.msg}
          onChange={(e) => {
            setData({ ...data, msg: e.currentTarget.value });
          }}
        />
        <button className="send_btn" onClick={send}>
          send
        </button>
      </div>
    </>
  );
};

export default Chat;
