<template>
    <div>
        <LoginPage
            v-if="pageName === 'login'"
            @login="login"
        ></LoginPage>     
        <HomePage
            v-if="pageName === 'home'"
            :categories="categories"
            :task="task"
            :email="email"
            @deleteData="deleteData"
            @logout="logout"
            @addData="addData"
            @updateData ="updateData"
        ></HomePage> 
    </div>
  
</template>

<script>
import axios from './config/axios'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

export default {
  name: 'App',  
  data() {
    return {
      pageName: 'login',
      email: localStorage.email,
      categories: [
          {
              title: 'Backlog',
              color: 'bg-danger',
              category: 'backlog'
          },
          {
              title: 'Product',
              color: 'bg-warning',
              category: 'product'
          },
          {
              title: 'Development',
              color: 'bg-primary',
              category: 'development'
          },
          {
              title: 'Done',
              color: 'bg-success',
              category: 'done'
          }
      ],
      task: []
    };
  },
  components: {
      LoginPage,
      HomePage
  },
  methods: {
      changePage(page) {
          this.pageName = page
      },
      login(payload) {
          const {email, password } = payload
          axios.post('/login', {
              email, password
          })
          .then(({data}) => {
              localStorage.setItem('access_token', data.access_token)
              localStorage.setItem('email', data.email)
              this.changePage('home')
              this.fetchKanban()
              console.log(this.email)
          })
          .catch(console.log)
      },
      auth() {
          if(localStorage.access_token) {
              this.changePage('home')
              this.fetchKanban()
          } else {
              this.changePage('login')
          }
      },
      fetchKanban() {
          axios.get('/kanban', {
              headers: {
                  access_token: localStorage.access_token
              }
          })
          .then(({data}) => {
              this.task = data.data
          })
          .catch(console.log)
      },
      deleteData(id) {
          axios.delete(`/kanban/${id}`, {
              headers: {
                  access_token: localStorage.access_token
              }
          })
          .then(data => {
              this.auth()
          })
          .catch(console.log)
      },
      logout() {
          localStorage.clear()
          this.changePage('login')
      },
      addData(payload) {
          const { title, description, category } = payload
          axios.post('/kanban', {
              title, description, category
          }, {
              headers: {
                  access_token: localStorage.access_token
              }
          })
          .then(({data}) => {
              this.fetchKanban()
          })
          .catch(console.log)
      },
      updateData(payload) {
          const { title, description, category } = payload
          axios.put(`/kanban/${payload.id}`, {
              title, description, category
          }, {
              headers: {
                  access_token: localStorage.access_token
              }
          })
          .then(data => {
              this.auth()
          })
          .catch(console.log)
      }
  },
  created() {
      this.auth()
  }
};
</script>

<style>
    * {
        font-family: 'Lato', sans-serif;
    }
</style>
