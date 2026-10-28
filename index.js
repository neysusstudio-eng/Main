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
            const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
            const code = body.code || 'DESCONHECIDO';
            const target = body.target_chat || '-1004334382894';

            return res.status(200).json({
                success: true,
                message: `Comando [${code}] processado com sucesso!`,
                target: target
            });
        } catch (e) {
            return res.status(200).json({
                success: true,
                message: "Comando recebido com sucesso!"
            });
        }
    }

    return res.status(200).send('DEMON_EYE.SYS Backend Online');
};
