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


                            <br>

                            
                        </v-flex>
                    </v-layout>

                
                </v-flex>
                <v-flex xs5>
                    <v-layout row>
                    <p align="right">
                    En caso tener consultas previas, estas se mostran a continuacion, seleccione para verlas</p>
                    </v-layout>
                    <v-layout justify-end row>
                    <v-flex xs3>
                       
                    <v-btn @click="get_data()"> Actualizar</v-btn>
                    </v-flex>
                    </v-layout>
                    <v-list two-line>
                                <template v-for="(item,index) in datos">
                                    <v-list-tile
                                    :key="index"
                                    avatar
                                    ripple
                                    @click="show_this(index)"
                                    >
                                    <v-list-tile-content>
                                        <v-list-tile-title>Monto solicitado: {{item[0].saldoInicial}} </v-list-tile-title>
                                        <v-list-tile-sub-title class="text--primary">TEA: {{ item[0].TEA * 100}} %</v-list-tile-sub-title>
                                        <v-list-tile-sub-title class="text--primary">Cantidad de Cuotas: {{ item.length}}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                     

                                       
                                    </v-list-tile-action>

                                    </v-list-tile>
                                   
                                </template>
                                </v-list>
                </v-flex>
            </v-layout>
            <v-layout row>
                <br>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <v-data-table
                                    :headers="headers2"
                                    :items="to_show"
                                    class="elevation-1"
                                >
                                    <template slot="items" slot-scope="props">
                                    <td class="text-xs-right">{{ props.item.numCouta }}</td>
                                    <td class="text-xs-right">{{ props.item.TEM }}</td>
                                    <td class="text-xs-right">{{ props.item.saldoInicial }}</td>
                                    <td class="text-xs-right">{{ props.item.inter }}</td>
                                    <td class="text-xs-right">{{ props.item.amort }}</td>
                                    <td class="text-xs-right">{{ props.item.seguroDes }}</td>
                                    <td class="text-xs-right">{{ parseFloat(props.item.cuota).toFixed(2) }}</td>
                                    <td class="text-xs-right">{{ parseFloat(props.item.cuotaFinal).toFixed(2) }}</td>
                                    <td class="text-xs-right">{{ props.item.saldoFinal }}</td>
                                    </template>
                                </v-data-table>

                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
    data: () =>{
        return{
       
        headers2: [
          {
            text: 'Numero de Cuota',
            align: 'left',
            
            value: 'numCouta'
          },
          { text: 'TEM', value: 'TEM' },
          { text: 'Saldo inicial', value: 'saldoInicial' },
          { text: 'Interes', value: 'inter' },
          { text: 'Amortizacion', value: 'amort' },
          { text: 'Seguro de desgravamen', value: 'seguroDes' },
        {  text: 'Cuota', value: 'cuota' },
        {  text: 'Cuota total', value: 'cuotaFinal' },
        {  text: 'Saldo restante', value: 'saldoFinal' }
          
        ],
        to_show: [],
        datos: [[{saldoInicial: 0,tea:0.0}]]
        }
    },    methods: {
        go_to(address){
            this.$router.push(address);

        },get_data(){
            axios.post("http://54.215.238.254:3000/usuario/getCreditos",{username: "patata", password: "patata1"}).then((c) => {
            return c.data
        }).then((r) => {
            this.datos = r.msg 
            console.log(this.datos)
        })
        },show_this(index){
            this.to_show = this.datos[index]
            
        }
    },beforeMount(){
        this.get_data();
    }
}
</script>

<style>
.v-list {
  height: 300px;
  overflow-y: auto;
}
</style>
