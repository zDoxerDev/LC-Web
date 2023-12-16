let chatBoxVisible = false;
let welcomeMessageSent = false;

document.addEventListener('DOMContentLoaded', function () {
    /*document.getElementById('chatBoxHeader').addEventListener('click', function() {
        toggleChatBox();
    });*/

    document.getElementById('helpBtn').addEventListener('click', function() {
        toggleChatBox();
        // Verificar si el mensaje de bienvenida ya se envió
        if (!welcomeMessageSent) {
            mostrarMensajeChatbot('¡Hola! ¿En qué puedo ayudarte?');
            welcomeMessageSent = true;
        }
    });

    document.getElementById('sendBtn').addEventListener('click', function() {
        enviarMensajeUsuario();
    });
});

function toggleChatBox() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBoxVisible ? 'none' : 'block';
    chatBoxVisible = !chatBoxVisible;
}

function enviarMensajeUsuario() {
    const userInput = document.getElementById('userInput');
    const mensajeUsuario = userInput.value.trim();

    if (mensajeUsuario !== '') {
        mostrarMensajeUsuario(mensajeUsuario);
        // Simular la respuesta del chatbot
        mostrarMensajeChatbot('Respuesta');
        userInput.value = ''; // Limpiar el campo de entrada del usuario
    }
}

function mostrarMensajeUsuario(mensaje) {
    const chatMessages = document.getElementById('chatMessages');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.textContent = mensaje;
    chatMessages.appendChild(userMessageDiv);
    // Hacer scroll hacia abajo para mostrar el nuevo mensaje
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function mostrarMensajeChatbot(mensaje) {
    const chatMessages = document.getElementById('chatMessages');
    const chatbotMessageDiv = document.createElement('div');
    chatbotMessageDiv.className = 'chatbot-message';
    chatbotMessageDiv.textContent = mensaje;

    chatMessages.appendChild(chatbotMessageDiv);
    // Hacer scroll hacia abajo para mostrar el nuevo mensaje
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
