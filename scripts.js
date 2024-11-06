function verifyUser() {
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const knowledge = document.getElementById('knowledge').value;
    const interest = document.getElementById('interest').value;
    const accessLink = document.getElementById('accessLink');
    const form = document.getElementById('verificationForm');
    
    // Validar edad
    if (age < 18) {
        alert("Debes ser mayor de edad para acceder al canal.");
        return;
    }

    // Validar número de teléfono colombiano
    const colombianPhoneRegex = /^(\+57|57)?3\d{9}$/;
    if (!colombianPhoneRegex.test(phone)) {
        alert("Debes ingresar un número de teléfono colombiano válido.");
        return;
    }

    // Verificar conocimiento en apuestas deportivas
    if (knowledge !== "si") {
        alert("Debes tener conocimiento en apuestas deportivas para acceder.");
        return;
    }

    // Verificar interés en apuestas responsables
    if (interest !== "si") {
        alert("Debes estar interesado en ganar dinero de manera responsable con análisis deportivos.");
        return;
    }

    // Si todas las validaciones pasan, muestra el enlace
    form.style.display = "none";
    accessLink.style.display = "block";
}