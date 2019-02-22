<template>
    <div>
        <v-layout row>

        </v-layout>
        <v-layout justify-center align-center row>
            <v-flex xs8>

                <!-- CARD PASO 1 --> 
                <v-card v-if="state == 1">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    
                    <v-card-text>
                        <p> Paso 1: VALOR DEL BIEN</p>
                        <v-progress-linear value="0"/> 
                        <v-layout justify-space-around row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout  row>
                                        <v-flex xs5>
                                        <v-subheader>Precio de venta</v-subheader>
                                        </v-flex>
                                        <v-flex xs7>
                                    <v-text-field v-model="pVenta" />
                                        </v-flex>
                                    </v-layout>
                                    
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Porcentaje de cuota inicial:</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                             <v-slider step="5" max="30" v-model="cInicial">   </v-slider>

                                        </v-flex>
                                        <v-flex xs3><v-spacer/>
                                            <v-subheader>
                                            {{cInicial}} %
                                            </v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>TEA</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field v-model="tea" />
                                        </v-flex>
                                        <v-flex xs1>
                                    <v-subheader>%</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                   <v-layout row justify-end>
                                       <v-flex xs4>
                                            <v-btn @click="state = 2" class="success"> Siguiente </v-btn>
                                       </v-flex>
                                       </v-layout>
                                </v-form>
                            </v-flex>
                            <v-flex xs5>
                                <v-layout justify-center row>
                                    <v-flex xs8>
                                        <v-img src="./vehiculos/ford1.jpg"/>
                                    </v-flex>
                                </v-layout>
                                <v-layout justify-center row>
                                    <v-flex xs8>
                                        <v-layout row>
                                            <v-flex xs8>
                                                <v-subheader>Capital a credito:</v-subheader>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-subheader>
                                                {{pVenta*(1-cInicial/100)}}
                                                </v-subheader>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>


                 <!-- CARD PASO 2 --> 
            <v-card v-if="state == 2">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    <v-card-text>
                        <p> Paso 2: PLAZO DE PAGO </p>
                        <v-progress-linear value="25"/> 
                        <v-layout row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout row>
                                        <v-flex xs8>
                                        <v-subheader>Numero de cuotas a pagar</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field  v-model="n"/>
                                        </v-flex>
                                    </v-layout>
                                    
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Fecha de contratación:</v-subheader>
                                        </v-flex>
                                        <v-flex xs7>
                                             <v-menu
                                            :close-on-content-click="false"
                                            v-model="menu1"
                                            :nudge-right="40"
                                            lazy
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            min-width="290px"
                                        >
                                            <v-text-field
                                                slot="activator"
                                                v-model="dateFormatted"
                                                label="Fecha"
                                                prepend-icon="event"
                                                @blur="date = parseDate(dateFormatted)"
                                            ></v-text-field>
                                            <v-date-picker v-model="date" no-title @input="menu1 = false" locale="es-es"></v-date-picker>
                                        </v-menu>

                                        </v-flex>
                                        
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs8>
                                        <v-subheader> Dia de pago:</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field />
                                        </v-flex>
                                    </v-layout>
                                   <v-layout row justify-end>
                                       <v-flex xs4>
                                            <v-btn  @click="state=1" class="success"> Regresar </v-btn>
                                       </v-flex>
                                       <v-flex xs4>
                                           
                                            <v-btn class="success" @click="fill_cuota"> Siguiente </v-btn>
                                       </v-flex>
                                       </v-layout>
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>

            <!-- CARD PASO 3 --> 
                <v-card v-if="state == 3">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    
                    <v-card-text>
                        <p> Paso 3: COSTOS ADICIONALES</p>
                        <v-progress-linear value="50"/> 
                        <v-layout row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Seguro de desgravamen</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field  v-model="seguroDes"/>

                                        </v-flex>
                                        <v-flex xs2>
                                            <v-subheader>%</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Seguro Vehicular</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field v-model="seguroVe" />

                                        </v-flex>
                                        <v-flex xs2>
                                            <v-subheader>%</v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    
                                   <v-layout row justify-end>
                                       <v-flex xs4>
                                            <v-btn  @click="state=3" class="success"> Regresar </v-btn>
                                       </v-flex>
                                       <v-flex xs4>
                                           
                                            <v-btn class="success" @click="state = 4"> Siguiente </v-btn>
                                       </v-flex>
                                       </v-layout>
                                </v-form>
                            </v-flex>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Importe Aseguradora</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field v-model="importeAseg"/>

                                        </v-flex>
                                        <v-flex xs2>
                                            <v-subheader></v-subheader>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Comision por pago de cuota</v-subheader>
                                        </v-flex>
                                        <v-flex xs4>
                                    <v-text-field v-model="p" />

                                        </v-flex>
                                        <v-flex xs2>
                                            
                                        </v-flex>
                                    </v-layout>
                                    
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>



                 <!-- CARD PASO 4 --> 
                <v-card v-if="state == 4">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    
                    <v-card-text>
                        <p> Paso 5: PLAZOS DE GRACIA</p>
                        <v-progress-linear value="75"/> 
                        <v-layout row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout row>
                                        <v-combobox
                                            v-model="plazoParciCuota"
                                            :items="cuotas"
                                            multiple
                                            small-chips
                                            label="Seleccione las cuotas con plazo de gracia parciales"
                                        ></v-combobox>
                                    </v-layout>
                                </v-form>
                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout row>
                                        <v-combobox
                                            v-model="plazoTotalCuota"
                                            :items="cuotas"
                                            multiple
                                            small-chips
                                            label="Seleccione las cuotas con plazo de gracia Totales"
                                        ></v-combobox>
                                    </v-layout>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        
                        <v-layout row>
                        <v-flex xs5>
                        <v-layout row justify-end>
                                       <v-flex xs4>
                                            <v-btn  @click="state=4" class="success"> Regresar </v-btn>
                                       </v-flex>
                                       <v-flex xs4>
                                           
                                            <v-btn class="success" @click="finalizar"> Finalizar </v-btn>
                                       </v-flex>
                                       </v-layout>
                        </v-flex>
                        </v-layout>
                    </v-card-text>

                </v-card>
                 <v-card v-if="state == 5">
                     <v-card-title>Calcula el mejor plan para ti</v-card-title>
                     <v-card-text>
                                <v-data-table
                                    :headers="headers"
                                    :items="datos"
                                    class="elevation-1"
                                >
                                    <template slot="items" slot-scope="props">
                                    <td class="text-xs-right">{{ props.item.numCouta }}</td>
                                    <td class="text-xs-right">{{ props.item.saldoInicial }}</td>
                                    <td class="text-xs-right">{{ props.item.inter }}</td>
                                    <td class="text-xs-right">{{ props.item.amort }}</td>
                                    <td class="text-xs-right">{{ props.item.seguroDes }}</td>
                                    <td class="text-xs-right">{{ props.item.total }}</td>
                                    
                                    </template>
                                </v-data-table>

                     </v-card-text>
                 </v-card>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
