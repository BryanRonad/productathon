import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import { useAuth } from "../context/AuthContext";
import { Button, Container } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./Chat.css";

const Chat = () => {
  const { currentUser } = useAuth();
  const ref = db.collection("messages");
  const ref1 = db.collection("sessions");
  const [chat, setchat] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const session_id = searchParams.get("id");
  const [curSession, setcurSession] = useState(session_id);

  const [data, setData] = useState({
    sender: "",
    receiver: "",
    msg: "",
    time: "",
    session: "",
  });

  function getchats() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        if (currentUser) {
          if (doc.data().session === session_id) {
            let temp = doc.data();
            temp["id"] = doc.id;
            items.push(temp);
          }
        }
      });
      setchat(items);
    });
  }

  ref1
    .doc(session_id)
    .get()
    .then((res) => {
      if (currentUser) {
        if (res.data()) {
          if (res.data().uid === currentUser.email) {
            setReceiver(res.data().cname);
          } else {
            setReceiver(res.data().uname);
          }
        } else {
          window.location.replace("/");
        }
      }
    });

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
      session: curSession,
    });
  };

  useEffect(() => {
    getchats();
  }, [currentUser]);

  const endsession = (e) => {
    e.preventDefault();
    chat.forEach((value) => {
      ref.doc(value.id).delete();
    });
    ref1.doc(session_id).delete();
    window.location.replace("/");
  };

  return (
    <>
      <div className="center">
        <Container>
          <div className="header">
            {receiver}{" "}
            <Button colorScheme="red" onClick={endsession}>
              End Session
            </Button>
          </div>
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
                        <button onClick={Deletechat}>
                          <AiFillDelete />
                        </button>
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
                        <button onClick={Deletechat}>
                          <AiFillDelete />
                        </button>
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
              placeholder="Type msg here..."
              value={data.msg}
              onChange={(e) => {
                setData({ ...data, msg: e.currentTarget.value });
              }}
            />
            <Button colorScheme="green" variant="solid">
              send
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Chat;
