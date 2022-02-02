import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Events from '../components/Events';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';



function Home() {

    const [ startDate, setStartDate ] = useState(new Date());

    const handleDateChange = (startDate) => {

        setStartDate(startDate);
       
      };

      let formatedDate = startDate.toJSON();
      console.log(formatedDate);
 
      
    return (
        <>
        <header>
            <div className="input-container">
            <DatePicker className="datePicker"
                selected={startDate}
                onChange={handleDateChange}
                showDayMonthYearPicker
                dateFormat="dd/MM/yyyy"
            />
            </div>
        </header>
        
        <Events/>

        </>

    )
}



export default Home;