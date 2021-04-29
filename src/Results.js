import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="results text-center">
          <br/>
        <h2 class="text-center">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <br />
              <Meaning meaning={meaning} />
              <hr />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
