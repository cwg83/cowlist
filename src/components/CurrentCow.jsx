import React, {useState} from 'react';


const CurrentCow = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <>
      <div id="current-cow-container">
        <caption id="current-cow-label"><h2>Current Cow</h2></caption>
        <div className="current-cow-row current-cow-header">
          <div className="current-cow-column">Name</div>
          <div className="current-cow-column">Description</div>
          <div className="current-cow-column"><button onClick={()=> {showEditForm ? setShowEditForm(false) : setShowEditForm(true)}}>{showEditForm ? "cancel" : "edit"}</button></div>
        </div>
        { !showEditForm ?
        <div className="current-cow-row">
          <div className="current-cow-column">{props.cow.name}</div>
          <div className="current-cow-column">{props.cow.description}</div>
          <div className="current-cow-column"></div>
        </div>
        : null
        }
        { showEditForm ?
        <form id="current-cow-form" method="post" action={`/api/cows:${props.cow.id}?_method=PUT`}>
          <div className="current-cow-column"><input id="new-name" name="newName"  placeholder={props.cow.name}></input></div>
          <div className="current-cow-column"><textarea id="new-description" name="newDescription" placeholder={props.cow.description} form="current-cow-form"></textarea></div>
          <div className="current-cow-column"><button id="current-submit-cow" type="submit">Submit</button></div>
        </form>
        : null }
      </div>
    </>
  );
}

export default CurrentCow;