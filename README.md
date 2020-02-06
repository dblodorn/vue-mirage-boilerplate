# VUE MIRAGE BOILERPLATE

Simple starter web app: [Vue.js](https://vuejs.org/) frontend, [webpack 4](https://webpack.js.org/) config, [vue-styled- components](https://github.com/styled-components/vue-styled-components) with [mirage.js](https://miragejs.com/) for a mock API to develop against.

## What is Mirage
"Mirage JS is an API mocking library that lets you build, test and share a complete working JavaScript application without having to rely on any backend services."

## Why
Like Vue? Wanna prototype some kinda web app thingy? This is a good starting place. I've also included my preferred webpack config as opposed to VUE-CLI, cause chances are you may want to add or modify your build steps. And threw in the vue port of [Styled Components](https://styled-components.com/) - CAUSE STYLED COMPONENTS IS THA BEST - for styling!

### TO RUN
    - Install Depenedencies
    yarn

    - Develop
    yarn dev
    
### THE API JAZZ:

    You Can define your endpoints, schemas etc in: src/server.js
    
    // GET Request
    this.get('/todos', schema => {
      return schema.todos.all()
    })
    
    // POST Request
    this.post('/todos', (schema, request) => {
      let todo_item = JSON.parse(request.requestBody).todo_item
      return schema.todos.create({ todo_item })
    })


## CHECK IT OUT 🤙🏻

![Image of Boilerplate in Action](https://github.com/dblodorn/vue-mirage-boilerplate/blob/master/assets/imgs/mirage-vue-luv.gif?raw=true)

👩‍💻 HAVE FUN 👨🏽‍💻

