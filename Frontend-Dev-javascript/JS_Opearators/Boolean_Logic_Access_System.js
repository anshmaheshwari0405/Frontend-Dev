let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let accessStatus = (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) ? "Secure" : "Unsafe";

console.log("Access: " + accessStatus);

isAlarmOn = false;  
console.log("Access: " + (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe"));
