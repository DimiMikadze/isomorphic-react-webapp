import React from 'react';
import { Link } from 'react-router';
import { projects } from '../../utils/projects';

class Project extends React.Component {

    constructor(props) {
        super(props);
        const path = this.props.location.pathname;
        const initialPage = this.props.location.query.f;

        let projectName = path.split('/')[2].replace(/-/g, ' ');
        let project = [];
        projects.map((proj, index) => {
            if (proj.name === projectName) {
                project.push(proj);
            }
        });

        this.initialQuery = initialPage;
        this.initialUrl = (initialPage === 'work') ? '/work' : '/';

        this.p = project[0];

        let projectIndex = projects.indexOf(project[0]);
        let projectCount = projects.length;

        this.next = (projectIndex + 1 !== projectCount) ? projects[projectIndex + 1].name : projects[0].name;
    }

    render() {

        let images = this.p.images.map((img, index) => {
            return <img src={img.name} key={index} />
        });

        return (
            <div className="project-container">

                <Link to={this.initialUrl}>
                    <div className="close-btn">X</div>
                </Link>

                <div className="project-desc" style={{backgroundColor: this.p.backgroundColor}}>

                    <div className="container">

                        <h1>{this.p.name}</h1>

                        <div className="service">
                            <p className="heading">Service</p>
                            <h3 className="text">{this.p.job}</h3>
                        </div>

                        <div className="about-project">
                            <p className="heading">About Project</p>
                            <p className="text">{this.p.desc}</p>
                        </div>

                        <div className="project-images">
                            {images}
                        </div>

                        <div className="project-link">
                            { this.p.url && <p><a href={this.p.url} target='_blank'>View Project</a></p> }
                            { this.p.github && <p><a href={this.p.github} target='_blank'>Fork me on Github</a></p> }
                        </div>

                        <div className="next-project">
                            <a href={`/work/${this.next.replace(/ /g, '-')}/?f=${this.initialQuery}`} >
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