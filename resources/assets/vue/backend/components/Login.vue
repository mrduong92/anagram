<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-box">
                <h1 class="text-center">Đăng nhập</h1>
                    <form v-on:submit.prevent="handleLoginFormSubmit()">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon" id="email">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </span>
                                <input class="form-control" placeholder="Email" name="email" id="CustomerLoginForm_email" type="text" required="" minlength="5" v-model="login.email">
                            </div>
                           
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon" id="password">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                                <input class="form-control" placeholder="Password" name="password" id="CustomerLoginForm_password" type="password" required="" minlength="8" v-model="login.password">
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-block btn-ali">Login</button>
                        </div>
                    </form>
                    <div class="form-group">
                        <a href="#">Forgot Password?</a>
                        <a class="pull-right" href="#">Resend Active Code
                            hoạt</a>
                    </div>
                <div class="login-w">
                    <p class="separator text-center">
                        <i>Or Login with</i>
                    </p>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="#" class="btn btn-block btn-fb">
                                <i class="fa fa-facebook" aria-hidden="true"></i> &nbsp; Facebook
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="#" id="signin-by-google" class="btn btn-block btn-gplus">
                                <i class="fa fa-google-plus" aria-hidden="true"></i> &nbsp; Google+
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {loginUrl} from '.././config'
    import {clientId, clientSecret} from '.././env'

    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            handleLoginFormSubmit(){
                console.log(this.login.email);
                var postData = {
                    grant_type: 'password',
                    client_id: clientId,
                    client_secret: clientSecret,
                    username: this.login.email,
                    password: this.login.password,
                    scope: ''
                }

                axios.post(loginUrl, postData)
                  .then(function (response) {
                    console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }
        }
    }
</script>