import PropTypes from "prop-types";
import React from "react";

class Text extends React.Component {
  render() {
    const { onClick, text } = this.props;
    return <p onClick={onClick || null}>{text}</p>;
  }
}

Text.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.node
};

Text.defaultProps = {
  onClick: null,
  text: null
};

export default Text;
