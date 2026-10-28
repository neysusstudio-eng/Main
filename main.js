module.exports = (req, res) => {
    // Configura os cabeçalhos para aceitar requisições do seu app Android
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'POST') {
        const { cmd, session } = req.body;

        // Aqui o servidor na nuvem processa o comando que o app enviou
        console.log("Comando recebido do app:", cmd);

        // Responde de volta para o aplicativo Android
        return res.status(200).json({
            status: "SUCCESS",
            message: `Comando ${cmd} processado com sucesso na nuvem 24h.`,
            timestamp: Date.now()
        });
    }

    // Se acessar via GET direto no link, apenas confirma que o serviço está online
    return res.status(200).json({
        status: "DEMON_EYE BACKEND ONLINE",
        uptime: "24/7"
    });
};
