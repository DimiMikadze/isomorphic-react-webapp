import React from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Main extends React.Component {


    renderPage() {
        if (typeof window.orientation === 'undefined') {
            return (
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
            )
        } else {
            return (
                this.props.children
            )
        }
    }

    render() {
        return (
            <div className="container main-container">
                <div className="wrapper">
                    <Navigation />
                        { this.renderPage() }
                    <Contact />
                </div>
            </div>
        )
    }

}

export default Main;