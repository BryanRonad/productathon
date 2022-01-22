import FullCalendar from "@fullcalendar/react";

import React, { useEffect, useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { db } from "../utils/firebase-config";
import { useAuth } from "../context/AuthContext";
import firebase from "firebase/compat/app";
import { doc, getDoc } from "firebase/firestore";

const Calander = ({ isCounsellor, id }) => {
  const [selected, setSelected] = useState({});
  const [availableHours, setAvailableHours] = useState([]);
  const { currentUser } = useAuth();

  const getSelected = async () => {
    const funcUser = id;
    console.log(funcUser);
    const docRef = doc(db, "hours", funcUser.toString());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().events);
      setAvailableHours(docSnap.data().events);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    const pushTimeline = () => {
      var ref = db.collection("hours").doc(id.toString());

      ref.set(
        {
          events: firebase.firestore.FieldValue.arrayUnion(selected),
        },
        { merge: true }
      );
    };

    pushTimeline();
    getSelected();
  }, [selected]);

  useEffect(() => {
    console.log(availableHours);
  }, [availableHours]);

  return (
    <>
      <FullCalendar
        height="80vh"
        plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
        customButtons={
          isCounsellor && {
            clearButton: {
              text: "Clear",
              click: async () => {
                const arrayRef = db
                  .collection("hours")
                  .doc(currentUser.uid.toString());

                await arrayRef.update({
                  events: firebase.firestore.FieldValue.delete(),
                });

                setAvailableHours([]);
              },
            },
          }
        }
        headerToolbar={
          isCounsellor
            ? {
                left: "prev,next clearButton",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }
            : {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }
        }
        initialView="timeGridWeek"
        weekends={false}
        selectable={isCounsellor}
        unselectAuto={false}
        selectOverlap={false}
        events={availableHours}
        select={(info) => {
          setSelected((prev) => ({
            ...prev,
            start: info.startStr,
            end: info.endStr,
            display: "background",
          }));
        }}
      />
    </>
  );
};

export default Calander;
