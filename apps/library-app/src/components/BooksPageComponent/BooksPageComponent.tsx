import AdminSideBar from "@/components/AdminSideBar";
import DataTable from "@/components/DataTable";

import {
  Avatar,
  Button,
  Center,
  Checkbox,
  Flex,
  InputGroup,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useMemo, memo, useState } from "react";
//import SearchBox from "@/components/SearchBox";
interface BooksPageProps {
  booksData: [];
}
const BooksPageComponent = ({ booksData }: BooksPageProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState<any>([]);
  const columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ cell }: any) => (
          <Avatar
            bg={"white"}
            size="lg"
            src={
              cell.row.values.image
                ? cell.row.values.image
                : "/placeholder.jpeg"
            }
          />
        ),
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: () => <Text textAlign={"center"}>Actions</Text>,
        accessor: "actions",
        Cell: ({ cell }: any) => {
          return (
            <>
              <Flex justify={"center"}>
                <Center>
                  <Button
                    bg={"brand.300"}
                    rounded={"md"}
                    color={"white"}
                    px={6}
                    _hover={{
                      bg: "brand.400",
                    }}
                    onClick={() => {
                      // router.push(
                      //   `/admin/professionals/${cell.row.values?.id}`
                      // );
                      alert(
                        "Still working to implement this feature, stay tuned!"
                      );
                    }}
                  >
                    Edit
                  </Button>
                </Center>
              </Flex>
            </>
          );
        },
      },
    ],
    [booksData, router, selected]
  );

  return (
    <AdminSideBar>
      <Flex justifyContent={"space-between"}>
        <InputGroup alignContent={"center"} maxW="25%" mr={12}>
          {/* <SearchBox /> */}
        </InputGroup>
        <Button
          bg={"brand.300"}
          _hover={{ bg: "brand.400" }}
          color={"white"}
          rounded={"md"}
          padding={"10px 24px"}
          borderRadius={6}
          onClick={() =>
            alert("Still working to implement this feature, stay tuned!")
          }
        >
          + Add Book
        </Button>
      </Flex>
      <TableContainer
        maxW={"100%"}
        overflowX={"hidden"}
        whiteSpace={"pre-wrap"}
        bg={"white"}
        mt={8}
      >
        <DataTable
          columns={columns}
          tableData={booksData}
          hiddenColumns={["id"]}
        />
      </TableContainer>
    </AdminSideBar>
  );
};

export default memo(BooksPageComponent);
