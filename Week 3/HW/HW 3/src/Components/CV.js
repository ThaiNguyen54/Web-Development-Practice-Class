import React, {Component}  from "react";
export default class CV extends Component {
    render() {
        return(
            <div>
                <div id="profile" className="profile">
                    <h1 style={{color: "green"}}>
                        <bold>Profile</bold>
                    </h1>
                    <p>I'm a UIT student</p>
                    <hr/>
                        <div className="about-me">
                            <h3 style={{color: "green"}}>About Me</h3>
                            <p>I am studying at UIT.</p>
                        </div>

                        <div className="avatar">
                            <img SRC="avatar.jpg" width="250" height="200"/><p></p>
                        </div>


                        <div className="detail">
                            <h3 style={{color: "green"}}>Details</h3>
                            <p><b>Name: </b> Nguyen Thai</p>
                            <p><b>Job: </b> Student</p>
                            <p><b>Major: </b> Information System</p>
                        </div>
                </div>

                <hr/>

                    <div id="experiences" className="experiences">
                        <h1 style={{color: "green"}}>Experiences</h1>

                        <div className="education">
                            <h3 style={{color: "green"}}>Educations</h3>

                            <div className="edu-time">
                                <h4><b>UIT</b></h4>
                                <p>2019-2023</p>
                            </div>

                            <div className="edu-details">
                                <h4><p>Information System</p></h4>
                                <p>This field concentrates on designing an IT system</p>
                            </div>
                        </div>

                        <div className="working-experiences">
                            <h3 style={{color: "green"}}>Working Experiences</h3>

                            <div className="work-time">
                                <h4><p>UIT | Student</p></h4>
                                <p>2019 - current</p>
                            </div>

                            <div className="work-details">
                                <h4><p>UIT</p></h4>
                                <p>I am a UIT student</p>
                            </div>
                        </div>
                    </div>


                    <hr/>

                        <div id="abilities" className="abilities">
                            <h1 style={{color: "green"}}>Abilities</h1>
                            <div className="skills">
                                <h2 style={{color: "green"}}>Skills</h2>
                                <div className="skills-1">
                                    <table>
                                        <tr>
                                            <td><b>SQL</b></td>
                                            <td>&#11088 &#11088 &#11088 &#11088</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="skills-2">
                                    <table>
                                        <tr>
                                            <td><b>Python</b></td>
                                            <td>&#11088 &#11088 &#11088 </td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="project-but">
                                    <input type="button" value="My projects"
                                           onClick="window.open('https://github.com/ThaiNguyen54')"/>
                                </div>

                            </div>


                            <div className="Languages">
                                <h2 style="color: green">Languages</h2>
                                <div className="languages-1">
                                    <table>
                                        <tr>
                                            <td><b>Vietnamese</b></td>
                                            <td>&#11088 &#11088 &#11088 &#11088 &#11088</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="languages-2">
                                    <table>
                                        <tr>
                                            <td><b>English</b></td>
                                            <td>&#11088 &#11088 &#11088</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
            </div>
            </div>
        )
    }
}

