import { repository } from "../utils/dataBase/Repository";
import { TODO, TodoSchema } from "./todoModel";

const findAllTodo = repository.find(TODO, TodoSchema); 

const findOneTodo =repository.findOne(TODO,TodoSchema);

const createTodo = repository.create(TODO, TodoSchema);
export const TodoRepository = {
    findAllTodo,
    findOneTodo,
    createTodo
}
