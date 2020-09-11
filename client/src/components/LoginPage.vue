<template>
    <section class="container">
            <div class="row justify-content-center mt-5">
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
                    </form><br>
                    <form>
                        <div class="col text-center">
                            Don't have an account?<a onclick="toRegister(event)" style="color: blue;"> Register here</a>
                        </div>
                    </form>
                </div>
            </div>
    </section>
    
</template>

<script>
export default {
    name: 'loginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$emit('login', payload)
        }
    }
}
</script>

<style>

</style>