/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"
import { Button, Grid, makeStyles } from "@material-ui/core"

import CV from "../../../../static/Jarrod_Ng_CV.pdf"
import SelfPortrait from "../../../../static/myself.jpg"


const useStyles = makeStyles(() => ({
  button: {
    padding: "25px",
    fontSize: "22px",
    fontWeight: "600",
    background: "#ed8936",
    color: "white",
    '&:hover': {
      backgroundColor:"#d17324"
    }
  }
}))

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const classes = useStyles()

  return (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div sx={{
          display: "flex",
          alignItems: `center`
        }}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item sm={12} md={6} sx={{display:"flex", justifyContent:`center`}}>
              <img src={SelfPortrait} alt="Self Portrait" sx={{width:`100%`, maxWidth:`600px`, height:`auto`, objectFit: `cover`}}/>
            </Grid>
            <Grid item sm={12} md={6}>
              <AboutMDX />
              <a href={CV} download="Jarrod_Ng_CV.pdf">
                <Button className={classes.button} variant="contained" color="" size="large">Download Resume</Button>
              </a>
            </Grid>
          </Grid>
        </div>       
      </Inner>
    </Content>
  </div>
)}

export default About