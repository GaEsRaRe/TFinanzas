<template>
    <v-content>
      <v-toolbar flat fixed  app>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
            <v-btn class="success" @click="go_to('/')">REGRESAR</v-btn>
            
        </v-toolbar>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="success" flat>
                <v-toolbar-title>CarCost</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" label="User" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model="password"  label="Password"  type="password" v-on:keyup.enter="login"></v-text-field>
                </v-form>
                <v-alert
                  v-model="alert"
                  dismissible
                  type="warning"
                >
                  Wrong password
                </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login" flat>Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
    data: () =>{
        return{
            username: "",
            password: "",
            alert: false
        }
    },
    methods:{
        login(){
            axios.post("http://54.215.238.254:3000/validateUser",{username: this.username, password: this.password}).then((s) =>{
                if(s.data.msg == true){
                  this.$router.push("/Menu")
                }else{
                  this.alert = true
                }
            })
        },go_to(address){
            this.$router.push(address);
        }
    }
}
</script>

<style>

</style>
