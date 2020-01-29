import { Server, Model, baseConfig } from 'miragejs'

export function makeServer ({ environment = 'development' } = {}) {
  let server = new Server({
    environment,
    models: {
      user: Model
    },
    seeds (server) {
      server.create('user', { name: 'Bob' })
      server.create('user', { name: 'Alice' })
    },
    routes () {
      // this.urlPrefix = 'http://localhost:8081'
      this.namespace = 'api'

      this.get('/users', schema => {
        return schema.users.all()
      })

      this.get('/users/:id', (schema, request) => {
        let id = request.params.id
        return schema.users.find(id)
      })
    }
  })
  return server
}
