const faceio = new faceIO("fioa97fd");

function enrollNewUser(){
  faceio.enroll({
    locale: "auto",
    payload: {
      whoami: 123456,
      email: "desarrolloweb29@epn.edu.ec"
    }
  }).then(userInfo => {
    alert(
      `User Successfully Enrolled! Details:
      Unique Facial ID: ${userInfo.facialId}
      Enrollment Date: ${userInfo.timestamp}
      Gender: ${userInfo.details.gender}
      Age Approximation: ${userInfo.details.age}`
    );
    console.log(userInfo);
  }).catch(errCode => {
    handleError(errCode);
  });
}


function authenticateUser(){
  faceio.authenticate({
        "locale": "auto" 
    }).then(userData => {
        console.log("Success, user identified")
        console.log("Linked facial Id: " + userData.facialId)
        console.log("Payload: " + JSON.stringify(userData.payload))
        window.location.href = "foodcam.html";
      }).catch(errCode => {
        handleError(errCode)
    })
}
