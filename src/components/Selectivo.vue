<template>
    <div>
        <v-toolbar flat fixed  app>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
            <v-btn class="success" @click="go_to('/MENU')">BACK TO MENU</v-btn>
            
        </v-toolbar>
        <v-layout row justify-space-around v-if="selecting">
            <v-flex xs3>
                <v-card>
                    <v-card-title>
                    </v-card-title>
                    <v-card-text>
                        <v-layout justify-center row>
                            <v-flex xs9>
                                    <v-img src="./vehiculos/toyota1.jpg"></v-img>
                            </v-flex>

                        </v-layout>
                        <v-layout row justify-center >
                            <v-flex xs9>
                                    <h3> Toyota Prius </h3>
                            </v-flex>
                            
                        </v-layout>

                        <v-layout row justify-center >
                            <v-flex xs9>
                                    <b> Costo: </b> {{carros.toyota.precio}} <br>
                                    {{carros.toyota.descripcion}}
                            </v-flex>
                            
                        </v-layout>
                    </v-card-text>


                    <v-card-actions>
                        <v-spacer/>
                        <v-btn class="success" flat @click="choose(carros.toyota)"> Elegir esta opción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs3>
                <v-card>
                    <v-card-title>
                    </v-card-title>
                    <v-card-text>
                        <v-layout justify-center row>
                            <v-flex xs9>
                                    <v-img src="./vehiculos/mazda1.jpeg"></v-img>
                            </v-flex>

                        </v-layout>
                        <v-layout row justify-center >
                            <v-flex xs9>
                                    <h3> Mazda 2 </h3>
                            </v-flex>
                            
                        </v-layout>

                        <v-layout row justify-center >
                            <v-flex xs9>
                                    <b> Costo: </b> {{carros.mazda.precio}} <br>
                                    {{carros.mazda.descripcion}}
                            </v-flex>
                            
                        </v-layout>
                    </v-card-text>


                    <v-card-actions>
                        <v-spacer/>
                        <v-btn class="success" flat @click="choose(carros.mazda)"> Elegir esta opción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs3>
                <v-card>
                    <v-card-title>
                    </v-card-title>
                    <v-card-text>
                        <v-layout justify-center row>
                            <v-flex xs9>
                                    <v-img src="./vehiculos/fiat1.jpg"></v-img>
                            </v-flex>

                        </v-layout>
                        <v-layout row justify-center >
                            <v-flex xs9>
                                    <h3> Fiat 500 </h3>
                            </v-flex>
                            
                        </v-layout>

                        <v-layout row justify-center >
                            <v-flex xs9>
                                    <b> Costo: </b> {{carros.fiat.precio}} <br>
                                    {{carros.fiat.descripcion}}
                            </v-flex>
                            
                        </v-layout>
                    </v-card-text>


                    <v-card-actions>
                        <v-spacer/>
                        <v-btn class="success" flat @click="choose(carros.fiat)"> Elegir esta opción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>

        <v-layout justify-center align-center row v-if="!selecting">
            <v-flex xs8>

                <!-- CARD PASO 1 --> 
                <v-card v-if="state == 1">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    <v-card-text>
                        <p> Paso 1: SELECCIONAR CUOTA INICIAL</p>
                        <v-progress-linear value="0"/> 
                        <v-layout justify-space-around row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout  row>
                                        <v-flex xs5>
                                        <v-subheader>Precio de venta</v-subheader>
                                        </v-flex>
                                        <v-flex xs7>
                                    <v-text-field readonly reverse v-model="pVenta" />
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
                                    <v-text-field reverse v-model="tea" readonly />
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
                                    <v-text-field  reverse v-model="n"/>
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
                                    <v-text-field reverse v-model="diaPago" />
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

                <v-card v-if="state == 3">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    
                    <v-card-text>
                        <p> Paso 3: PLAZOS DE GRACIA</p>
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
                                            <v-btn  @click="state=2" class="success"> Regresar </v-btn>
                                       </v-flex>
                                       <v-flex xs4>
                                           
                                            <v-btn class="success" @click="finalizar"> Finalizar </v-btn>
                                       </v-flex>
                                       </v-layout>
                        </v-flex>
                        </v-layout>
                    </v-card-text>

                </v-card>
                 <v-card v-if="state == 4">
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
                                    <td class="text-xs-right">{{ parseFloat(props.item.cuota).toFixed(2) }}</td>
                                    <td class="text-xs-right">{{ parseFloat(props.item.cuotaFinal).toFixed(2) }}</td>
                                    <td class="text-xs-right">{{ props.item.saldoFinal }}</td>
                                    </template>
                                </v-data-table>
                                    <v-layout row justify-end>
                                       <v-flex xs4>
                                            
                                       </v-flex>
                                       <v-flex xs4>
                                           
                                            <v-btn  @click="save" class="success"> Guardar </v-btn>
                                       </v-flex>
                                       </v-layout>
                     </v-card-text>
                 </v-card>
            </v-flex>
        </v-layout>
        <!-- Luego de ser seleccionado -->
    </div>
