import React from 'react';
import { Link } from 'react-router';
import { projects } from '../../utils/projects';

class Work extends React.Component {

    render() {

        let work = projects.map((p, index) => {

            return (
                <Link to={`/work/${p.name.replace(/ /g, '-')}`} key={index}>
                    <div className='col-md-4 col-sm-6 col-xs-12 work'>
                        <h3>{p.name}</h3>
                        <p>{p.job}</p>
                        <img src={`${p.main_image}`} alt={`${p.name}`} className="main-image"/>
                        { p.github && <img className="github" src="/images/github_icon.png"/> }
                    </div>
                </Link>
            )
        });

        return (
            <div className="work-container">
                <div className="welcome-work">
                    <div className="container col-sm-12">
                        <h1>Below are a few selected pieces of work</h1>
                    </div>
                </div>

                <div className="work-wrapper">
                    <div className="container">
                        {work}
                    </div>
                </div>
            </div>
        )
    }

}

export default Work;