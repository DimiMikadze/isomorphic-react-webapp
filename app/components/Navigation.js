import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {

    render() {
        return (
            <header>

                <div className="logo col-xs-2 col-sm-4">
                    <h1>
                        <Link to="/">
                            <span className="hidden-sm hidden-xs">Dimitri Mikadze</span>
                            <span className="hidden-lg hidden-md">DM</span>
                        </Link>
                    </h1>
                </div>

                <nav className="col-xs-10 col-sm-8">
                    <ul className="pull-right">
                        <li>
                            <IndexLink to="/" activeClassName="active">
                                Me
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="work" activeClassName="active">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" activeClassName="active">
                                Skills
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }

}

export default Navigation;