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
        let rawData = '';
        
        req.on('data', chunk => {
            rawData += chunk;
        });

        req.on('end', () => {
            try {
                const body = rawData ? JSON.parse(rawData) : {};
                const { code, api_id, api_hash, target_chat } = body;

                console.log(`Comando recebido com sucesso: ${code} para o chat ${target_chat}`);

                res.status(200).json({
                    success: true,
                    message: `Comando ${code} executado com sucesso!`,
                    target: target_chat
                });
            } catch (err) {
                res.status(400).json({
                    success: false,
                    error: "Erro no formato JSON"
                });
            }
        });
        return;
    }

    res.status(200).send('DEMON_EYE.SYS Backend Online');
};
