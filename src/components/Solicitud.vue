<template>
    <div>
        <v-layout row>

        </v-layout>
        <v-layout row>
            <v-flex xs10>
                <v-card v-if="state == 1">
                    <v-card-title>Calcula el mejor plan para ti</v-card-title>
                    <v-card-text>
                        <p> Paso 1 </p>
                        <v-progress-linear value="0"/> 
                        <v-layout row>
                            <v-flex xs5>
                                <v-form>
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Precio de venta</v-subheader>
                                        </v-flex>
                                        <v-flex xs7>
                                    <v-text-field />
                                        </v-flex>
                                    </v-layout>
                                    
                                    <v-layout row>
                                        <v-flex xs5>
                                        <v-subheader>Porcentaje de cuota inicial:</v-subheader>
                                        </v-flex>
                                        <v-flex xs5>
                                             <v-slider step="5" max="30" v-model="cInicial">   </v-slider>

                                        </v-flex>
                                        <v-flex xs2>
                                            <v-subheader>
                                            {{cInicial}} %
                                            </v-subheader>
                                        </v-flex>
                                        
                                    </v-layout>
                                   <v-layout row justify-end>
                                       <v-flex xs4>
                                            <v-btn class="success"> Siguiente </v-btn>
                                       </v-flex>
                                        </v-layout>
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
export default {
    data: () => {
        return {
            state: 1,
            cInicial: 0
        }
    }
}
</script>

<style>

</style>
