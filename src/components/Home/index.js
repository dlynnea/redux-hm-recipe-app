import React, {Component} from 'react';
import { connect } from 'react-redux';
import Main from './Main'
import Banner from './Banner'

const mapStateToProps = state => ({
    appName: state.appName
})

class Home extends Component {
    render() {
        return(
            <div className="home-page">
                <Banner appName={this.props.appName} />

                <div className="container page">
                    <div className="row">
                        <Main />

                        <div className="pop-tag">
                            <div className="sidebar">
                                <p>Popular Tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, () => ({}))(Home);