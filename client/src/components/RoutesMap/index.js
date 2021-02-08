import React, { useState } from "react"

function RoutesMap() {

    const GoogleAPI = process.env.REACT_APP_MY_ENV

    function RouteCall() {
        fetch(
            `https://maps.googleapis.com/maps/api/directions/json?
            origin=Boston,MA&destination=Concord,MA
            &departure_time=now
            &key=${GoogleAPI}`
        )
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
        }

        return(
            <div>
                
            </div>
        )
}

export default RoutesMap