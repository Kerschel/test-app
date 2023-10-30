<script>
export default {
    props: ['orders', 'group'],
    methods: {
      getTimeVariance(date) {
        let currDate= new Date()
        let promiseDate = new Date(date)
        
        let diff = currDate.getTime() - promiseDate.getTime()
        return Math.trunc(diff/(1000 * 3600 * 24))
      }
    },
    // data() {
    //   return{
    //     order: null
    //   }
    // },
    computed: {
      filtered_orders: function (props) {
        console.log(props.group)
        if(props.group === 'air') {
          return this.orders.filter((order) => order.pro_mode_of_transport === 'air_freight' && order.state=="order")
        }
        if(props.group === 'ocean') {
          return this.orders.filter((order) => order.pro_mode_of_transport === 'ocean_freight' && order.state=="order")
        }
        return this.orders.filter((order) => order.pro_mode_of_transport !== 'ocean_freight' && order.state=="order" && order.pro_mode_of_transport !== 'air_freight')
      }
    }
  

}
</script>


<template>
  <div class="card">
    <table class="table table-hover"  style="width: 950px;">
      <thead>
        <tr>
          <th scope="col">Customer Ref #</th>
          <th scope="col">Supplier Promise Date</th>
          <th scope="col">Lead Time Variance</th>
          <th scope="col">Supplier</th>
          <th scope="col">ORD #</th>
        </tr>
      </thead>
      <tbody>
          <tr v-if="filtered_orders.length == 0"><td v-if="filtered_orders.length == 0" colspan="5" class="text-center">No Data Available</td></tr>
          <tr v-for="order in filtered_orders" :key="order.pro_ref_num" >
            <td>{{  order.pro_po_number  }}</td>  
            <td v-if="order.supplier_promise_date==false" >
              Date Not Set
            </td>
            <td v-else >
              {{ order.supplier_promise_date }}
            </td>

            <td v-if="order.supplier_promise_date==false" >
              0 days
            </td>
            <td v-else >
              {{ getTimeVariance(order.supplier_promise_date) }} days
            </td>

            <td v-if="order.pro_shipper[1]">{{ order.pro_shipper[1]}}</td> 
            <td v-else>Supplier not set</td>
            <td>{{ order.pro_ref_num }}</td>            
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