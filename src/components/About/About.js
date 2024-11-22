import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.primary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.secondary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.secondary}}></div>
              <div className="style-line" style={{backgroundColor: theme.secondary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.secondary}}>{aboutData.title}</h2>
                    <p style={{color:theme.secondary}}>
                        {aboutData.description1}
                        <br/>
                        <br/>
                        {aboutData.description2}
                        <br/>
                        <br/>
                        {aboutData.description3}
                        <br/>
                        <br/>
                        {aboutData.description4}
                    </p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                        // src="src/assets/png/BCF2DE7D-AC8B-4B56-B714-5ED11CD38DFD.JPG"
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
