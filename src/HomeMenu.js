import React from 'react';
import { Link } from 'react-router-dom';
import './HomeMenu.css'
import home from './assets/home-1-svgrepo-com.svg';
import getlis from './assets/document-text-svgrepo-com.svg';
import logout from './assets/logout-3-svgrepo-com.svg';
import upload from './assets/upload-svgrepo-com.svg';
import about from './assets/info-circle-svgrepo-com.svg';

class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [{
                text: 'Home',
                link: "/home",
                icon: home,
            }, {
                text: 'GET List',
                link: '/list',
                icon: getlis,
            }, {
                text: 'Upload',
                link: '/Upload',
                icon: upload,
            }, {
                text: 'About',
                link: '/About',
                icon: about,
            },
            {
                text: 'LogOut',
                link: '/logout',
                icon: logout,
            }]
        }
    }
    render() {
        let links = this.state.links.map((link, i) => <li ref={i + 1}>
            <img src={link.icon} alt={link.text} className="menu-icon" />
            <Link to={link.link}>{link.text}</Link></li>);

        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    {links}
                </ul>
            </div>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            }, () => {
                document.body.classList.remove('menu-open'); // Remove class when menu closes
            });
        }
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            if (this.state.isOpen) {
                document.body.classList.add('menu-open'); // Add class when menu opens
            } else {
                document.body.classList.remove('menu-open'); // Remove class when menu closes
            }
        });
    }
    render() {

      let menuStatus = this.state.isOpen ? 'isopen' : '';
  
      return (
        <div ref="root" className='root'>
          <div className="menubar">
            <div className="hambclicker" onClick={ this._menuToggle }></div>
            <div className="titlemain">
            <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span><span></span></div>
            <div className="title">
              <h1 style={{paddingTop:8}}>{this.props.title }</h1>
            </div>
            </div>
            {this.props.tag }
          </div>
          <MenuLinks menuStatus={ menuStatus }/>
        </div>
      )

    }
}

export default Menu;
