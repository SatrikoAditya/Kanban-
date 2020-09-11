<template>
    <div>
        <LoginPage
            v-if="pageName === 'login'"
            @login="login"
            @register="register"
            @auth="auth"
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
              this.$swal({
                icon: 'success',
                title: 'Success login',
                showConfirmButton: false,
                timer: 1500
              })
          })
          .catch(err => {
              console.log(err.response.data.allError[0])
              this.$swal({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.response.data.allError[0]
              })
          }) 
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
          this.$swal({
            title: 'Are you sure want to delete this task?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if(result.isConfirmed) {
                axios.delete(`/kanban/${id}`, {
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(data => {
                    this.$swal({
                        icon: 'success',
                        title: 'success deleted task',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.auth()
                })
                .catch(err => {
                    this.$swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response.data.allError[0]
                    })
                })
              }
          })
          
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
              this.$swal({
                  icon: 'success',
                  title: 'Your task has been saved',
                  showConfirmButton: false,
                  timer: 1500
              })
              this.fetchKanban()
          })
          .catch(err => {
              this.$swal({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.response.data.allError[0]
              })
          })
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
              this.$swal({
                  icon: 'success',
                  title: 'Success edit task',
                  showConfirmButton: false,
                  timer: 1500
              })
              this.auth()
          })
          .catch(err => {
              this.$swal({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.response.data.allError[0]
              })
          })
      },
      register(payload) {
          const {email, password} = payload
          axios.post('/register', {
              email, password
          })
          .then(({data}) => {
              this.$swal({
                icon: 'success',
                title: 'Success register',
                showConfirmButton: false,
                timer: 1500
              })
              this.auth()
          })
          .catch(err => {
              this.$swal({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.response.data.allError[0]
              })
          })
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
