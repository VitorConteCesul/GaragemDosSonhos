import { Text } from "./styles";

type Props = {
  text: string | undefined;
}

export function TextError({ text }: Props) {
  return (
    <Text>{text}</Text>
  )
}