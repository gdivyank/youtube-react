import React from 'react';
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import './Home.scss';
import {SideBar} from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';
import {bindActionCreators} from 'redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent/>
      </React.Fragment>
    );
  }

  componentDidMount() {
      this.fetchCategoriesAndMostPopularVideos();
  }

  componentDidUpdate(prevProps) {
      this.fetchCategoriesAndMostPopularVideos();
  }



  fetchCategoriesAndMostPopularVideos() {
    this.props.fetchMostPopularVideos();
  }

  bottomReachedCallback = () => {
    if (!this.props.videoCategoriesLoaded) {
      return;
    }
  };

 
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
 
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);