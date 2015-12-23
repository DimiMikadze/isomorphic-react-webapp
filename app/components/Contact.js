import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div>
                <div className="lets-talk">
                    <h3>Lets Talk</h3>
                    <a href="https://twitter.com/DimitriMikadze" target="_blank">Twitter →</a>
                    <a href="https://www.linkedin.com/profile/view?id=AAMAABSP054BMC3w5ePc2YYXGPRJsMWdAG3H6Fs&trk=hp-identity-name" target="_blank">Linkedin →</a>
                    <a href="https://www.facebook.com/Ditmens" target="_blank">Facebook →</a>
                </div>

                <div className="github">
                    <h3>Find me on Github</h3>
                    <a href="https://github.com/DimitriMikadze" target="_blank">
                        Github →
                    </a>
                </div>
            </div>
        )
    }

}

export default Contact;