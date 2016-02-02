import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {

    render() {
        return (
            <header className="container">

                <div className="logo col-xs-2 col-sm-4">
                    <Link to="/">
                        <span className="hide-bf-small">Dimitri Mikadze</span>
                        <span className="hide-bf-medium">DM</span>
                    </Link>
                </div>

                <nav className="col-xs-10 col-sm-8">
                    <ul className="pull-right">
                        <li>
                            <IndexLink to="/skills" activeClassName="active">
                                Skills
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/work" activeClassName="active">
                                Work
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:dimitrimikadze@gmail.com">
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