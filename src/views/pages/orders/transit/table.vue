<script>
  export default {
    props: ['orders', 'group'],
    computed: {
      filtered_orders: function (props) {
        // return this.orders.filter((order) => order.pro_cargo_ready_date !== false)
        if(props.group === 'no-trucker') {
            return this.orders.filter((order) => order.rtr_ref_num === 'New' && order.state == "trucking")
        }
        else{
            return this.orders.filter((order) => order.rtr_ref_num != 'New' && order.state == "trucking")
         }
      }
    },
  }
</script>


<template>
  <div class="card">
    <table class="table table-hover" style="width: 950px;">
      <thead>
        <tr>          
          <th scope="col">Ref Num</th>
          <th scope="col">Supplier</th>
          <th scope="col">Schedule Pickup Date</th>
          <th scope="col">Actual Pickup Date</th>
          <!-- <th scope="col">ETA at Destination</th> -->
          <th scope="col">Destination</th>
          <th scope="col">Order Number</th>
          <th v-if="this.$route.params.group != 'no-trucker'" scope="col">RTR Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filtered_orders.length == 0"><td v-if="filtered_orders.length == 0" colspan="5" class="text-center">No Data Available</td></tr>
        <tr v-for="order in filtered_orders" :key="order.pro_ref_num">
          <td>{{ order.pro_po_number }}</td>
          <td>{{ order.pro_shipper[1] }}</td>
          <td>{{ order.pro_cargo_ready_date }}</td> 
          <td>{{ order.requested_pick_up_date }}</td> 
          <!-- <td>{{this.$route}}</td>  -->
          <td>{{ order.delivery_address_street_1 }}</td>
          <td>{{ order.pro_ref_num }}</td>
          <td v-if="order.rtr_ref_num != 'New'">{{ order.rtr_ref_num }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table {
    padding-right:0px;
    margin-right:0px;
}
</style>