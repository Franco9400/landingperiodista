import { Observable } from '@nativescript/core';
import { Utils } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    // Initialize properties
    viewModel.chatMessage = "";
    viewModel.chatResponse = "";
    viewModel.email = "";

    // Social Media Actions
    viewModel.onFacebookTap = () => {
        Utils.openUrl("https://facebook.com/elmediador");
    };

    viewModel.onTwitterTap = () => {
        Utils.openUrl("https://twitter.com/elmediador");
    };

    viewModel.onInstagramTap = () => {
        Utils.openUrl("https://instagram.com/elmediador");
    };

    // Chatbot functionality
    viewModel.onChatSend = () => {
        const message = viewModel.get('chatMessage');
        // Simple chatbot response logic
        let response = "Gracias por tu mensaje. Un representante te responderá pronto.";
        
        if (message.toLowerCase().includes("horario")) {
            response = "Estamos disponibles 24/7 para brindarte las últimas noticias.";
        } else if (message.toLowerCase().includes("contacto")) {
            response = "Puedes contactarnos en contacto@elmediador.com";
        }

        viewModel.set('chatResponse', response);
        viewModel.set('chatMessage', '');
    };

    // Newsletter subscription
    viewModel.onSubscribe = () => {
        const email = viewModel.get('email');
        if (email) {
            viewModel.set('email', '');
            alert('¡Gracias por suscribirte a nuestro boletín!');
        } else {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    };

    return viewModel;
}