</template>

<script>

/* eslint-disable */
import axios from 'axios';
export default {
    data: vm => ({
                date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            selecting: true,
            state: 1,
            menu1: false,
            menu2: false,
            selected: {},
            cInicial: 0,
            carros: {
                toyota:{
                    precio: 29000,
                    pic: "./vehiculos/toyota1.jpg",
                    descripcion: "Este modelo híbrido también optimiza combustible, pues es capaz de llegar a un rendimiento de 82 km/gl. Asimismo, tiene un motor de gasolina de  1.7 litros y 99 HP."
                },
                mazda:{
                    precio: 14990,
                    pic: "./vehiculos/mazda1.jpeg",
                    descripcion: "La magia de este modelo para ahorrar combustible se centra en su tecnología Skyactive. Asimismo, posee un motor de 1.5 litro con una potencia de 106 HP"
                }, fiat: {
                    precio: 15990,
                    pic: "./vehiculos/fiat1.jpg",
                    descripcion: "Este auto se ha posicionado como uno de los autos de ciudad con mejor rendimiento. Motor de 1.2 litros y una potencia máxima de 69 hp, combustible promedio de 68.5 km/gl. "
                }
            },
            tea: 14.49,
            headers: [
                {
                    text: 'Numero de Cuota',
                    align: 'left',
                    
                    value: 'numCouta'
                },
                { text: 'Saldo inicial', value: 'saldoInicial' },
                { text: 'Interes', value: 'inter' },
                { text: 'Amortizacion', value: 'amort' },
                { text: 'Seguro de desgravamen', value: 'seguroDes' },
                {  text: 'Cuota', value: 'cuota' },
                {  text: 'Cuota total', value: 'cuotaFinal' },
                {  text: 'Saldo restante', value: 'saldoFinal' }
                
                ],
            seguroDes: 0.000375,
            seguroVe: 0.425,
            p: 10,
            importeAseg: 100,
            diaPago: 1,
            n: 1,
            s: 0,
            dia: 1,
            mes: 1,
            anio: 2000,
            datos: [],
            to_send: [],
            plazoParciCuota: [],
            plazoTotalCuota: [],
            cuotas: [],
            pVenta: 0
        }),methods:{
        choose(a){
            this.selected = a;
            this.selecting = false
            this.pVenta =a.precio
        },formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },go_to(address){
            this.$router.push(address);
        },save(){
            var pckg = {
                username: "patata",
                password: "patata1",
                credito: this.to_send
            };
            axios.post("http://54.215.238.254:3000/usuario/postCreditos",pckg).then((r) => {
                return r.data;
            }).then((d) => {
                console.log(d)
            })
                
                },finalizar(){
        var pckg = {
            s: this.s,
            tea: parseFloat(this.tea / 100),
            seguroDes: this.seguroDes,
            seguroVe: this.seguroVe,
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

        axios.post("http://54.215.238.254:3000/calculatePlan",pckg).then((c) => {
            return c.data
        }).then((r) => {
            this.datos = r.msg 
            this.to_send = r.msg
            console.log(this.datos)
            this.state = 4;
        })
    },fill_cuota(){
        for(var i = 1; i <= this.n; i++){
            this.cuotas.push(i);
        }
        this.s = this.pVenta*(1-this.cInicial/100);
        this.state = 3;
    }

    },computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
        return val;
      }
    }
}
</script>

<style>

</style>
