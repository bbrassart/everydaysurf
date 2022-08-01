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
];

const DashboardScreen = ({ user, data }) => {
  const displayedName = user?.given_name || user?.nickname;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    }, useSortBy);

  const renderNoData = (
    <h3>Go ahead and add your first session to crunch some stats.</h3>
  );

  const renderTable = (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                // Aplicamos las propiedades de ordenación a cada columna
                <th key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='column'
                >
                  {`Sort by ${column.render("Header")}`}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, index) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr key={index} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, index) => {
                      // Apply the cell props
                      return (
                        <td key={index} {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
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
