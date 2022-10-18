import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './SideBarItem.scss';
import { Link, withRouter } from 'react-router-dom';
import { FaHome, FaFireAlt, FaHistory, FaClock, FaThumbsUp, FaFilm, FaFlag, FaQuestionCircle, FaComment } from 'react-icons/fa'
import { GiSpy } from "react-icons/gi";
export class SideBarItem extends React.Component {
    renderIcon = (name) => {
        switch (name) {
            case 'home':
                return <FaHome size='22px' color='red' className='sidebar-icon-image' />
            case 'fire':
                return <FaFireAlt size='22px' className='sidebar-icon-image' />
            case 'spy':
                return <GiSpy size='22px' className='sidebar-icon-image' />
            case 'history':
                return <FaHistory size='22px' className='sidebar-icon-image' />
            case 'clock':
                return <FaClock size='22px' className='sidebar-icon-image' />
            case 'thumbs up':
                return <FaThumbsUp size='22px' className='sidebar-icon-image' />
            case 'film':
                return <FaFilm size='22px' className='sidebar-icon-image' />
            case 'flag':
                return <FaFlag size='22px' className='sidebar-icon-image' />
            case 'help circle':
                return <FaQuestionCircle size='22px' className='sidebar-icon-image' />
            case 'comment':
                return <FaComment size='22px' className='sidebar-icon-image' />

            default : 
                return <FaHome size='22px' />

        }


    }

  render() {
    // React will ignore custom boolean attributes, therefore we pass a string
    // we use this attribute in our SCSS for styling
    const highlight = this.shouldBeHighlighted() ? 'highlight-item' : null;
    return (
      <Link to={{pathname: this.props.path}}>
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
          <div className='sidebar-item-alignment-container'>
                    <span>{this.renderIcon(this.props.icon)}</span>
            {/*        <span><Icon size='large' name={this.props.icon} /> </span>*/}
            <span>{this.props.label}</span>
          </div>
        </Menu.Item>
      </Link>
    );
  }

  shouldBeHighlighted() {
    const {pathname} = this.props.location;
    if (this.props.path === '/') {
      return pathname === this.props.path;
    }
    return pathname.includes(this.props.path);
  }
}

export default withRouter(SideBarItem);