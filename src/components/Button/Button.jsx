import { Button } from "./Button.styled";

export const ButtonLoad = ({clicked}) => {
  return (
    <Button type="button" onClick={clicked}>
      Load more
    </Button>
  );
};