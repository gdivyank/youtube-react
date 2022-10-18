import React from 'react';
import {Form, Icon, Image, Input, Menu} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';
import {Link, withRouter} from 'react-router-dom';
import {isMobile } from '../../utils'
export class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
    render() {
        const isMobileDvice =  isMobile()
    return (
      // 1
      <Menu borderless className='top-menu' fixed='top'>
        {/* 2 */}
        <Menu.Item header className='logo'>
          <Link to='/'><Image src={logo} size='tiny'/></Link>
        </Menu.Item>
        {/* 3 */}
        <Menu.Menu className='nav-container'>
                {!isMobileDvice && <Menu.Item className='search-input'>
                    <Form onSubmit={this.onSubmit}>
                        {/* 4 */}
                        <Form.Field>
                            <Input placeholder='Search'
                                size='small'
                                action='Go'
                                value={this.state.query}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                    </Form>
                </Menu.Item>}
                {/* 5 */}
                <Menu.Menu position="right" className="right-header">
                    {!isMobileDvice  && <>
                        <Menu.Item>
                            {/* 6 */}
                            <Icon className='header-icon' name='video camera' size='large' />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon className='header-icon' name='grid layout' size='large' />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon className='header-icon' name='chat' size='large' />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon className='header-icon' name='alarm' size='large' />
                        </Menu.Item>
                        {/* 7*/}
                    </>}
                    {isMobileDvice && <Menu.Item>
                        <Icon className='header-icon-search' name='search' size='large' />
                    </Menu.Item>}
            <Menu.Item name='avatar' className="avtar">
                        <Image src='https://www.kasandbox.org/programming-images/avatars/mr-pants-green.png' avatar/>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onSubmit = () => {
    const escapedSearchQuery = encodeURI(this.state.query);
  };
}

export default withRouter(HeaderNav);
