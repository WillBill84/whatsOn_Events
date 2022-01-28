import React, { Component } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


class SingleEvent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    };

    
    componentDidMount() {

        const id = window.location.pathname;

        this.setState({ isLoading: true })
        fetch(`https://app.ticketmaster.com/discovery/v2/events${id}.json?apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    isLoading: false,
                    data: response,
                    
                })
                console.log(this.state.data);
    
            })
            
    }

    render () {
        /* needed to handel rendering before api data loads */
        const { isLoading, data } = this.state;
        if (isLoading) {
            return null;
        }
        const mapStyles = {        
            height: "50vh",
            width: "100%"};
          
          const defaultCenter = {
            lat: parseFloat(this.state.data._embedded.venues[0].location.latitude), 
            lng: parseFloat(this.state.data._embedded.venues[0].location.longitude)
          }
          
        console.log(defaultCenter);
     

    return (
        <>
        <div className="panelBody">
            
            <div className="PanelHeader"><h3>{this.state.data.name}</h3></div>
                    
                    <div className="eventCards SingleCards">
                    {/* <img src={this.state.data.images[0].url} alt="Event Promotion" className="singleEventImg"></img> */}
                    <div className="eventDetails">
                    <h4>Address:</h4>
                    <p>{this.state.data._embedded.venues[0].name}</p>
                    <p>{this.state.data._embedded.venues[0].address.line1}, {this.state.data._embedded.venues[0].city.name} {this.state.data._embedded.venues[0].state.stateCode} {this.state.data._embedded.venues[0].postalCode}</p>
                    </div>
                    <div className="GoogleMap" id='GoogleMap'>
                    
                    <LoadScript
                    googleMapsApiKey='AIzaSyDFTYIb70WN-r8Es498i7LQwirHLLKIuk4'>
                    <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter}>
            
                    <Marker position={defaultCenter}/>

                    </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            
        </div>

        </>

    )
           };
};



export default SingleEvent;