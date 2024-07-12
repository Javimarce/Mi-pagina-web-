let questions = [
    "¿Estás completamente segura?",
    "¿Estás segura?",
    "¡Di qué shi ❤️!",
    "¡Siii, pinshesha!"
];
let index = 0;
let sizeIncrement = 1.5; // Incremento inicial del tamaño del "Sí"

document.getElementById('no').addEventListener('click', function() {
    document.getElementById('dynamic-question').textContent = questions[index];
    index = (index + 1) % questions.length; // Repetir las preguntas
    sizeIncrement += 0.7; // Aumentar el tamaño cada vez que se presiona "No"
    document.getElementById('yes').style.fontSize = sizeIncrement + 'em'; // Hacer que el "Sí" crezca más
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('thanks').classList.remove('hidden');

    setTimeout(function() {
        document.body.innerHTML = '';
        alert('Te amo bebe');
        window.close(); // Cierra la ventana automáticamente
    }, 6000); // 6 segundos
});