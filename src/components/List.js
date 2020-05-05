import React from "react";

function List(props) {
  const field = (props.sortBy === "firstNameSort") ? "first" : "last";
  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          {props.results.sort((a, b) => a.name[field] > b.name[field] ? 1 : -1).map(result => (
            <tr key={result.id.value}>
              <td><img className="img-fluid" alt={result.name.first} src={result.picture.large} /></td>
              <td>{`${result.name.first} ${result.name.last}`}</td>
              <td>{result.location.city + ", " + result.location.state}</td>
              <td>{result.cell}</td>
              <td>{result.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List;