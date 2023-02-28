import React from "react";
import "./Session.css"

function Session() {
  function resetSequenceNumbers(sessionId) {
    document.getElementById(`inputSeqNum${sessionId}`).innerText = '0';
    document.getElementById(`outputSeqNum${sessionId}`).innerText = '0';
  }

  return (
    <div className="session">
      <h1 class="h1">Session Configuration</h1>
      <table class="styled-table center">
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Input Sequence Number</th>
            <th>Output Sequence Number</th>
            <th>Last Message Received</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Session 1</td>
            <td id="inputSeqNum1">34353</td>
            <td id="outputSeqNum1">346564</td>
            <td id="lastMsg1">Connection interupted</td>
            <td>
              <button onClick={() => resetSequenceNumbers(1)}>Reset Sequence Numbers</button>
            </td>
          </tr>
          <tr>
            <td>Session 2</td>
            <td id="inputSeqNum2">0</td>
            <td id="outputSeqNum2">0</td>
            <td id="lastMsg2">N/A</td>
            <td>
              <button onClick={() => resetSequenceNumbers(2)}>Reset Sequence Numbers</button>
            </td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}

export default Session;