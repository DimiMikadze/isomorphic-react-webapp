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
                        <img src="../images/work/timberland.jpg" alt="Timberland Project" />
                    </Link>

                    <div className="caption">
                        Timberland and Northface store in tbilisi <br />
                        Website Design and Creation
                        <br />
                        <a href="http://188.166.2.188/" target="_blank">
                            Visit Website
                        </a>
                    </div>
                </div>

                <div className="slider-item">

                    <Link to="/project/citydubai">
                        <img src="../images/work/citydubai.jpg" alt="Citydubai Project" />
                    </Link>

                    <div className="caption">
                        A comprehensive virtual city guide for Dubai<br />
                        Website Creation
                        <br />
                        <a href="http://citydubai.com" target="_blank">
                            Visit Website
                        </a>
                    </div>
                </div>

                <div className="slider-item">

                    <Link to="/project/cherrytea">
                        <img src="../images/work/cherrytea.jpg" alt="Cherrytea Project" />
                    </Link>

                    <div className="caption">
                        A loyalty card that gives you a possibility to donate to your selected beneficier everyday
                        <br />
                        Landing Page Design and Website Creation
                        <br />
                        <a href="https://cherrytea.ge" target="_blank">
                            Visit Website
                        </a>
                    </div>
                </div>

                <div className="slider-item">

                    <Link to="/project/eloan">
                        <img src="../images/work/eloan.jpg" alt="Eloan Project" />
                    </Link>

                        <div className="caption">
                            Georgian leader company in non-banking loans.
                            <br />
                            Website Creation
                            <br />
                            <a href="https://eloan.ge" target="_blank">
                                Visit Website
                            </a>
                        </div>
                </div>

                <div className="slider-item">

                    <Link to="/project/upme">
                        <img src="../images/work/upme.jpg" alt="Upme Project" />
                    </Link>

                        <div className="caption">
                            Web and Mobile development company
                            <br />
                            Website Design and Creation
                            <br />
                            <a href="http://upmelab.com" target="_blank">
                                Visit Website
                            </a>
                        </div>
                </div>

                <div className="slider-item">

                    <Link to="/project/tbilisee">
                        <img src="../images/work/tbilisee.jpg" alt="Tbilisee Project" />
                    </Link>

                        <div className="caption">
                            Easiest Way To Find Events, Restaurants, Cafe Bars, Movies, Theaters Clubs, Hotels, Fitness in Tbilisi, Georgia.
                            <br />
                            Website Creation
                            <br />
                            <a href="http://tbilisee.com" target="_blank">
                                Visit Website
                            </a>
                        </div>
                </div>

            </SlickSlider>
        )
    }
}

export default Slider;