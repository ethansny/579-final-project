import React from "react";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const WeatherData = ({maxTemp, minTemp, showers, snowfall}) => {

    return (
        <div>

            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="p-2 bd-highlight d-flex flex-row">
                    <h5>Max Temp</h5>
                    <div className="p-2 bd-highlight d-flex flex-row">{maxTemp.map((temp, index) => <div className="p-2 bd-highlight" key={index}>{temp}</div>)}</div>
                </div>
            `   <div className="p-2 bd-highlight d-flex flex-row">
                    <h5>Min Temp</h5>
                    <div className="p-2 bd-highlight d-flex flex-row">{minTemp.map((temp, index) => <div className="p-2 bd-highlight" key={index}>{temp}</div>)}</div>
                </div>
                <div className="p-2 bd-highlight d-flex flex-row">
                    <h5>Showers</h5>
                    <div className="p-2 bd-highlight d-flex flex-row">{showers.map((temp, index) => <div className="p-2 bd-highlight" key={index}>{temp}</div>)}</div>
                </div>
                <div className="p-2 bd-highlight d-flex flex-row">
                    <h5>Snowfall</h5>
                    <div className="p-2 bd-highlight d-flex flex-row">{snowfall.map((temp, index) => <div className="p-2 bd-highlight" key={index}>{temp}</div>)}</div>
                </div>

            </div>
        </div>
    )
}

export default WeatherData;