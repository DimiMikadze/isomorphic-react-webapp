import React from 'react';
import { Link } from 'react-router';
import projects from '../utils/projects';

class Project extends React.Component {

    constructor(props) {
        super(props);
        const path = this.props.location.pathname;
        let projectName = path.split('/')[2];
        let project = [];
        projects.map((proj, index) => {
            if(proj.name === projectName) {
                project.push(proj);
            }
        });

        if(project[0] === undefined) {
            window.location = '/work';
        }

        this.p = project[0];

        let projectIndex = projects.indexOf(project[0]);
        let projectCount = projects.length;

        if(projectIndex + 1 !== projectCount) {
            this.next = projects[projectIndex + 1].name;
        } else {
            this.next = projects[0].name;
        }
    }

    render() {

        let images = this.p.images.map((img, index) => {
            return <img src={img.name} key={index} />
        });

        return (
            <div className="project-container">

                <div className="main-image"
                     style={{backgroundImage: 'url(' + this.p.main_image + ')',
                     backgroundSize: 'cover',
                     backgroundPosition: '50%' }}
                >
                </div>

                <Link to="/work">
                    <div className="close-btn">X</div>
                </Link>

                <div className="project-desc">

                    <div className="container">
                        <h1>
                            {this.p.desc} <br /><br />
                            {this.p.job}
                        </h1>

                        <div className="project-images">
                            {images}
                        </div>

                        <div className="project-link">
                            <a href={this.p.url} target="_blank">
                                Visit Website
                            </a>
                        </div>

                        <div className="next-project">
                            <a href={`/project/${this.next}`} >
                                Next Work
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default Project;