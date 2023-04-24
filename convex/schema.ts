import {defineSchema, defineTable} from 'convex/schema'
import {v} from 'convex/values'

export default defineSchema({
    todos: defineTable({
        task: v.string(),
        completed: v.boolean(),
    }),
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(),
      }).index("by_token", ["tokenIdentifier"]),
})
