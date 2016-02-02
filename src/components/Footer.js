import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="container footer-container">
                <div className="lets-talk">
                    <h3>Lets Talk</h3>
                    <a href="mailto:dimitrimikadze@gmail.com">
                        <img src="/images/email.png" alt="Email" title="Email"/>
                    </a>
                    <a href="https://www.facebook.com/Ditmens" target="_blank">
                        <img src="/images/facebook.png" alt="Facebook" title="Facebook"/>
                    </a>
                    <a href="https://twitter.com/DimitriMikadze" target="_blank">
                        <img src="/images/twitter.png" alt="Twitter" title="Twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/profile/view?id=AAMAABSP054BMC3w5ePc2YYXGPRJsMWdAG3H6Fs&trk=hp-identity-name" target="_blank">
                        <img src="/images/linkedin.png" alt="Linkedin" title="Linkedin"/>
                    </a>
                </div>

                <div className="github">
                    <h3>Find me on Github</h3>
                    <a href="https://github.com/DimitriMikadze" target="_blank">
                        <img src="/images/github.png" alt="Github" title="Github"/>
                    </a>
                </div>
            </div>
        )
    }

}

export default Footer;