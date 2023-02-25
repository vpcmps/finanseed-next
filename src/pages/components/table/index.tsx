import {
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Table,
  Button,
} from "@chakra-ui/react";
export type FTableProps = {
  color: "red" | "green" | "lightRed" | "lightGreen" | "default";
  items: Array<{ name: string; value: number }>;
};
const colorDictionary = {
  red: {
    bgColor: "#871C1C",
    color: "white",
  },
  lightRed: {
    bgColor: "#FF7063",
    color: "black",
  },
  green: {
    bgColor: "#417156",
    color: "white",
  },
  lightGreen: {
    bgColor: "#ABC49C",
    color: "black",
  },
  default: {
    bgColor: "white",
    color: "black",
  },
};
export function FTable({ items = [], color = "default" }: FTableProps) {
  const colorScheme = colorDictionary[color];
  return (
    <TableContainer m={1}>
      <Table
        borderTopRadius="md"
        backgroundColor={colorScheme.bgColor}
        variant="simple"
      >
        <Tbody>
          {items.map((item, i) => {
            return (
              <Tr key={i}>
                <Td fontSize="larger" color={colorScheme.color}>
                  {item.name}
                </Td>
                <Td fontSize="larger" color={colorScheme.color}>
                  R$ {item.value}
                </Td>
                <Td>
                  <Button>Pagar</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
