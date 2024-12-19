import {Link, useParams } from "react-router-dom";


const About = () => {
    return (
        <>
        <div  class="w-100 h-full pt-4 pl-9" style={{backgroundColor: "#eab8fb"}}>
       
        <h1  >My name is Ben Kershaw...</h1>
        <br />
        <h3>And I am a Creative Coding student in IADT Dun Laoghaire. I will be graduating in the summer of 2026. In my course we have studied a variety of Computing
            concepts such as Full Stack Development, Game Development and Networks, just to name a few. Upon graduating, I am hoping to go into game Development
            as this is the aspect of computer science I am most passionate about. Some of the languages I have been studying include:
             </h3>
<br/>
        <ul>
            <li>-HTML</li>
            <li>-CSS</li>
            <li>-Javascript</li>
            <li>-React</li>
            <li>-P5.js</li>
            <li>-C#</li>
            <li>-PHP</li>
            <li>-Laravel</li>
            <li>-SQL</li>
        </ul>
        <br/>


        <h3> I have also worked with other software such as:</h3>

        <br/>
        <ul>
            <li>-Unity</li>
            <li>-Insomnia</li>
            <li>-Wireshark</li>
            <li>-Docker</li>
            <li>-TablePlus.js</li>
            <li>-Git</li>

        </ul>
        <br/>


                <h3>If you want to know a bit more about what i have been working on, take a look <h3><Link to ={`/about`}><b>here</b>!</Link></h3></h3>
                <br/>

            </div>
        </>
    )
};

export default About;