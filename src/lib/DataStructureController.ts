
import { Stack } from "./Stack/Stack";
export const createStack = () => {
    const stack = new Stack<number>();
    stack.add(1);
    stack.add(3);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    stack.add(6);
    stack.add(7);
    return stack
}

export const createDataStructures = () => {
    const stack =  createStack();

    const data = {
        stack: Object.getOwnPropertyNames(Stack.prototype).filter(
            (key) => key !== "constructor"
        ),
        queue: ["add", "offer", "element", "peek", "remove", "poll"],
        linkedList: [],
    };

    return {
        data, 
        stack
    }
}
