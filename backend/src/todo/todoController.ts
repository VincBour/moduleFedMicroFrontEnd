import { TodoDAL } from "./todoDAL";
import TodoDTO, { TodoSchema } from "./todoModel"

const createTodo =  async (item: any) => {
    const todo = new TodoDTO(item);
    const result = await TodoDAL.createTodo(todo);
    return result;
}

export const TodoController = {
    createTodo,
}