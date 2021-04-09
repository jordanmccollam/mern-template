import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Row, Col } from 'react-bootstrap';

import './_button.scss';

const logger = "Button:: ";

const Button = (props) => {
  let classes = {
		[`button`]: true,
    [`button-${props.kind}`]: true
	}

  return (
    <div onClick={props.onClick} className={classnames(classes)}>
      {props.children}
    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  onClick: PropTypes.func,
  kind: PropTypes.oneOf([
    'primary', 'secondary', 'ghost'
  ])
};

Button.defaultProps = {
  className: '',
  children: 'Default Button',
  kind: 'primary'
};

export default Button;


