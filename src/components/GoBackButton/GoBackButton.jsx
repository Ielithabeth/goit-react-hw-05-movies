import { useLocation } from "react-router-dom";
import { StyledLink } from "./GoBackButtton.styled";

const GoBackButton = () => {
  const location = useLocation();

    return (
        <StyledLink to={location?.state?.from ?? '/'}>
          <button type="button">Go back</button>
        </StyledLink>
    )
}

export default GoBackButton;