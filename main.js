module.exports = async (req, res) => {
    // Permite requisições de qualquer origem (o seu aplicativo)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        try {
            // O aplicativo envia o código/comando e os dados da sessão
            const { code, session } = req.body;

            if (!code) {
                return res.status(400).json({ error: "Nenhum código fornecido pelo aplicativo." });
            }

            // Aqui a Vercel executa de forma dinâmica o código que o app mandou
            // (ou processa a lógica baseada no comando recebido)
            let result;
            try {
                // Executa o trecho de código JavaScript enviado pelo app
                result = eval(code);
            } catch (err) {
                result = "Erro na execução: " + err.message;
            }

            // Retorna o resultado processado de volta para o aplicativo Android
            return res.status(200).json({
                status: "SUCCESS",
                output: result,
                executed_at: new Date().toISOString()
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    return res.status(200).json({ status: "DEMON_EYE 24/7 BACKEND READY" });
};
