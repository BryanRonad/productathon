import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import { useAuth } from "../context/AuthContext";
import { Button, Container } from "@chakra-ui/react";
// import { AiFillDelete } from 'react-icons/fa';
import "./Chat.css";

const Chat = () => {
  const { currentUser } = useAuth();
  const ref = db.collection("messages");
  const ref1 = db.collection("sessions");
  const [chat, setchat] = useState([]);
  const [curSession,setcurSession] = useState("")

  const [data, setData] = useState({
    sender: "",
    receiver: "con1@gmail.com",
    msg: "",
    time: "",
    session:""
  });

  const [fsession,setfsession] = useState(false)
  const [session, setSession] = useState({
    cid: "",
    time: "",
    uid: "",
  });

  function getchats() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        if (currentUser) {
          if (
            doc.data().sender === currentUser.email ||
            doc.data().receiver === currentUser.email
          ) {
            let temp = doc.data();
            temp["id"] = doc.id;
            items.push(temp);
          }
        }
      });
      setchat(items);
    });
  }

  function Deletechat(e) {
    e.preventDefault();
    let id = e.currentTarget.parentElement.id;
    ref.doc(id).delete();
  }

  const send = async (e) => {
    e.preventDefault();

    var d = new Date();

    data.time = d.toLocaleString();
    data.sender = currentUser.email;
    data.session = curSession;

    await ref.add(data);
    setData({
      sender: "",
      receiver: "con1@gmail.com",
      msg: "",
      time: "",
      session:curSession
    });
  };

  const Addsession=(e)=>{
    e.preventDefault();

    var d = new Date();

    session.time = d.toLocaleString();
    session.uid = currentUser.email;

    ref1.add(session).then(function(docRef) {
        setcurSession(docRef.id)
        setfsession(true)
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  useEffect(() => {
    getchats();
  }, [currentUser]);

  return (
    <>
      <div className="center">
        { fsession ? (
          <Container>
            <div className="header">Counsellor name</div>
            <div className="mainchat">
              {chat.map((data) => {
                if (currentUser) {
                  if (data.sender === currentUser.email) {
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
                }
              })}
            </div>
            <div className="type_msg">
              <input
                type="text"
                name="msg"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    send(e);
                  }
                }}
                value={data.msg}
                onChange={(e) => {
                  setData({ ...data, msg: e.currentTarget.value });
                }}
              />
              <Button
                colorScheme="teal"
                variant="solid"
              >
                send
              </Button>
            </div>
          </Container>
        ) : (
          <div className="main_wrapper">
            <Button colorScheme="blue" onClick={Addsession}>Start Session</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
