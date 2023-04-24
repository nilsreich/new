import { mutation, query } from './_generated/server'
import { Id } from "./_generated/dataModel";

export const addTodo = mutation(async ({ db }, { task }: { task: string }) => {
    await db.insert('todos', { task, completed: false })
})

export const getAllTodo = query(async ({ db }) => {
    return await db.query('todos').collect()
})

export const toggleTodo = mutation(async ({ db }, { id }: { id: Id<"todos"> }) => {
 
    await db.patch(id, { completed: true });

})