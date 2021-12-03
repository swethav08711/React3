import React from "react"
import { AppContext } from "../ContextAPI/ApplicationContextProvider"
import { ThemeContext } from "../ContextAPI/ThemeProvde"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import styled from "styled-components"
const MainDiv = styled.div`
  border: 1px solid black;
`
const HeadingName = styled.h3`
  font-size: 19px;
`
const SubHeading = styled.h4`
  font-size: 16px;
`
const SecContainer = styled.div`
  display: flex;
`
const ProfessionalLevel = styled.h3`
  font-size: 19px;
  margin-right: 10px;
`
const Points = styled.h3`
  font-size: 19px;
`
function valuetext(value) {
  return `${value}°C`
}
export default function Body() {
  const [isAuth] = React.useContext(AppContext)
  const [{ theme, themeData }] = React.useContext(ThemeContext)
  const currentTheme = themeData[theme]
  if (isAuth) {
    return (
      <div
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background,
        }}
      >
        <h1>My Dashboard</h1>
        <div>
          <div>
            <h3>Active Users</h3>
            <p>for August 2019</p>
          </div>
          <MainDiv>
            <HeadingName>Nrupul Dev</HeadingName>
            <SubHeading>Bangalore, India</SubHeading>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                color="secondary"
              />
            </Box>
            <SecContainer>
              <ProfessionalLevel>Proffesional Level 15</ProfessionalLevel>
              <Points>4723 Points</Points>
            </SecContainer>
          </MainDiv>
          <MainDiv>
            <HeadingName>Sandhya</HeadingName>
            <SubHeading>Bangalore, India</SubHeading>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                color="secondary"
              />
            </Box>
            <SecContainer>
              <ProfessionalLevel>Proffesional Level 20</ProfessionalLevel>
              <Points>4723 Points</Points>
            </SecContainer>
          </MainDiv>
          <MainDiv>
            <HeadingName>Elon Dev</HeadingName>
            <SubHeading>Bangalore, India</SubHeading>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                color="secondary"
              />
            </Box>
            <SecContainer>
              <ProfessionalLevel>Proffesional Level 15</ProfessionalLevel>
              <Points>4723 Points</Points>
            </SecContainer>
          </MainDiv>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Plase Signup to continue</h3>
      </div>
    )
  }
}
