import { ITodoDoc } from "./todoModel";
import { TodoRepository } from "./todoRepository";

const createTodo = async (item: ITodoDoc) => {
    console.log('dal', item);
    const result = await TodoRepository.createTodo(item);
    return result;
}

export const TodoDAL = {
    createTodo
}