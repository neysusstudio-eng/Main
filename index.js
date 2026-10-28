module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        try {
            // Garante que o corpo é lido corretamente mesmo se vier como string ou JSON
            let body = req.body;
            if (typeof body === 'string') {
                body = JSON.parse(body);
            }

            const { code, api_id, api_hash, target_chat } = body || {};

            console.log(`Comando executado: ${code} | Chat: ${target_chat}`);

            return res.status(200).json({
                success: true,
                message: `Comando ${code} processado com sucesso pelo backend!`,
                target: target_chat
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                error: "Erro ao processar JSON: " + err.message
            });
        }
    }

    return res.status(200).send('DEMON_EYE.SYS Backend Online');
};
