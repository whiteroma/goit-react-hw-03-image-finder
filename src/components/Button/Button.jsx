import { LoadMoreBtn } from "./Button.styled"

const Button = ({onClick}) => (
    <LoadMoreBtn onClick={onClick} type='button'>Load more</LoadMoreBtn>
);
export default Button;