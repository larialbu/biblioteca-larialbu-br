export interface ViaCEPResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}
export declare function fetchCEP(cep: string): Promise<ViaCEPResponse>;
