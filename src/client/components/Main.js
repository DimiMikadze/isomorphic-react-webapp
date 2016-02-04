import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    renderPages() {
        let path = this.props.location.pathname;
        let page = path.split('/')[1];
        let work = path.split('/')[2];

        if(page === 'work' && work !== undefined) {
            return this.props.children;
        } else {
            return (
                <div className="main-container" data-page={this.props.location.pathname}>
                    <Navigation />
                    { this.props.children }
                    <Footer />
                </div>
            )
        }
    }

    render() {
        return (
            this.renderPages()
        )
    }

}

export default Main;