import React from "react"
import styled from "styled-components"
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox"
import EmailIcon from "@mui/icons-material/Email"
import DraftsIcon from "@mui/icons-material/Drafts"
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread"
import ArchiveIcon from "@mui/icons-material/Archive"
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox"
const Drawer = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
  padding-top: 40px;
  width: 10%;
  margin: auto;
  margin-top: 50px;
`
// const BorderTop = styled.hr`
//   border-top: 0.5px solid lightgrey;
// `
const DrawerItem = styled.div`
  width: 200px;
  display: flex;

  align-items: center;
`
const Icon = styled.p`
  font-size: 16px;
  margin-left: 10px;
`
export default function SideBar() {
  return (
    <div>
      <Drawer>
        <hr />
        <DrawerItem>
          <MoveToInboxIcon />
          <Icon>Inbox</Icon>
        </DrawerItem>
        <DrawerItem>
          <EmailIcon />
          <Icon>Starred</Icon>
        </DrawerItem>
        <DrawerItem>
          <MarkunreadMailboxIcon />
          <Icon>Send email</Icon>
        </DrawerItem>
        <hr />
        <DrawerItem>
          <DraftsIcon />
          <Icon>Draft</Icon>
        </DrawerItem>
        <DrawerItem>
          <MarkEmailUnreadIcon />
          <Icon>All mail</Icon>
        </DrawerItem>
        <DrawerItem>
          <ArchiveIcon />
          <Icon>Trash</Icon>
        </DrawerItem>
      </Drawer>
    </div>
  )
}
