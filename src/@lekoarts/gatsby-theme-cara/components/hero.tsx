/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ data, offset, factor = 1 }: { data, offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div sx={{
          display:`flex`
        }}>
          <svg width="190" height="310" viewBox="0 0 190 310" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 2.5H2.5V5V304.5V307H5H185H187.5V304.5V5V2.5H185H5Z" fill="white" stroke="black" stroke-width="5"/>
<path d="M25 24.5H165V44.5H45L25 24.5Z" fill="black"/>
<rect x="165" y="44.5" width="140" height="20" transform="rotate(90 165 44.5)" fill="black"/>
<path d="M45 284.5L45 204.5L25 184.5L25 264.5L45 284.5Z" fill="#F4D66B"/>
<path d="M55.5142 164.5L150.987 259.63L165.129 245.488L55.5139 135.872L55.5142 164.5Z" fill="#F4D66B"/>
<path d="M49 104.5V94.8431L42.1716 101.672L22.1716 121.672L21 122.843V124.5L21 182.985L19.3431 184.642L22.1716 187.471L42.1616 207.46L42.1668 207.466L49 214.347V214.299L92.0331 257.332L94.8616 260.161L95.0685 259.954L95.2755 260.161L98.1039 257.332L167.966 187.471L170.794 184.642L167.966 181.814L153.823 167.672L150.995 164.843L148.167 167.672L95.0685 220.77L49 174.701V104.5Z" fill="black" stroke="white" stroke-width="8"/>
<path d="M169 125L169 123.372L167.863 122.207L147.863 101.707L141 94.672L141 104.5L141 284.5L141 294.157L147.828 287.328L167.828 267.328L169 266.157L169 264.5L169 125Z" fill="#F4D66B" stroke="white" stroke-width="8"/>
<path d="M140.142 220.5L161.786 242.144L147.644 256.286L126 234.642L140.142 220.5Z" fill="#F4D66B"/>
<path d="M25 184.5L25 124.5L45 104.5L45 164.5L25 184.5Z" fill="#F4D66B"/>
</svg>

          <div sx={{
            marginLeft: `30px`
          }}>
          <Intro />
          </div>
        </div>
      </Inner>
    </Content>
  </div>
)

export default Hero