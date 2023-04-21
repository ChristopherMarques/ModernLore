import { Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import { useTable, useSortBy, Column } from "react-table";

type Props = {
  columns: Array<Column>;
  tableData: any;
  hiddenColumns?: Array<string>;
};

function DataTable({ columns, tableData, hiddenColumns }: Props) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data: tableData, initialState: { hiddenColumns } },
      useSortBy
    );

  return (
    <>
      <Table
        {...getTableProps()}
        bg={"#171923"}
        textColor={"white"}
        size={"lg"}
      >
        <Thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <Tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps();
                  return (
                    <Th key={key} {...restColumn}>
                      <Text>{column.render("Header")}</Text>
                    </Th>
                  );
                })}
              </Tr>
            );
          })}
        </Thead>
        <Tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <Tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <Td key={key} {...restCellProps}>
                      <Text whiteSpace={"pre-wrap"} textAlign={"left"}>
                        {cell.render("Cell")}
                      </Text>
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}

export default DataTable;
