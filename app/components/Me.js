import React from 'react';
import { Link } from 'react-router';

class Me extends React.Component {

    render() {
        return (
            <div className="me-container">
                <div className="about-me">
                    <p>I’m digital Designer/Developer from Tbilisi, Georgia. I started designing things when i was 16
                        years old and after two years started coding. past 8 years i collaborated with amazing people around
                        the world to create beautifully-designed, robust solutions. i’m passionate about building high quality
                        applications and user interfaces with modern web technologies.
                        In my free time i enjoy contributing to open source projects.
                    </p>
                </div>

                <div className="go-to-work">
                    <Link to="/work">
                        Work
                    </Link>
                </div>
            </div>
        )
    }

}

export default Me;