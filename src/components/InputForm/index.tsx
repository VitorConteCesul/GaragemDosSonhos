import { TextInput } from "./styles";

type Props = {
  placeholder: string;
};

export function InputForm({ placeholder }: Props) {
  return <TextInput placeholder={placeholder} />;
}
