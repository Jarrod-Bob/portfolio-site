/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Card } from "@material-ui/core";

const px = [`64px`, `32px`, `16px`, `8px`, `4px`];
const shadowArray = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const SkillCard = ({
  title,
  level,
  overlay = `0, 0, 0`,
  shadow = shadowArray,
  inGrid = false,
}) => {
  const h = 100;
  const count = Math.floor(h / 50);

  let conditionalStyles = {};

  if (inGrid) {
    conditionalStyles = {
      height: 0,
      paddingBottom: `${100}%`,
      gridRowEnd: `span ${count}`,
      mb: 4,
    };
  }

  return (
    <Card
      className="skillCard"
      sx={{
        outline: `none`,
        "&:hover, &:focus": {
          "[data-name='card-overlay']": {
            opacity: 1,
          },
        },
        position: `relative`,
        fontSize: `2rem`,
        minWidth: `250px`,
        minHeight: `250px`,
        textAlign: `center`,
        margin: `20px 0px`,
        padding: `10px`,
        backgroundColor: `${
          "hsl(" +
          360 * Math.random() +
          "," +
          (25 + 70 * Math.random()) +
          "%," +
          (85 + 10 * Math.random()) +
          "%)"
        } !important`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <div
        sw={{
          textAlign: `center`,
          mixBlendMode: `difference`,
        }}
      >
        {title}
      </div>
      <div
        sx={{
          zIndex: 20,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          opacity: 0,
          transition: `all 0.3s ease-in-out`,
          color: `white`,
          backgroundColor: `rgba(${overlay}, 0.9)`,
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        data-name="card-overlay"
      >
        <Heading
          variant="styles.h4"
          sx={{
            my: 0,
            textShadow: `rgba(0, 0, 0, 0.2) 0px 2px 12px`,
            color: `white`,
          }}
        >
          {level}
        </Heading>
      </div>
    </Card>
  );
};

export default SkillCard;
