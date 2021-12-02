import React from "react"
import styled from "styled-components"
import AppsIcon from "@mui/icons-material/Apps"
const NavbarWrapper = styled.header`
  position: relative;
  height: 120px;
  background-color: tomato;
`
const Logo = styled.div`
  height: 60px;
  position: absolute;
  top: 24px;
  left: 30px;
`
const ResourceLInks = styled.div`
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  top: 24px;
  right: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  font-weight: 300;
`
const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 5px;
  color: tomato;
  border: 3px solid #292625;
  text-align: center;

  @media all and (max-width: 830px) {
    padding: 10px 5px;
    font-size: 10px;
  }
  @media all and (max-width: 620px) {
    display: none;
  }
`
const A = styled.a`
  text-decoration: none;
  color: white;
  font-size: 19px;
  margin-left: 50px;
  cursor: pointer;
  @media all and (max-width: 620px) {
    margin-left: 20px;
  }
`

export default function QueryNavBar() {
  return (
    <>
      <NavbarWrapper>
        <Logo>
          <AppsIcon />
        </Logo>
        <ResourceLInks>
          <Button>Try Now</Button>
          <A>About us</A>
          <A>Faq</A>
          <A>Login</A>
        </ResourceLInks>
      </NavbarWrapper>
    </>
  )
}
