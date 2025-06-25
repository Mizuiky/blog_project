import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";

//estou dizendo que ele é do tipo post repository da minha interface entao somente os metodos de lá serao acessiveis
//nao importa a classe, ira sempre usar os mesmos metodos da interface
//A classe pode ser diferente poderem tera implementacoes diferentes para base de dados diferentes porem com a mesma interface
//Entao eu posso mudar onde esta o new por exmplo para trocar  base de dados
export const postRepository: PostRepository = new JsonPostRepository();
