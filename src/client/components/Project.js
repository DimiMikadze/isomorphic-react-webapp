import React from 'react';
import { Link } from 'react-router';
import { projects } from '../../utils/projects';

class Project extends React.Component {

    constructor(props) {
        super(props);
        const path = this.props.location.pathname;
        let projectName = path.split('/')[2].replace(/-/g, ' ');
        let project = [];
        projects.map((proj, index) => {
            if (proj.name === projectName) {
                project.push(proj);
            }
        });

        if (project[0] === undefined) {
            window.location = '/work';
        }

        this.p = project[0];

        let projectIndex = projects.indexOf(project[0]);
        let projectCount = projects.length;

        if (projectIndex + 1 !== projectCount) {
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

                <Link to="/work">
                    <div className="close-btn">X</div>
                </Link>

                <div className="project-desc" id="project-desc">

                    <div className="container">

                        <h1>{this.p.name}</h1>
                        <h3>{this.p.job}</h3>
                        <p>{this.p.desc}</p>

                        <div className="project-images">
                            {images}
                        </div>

                        <div className="project-link">
                            <p><a href={this.p.url} target="_blank">
                                Visit Website
                            </a></p>
                            { this.p.github && <p><a href={this.p.github} target='_blank'>Fork me on Github</a></p> }
                        </div>

                        <div className="next-project">
                            <a href={`/work/${this.next.replace(/ /g, '-')}`} >
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