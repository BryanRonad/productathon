import FullCalendar from "@fullcalendar/react";

import React, { useEffect, useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { db } from "../utils/firebase-config";
import { useAuth } from "../context/AuthContext";
import firebase from "firebase/compat/app";
import { doc, getDoc } from "firebase/firestore";
import { useEvent } from "../context/EventContext";

const Calander = ({ isCounsellor, id, currentuser }) => {
	const { currentUser } = useAuth();
	const { setScheduledEvents } = useEvent();
	const [selected, setSelected] = useState({});
	const [scheduled, setScheduled] = useState({});
	const [availableHours, setAvailableHours] = useState([]);
	const [scheduledHours, setScheduledHours] = useState([]);

	const getSelected = async () => {
		const funcUser = id;
		console.log(funcUser);
		const docRef = doc(db, "hours", funcUser.toString());
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log("Availability data:", docSnap.data().events);
			setAvailableHours(docSnap.data().events);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	};

	const getScheduled = async () => {
		const docRef = doc(db, "schedules", id.toString());
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			setScheduledEvents(docSnap.data().events);
			console.log("Schedule data:", docSnap.data().events);
			setScheduledHours(docSnap.data().events);
		} else {
			// doc.data() will be undefined in this case
			console.log("No shedules");
		}
	};

	useEffect(() => {
		if (currentUser) {
			console.log(currentUser);
		}
	}, [currentUser]);

	useEffect(() => {
		if (selected.start) {
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
		}
		getSelected();
	}, [selected]);

	useEffect(() => {
		if (scheduled.start) {
			const pushSchedule = () => {
				var ref = db.collection("schedules").doc(id.toString());
				let editedSchedule = { ...scheduled, user: currentUser.uid.toString() };
				ref.set(
					{
						events: firebase.firestore.FieldValue.arrayUnion(editedSchedule),
					},
					{ merge: true }
				);
			};

			pushSchedule();
		}
		getScheduled();
	}, [scheduled]);

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
								const arrayRef = db.collection("hours").doc(id.toString());

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
				selectable={isCounsellor || scheduledHours.length === 0}
				unselectAuto={false}
				selectOverlap={false}
				events={availableHours.concat(scheduledHours)}
				select={(info) => {
					if (isCounsellor) {
						setSelected((prev) => ({
							...prev,
							start: info.startStr,
							end: info.endStr,
							display: "background",
						}));
					} else {
						setScheduled({
							start: info.startStr,
							end: info.endStr,
						});
					}
				}}
			/>
		</>
	);
};

export default Calander;
