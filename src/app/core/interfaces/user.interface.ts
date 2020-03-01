export interface CompraItem {
    _id: string; 
    peca_id: string;
    quant: number; 
}

export interface Manutencao {
    _id: string; 
    desc: string; 
    agenda: string; 
    local: string; 
}

export interface Usuario {
    _id: string; 
    nome: string; 
    cpfcnpj: string; 
    telefone: string[]; 
    roles: string[]; 
    email: string; 
    password?: string; 
    manutencao: Manutencao[], 
    compra_itens: CompraItem[], 
    createdAt: string; 
    updatedAt: string; 
    _v: number; 
}

