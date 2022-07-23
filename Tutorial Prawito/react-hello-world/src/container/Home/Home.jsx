import React, {Component} from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // },15000);
    }

    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    img="https://images6.alphacoders.com/124/1242360.jpg" 
                    time="7.12"  
                    title="Grogu" 
                    desc="Ini Grogu"/>
                <YoutubeComp 
                    img="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/05/30/2855500915.jpg" 
                    time="8.59"  
                    title="Anakin"
                    desc="Ini Anakin"/>
                <YoutubeComp 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCe5Vo3l62eErCKtXQ5O1t1sQuN_NRDEtAHmNaOQ2DKij4nsMNvkmJ1thV7sc93oxLhbk&usqp=CAU" 
                    time="2.15"  
                    title="Luke"
                    desc="Ini Luke"/>
                <YoutubeComp 
                    img="https://cdn.mos.cms.futurecdn.net/qBCRauHYvdMYcjGgvEnDVH.jpg" 
                    time="4.17"  
                    title="Padme"
                    desc="Ini Padme"/>
                <YoutubeComp 
                    img="https://img1.looper.com/img/gallery/the-mandalorian-how-rich-is-din-djarin/intro-1605382117.jpg" 
                    time="10.12" 
                    title="Djin Djarin"
                    desc="Ini Djin Jarin"/>
                <YoutubeComp />
                <hr/>
                <p>Counter</p>
                <hr/>
                <Product />
                <hr/> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent ? <LifeCycleComp /> : null
                } */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}

export default Home;