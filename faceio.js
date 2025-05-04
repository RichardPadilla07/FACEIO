const faceio = new faceIO("fioa1ce8");

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

function authenticateUser(){
  faceio.authenticate({
    locale: "auto"
  }).then(userInfo => {
    alert(`User authenticated! Welcome ${userInfo.details.email}`);
    console.log(userInfo);
  }).catch(errCode => {
    handleError(errCode);
  });
}

function handleError(errCode){
  console.error("FaceIO Error:", errCode);
}


const faceioAut = new faceIO("fioa1ce8"); // Initialize with your application's Public ID
function authenticateUser(){
  faceioAut.authenticate({
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
    }).catch(errCode => {
        handleError(errCode)
    })
}