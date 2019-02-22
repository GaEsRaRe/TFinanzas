<template>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary" flat>
                <v-toolbar-title>CarCost</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" label="Usuario" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model="password"  label="Password"  type="password" v-on:keyup.enter="login"></v-text-field>
                </v-form>
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
            password: ""
        }
    },
    methods:{
        login(){
            axios.post("http://54.215.238.254:3000/validateUser",{username: this.username, password: this.password}).then((s) =>{
                console.log(s);
            })
        }
    }
}
</script>

<style>

</style>
