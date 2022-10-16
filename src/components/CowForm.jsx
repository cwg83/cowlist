import React from 'react';


const CowForm = () => {
  return (
    <>
      <div id="form-container">
        <form method="post" action="/api/cows">
          <input id="cow-name" placeholder="Name" name="name"></input>
          <input id="cow-description" placeholder="Description" name="description"></input>
          <button id="submit-cow" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CowForm;