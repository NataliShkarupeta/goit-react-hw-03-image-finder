import { Button } from "./Button.styled";
import PropTypes from 'prop-types'

export const ButtonLoad = ({clicked}) => {
  return (
    <Button type="button" onClick={clicked}>
      Load more
    </Button>
  );
};

ButtonLoad.propTypes = {
  clicked:PropTypes.func.isRequired,
};