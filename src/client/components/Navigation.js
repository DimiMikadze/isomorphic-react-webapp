import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNav: false
        };
    }

    toggleMobileNav() {
        this.setState({ mobileNav: !this.state.mobileNav });
    }

    hideNav() {
        this.setState({mobileNav: false});
    }

    render() {
        return (
            <header className="container wow fadeInDown">

                <div className="logo col-xs-2 col-sm-4">
                    <Link to="/">
                        <span className="hide-bf-small">Dimitri Mikadze</span>
                        <span className="hide-bf-medium">DM</span>
                    </Link>
                </div>

                <nav className="col-xs-10 col-sm-8">

                    <i className="fa fa-bars pull-right visible-xs hamburger" onClick={this.toggleMobileNav.bind(this)}></i>

                    <ul className={this.state.mobileNav ? "" : "hidden-xs"}>
                        <li>
                            <Link to="/skills" activeClassName="active" onClick={this.hideNav.bind(this)}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" activeClassName="active" onClick={this.hideNav.bind(this)}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:dimitrimikadze@gmail.com" onClick={this.hideNav.bind(this)}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }

}

export default Navigation;