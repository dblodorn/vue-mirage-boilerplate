import { Server, Model } from 'miragejs'

export function makeServer ({ environment = 'development' } = {}) {
  let server = new Server({
    environment,
    models: {
      todos: Model
    },
    seeds (server) {
      server.create('todo', { todo_item: 'Get Up' })
      server.create('todo', { todo_item: 'Take A Shower' })
      server.create('todo', { todo_item: 'Go To Work' })
    },
    routes () {
      this.namespace = 'api'

      this.get('/todos', schema => {
        return schema.todos.all()
      })

      this.get('/todos/:id', (schema, request) => {
        let id = request.params.id
        return schema.todos.find(id)
      })

      this.post('/todos', (schema, request) => {
        let todo_item = JSON.parse(request.requestBody).todo_item
        return schema.todos.create({ todo_item })
      })

      this.del('/todos/:id', (schema, request) => {
        let id = request.params.id
        schema.todos.find(id).destroy()
      })

      this.patch('/todos/:id', (schema, request) => {
        let id = request.params.id
        let newTodo = JSON.parse(request.requestBody).todo_item
        schema.todos.find(id).update({ todo_item: newTodo })
      })
    }
  })
  return server
}
