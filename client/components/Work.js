import React from 'react';
import SlickSlider from 'react-slick';
import { Link } from 'react-router';
import projects from '../utils/projects';

class Work extends React.Component {

    orderRandom(array) {

        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            draggable: true
        };

        let randomProjects = this.orderRandom(projects);

        let images = randomProjects.map((p, index) => {
            return (
                <Link to={`/project/${p.name}`} key={index}>
                    <div className="slider-item"
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