import React from "react"
import styled from "styled-components"

const ToolBar = styled.nav`
  width: 97%;
  display: flex;
  border: 2px solid lightgrey;
  background-color: bisque;
  align-items: center;
  padding: 10px;
  margin-top: 40px;
`
const SiteName = styled.div`
  width: 300px;
`
const DrawerItem = styled.span`
  font-size: 20px;
  color: #c03a3a;
  font-weight: 600;
`
const Main = styled.div`
  display: flex;
  justify-content: right;
  margin-left: auto;
`
const DrawerItems = styled.p`
  font-size: 20px;
  padding-left: 40px;
  color: #c03a3a;
  font-weight: 600;
`
export default function NavBar() {
  return (
    <div>
      <ToolBar>
        <SiteName>
          <DrawerItem> SITENAME</DrawerItem>
        </SiteName>
        <Main>
          <DrawerItems> About us</DrawerItems>
          <DrawerItems> Prices</DrawerItems>
          <DrawerItems> Other</DrawerItems>
          <DrawerItems> StartPage</DrawerItems>
          <DrawerItems> Offer</DrawerItems>
          <DrawerItems> Contact</DrawerItems>
        </Main>
      </ToolBar>
    </div>
  )
}
