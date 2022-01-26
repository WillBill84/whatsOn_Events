import React from "react";

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=AU&sort=date,asc&apikey=EMZOAA3KlATktn9bwYV8aKh7yFnEm92G';
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