import React, { useState } from 'react';
import WireGuardInfo from '../models/WireGuardInfo';

const WireGuardForm = () => {
  const [clientName, setClientName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [allowedIpRange, setAllowedIpRange] = useState('');
  const [clientPublicKey, setClientPublicKey] = useState('');
  const [clientPrivateKey, setClientPrivateKey] = useState('');

  const clientNameChangeHandler =(e) =>{
      setClientName(e.target.value)
  }
  const ipAddressChangeHandler =(e) =>{
    setIpAddress(e.target.value)
}
const dateAddedChangeHandler =(e) =>{
  setDateAdded(e.target.value)
}
const allowedIpRangeChangeHandler =(e) =>{
  setAllowedIpRange(e.target.value)
}
const clientPublicKeyChangeHandler =(e) =>{
  setClientPublicKey(e.target.value)
}
const clientPrivateKeyChangeHandler =(e) =>{
  setClientPrivateKey(e.target.value)
}
const submitHandler =(e)=>{
  e.preventDefault();
  const newWireGuardInfo = new WireGuardInfo(clientName, ipAddress, dateAdded, allowedIpRange, clientPublicKey, clientPrivateKey);

  console.log(newWireGuardInfo)

}

  return <form onSubmit={submitHandler}>
    <div>
      <label>
        Client Name
      </label>
      <input type='text' onChange={clientNameChangeHandler}></input>
    </div>
    <div>
      <label>
        Ip Address
      </label>
      <input type='text' onChange={ipAddressChangeHandler}></input>
    </div>
    <div>
      <label>
        Date 
      </label>
      <input type='text' onChange={dateAddedChangeHandler}></input>
    </div>
    <div>
      <label>
        Allowed IP Range
      </label>
      <input type='text' onChange={allowedIpRangeChangeHandler}></input>
    </div>
    <div>
      <label>
        Client Public Key
      </label>
      <input type='text' onChange={clientPublicKeyChangeHandler}></input>
    </div>
    <div>
      <label>
        Client Private key
      </label>
      <input type='text' onChange={clientPrivateKeyChangeHandler}></input>
    </div>
      
      <button type='submit'>Submit</button>

  </form>;
};

export default WireGuardForm;
