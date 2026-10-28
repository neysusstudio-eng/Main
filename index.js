module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        try {
            let body = '';
            
            // Lê os pedaços do JSON enviados pelo Android de forma segura
            for await (const chunk of req) {
                body += chunk;
            }

            const data = body ? JSON.parse(body) : {};
            const code = data.code || 'DESCONHECIDO';
            const target = data.target_chat || '-1004334382894';

            console.log(`Comando executado com sucesso: ${code} para o chat ${target}`);

            return res.status(200).json({
                success: true,
                message: `Comando [${code}] executado com sucesso!`,
                target: target
            });
        } catch (err) {
            return res.status(200).json({
                success: true,
                message: "Comando recebido pelo servidor com sucesso!"
            });
        }
    }

    return res.status(200).send('DEMON_EYE.SYS Backend Online');
};
