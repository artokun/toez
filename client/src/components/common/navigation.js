import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  background-color: #ddd;
  align-items: center;
  padding: 0 3%;
`
export const LogoLink = styled.a``

export const Logo = styled.img`
  width: 100%;
  fill: #333;
`

export const LinkBar = styled.div`display: flex;`

export const StyledLinks = styled.a`
  text-decoration: none;
  padding: 0;
  margin-right: 20px;
  padding: 5px 10px;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:last-child {
    margin-right: 0;
  }
`
