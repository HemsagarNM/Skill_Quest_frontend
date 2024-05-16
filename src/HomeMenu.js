import React from "react";
import './HomeMenu.css'
import LoginPage from "./pages/LoginPage";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Lists from "./pages/ListPage";

class MenuLinks extends React.Component {
    constructor(props) {
      super(props);
      // Any number of links can be added here
      this.state = {
        links: [{
            text: 'Home',
            link: "/home",
            icon: 'fa-pencil-square-o'
        },{
          text: 'GET List',
          link: '/list',
          icon: 'fa-pencil-square-o'
        }, {
          text: 'Upload',
          link: '/Upload',
          icon: 'fa-github'
        }, {
          text: 'About',
          link: '/Results',
          icon: 'fa-twitter'
        },
        {
            text: 'LogOut',
            link: '/logout',
            icon: 'fa-twitter'
          }]
      }
    }
    render() {
      let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><Link to={link.link}>{link.text}</Link></li>);
  
      return (
          <div className={this.props.menuStatus} id='menu'>
            <ul>
              { links }
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
      });
      };
    }
    _menuToggle(e) {
      e.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      let menuStatus = this.state.isOpen ? 'isopen' : '';
  
      return (
        <div ref="root">
          <div className="menubar">
            <div className="hambclicker" onClick={ this._menuToggle }></div>
            <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span><span></span></div>
            <div className="title">
              <span>{ this.props.title }</span>
            </div>
            {this.props.tag }
          </div>
          <MenuLinks menuStatus={ menuStatus }/>
        </div>
      )
    }
  }
  
 export default Menu
