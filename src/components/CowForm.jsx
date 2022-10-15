import React from 'react';


const CowForm = () => {
  return (
    <>
      <form method="post" action="/api/cows">
        <input id="cow-name" placeholder="Name"></input>
        <input id="cow-description" placeholder="Description"></input>
        <button id="submit-cow">Submit</button>
      </form>
    </>
  );
}

export default CowForm;