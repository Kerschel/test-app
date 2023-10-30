
<script>
export default {
    props: ['shipments', 'direction', 'mode'],
    methods: {
        getDays(x, y) {
        let arrivalDate= new Date(x)
        let departureDate = new Date(y)
        
        let diff = arrivalDate.getTime() - departureDate.getTime()
        return Math.trunc(diff/(1000 * 3600 * 24))
      }
    },
    computed: {
        filtered_shipments: function(props) { 
          if(props.direction === 'imports' && props.mode == 'air'){
            return this.shipments.filter((shipment) => shipment.booking_type === 'import' && shipment.mode_of_transport == 'air_freight')
          } 
          else if(props.direction === 'imports' && props.mode == 'ocean'){
            return this.shipments.filter((shipment) => shipment.booking_type === 'import' && shipment.mode_of_transport == 'ocean_freight')
          }
          else if(props.mode === 'exports' && props.mode == 'air') {
            return this.shipments.filter((shipment) => shipment.booking_type === 'export' && shipment.mode_of_transport == 'air_freight')
          }
          else if(props.mode === 'exports' && props.mode == 'ocean') {
            return this.shipments.filter((shipment) => shipment.booking_type === 'export' && shipment.mode_of_transport == 'ocean_freight')
          }else{
            return true
          }
        }
    }
}
</script>

<template>
    <div class="card">
      <table class="table table-hover" style="width: 950px;">
        <thead>
          <tr>
            <!-- <th style="width: 5%;" scope="col">Customer Ref #</th> -->
            <th scope="col">Days from arrival</th>
            <th scope="col">Shipper</th>
            <th v-if="direction === 'exports'" scope="col">ETD</th>
            <th v-else scope="col">ETA</th>
            <th scope="col">Ramps Ref #</th>
          </tr> 
        </thead>
        <tbody>
            <tr v-for="shipment in filtered_shipments" :key="shipment.po_no" >
              <!-- <td v-if="shipment.po_no == '0'">Not set</td>   -->
              <!-- <td v-else-if="shipment.po_no != '0'">{{  shipment.po_no.replace(',', "")  }}</td>    -->
              <!-- <td v-else>Not set</td>        -->
              <td>{{ getDays(shipment.eta, shipment.etd) }} days</td> 
              <td>{{ shipment.shipper[1] }}</td>
              <td v-if="direction === 'exports'">{{ shipment.etd }}</td>
              <td v-if="direction === 'imports'">{{ shipment.eta }}</td>   
              <td>{{ shipment.booking_reference_number[1] }}</td>          
          </tr>
        </tbody>
      </table>
    </div>

  </template>