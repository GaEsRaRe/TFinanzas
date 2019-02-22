<template>
    <div>
        <v-toolbar flat fixed  app>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
            <v-btn class="success" @click="go_to('/')">LOG OUT</v-btn>
            
        </v-toolbar>
        <v-container >
            <v-layout row>
             <v-flex xs12>
                  <h2>Bienvenido</h2>
                    <h3>A continuación puede encontrar las multiples opciones de la plataforma CarCost:</h3><br>
             </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs7>
                   
                    <v-layout row>
                        
                        <v-flex xs10>
                            <br>
                            <h2><b>
                            Calculo de Credito Vehicular Manual:
                            </b></h2>
                            <p>
                                Por medio de esta plataforma se le requerira todos los datos necesarios para poder calcular un credito vehicular utilizando los metodos del <b>Banco Interbank </b>
                            </p>

                        </v-flex>
                    </v-layout>
                        <v-layout justify-end row>
                        <v-flex xs6>
                           <v-btn class="success" @click="go_to('/Solicitud')"> Accede al calculo manual </v-btn>
 
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        
                        <v-flex xs10>
                            <br>
                            <h2><b>
                            Calculo de Credito Vehicular Selectivo:
                            </b></h2>
                            <p>
                                Por medio de esta plataforma podra elegir de una serie de autos y se le pediran unicamente la cantidad de cuotas vehiculares. Las tasas son dadas por el  <b>Banco Interbank </b>
                            </p>

                        </v-flex>

                    </v-layout>
                    <v-layout justify-end row>
                        <v-flex xs6>
                           <v-btn class="success" @click="go_to('/Selectivo')"> Accede al calculo selectivo </v-btn>
 
                        </v-flex>
                    </v-layout>

                
                </v-flex>
                <v-flex xs5>
                    En caso tener consultas previas, estas se mostran a continuacion, seleccione para verlas

                </v-flex>
            </v-layout>

        </v-container>

    </div>
</template>

<script>
export default {
    methods: {
        go_to(address){
            this.$router.push(address);

        }
    }
}
</script>

<style>

</style>
