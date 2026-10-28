
module.exports = async (req, res) => {
    // Permite CORS para o app Android conseguir falar com o servidor
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const { code, api_id, api_hash, target_chat } = req.body || {};

        // Aqui o servidor recebe o comando que foi clicado no app Android
        console.log(`Comando recebido: ${code} | Alvo: ${target_chat}`);

        // Podes adicionar aqui a lógica para processar o comando utilizando o api_id e api_hash

        return res.status(200).json({
            success: true,
            message: `Comando ${code} executado com sucesso no backend!`,
            target: target_chat
        });
    }

    return res.status(200).send('DEMON_EYE.SYS Backend Online');
};
