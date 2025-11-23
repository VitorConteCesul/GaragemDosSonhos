import { TextInput } from "./styles";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void
};

export function InputForm({ placeholder, value, onChangeText }: Props) {
  return <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText}/>;
}
