import React, { Component } from 'react'
import logo from 'assets/logo.svg'
import {
  NavWrapper,
  LogoLink,
  Logo,
  LinkBar,
  StyledLinks
} from 'components/common'

class Header extends Component {
  render() {
    return (
      <NavWrapper>
        <LogoLink>
          <Logo src={logo} />
        </LogoLink>
        <LinkBar>
          <StyledLinks>Home</StyledLinks>
          <StyledLinks>Sign in</StyledLinks>
        </LinkBar>
      </NavWrapper>
    )
  }
}

export default Header
