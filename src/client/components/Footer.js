import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="container footer-container">
                <div className="lets-talk wow fadeIn">
                    <h3>Lets Talk</h3>
                    <a href="mailto:dimitrimikadze@gmail.com" className="email">
                        <i className="fa fa-envelope wow fadeInUp" data-wow-delay=".1s"></i>
                    </a>
                    <a href="https://www.facebook.com/Ditmens" target="_blank" className="facebook">
                        <i className="fa fa-facebook wow fadeInUp"  data-wow-delay=".3s"></i>
                    </a>
                    <a href="https://twitter.com/DimitriMikadze" target="_blank" className="twitter">
                        <i className="fa fa-twitter wow fadeInUp"  data-wow-delay=".5s"></i>
                    </a>
                    <a href="https://www.linkedin.com/profile/view?id=AAMAABSP054BMC3w5ePc2YYXGPRJsMWdAG3H6Fs&trk=hp-identity-name" target="_blank" className="linkedin">
                        <i className="fa fa-linkedin wow fadeInUp"  data-wow-delay=".7s"></i>
                    </a>
                    <a href="https://github.com/DimitriMikadze" target="_blank" className="github">
                        <i className="fa fa-github wow fadeInUp"  data-wow-delay=".9s"></i>
                    </a>
                    <p>&copy; Dimitri Mikadze</p>
                </div>
            </div>
        )
    }

}

export default Footer;