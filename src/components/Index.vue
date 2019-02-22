<template>
    <div>
        <v-toolbar flat fixed  app>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
            <v-btn class="success" @click="go_to('/Login')">SIGN IN</v-btn>
            <v-btn class="success" @click="go_to('/CreateUser')">SIGN UP</v-btn>
        </v-toolbar>
        <v-layout row>
            <h1> CARCOST LOGO </h1>
        </v-layout>
        <v-layout row>
            <v-flex xs11>
            <p align="right">
            HOME / ABOUT / MISION / CONTACT US
            </p>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-img src="./banner.jpg"/>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs10>
        <v-layout  row justify-space-between>
            <v-flex xs3>
                <v-layout row>
                    <br>
                </v-layout>
                <v-layout justify-center row>
                    <v-flex xs5>
                    <v-img src="./shield.png"/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                    <h2 align="center"> Security </h2>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    Lorem ipsum dolor sit amet, consectetur adipSuspendisse tortor dolor, tincidunt sit amet ullamcorper posuere, faucibus congue nisi. Donec eleifend est eget ante lacinia laoreet. Ut nisl libero, consectetur quis mattis quis, ultricies at ante. Proin at est ex. 
                </v-layout>
            </v-flex>
            <v-flex xs3>
                <v-layout row>
                    <br>
                </v-layout>
                <v-layout justify-center row>
                    <v-flex xs5>
                    <v-img src="./support.png"/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                    <h2 align="center"> Support </h2>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    Lorem ipsum dolor sit amet, consectetur adipSuspendisse tortor dolor, tincidunt sit amet ullamcorper posuere, faucibus congue nisi. Donec eleifend est eget ante lacinia laoreet. Ut nisl libero, consectetur quis mattis quis, ultricies at ante. Proin at est ex. 
                </v-layout>
            </v-flex>
            <v-flex xs3>
                <v-layout row>
                    <br>
                </v-layout>
                <v-layout justify-center row>
                    <v-flex xs5>
                    <v-img src="./add.png"/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                    <h2 align="center"> Plus </h2>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    Lorem ipsum dolor sit amet, consectetur adipSuspendisse tortor dolor, tincidunt sit amet ullamcorper posuere, faucibus congue nisi. Donec eleifend est eget ante lacinia laoreet. Ut nisl libero, consectetur quis mattis quis, ultricies at ante. Proin at est ex. 
                </v-layout>
            </v-flex>
        </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    methods:{
        go_to(address){
            this.$router.push(address);
        }
    }
}
</script>

<style>

</style>
