import React from 'react'

export const Table = (props) => {
  const tableHead = props.tableHead
  const tableBody = props.tableBody

  let dynamicThElements = []
  for (let i = 0; i < tableHead.length; i++) {
    dynamicThElements.push(<th scope='col' key={i}>{tableHead[i]}</th>)
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            {dynamicThElements}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((items, index) => {
            <tr key={index}>
              {items.map((item, index) => {
                <td>{item}</td>
              })}
            </tr>
          })}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}