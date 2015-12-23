import React from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container main-container" data-page={this.props.location.pathname}>
                <div className="wrapper">
                    <Navigation />

                        <ReactCSSTransitionGroup
                            component="div"
                            transitionName="pages-transition"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            {React.cloneElement(this.props.children, {
                                key: this.props.location.pathname
                            })}
                        </ReactCSSTransitionGroup>

                    <Contact />
                </div>
            </div>
        )
    }

}

export default Main;