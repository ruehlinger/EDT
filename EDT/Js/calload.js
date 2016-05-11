$(document).ready(function () {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar').fullCalendar({

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            aspectratio: 1
        },
        selectable: false,
        selectHelper: true,
        select: function (start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        editable: false,





        // add event name to title attribute on mouseover
        // eventMouseover: function(event, jsEvent, view) {
        //  if (view.name !== 'agendaDay') {
        //    $(jsEvent.target).attr('title', event.title);
        //   }
        //   },


        eventClick: function (event) {
            if (event.url) {
                window.open(event.url, "", "width=520, height=345");
                return false;
            }
        },

        eventRender: function (event, element) {
            element.find('.fc-event-title').html(element.find('span.fc-event-title').text())//.append("" + event.description); 
        },






        events: [
            /*
                title: '<strong>All Day Event</strong>',
                description:'This is a Description. This will wrap around the title information... hopefully.',
                start: new Date(y, m, 1)
                
            },
            {
                title: 'Long Event',
                description:'This is a Description',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                description:'This is a Description',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
            id: 999,
                title: 'Repeating Event',
                description:'This is a Description',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            */

            //2014 Federal Holidays
             {
                 title: 'New Years Day',
                 //description: 'This is a Description',
                 start: new Date(y, 0, 1),
                 color: '#00fb0c'

             },
              {
                  title: 'Birthday of Martin Luther King, Jr.',
                  //description: 'This is a Description',
                  start: new Date(y, 0, 20),
                  color: '#00fb0c'


              },
               {
                   title: 'Washingtons Birthday',
                   //description: 'This is a Description',
                   start: new Date(y, 1, 17),
                   color: '#00fb0c'

               },
                {
                    title: 'Memorial Day',
                    //description: 'This is a Description',
                    start: new Date(y, 4, 26),
                    color: '#00fb0c'

                },
                {
                    title: 'Independence Day',
                    //description: 'This is a Description',
                    start: new Date(y, 6, 04),
                    color: '#00fb0c'


                },
                {
                    title: 'Labor Day',
                    //description: 'This is a Description',
                    start: new Date(y, 8, 01),
                    color: '#00fb0c'

                },
                 {
                     title: 'Columbus Day',
                     //description: 'This is a Description',
                     start: new Date(y, 9, 13),
                     color: '#00fb0c'

                 },
                  {
                      title: 'Veterans Day',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 11),
                      color: '#00fb0c'

                  },
                  {
                      title: 'Thanksgiving Day',
                      //description: 'This is a Description',
                      start: new Date(y, 10, 27),
                      color: '#00fb0c'

                  },
                  {
                      title: 'Christmas Day',
                      //description: 'This is a Description',
                      start: new Date(y, 11, 25),
                      color: '#00fb0c'

                  },

                  /*{
                      title: '<strong>Challenge Training: External RVSR IWT Training Begins</strong>',
                      //description: 'This is a Description',
                      start: new Date(y, 8, 2, 00, 00),
                      end: new Date(y, 8, 2, 00, 00),
                      allDay: true,
                      url: '../../Events/Chalenge9_02_14/',
                      color: 'purple'



                  },

                

            {
                title: '<strong>:00-2:30 PM (ET) TMS Administrators Community of Practice Call</strong>',
                //description: 'This is a Description',
                start: new Date(y, 5, 5, 13, 00),
                end: new Date(y, 5, 5, 14, 30),
                allDay: false,
                url: '../../Events/TMSCall/',
                color: 'red'



            },
             


                 
                {
                    title: '<strong>-3:30 PM (ET) OFO/DUSB Call</strong>',
                    // description: 'This is a Description',
                    start: new Date(y, 5, 26, 14, 30),
                    end: new Date(y, 5, 26, 15, 30),
                    allDay: false,
                    color: '#f0ff00',



                },
                 {
                     title: '<strong>:00-12:00 PM (ET) VSCM Conference Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 26, 11, 00),
                     end: new Date(y, 5, 26, 12, 00),
                     allDay: false,
                     color: '#000',
                     url: '../../Events/VSCMCall6_26_14/'

                 },

                  

                 {
                     title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 24, 14, 00),
                     end: new Date(y, 5, 24, 15, 00),
                     allDay: false,
                     color: '#ff00cc',
                     url: '../../Events/TMCall6_24_14/'

                 },
                 {
                     title: '<strong>:00-4:00 PM (ET) TM Summer Learning Event</strong>',
                     // description: 'This is a Description',
                     start: new Date(y, 5, 24, 15, 00),
                     end: new Date(y, 5, 24, 16, 00),
                     allDay: false,
                     color: '#00e4ff',
                     url: '../../Events/TMSummer6_24_14/'

                 },
                

                   {
                       title: '<strong>:00-3:00 PM (ET) Monthly TM Conference Call</strong>',
                       // description: 'This is a Description',
                       start: new Date(y, 9, 28, 14, 00),
                       end: new Date(y, 9, 28, 15, 00),
                       allDay: false,
                       color: '#ff00cc',
                       url: '../../Events/TMCall10_28_14/'


                   },*/
                  

        ],



    });



});