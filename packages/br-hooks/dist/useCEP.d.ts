export interface CEPData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    ddd: string;
}
export declare function useCEP(): {
    data: CEPData | null;
    loading: boolean;
    error: string | null;
    fetchCEP: (cep: string) => Promise<void>;
};
