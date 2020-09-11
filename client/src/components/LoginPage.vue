<template>
    <section class="container">
            <div class="row justify-content-center mt-4">
                <div class="shadow p-4 mb-5 bg-white rounded">
                    <center>
                        <img src="../img/icon_kanban.png" alt="kanban" class="img-fluid" width="180px"><br><br>
                        <h5><b>Welcome to Hacktiv8 Kanban!</b></h5><br>
                    </center>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input 
                                v-model="email" 
                                type="email" 
                                class="form-control" 
                                id="login-email" 
                                aria-describedby="emailHelp"
                                placeholder="Input your email here..">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input 
                                v-model="password" 
                                type="password" 
                                class="form-control" 
                                id="login-password" 
                                placeholder="Input your password here..">
                        </div>
                        <div class="col text-center mt-4">
                            <button type="submit" class="btn btn-primary btn-block rounded"
                            style="align-content: center;">Login</button>
                        </div>
                    </form>
                    <button v-google-signin-button="clientId" class="google-signin-button col text-center"> Continue with Google</button><br><br>
                    <form>
                        <ModalRegister
                            @register="registerUser"
                        ></ModalRegister>
                    </form>
                </div>
            </div>
    </section>
    
</template>

<script>
import axios from '../config/axios'
import ModalRegister from './ModalRegister'
export default {
    name: 'loginPage',
    data() {
        return {
            email: '',
            password: '',
            clientId: '369062318650-p3g3fgnvfshi2ql9gk4pdm3ratrp3ag8.apps.googleusercontent.com',
            registerEmail: '',
            registerPassword: ''
        }
    },
    components: {
        ModalRegister
    },
    methods: {
        auth() {
            this.$emit('auth')
        },
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$emit('login', payload)
        },
        registerUser(payload) {
            this.$emit('register', payload)
        },
        OnGoogleAuthSuccess (idToken) {
            axios.post('/googlesign', {
                idToken
            })
            .then(data => {
                console.log(data)
                localStorage.setItem('access_token', data.data.access_token)
                this.auth()
            })
            .catch(console.log)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }
}
</script>

<style>
.google-signin-button {
    color: white;
    background-color: #0074d9;
    height: 1px;
    margin-top: 10px;
    font-size: 16px;
    border-radius: 5px;
    padding-bottom: 28px;
    padding-top: 5px;
}
</style>