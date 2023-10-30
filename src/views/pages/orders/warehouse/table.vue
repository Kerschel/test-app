<script>
export default {
    props: ['orders', 'group'],
    computed: {
      filtered_orders: function (props) {
        // return this.orders.filter((order) => order.pro_cargo_ready_date !== false)
        if(props.group === 'no-warehouse') {
            return this.orders.filter((order) => order.docked_state === 'delivered_not_docked' && order.state == 'warehouse')
        }
        else{
            return this.orders.filter((order) => order.state == 'warehouse')
         }
      }
    },
}
</script>


<template>
  <div class="card">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Ref Num</th>
          <th scope="col">Warehouse Receipt</th>
          <th scope="col">Supplier</th>
          <th scope="col">Hazardous</th>
          <th scope="col">Docked State</th>
          <th scope="col">Days in Warehouse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filtered_orders.length == 0"><td v-if="filtered_orders.length == 0" colspan="5" class="text-center">No Data Available</td></tr>
        <tr v-for="order in filtered_orders" :key="order.pro_ref_num">
          <td>{{ order.pro_po_number }}</td>
          <td v-if="order.warehouse_receipt_num">{{ order.warehouse_receipt_num }}</td>
          <td v-else>Not Received</td>
          <td>{{ order.pro_shipper[1] }}</td>
          <td v-if="order.hazardous">{{ order.hazardous.charAt(0).toUpperCase() + order.hazardous.slice(1) }}</td>
          <td v-else>Not set</td>
          <td>{{ order.docked_state.charAt(0).toUpperCase() + order.docked_state.slice(1).replaceAll('_', ' ') }} </td>
          <td>{{ order.days_in_warehouse_bucket }} days</td>
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
