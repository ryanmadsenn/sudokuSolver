import React, { Component } from "react";

class SudokuBoard extends Component {
  board = [
    new Array(9),
    new Array(9),
    new Array(9),
    new Array(9),
    new Array(9),
    new Array(9),
    new Array(9),
    new Array(9),
    new Array(9),
  ];

  styles = {
    fontSize: 17.5,
    fontWeight: "bold",
  };

  containerStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    width: 450,
    margin: 20,
  };

  subContainerStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    // border: "none",
    border: "solid 1px #333",
  };

  cellStyles = {
    width: "50px",
    height: "50px",
    textAlign: "center",
  };

  firstRowStyles = {
    border: "none",
    borderRight: "solid 1px #333",
  };

  middleRowStyles = {
    border: "none",
    borderTop: "solid 1px #333",
    borderRight: "solid 1px #333",
    borderBottom: "solid 1px #333",
  };

  bottomRowStyles = {
    border: "none",
    borderRight: "solid 1px #333",
  };

  lastColumnStyles = {
    border: "none",
  };

  lastColumnMiddleStyles = {
    border: "none",
    borderTop: "solid 1px #333",
    borderBottom: "solid 1px #333",
  };

  solveBoard = () => {
    console.log("solve board");
  };

  render() {
    console.log(this.board);

    let nineByNines = [];

    for (let i = 0; i < 9; i++) {
      let boardSpaces = [];

      for (let i1 = 0; i1 < 9; i1++) {
        let style = "";
        // console.log(i1 in [3, 4, 5]);

        if ([0, 1, 2].includes(i1)) {
          !i in [2, 5, 8]
            ? (style = this.firstRowStyles)
            : i1 !== 2
            ? (style = this.firstRowStyles)
            : (style = this.lastColumnStyles);
        } else if ([3, 4, 5].includes(i1)) {
          !i in [2, 5, 8]
            ? (style = this.middleRowStyles)
            : i1 !== 5
            ? (style = this.middleRowStyles)
            : (style = this.lastColumnMiddleStyles);
        } else if ([6, 7, 8].includes(i1)) {
          !i in [2, 5, 8]
            ? (style = this.bottomRowStyles)
            : i1 !== 8
            ? (style = this.bottomRowStyles)
            : (style = this.lastColumnStyles);
        }

        let child = (
          <input type="text" style={{ ...this.cellStyles, ...style }}></input>
        );

        boardSpaces.push(child);
      }

      let nineBy = React.createElement(
        "div",
        { style: this.subContainerStyles },
        boardSpaces
      );
      nineByNines.push(nineBy);
    }

    let board = React.createElement(
      "div",
      { style: this.containerStyles },
      nineByNines
    );

    let element = (
      <>
        {board}
        <button onClick={this.solveBoard}>Solve</button>
      </>
    );

    return element;
  }
}

export default SudokuBoard;

// {
/* <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />{" "}
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div>
          <div style={this.subContainerStyles}>
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.firstRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.middleRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
            <input
              style={{ ...this.cellStyles, ...this.bottomRowStyles }}
              type="text"
            />
          </div> */
// }
