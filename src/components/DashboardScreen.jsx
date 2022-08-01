import React from "react";
import { Container, Col, Row, Badge } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import { useTable, useSortBy } from "react-table";

const columns = [
  {
    Header: "Creation date",
    accessor: "_id",
  },
  {
    Header: "Duration",
    accessor: "duration",
  },
  {
    Header: "Waves's height",
    accessor: "height",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Rating out of 10",
    accessor: "rating",
  },
  {
    Header: "Delete",
    id: "delete",
    accessor: () => <span className="gg-trash"></span>,
  },
];

const DashboardScreen = ({ user, data }) => {
  const displayedName = user?.given_name || user?.nickname;

  const handleCellClick = (cell) => {
    const { column } = cell;
    const { id } = column;
    if (id !== "delete") return null;

    const requestOptions = {
      method: "DELETE",
    };

    console.log("WILL DELETE IN THE FUTURE");
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const renderNoData = (
    <h3>Go ahead and add your first session to crunch some stats.</h3>
  );

  const renderTable = (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                if (column.id !== "delete") {
                  return (
                    <th
                      key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="column"
                    >
                      {
                        <div className="justify-content-start d-inline">
                          <span>{column.render("Header")}</span>
                          <i className="float-end mt-2 gg-sort-az" />
                        </div>
                      }
                    </th>
                  );
                }

                return (
                  <th key={index}>
                    {
                      <div className="justify-content-start d-inline">
                        <span>{column.render("Header")}</span>
                      </div>
                    }
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  const { column } = cell;
                  const { id } = column;
                  return (
                    <td
                      className={id === "delete" ? "delete-cell" : ""}
                      key={index}
                      {...cell.getCellProps()}
                      onClick={() => handleCellClick(cell)}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return (
    <>
      <NavbarComponent user={user} />

      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mt-2">
              <Badge bg="success">{displayedName}&apos;s dashboard</Badge>
            </h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div className="mt-2">
              {data.length ? renderTable : renderNoData}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardScreen;
