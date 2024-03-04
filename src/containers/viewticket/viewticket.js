import React, { useDebugValue, useEffect, useState } from 'react';
import '../../App.css';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';



function Viewticket(){
    // const [ticketDetails , setTicketDetails] = React.useState({});
    const location = useLocation();
    const [ticketDetails,setTicketDetails] =useState({}) ;
    useEffect (()=>{
        console.log(location.state,"props to viewTicket");
        setTicketDetails ( location.state);

    },[]);
return(
    <>
    {console.log("ticketDetails",ticketDetails)}
    <Typography>
        Hiii
    </Typography>
    <Typography>
        GivenName : {ticketDetails?.data?.Name}
    </Typography>
    <Typography>
      {/* Email : {ticketDetails?.Email} */}
    </Typography>
    <Typography>
      {/* SurName : {ticketDetails?.SurName} */}
    </Typography>
    <Typography>
    {/* GivenName : {ticketDetails?.GivenName} */}
    </Typography>
    <Typography>
    {/* Age : {ticketDetails?.Age} */}
    </Typography>
    </>
);
}

export default Viewticket;