/* eslint-disable */


import axios from 'axios';

export default {
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      state: 1,
        cInicial: 0,
        pVenta: 0,
        s: 0,
        tea: 0.0,
        plazoParciCuota: [],
        plazoTotalCuota: [],
        cuotas: [],
        n: 0,
        seguroDes: 0.0,
        seguroVe: 0.0,
        p: 0,
        diaPago: 1,
        importeAseg: 0,
        dia: 1,
        mes: 1,
        anio: 2000,
        datos: [],
        headers: [
          {
            text: 'Numero de Cuota',
            align: 'left',
            sortable: false,
            value: 'numCouta'
          },
          { text: 'Saldo inicial', value: 'saldoInicial' },
          { text: 'Interes', value: 'inter' },
          { text: 'Amortizacion', value: 'amort' },
          { text: 'Seguro de desgravamen', value: 'seguroDes' },
        {  text: 'Total de cuota', value: 'total' }
          
        ]
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
        return val;
      }
    },

    methods: {
    finalizar(){
        var test = [1,2,3,4,5,"test"]
        var pckg = {
            s: this.s,
            tea: parseFloat(this.tea / 100),
            seguroDes: this.seguroDes /100,
            seguroVe: this.seguroVe /100,
        
            p: parseFloat(this.p),
            n: parseInt(this.n),
            diaPago: parseInt(this.diaPago),
            plazoParciCuota: this.plazoParciCuota,
            plazoTotalCuota: this.plazoTotalCuota,
            importeAseg: parseFloat(this.importeAseg)
            
        }
        const fecha = this.dateFormatted.split('/');
        pckg.fecha = {}
        pckg.fecha.dia = parseInt(fecha[0])
        pckg.fecha.mes = parseInt(fecha[1])
        pckg.fecha.anio = parseInt(fecha[2])
        console.log(pckg)
        console.log(pckg.plazoParciCuota)
        console.log(test)

        axios.post("http://54.215.238.254:3000/calculatePlan",pckg).then((c) => {
            return c.data
        }).then((r) => {
            this.datos = r.msg 
            console.log(this.datos)
            this.state = 5;
        })
    },
    fill_cuota(){
        for(var i = 1; i <= this.n; i++){
            this.cuotas.push(i);
        }
        this.s = this.pVenta*(1-this.cInicial/100);
        this.state = 3;
    },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    } 
}
</script>

<style>

</style>
