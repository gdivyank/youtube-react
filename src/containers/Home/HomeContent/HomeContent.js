import {VideoGrid} from '../../../components/VideoGrid/VideoGrid';
import React from 'react';
import './HomeContent.scss';
import { getMostPopular} from '../../../store/reducers/videos';
import {connect} from 'react-redux';


export class HomeContent extends React.Component {
    render() {
        const trendingVideos = this.getTrendingVideos();
        console.log('CHECK', this.props)
        return (
            <div className='home-content'>
                <div className="responsive-video-grid-container">
                    <VideoGrid title='Trending' videos={trendingVideos} />
                </div>
            </div>
        );
    }

    getTrendingVideos() {
        return this.props.mostPopularVideos;
    }

}

function mapStateToProps(state) {
  return {
    mostPopularVideos: getMostPopular(state),
  };
}
export default connect(mapStateToProps, null)(HomeContent);