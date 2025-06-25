import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";

//estou dizendo que ele é do tipo post repository da minha interface entao somente os metodos de lá serao acessiveis
//nao importa se existir mais metodos aqui nesta classe o que importa é o da interface
export const postRepository: PostRepository = new JsonPostRepository();
