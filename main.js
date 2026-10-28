function executarAcao(tipo) {
    // Envia a mensagem para o aplicativo Android capturar
    if (window.AndroidBridge) {
        window.AndroidBridge.postMessage(tipo);
    }
}
