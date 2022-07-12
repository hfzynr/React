import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home;