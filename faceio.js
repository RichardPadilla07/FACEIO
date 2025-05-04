document.addEventListener("DOMContentLoaded", () => {
    const faceio = new faceIO("93886bace61294fc2c0ddce52d2eeb9c"); // Tu ID público de aplicación
  
    document.getElementById("registerBtn").addEventListener("click", async () => {
      try {
        const userInfo = await faceio.enroll({
          locale: "es",
          payload: {
            nombre: prompt("¿Cuál es tu nombre?") || "Usuario sin nombre",
            email: prompt("¿Cuál es tu correo electrónico?") || "sin@correo.com"
          }
        });
  
        alert(`✅ Registro exitoso:\nID Facial: ${userInfo.facialId}\nEdad aprox: ${userInfo.details.age}\nGénero: ${userInfo.details.gender}`);
        console.log("Registro:", userInfo);
  
      } catch (err) {
        manejarError(err);
      }
    });
  
    document.getElementById("loginBtn").addEventListener("click", async () => {
      try {
        const userData = await faceio.authenticate({ locale: "es" });
        alert(`✅ Bienvenido: ${userData.payload.nombre || "Usuario"}`);
        console.log("Login:", userData);
  
      } catch (err) {
        manejarError(err);
      }
    });
  
    function manejarError(err) {
      console.error("FACEIO Error:", err);
  
      if (typeof err === "object") {
        alert("❌ Ocurrió un error:\nCódigo: " + (err.code ?? "desconocido") + "\nMensaje: " + (err.message ?? "Sin mensaje"));
      } else {
        alert("❌ Error inesperado: " + err);
      }
    }
  });
  