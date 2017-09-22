import React, { Component } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  background-color: #ddd;
  align-items: center;
`

class Header extends Component {
  render() {
    return <NavWrapper>This is a header</NavWrapper>
  }
}

export default Header
