import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          onr
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  maxWidth: 200
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  width: 300
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                  minWidth: 400,
                  Cell: row => (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#dadada",
                        borderRadius: "4px"
                      }}
                    >
                      <div
                        style={{
                          width: `${row.value}%`,
                          height: "100%",
                          backgroundColor:
                            row.value > 20
                              ? "#85cc00"
                              : row.value > 3
                              ? "#ffbf00"
                              : "#ff2e00",
                          borderRadius: "2px",
                          transition: "all .2s ease-out"
                        }}
                      />
                    </div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          getTdProps={(state, rowInfo, column, instance) => {
            //Testing double click event
            return {
              onDoubleClick: (e, handleOriginal) => {
                console.log("A Td Element was clicked!");
                console.log("it produced this event:", e);
                console.log("It was in this column:", column);
                console.log("It was in this row:", rowInfo);
                console.log("It was in this table instance:", instance);

                if (handleOriginal) {
                  handleOriginal();
                }
              }
            };
          }}
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
