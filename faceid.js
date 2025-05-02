// Inicializa FaceIO con tu API key
const faceio = new faceIO("fd423cf7b152320d7894719e8a6fdbd8");

// Registro
document.getElementById("btnRegister").addEventListener("click", () => {
  faceio.enroll({
    locale: "es",
    payload: {
      email: "usuario@ejemplo.com",
      nombre: "Juan Pérez"
    }
  }).then(userInfo => {
    console.log("Usuario registrado:", userInfo);
    alert("✅ Usuario registrado:\n" + JSON.stringify(userInfo.payload));
  }).catch(err => {
    console.error("Error de registro:", err);
    alert("❌ No se pudo registrar el rostro.\nCódigo de error: " + err.code + "\nMensaje: " + err.message);
  });
});
