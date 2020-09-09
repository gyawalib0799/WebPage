import React, { Component } from 'react';
import listOfData from './PastExperience';
import './MyExperience.css'

export default class MyExperience extends Component {
    render() {
        return (
            <div className="container">
            {listOfData.map(res=>{
                return (
                    <div className="row">
                        <div className="exp-company">{res.company}<br />
                            <text className="exp-timeframe">{res.timeFrame}</text>
                        </div>
                        <div className="exp-desc"><text className="exp-title">{res.title}</text><br />{res.des}</div>
                    </div>)
            })}
            </div>
        )
    }
}
