import React, { useEffect, useState } from "react";
import wireGuardService from "../services/WireGuardService";

const WireGuardList = () => {
  const [wireGuard, setWireGuard] = useState([]);
  useEffect(() => {
      let mounted = true;
      wireGuardService.getWireGuardInfo().then(items => {
          if(mounted){
              setWireGuard(items)
          }
      })
    //setWireGuard((prev) => [...prev, wireGuardService.getWireGuardInfo()]);
  }, []);

  console.log(wireGuard)

  const wireGuardList = wireGuard.map((wg) => {
    return (
      <div>
        <span>{wg.id}</span>
        <span>{wg.clientName}</span>
        <span>{wg.ipAddress}</span>
      </div>
    );
  });
  return <div>{wireGuardList}</div>;
};

export default WireGuardList;
