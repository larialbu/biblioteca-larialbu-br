export async function fetchCEP(cep) {
    const clean = cep.replace(/\D/g, '');
    if (clean.length !== 8) {
        throw new Error('CEP inválido: deve conter 8 dígitos.');
    }
    const response = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar CEP: ${response.status}`);
    }
    const data = await response.json();
    if (data.erro) {
        throw new Error('CEP não encontrado.');
    }
    return data;
}
