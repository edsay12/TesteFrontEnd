import Container from "@/components/Container";
import { TABLE_HEAD, TABLE_ROWS } from "./fakedata";
import TableHead from "@/components/table/TableHead";
import Table from "@/components/table/Table";
import TableHeadElement from "@/components/table/TableHeadElement";
import TableBody from "@/components/table/TableBody";
import TableBodyElement from "@/components/table/TableBodyElement";
import TableRow from "@/components/table/TableRow";
import Image from "next/image";
import carImage from "./assets/carImage.png";

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
              <TableRow key={data.id}>
                <TableBodyElement
                  key={data.id}
                  datalength={list.length}
                  index={index}
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <Image
                        src={carImage}
                        alt=""
                        width={100}
                        height={100}
                        className="max-w-[48px]"
                      ></Image>
                    </div>
                    <p className="text-gray-900 font-normal text-sm">
                      {data.modelo}
                    </p>
                  </div>
                </TableBodyElement>
                <TableHeadElement>
                  <p className="text-sm font-normal text-gray-500">
                    {data.NextReservation}
                  </p>
                </TableHeadElement>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
