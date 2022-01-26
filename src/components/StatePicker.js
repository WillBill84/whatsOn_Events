import React from "react";



function StatePicker() {
        
    return (

    <div className="dropdown">

        <select className="button" /* onchange="fetchTicketMasterData()" */ id="dropDowncontainer">
          <option>ACT</option>
          <option>NT</option>
          <option>NSW</option>
          <option>QLD</option>
          <option>SA</option>
          <option>TAS</option>
          <option>VIC</option>
          <option>WA</option>
        </select>
      </div>
    );
  
  }
  
  export default StatePicker;
  

