<script>
export default {
  props: ['quotations', 'state'],
  computed: {
    filtered_quotations: function(props) {
      if (props.state === 'won'){
        return this.quotations.filter((quotation) => quotation.state === 'won')
      }
      if (props.state === 'lost'){
        return this.quotations.filter((quotation) => quotation.state === 'lost')
      }
      if (props.state === 'cancelled'){
        return this.quotations.filter((quotation) => quotation.state === 'cancelled')
      }
      return this.quotations.filter((quotation) => quotation.state !== 'won' && quotation.state !== 'lost' && quotation.state !== 'cancelled')
  }
}}
</script>

<template>
  <div class="card">
    <table class="table table-hover" style="width: 950px;">
      <thead>
        <tr>
          <th scope="col">Quote #</th>
          <th scope="col">Port of Loading</th>
          <th scope="col">Port of Discharge</th>
          <!-- <th scope="col">Scope</th> -->
          <th scope="col">Quote Requested Date</th>
          <th scope="col">Quote Sent to Customer Date</th>
          <!-- <th v-if="state === 'open'" scope="col">Status</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-if="filtered_quotations.length == 0"><td v-if="filtered_quotations.length == 0" colspan="5" class="text-center">No Data Available</td></tr>
          <tr v-for="quotation in filtered_quotations" :key="quotation.code" >
            <td>{{quotation.code}}</td>           
            <td v-if="quotation.port_of_loading[1]">{{  quotation.port_of_loading[1]  }}</td> 
            <td v-else>Not set</td>           
            <td v-if="quotation.port_of_discharge[1]">{{ quotation.port_of_discharge[1] }}</td> 
            <td v-else>Not set</td>
            <!-- <td>{{quotation.scope}}</td>  -->
            <td>{{ quotation.create_date }}</td> 
            <td v-if="quotation.approved_date">{{ quotation.approved_date }}</td>
            <td v-else>Not set</td>
            <!-- <td v-if="state === 'open'">{{ quotation.state.charAt(0).toUpperCase() + quotation.state.slice(1) }}</td> -->
            <!-- <td v-if="state !== 'open'">{{ quotation.date_status_change }}</td>              -->
        </tr>
        
      </tbody>
    </table>
  </div>
</template>