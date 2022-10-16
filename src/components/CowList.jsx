import React from 'react';


const CowList = (props) => {
  return (
    <>
      <table id="cowlist-table">
        <caption><h2>Cow List</h2></caption>
        {props.cows.map((cow) => {
          return (
            <tr>
              <td>
                <span
                  className="cow-name"
                  onClick={(e)=> {props.setCurrentCow({name: cow.name, description: cow.description, id: cow.id})}}
                >
                  {cow.name}
                </span>
                <div
                  className="close"
                  onClick={(e) => {props.deleteCow(cow.id)}}>
                  </div>
              </td>
            </tr>
          )
        })}
      </table>
    </>
  );
}

export default CowList;