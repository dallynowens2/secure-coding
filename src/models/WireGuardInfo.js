export default class WireGuardInfo{
    id;
    clientName;
    ipAddress;
    dateAdded;
    allowedIpRange;
    clientPublicKey;
    clientPrivateKey;

    constructor(clientName, ipAddress,dateAdded, allowedIpRange, clientPublicKey, clientPrivateKey){
        this.clientName = clientName;
        this.ipAddress = ipAddress;
        this.dateAdded = dateAdded;
        this.allowedIpRange = allowedIpRange;
        this.clientPublicKey = clientPublicKey;
        this.clientPrivateKey = clientPrivateKey;
    }

}