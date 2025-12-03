import React, { Component } from 'react';
import '../experience/MyExperience.css'

export default class MyEducation extends Component {
    render() {
        const listOfData=[
            {
                university: 'University of the Cumberlands',
                timeFrame: 'Dec 2020 - May 2023',
                major: 'Master  of Science in Information  Technology',
                des: `MSIT allowed me to further  enhance my skills and knowledge.
                I was able to focus on both technical expertise and strategic decision-making process.
                This degree helped in career growth and was of industry relevance.`
            },
            {
                university: 'University of Missouri-Kansas City',
                timeFrame: 'Jan 2015 - May 2018',
                major: 'Electrical and Computer Engineer',
                des: `UMKC provided me with diverse opportunity. I am greatful for these years.
                At UMKC, I have challenged myself, pushed myself to borden my horizon.
                UMKC taught me to get out of my comfort zone. It taught me importance of learning new ideas/technologies.
                Experience with tutoring taught me leadership quality. It also taught and inspired me to work on technologies.`
            }
            
        ]
        return (
            <div className="container-education">
            {listOfData.map(res=>{
                return (
                    <div className="row">
                        <div className="exp-company">{res.university}<br />
                            <text className="exp-timeframe">{res.timeFrame}</text>
                        </div>
                        <div className="exp-desc"><text className="exp-title">{res.major}</text><br />{res.des}</div>
                    </div>)
            })}
            </div>
        )
    }
}
