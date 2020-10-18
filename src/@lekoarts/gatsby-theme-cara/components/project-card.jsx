/** @jsx jsx */
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const ProjectCard = ({ link, title, children, bg }) => {
  const [open, set] = useState(false);

  const handleOpen = () => {
    set(true);
  };

  const handleClose = () => {
    set(false);
  };

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
    <>
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
        onClick={handleOpen}
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
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        sx={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            sx={{
              backgroundColor: `white`,
              border: `2px solid #000`,
              boxShadow: `15px`,
              padding: `20px`,
              color: `black`,
            }}
          >
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectCard;
