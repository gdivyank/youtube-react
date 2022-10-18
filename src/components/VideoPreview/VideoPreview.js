import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.scss';
import { Link } from 'react-router-dom';
import HoverVideoPlayer from "react-hover-video-player";


export class VideoPreview extends React.Component {
  render() {
    const {video} = this.props;
    if (!video) {
      return <div/>;
      }
      console.log(video)

    return (
      <Link to={{pathname: this.props.pathname, search: this.props.search}}>
            <div className='video-preview'>
          <div className='image-container'>
                    <HoverVideoPlayer
                        controls
                        videoSrc={video.video_url}
                        pausedOverlay={
                            <div>
                                <Image src={video.thumbnail_url} />
                                <div className='time-label'>
                                    <span>1.11</span>
                                </div>
                            </div>
                        }
                        loadingOverlay={
                            <div className="loading-overlay">
                                <div className="loading-spinner" />
                            </div>
                        }
                    />
           
          </div>

          <div className='video-info'>
            <div className={['semi-bold', 'show-max-two-lines'].join(' ')}>Sample Video</div>
          </div>
        </div>
      </Link>
    );
  }


}