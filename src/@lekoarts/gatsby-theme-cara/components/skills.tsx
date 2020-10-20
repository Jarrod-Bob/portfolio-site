/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import SkillsMDX from "../sections/skills"
import SkillCard from "./skill-card"
import Masonry from 'react-masonry-css'
import skillsStyle from './skills.module.css'


var skills = [
    {
        title: "ReactJS",
        level: "Experienced"
    },
    {
        title: "Java",
        level: "Experienced"
    },
    {
        title: "Figma",
        level: "Experienced"
    },
    {
        title: "Python",
        level: "Intermediate"
    },
    {
        title: "EmberJS",
        level: "Experienced"
    },
    {
        title: "HTML",
        level: "Experienced"
    },
    {
        title: "CSS",
        level: "Experienced"
    },
    {
        title: "C#",
        level: "Entry"
    },
    {
        title: "SQL",
        level: "Intermediate"
    },
    {
        title: "Microsoft Suite",
        level: "Experienced"
    },
    
]

const items = skills.map(skill => (
    <SkillCard title={skill.title} level={skill.level}></SkillCard>
));

const Skills = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
            <h1 className={skillsStyle.header}>Skills</h1>
            <br></br>
            <div sx={{
                width: `100%`,
                display: `flex`,
                justifyContent: `center`,
                alignItem: `center`
            }}>
            <Masonry
            breakpointCols={{default: 4, 900: 2, 1200: 3}}
            className={skillsStyle.skillsGrid}
            columnClassName={skillsStyle.skillsGrid_column}
            >
                {items}
        </Masonry>
            </div>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Skills