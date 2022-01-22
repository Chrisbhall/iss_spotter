// index.js
//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');
/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  fetchCoordsByIP(ip,(error, data) =>{
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    //console.log(data["latitude"], data["longitude"]);
    fetchISSFlyOverTimes(data,(error, resp) =>{
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
      console.log(resp);
    });
  });
});*/
// index.js

const { nextISSTimesForMyLocation } = require('./iss');
let d = 0;
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const date of passTimes) {
    d = new Date(0);
    d.setUTCSeconds(date.risetime);
    console.log("Next pass at " + d.toString() +" for " + date.duration + " seconds!");
  }
  //console.log(passTimes);
});



