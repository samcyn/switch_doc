var app = {
	scheduleHandler: function(){
	
		$('#calendar').fullCalendar({

			events: [
		        {
		            title  : 'forLoop',
		            start  : '2017-07-01'
		        },
		        {
		            title  : '.Net',
		            start  : '2017-06-05',
		            end    : '2017-06-07'
		        },
		        {
		            title  : 'event3',
		            start  : '2017-05-09T12:30:00',
		            allDay : false 
		        }
		    ],
		    // header: {
		    // 	left: 'prev,next today',
		    // 	center: 'title',
		    // 	right: 'month,agendaWeek,agendaDay'
		    // },
		    //editable: true,
		    //droppable: true,
		    eventClick: function(calEvent, jsEvent, view) {

		        alert('Event: ' + calEvent.title);
		        $(this).css('border-color', 'red');
		    }
		 //    businessHours: [ // specify an array instead
			//     {
			//         dow: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
			//         start: '09:00', // 8am
			//         end: '17:00' // 6pm
			//     },
			//     {
			//         dow: [ 4, 5 ], // Thursday, Friday
			//         start: '09:00', // 10am
			//         end: '16:00' // 4pm
			//     }
			// ]
    	});

	}
}