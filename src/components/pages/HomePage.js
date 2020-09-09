import React, { Component } from 'react'
import BackImage from '../../images/test.png';
import MyImage from '../../images/my-image.png'
import MyExperience from '../pages/experience/MyExperience';
import ContactMe from './contact/ContactMe';
import './HomePage.css';
import MyEducation from './education/MyEducation';

export default class HomePage extends Component {
    render() {
        return (
            <div className='multiple_image'>
            <marquee loop="1" direction="down" scrollamount="35" behavior="slide"><img className="background_image" src={BackImage} alt=""/></marquee>
                <div className="exp-comp">
                    <div className="exp-headerEducation">------ My Education Background ------</div>
                    <MyEducation />
                    <hr />
                    <div className="exp-header">------ Here Is What I've Done ------</div>
                    <MyExperience />
                    <hr />
                    <div className="exp-header">------ Contact Me ------</div>
                    <img className="my-image" src={MyImage} alt=""/>
                    <ContactMe />
                </div>
            </div>
        )
    }
}
