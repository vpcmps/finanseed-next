import { ChevronUpIcon } from "@chakra-ui/icons";
import { Card, CardBody, Container, Flex, Heading } from "@chakra-ui/react";
import { LineChart } from "../charts";
export type Props = {
  title: string;
  value: number;
}

export function GainCard({title, value}: Props = {title: "Ganhos", value: 2300}) {
  return (
    <>
      <Card>
        <CardBody>
          <Heading color='gray.500'>R$ {value} <ChevronUpIcon color='green'/></Heading>
          <Heading size='md'>{title}</Heading>
        </CardBody>
      </Card>
    </>
  );
}
