import { ButtonNavigation, Container, Logo } from "./styles";
import logoImg from "../../assets/Confraria.png";

type Props = {
  onClickLogo?: () => void;
};

export function Header({ onClickLogo }: Props) {
  return (
    <Container>
      <ButtonNavigation onPress={onClickLogo}>
        <Logo source={logoImg} />
      </ButtonNavigation>
    </Container>
  );
}
