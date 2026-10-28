function execute(cmd) {
    log('EXECUTING: ' + cmd + '_QUERY...');
    
    // Verifica se o aplicativo Android está conectado via WebView Bridge
    if (window.AndroidBridge && typeof window.AndroidBridge.postMessage === 'function') {
        // Envia o comando direto para o Java do seu app no Sketchware Pro!
        window.AndroidBridge.postMessage(cmd);
        log('DISPATCHED TO APP NATIVE BRIDGE.');
    } else {
        log('WARNING: RUNNING IN BROWSER MODE.');
    }
}
