import Container from "@/components/Container";
import { TABLE_HEAD, TABLE_ROWS } from "./fakedata";
import TableHead from "@/components/table/TableHead";
import Table from "@/components/table/Table";
import TableHeadElement from "@/components/table/TableHeadElement";
import TableBody from "@/components/table/TableBody";
import TableBodyElement from "@/components/table/TableBodyElement";
import TableRow from "@/components/table/TableRow";
import Image from "next/image";

import Badge from "@/components/Badge/Badge";
import { themeCollors } from "./types/ThemeColors";
import StaticRate from "@/components/StaticRate";
import { HiDotsVertical } from "react-icons/hi";
import MobileCarListElement from "@/components/MobileCarList/MobileCarListElement";
import MobileCarElementContainer from "@/components/MobileCarList/MobileCarElementContainer";

export default function DefaultTable() {
  return (
    <Container>
      <div className="hidden md:inline">
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
                          src={data.carImage}
                          alt=""
                          width={100}
                          height={100}
                          className="max-w-[48px]"
                        ></Image>
                      </div>
                      <div className="text-gray-900 font-normal text-sm">
                        {data.modelo}
                      </div>
                    </div>
                  </TableBodyElement>
                  <TableHeadElement>
                    <div className="text-sm font-normal text-gray-500">
                      {data.NextReservation}
                    </div>
                  </TableHeadElement>
                  <TableHeadElement>
                    <Badge
                      theme={themeCollors.Red}
                      isRemoveButton={false}
                      text={data.status}
                      type="only-icon"
                    />
                  </TableHeadElement>
                  <TableHeadElement>
                    <StaticRate />
                  </TableHeadElement>
                  <TableHeadElement>
                    <span className="text-gray-800 text-sm cursor-pointer">
                      <HiDotsVertical />
                    </span>
                  </TableHeadElement>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <MobileCarElementContainer>
        {TABLE_ROWS.map((data) => {
          return (
            <MobileCarListElement
              key={data.id}
              date={data.NextReservation}
              img={data.carImage}
              title={data.modelo}
            />
          );
        })}
      </MobileCarElementContainer>
    </Container>
  );
}
