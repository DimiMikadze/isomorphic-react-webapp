import React from 'react';
import Slider from './Slider';

class Work extends React.Component {

    constructor(props) {
        super(props);
        document.body.dataset.page = props.route.component.name;
    }

    render() {
        return (
            <div className="work-container">
                <Slider />
            </div>
        )
    }

}

export default Work;