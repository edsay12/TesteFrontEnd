import Container from "@/components/Container";
import { TABLE_HEAD, TABLE_ROWS } from "./fakedata";
import TableHead from "@/components/table/TableHead";
import Table from "@/components/table/Table";
import TableHeadElement from "@/components/table/TableHeadElement";
import TableBody from "@/components/table/TableBody";
import TableBodyElement from "@/components/table/TableBodyElement";
import TableRow from "@/components/table/TableRow";

export default function DefaultTable() {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {TABLE_HEAD.map((data) => {
              return <TableHeadElement key={data}>{data}</TableHeadElement>;
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {TABLE_ROWS.map((data, index, list) => {
            return (
              <TableRow key={data.name}>
                <TableBodyElement
                  key={data.name}
                  datalength={list.length}
                  index={index}
                >
                  asdasd
                </TableBodyElement>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
