import React from 'react';
import SlickSlider from 'react-slick';
import { Link } from 'react-router';

class Slider extends React.Component {

    render() {

        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            draggable: true
        };

        return (
            <SlickSlider {...settings}>

                <div className="slider-item">
                    <Link to="/project/magelani">
                        <img src="../images/work/magelani.jpg" alt="Timberland Project" />
                    </Link>
                </div>

                <div className="slider-item">
                    <Link to="/project/citydubai">
                        <img src="../images/work/citydubai.jpg" alt="Citydubai Project" />
                    </Link>
                </div>

                <div className="slider-item">
                    <Link to="/project/cherrytea">
                        <img src="../images/work/cherrytea.jpg" alt="Cherrytea Project" />
                    </Link>
                </div>

                <div className="slider-item">
                    <Link to="/project/eloan">
                        <img src="../images/work/eloan.jpg" alt="Eloan Project" />
                    </Link>
                </div>

                <div className="slider-item">
                    <Link to="/project/upme">
                        <img src="../images/work/upme.jpg" alt="Upme Project" />
                    </Link>
                </div>

                <div className="slider-item">
                    <Link to="/project/tbilisee">
                        <img src="../images/work/tbilisee.jpg" alt="Tbilisee Project" />
                    </Link>
                </div>

            </SlickSlider>
        )
    }
}

export default Slider;