import { useState, useCallback } from 'react';
export function useCEP() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchCEP = useCallback(async (cep) => {
        const clean = cep.replace(/\D/g, '');
        if (clean.length !== 8) {
            setError('CEP inválido');
            return;
        }
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
            const result = await response.json();
            if (result.erro) {
                setError('CEP não encontrado');
            }
            else {
                setData(result);
            }
        }
        catch {
            setError('Erro de conexão');
        }
        finally {
            setLoading(false);
        }
    }, []);
    return { data, loading, error, fetchCEP };
}
