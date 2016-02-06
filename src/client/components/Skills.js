import React from 'react';
import { Link } from 'react-router';

class Skills extends React.Component {

    render() {
        return (

            <div className="skills-container">

                <div className="welcome-skills">
                    <div className="container col-sm-12 wow fadeIn">
                        <h1>
                            Experienced in building high quality applications, using best practices, test driven development and agile methodology.
                            I'm interested in building quality applications that not just work, but also well designed, easy to maintain and extend in the future.
                        </h1>
                    </div>
                </div>

                <div className="skills-set-container">
                    <div className="container skill-container">

                        <div className="skill-wrapper col-xs-12 wow fadeInUp">
                            <h3>
                                I'm mostly interested in JavaScript applications right now. <br />
                                I spent past years developing Full Stack Javascript apps.
                            </h3>

                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                                <div className="skill">

                                    <div className="title javascript">
                                        <h2>JS</h2>
                                    </div>
                                    <div className="desc">
                                        <ul>
                                            <li>Vanilla JS</li>
                                            <li>React / React Native / Redux / Immutable</li>
                                            <li>Angular JS / Ionic</li>
                                            <li>jQuery</li>
                                            <li>Node JS / Express JS</li>
                                            <li>ES6 / ES7</li>
                                            <li>Isomorphic / Univarsal JS</li>
                                            <li>Restful Web Services</li>
                                            <li>Socket IO</li>
                                            <li>Unit testing with Chai / Mocha</li>
                                            <li>Gulp / Grunt</li>
                                            <li>Webpack / Browserify</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skill-wrapper col-xs-12 wow fadeInUp">
                            <h3>
                                Experience in data modeling and managing large databases.
                            </h3>

                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                                <div className="skill">

                                    <div className="title database">
                                        <img src="/images/skills/db.png" alt="Database"/>
                                    </div>
                                    <div className="desc">
                                        <ul>
                                            <li>MongoDB</li>
                                            <li>MySQL</li>
                                            <li>SQLite</li>
                                            <li>Redis</li>
                                            <li>Firebase</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skill-wrapper col-xs-12 wow fadeInUp">
                            <h3>
                                I'm proficient with Object Oriented PHP <br />
                                and I'm also a Laravel early adopter, I've been using it since version 3.
                            </h3>

                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                                <div className="skill">

                                    <div className="title php">
                                        <h2>PHP</h2>
                                    </div>
                                    <div className="desc">
                                        <ul>
                                            <li>OOP PHP</li>
                                            <li>Laravel</li>
                                            <li>PHPUnit</li>
                                            <li>Restful Web Services</li>
                                            <li>Experience in various Libraries and APIs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skill-wrapper col-xs-12 wow fadeInUp">
                            <h3>
                                Markup, Styles and Design Skills
                            </h3>

                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                                <div className="skill">

                                    <div className="title design">
                                        <img src="/images/skills/design.png" alt="Design"/>
                                    </div>
                                    <div className="desc">
                                        <ul>
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>Sass / Scss</li>
                                            <li>Bootstrap</li>
                                            <li>Sketch</li>
                                            <li>Photoshop</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skill-wrapper col-xs-12 wow fadeInUp">
                            <h3>
                                Hosting Services
                            </h3>

                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                                <div className="skill">

                                    <div className="title hosting">
                                        <img src="/images/skills/cloud.png" alt="Design"/>
                                    </div>
                                    <div className="desc">
                                        <ul>
                                            <li>Digital Ocean</li>
                                            <li>Amazon</li>
                                            <li>Heroku</li>
                                            <li>Github</li>
                                            <li>Bitbucket</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skill-wrapper col-xs-12 wow zoomIn">
                            <div className="go-to-projects">
                                <Link to="/work">
                                    Take a look at my Portfolio
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Skills;