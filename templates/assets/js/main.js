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
			eventColor: '#FECB3F',
			eventTextColor: '#FFFFFF',
		    // header: {
		    // 	left: 'prev,next today',
		    // 	center: 'title',
		    // 	right: 'month,agendaWeek,agendaDay'
		    // },
		    //editable: true,
		    //droppable: true,
		    eventClick: function(calEvent, jsEvent, view) {

		        alert('Event: ' + calEvent.title);
		        //$(this).css('border-color', 'red');
		    },
			loading: function(isloading, view){
				console.log(isloading);
			}
    	});

	}
}