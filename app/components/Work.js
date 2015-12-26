import React from 'react';
import SlickSlider from 'react-slick';
import { Link } from 'react-router';
import projects from '../utils/projects';

class Work extends React.Component {

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            draggable: true
        };

        let images = projects.map((p, index) => {
            return (
                <Link to={`/project/${p.name}`} >
                    <div className="slider-item" key={index}
                         style={{backgroundImage: 'url(../' + p.main_image + ')',
                         backgroundSize: 'cover',
                         backgroundPosition: '50%' }}
                    >
                    </div>
                </Link>
            )
        });

        return (
            <div className="work-container">
                <SlickSlider {...settings}>
                    {images}
                </SlickSlider>
            </div>
        )
    }

}

export default Work;