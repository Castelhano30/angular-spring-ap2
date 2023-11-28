import { lutas_of } from "./lutas_of";

export interface Lutas {

  id?: number;
  nome: string;
  cpf: string;
  lutas?: lutas_of[];
  urlImage?: string;

}
