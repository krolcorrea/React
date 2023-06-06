import Temas from "./Temas";
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Temas|null;
    usuario?: User | null
        
    }
    export default Postagem