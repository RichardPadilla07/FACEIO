const faceio = new faceIO("fioa97fd");

function enrollNewUser(){
  faceio.enroll({
    locale: "auto",
    payload: {
      whoami: 123456,
      email: "john.doe@example.com"
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

 // Initialize with your application's Public ID
function authenticateUser(){
  faceio.authenticate({
        "locale": "auto" // Default user locale
    }).then(userData => {
        console.log("Success, user identified")
        // Grab the facial ID linked to this particular user which will be same
        // for each of his successful future authentication. FACEIO recommend 
        // that your rely on this Facial ID if you plan to uniquely identify 
        // all enrolled users on your backend for example.
        console.log("Linked facial Id: " + userData.facialId)
        // Grab the arbitrary data you have already linked (if any) to this particular user
        // during his enrollment via the payload parameter of the enroll() method.
        console.log("Payload: " + JSON.stringify(userData.payload)) // {"whoami": 123456, "email": "john.doe@example.com"} from the enroll() example above
        window.location.href = "foodcam.html"; // Redirect to another page after successful authentication
      }).catch(errCode => {
        handleError(errCode)
    })
}

