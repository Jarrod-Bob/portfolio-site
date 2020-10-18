/** @jsx jsx */
import React, { useState, useRef } from "react";
import { jsx } from "theme-ui";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";

const ProjectCard = ({ link, title, children, bg }) => {
  const [open, set] = useState(false);
  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
  });

  const transRef = useRef();
  const transitions = useTransition(open, null, {
    ref: transRef,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, 0.2]);
  return (
    <div
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
      //   onClick={() => set(!open)}
    >
      {/* {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div>ello</animated.div>
        ) : (
          <animated.div>hello</animated.div>
        )
      )} */}
      <div
        sx={{
          opacity: 0.85,
          textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        }}
      >
        {children}
      </div>
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pt: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default ProjectCard;
