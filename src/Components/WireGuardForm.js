import React, { useState } from "react";
import WireGuardInfo from "../models/WireGuardInfo";

const WireGuardForm = () => {
  const [clientName, setClientName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [ipAddress1, setIpAddress1] = useState("");
  const [ipAddress2, setIpAddress2] = useState("");
  const [ipAddress3, setIpAddress3] = useState("");
  const [ipAddress4, setIpAddress4] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [allowedIpRange, setAllowedIpRange] = useState("");
  const [clientPublicKey, setClientPublicKey] = useState("");
  const [clientPrivateKey, setClientPrivateKey] = useState("");

  const clientNameChangeHandler = (e) => {
    setClientName(e.target.value);
  };
  const ipAddressChangeHandler = (e) => {
    setIpAddress(e.target.value);
  };
  
  const ipAddressChangeHandler1 = (e) => {
    setIpAddress1(e.target.value);
  };
  const ipAddressChangeHandler2 = (e) => {
    setIpAddress2(e.target.value);
  };
  const ipAddressChangeHandler3 = (e) => {
    setIpAddress3(e.target.value);
  };
  const ipAddressChangeHandler4 = (e) => {
    setIpAddress4(e.target.value);
  };
  const dateAddedChangeHandler = (e) => {
    setDateAdded(e.target.value);
  };
  const allowedIpRangeChangeHandler = (e) => {
    setAllowedIpRange(e.target.value);
  };
  const clientPublicKeyChangeHandler = (e) => {
    setClientPublicKey(e.target.value);
  };
  const clientPrivateKeyChangeHandler = (e) => {
    setClientPrivateKey(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newWireGuardInfo = new WireGuardInfo(
      clientName,
      ipAddress,
      dateAdded,
      allowedIpRange,
      clientPublicKey,
      clientPrivateKey
    );

    console.log(newWireGuardInfo);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Client Name</label>
          <input type="text" onChange={clientNameChangeHandler}></input>
        </div>
        <div>
          <label>Ip Address</label>
          <input type="number" min="0" max="255" onChange={ipAddressChangeHandler1}></input>.
          <input type="number" min="0" max="255" onChange={ipAddressChangeHandler2}></input>.
          <input type="number" min="0" max="255" onChange={ipAddressChangeHandler3}></input>.
          <input type="number" min="0" max="255" onChange={ipAddressChangeHandler4}></input>
        </div>
        <div>
          <label>Date</label>
          <input type="string" onChange={dateAddedChangeHandler}></input>
        </div>
        <div>
          <label>Allowed IP Range</label>
          <input type="text" onChange={allowedIpRangeChangeHandler}></input>
        </div>
        <div>
          <label>Client Public Key</label>
          <input type="text" onChange={clientPublicKeyChangeHandler}></input>
        </div>
        <div>
          <label>Client Private key</label>
          <input type="text" onChange={clientPrivateKeyChangeHandler}></input>
        </div>

        <button type="submit">Submit</button>
      </form>
      <button>Restart WireGuard</button><br/>
      <a href="/testWGconf.conf" download>Download Client Conf File</a>
    </div>
  );
};

export default WireGuardForm;
