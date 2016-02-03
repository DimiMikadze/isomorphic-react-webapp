import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="container footer-container">
                <div className="lets-talk">
                    <h3>Lets Talk</h3>
                    <a href="mailto:dimitrimikadze@gmail.com" className="email">
                        <i className="fa fa-envelope"></i>
                    </a>
                    <a href="https://www.facebook.com/Ditmens" target="_blank" className="facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/DimitriMikadze" target="_blank" className="twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/profile/view?id=AAMAABSP054BMC3w5ePc2YYXGPRJsMWdAG3H6Fs&trk=hp-identity-name" target="_blank" className="linkedin">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/DimitriMikadze" target="_blank" className="github">
                        <i className="fa fa-github"></i>
                    </a>
                    <p>&copy; Dimitri Mikadze</p>
                </div>
            </div>
        )
    }

}

export default Footer;