//1.import react and reactDom lob
import React from "react";
import ReactDOM from "react-dom";

//2.create a react component
const App = function () {
  const buttonText = { text: "click me!" };
  const labelText = "enter name";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" />
      {/*<button style=" background-color: "blue", color: "white" "> -- normal html*/}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};
//or
// const App = ()=>{
//     return <div>Hi there!</div>
// }

//3.take the react component annd show it on the screen
//ReactDOM.render(<App />, document.querySelector("#root"));//or->
ReactDOM.render(<App />, document.getElementById("root"));
