import React, { useState } from "react";
import moment from 'moment';

const newDate = moment().format("YYYY-MM-DDTHH:mm:ss") + "Z";



const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=AU&sort=date,asc&startDateTime=${newDate}&apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`;
console.log(BASE_URL);

 class Events extends React.Component {    

    state = {
        data: []
        
    }

    componentDidMount() {
        
        fetch(BASE_URL)
        .then (res => res.json())
        .then(events => {
          
            /* this.setState({events}); */
            const data = events._embedded.events
            console.log(data);
              this.setState({data});
        })
        .catch((error) => {
            console.error(error);
          });
    }
    

    render () {
        
        
        return (
            <>

            <div className="panelBody">
                {/* <div className="PanelHeader">Whats On</div> */}
                    {this.state.data.map(event => (
                    <div className="eventCards" key={event.id}>
                    <img src={event.images[0].url} alt="Event Promotion" className="eventImg"></img>
                   
                    <div className="eventDetails">
                    <h3>{event.name}</h3>
                    <p>{event._embedded.venues[0].name}</p>
                    <p>{event.dates.start.localDate}</p>
                    <a href={event.id} className="button">View More</a>
                    </div>

                    {/* <p>{event._embedded.venues[0].address.line1}, {event._embedded.venues[0].city.name} {event._embedded.venues[0].state.stateCode} {event._embedded.venues[0].postalCode}</p> */}
                    
                    </div>
                ))}
            
            </div>
            </>
        )
    }
   

};

export default Events;