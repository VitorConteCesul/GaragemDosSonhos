import { SaveButton, TextButton } from "./styles";

type Props = {
  nameButton: string;
  onPress: () => void;
};

export function ButtonForm({ nameButton, onPress }: Props) {
  return (
    <SaveButton onPress={onPress}>
      <TextButton>{nameButton}</TextButton>
    </SaveButton>
  );
}
