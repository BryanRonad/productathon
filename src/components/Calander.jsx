import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calander = () => {
	return (
		<>
			<FullCalendar
				height="80vh"
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				weekends={false}
				events={[
					{ title: "appointment 1", date: "2022-01-21" },
					{ title: "event 2", date: "2022-01-21" },
				]}
			/>
		</>
	);
};

export default Calander;
