import React from 'react';
import { Link } from 'react-router';
import { projects } from '../../utils/projects';

class Work extends React.Component {

    render() {
        let work = projects.map((p, index) => {

            return (
                <Link to={`/work/${p.name.replace(/ /g, '-')}/?f=work`} key={index}>
                    <div className='col-md-4 col-sm-6 col-xs-12 work wow fadeInUp' data-wow-delay={p.delay}>
                        <h3>{p.name}</h3>
                        <p>{p.job}</p>
                        <img src={`${p.main_image}`} alt={`${p.name}`} className="main-image"/>
                        { p.github && <img className="github" src="/images/github_icon.png" alt="github"/> }
                    </div>
                </Link>
            )
        });

        return (
            <div className="work-container">

                <div className="welcome-work">
                    <div className="container col-sm-12 wow fadeIn">
                        <h1>Work</h1>
                    </div>
                </div>

                <div className="work-wrapper">
                    <div className="container">

                        <h2 className="wow fadeInUp">Below are a few selected pieces of work</h2>

                        {work}
                        <a href="mailto:dimitrimikadze@gmail.co?subject=I want awesome app">
                            <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="your-project">
                                    <h3>Your Project Next</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        )
    }

}

export default Work;