<script>
import { ref } from 'vue'
import { url } from "../../../App.vue";
export default {

    props: ['bookings', 'direction', 'mode'],
    methods: {
      downloadPDF(pdf, name) {
          const linkSource = `data:application/pdf;base64,${pdf}`;
          const downloadLink = document.createElement("a");
          const fileName = name;

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
      },

      toggle(id, comments_ids, attachment_ids) {
        // Get Request
        const comments = ref([])
        const error = ref(null)
        const load = async () => {
          try {
              let data = await fetch(`${url}/booking-comments/${comments_ids}`)
              console.log(`${url}`);
              console.log(data);
              if(!data.ok) {
                  throw Error("no data available")
              }
              comments.value = await data.json()
              this.comments[id] = comments.value;
              console.log(comments.value);
          }
          catch(err) {
              error.value = err.message
              console.log(err.message)
          }
      }
        load();



    // Get Request
    const load_attachment = async () => {
      try {
          let data2 = await fetch(`${url}/attachments/${attachment_ids}`)
          console.log(`${url}`);
          // console.log(data2.json());
          if(!data2.ok) {
              throw Error("no data available")
          }
          this.attachments_data[id] = await data2.json()
          // console.log(this.attachments_data);
      }
      catch(err) {
          error.value = err.message
          console.log(err.message)
      }
    }
    load_attachment();

        // console.log(load);
        const index = this.opened.indexOf(id);
        if (index > -1) {
          this.opened.splice(index, 1)
        } else {
          this.opened.push(id)
        }

        console.log(this.opened);

      }
    },
    computed: {
        filtered_bookings: function(props) { 
          if(props.direction === 'imports' && props.mode == 'air'){
            return this.bookings.filter((booking) => booking.booking_type === 'import' && booking.mode_of_transport == 'air_freight')
          } 
          else if(props.direction === 'imports' && props.mode == 'ocean'){
            return this.bookings.filter((booking) => booking.booking_type === 'import' && booking.mode_of_transport == 'ocean_freight')
          }
          else if(props.mode === 'exports' && props.mode == 'air') {
            return this.bookings.filter((booking) => booking.booking_type === 'export' && booking.mode_of_transport == 'air_freight')
          }
          else if(props.mode === 'exports' && props.mode == 'ocean') {
            return this.bookings.filter((booking) => booking.booking_type === 'export' && booking.mode_of_transport == 'ocean_freight')
          }else{
            return true
          }
          // return bookings.filter((booking) => booking.mode_of_transport === 'air_freight' && booking.etd >= new Date())
        }
    },
    data () {
      return {
        opened: [], 
        comments: {},
        attachments_data: {}
      }
    }
}
</script>

<template>
    <div class="card">
      <table class="table" style="width: 950px;">
        <thead>
          <tr>
            <!-- <th scope="col">Booking ID</th> -->
            <th scope="col">Customer Ref #</th>
            <th scope="col">Shipper</th>
            <th scope="col">Freight Type</th>
            <th v-if="direction === 'exports'" scope="col">ETD</th>
            <th v-else scope="col">ETA</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody v-for="booking in filtered_bookings" :key="booking.booking_number">
            <tr style="height: 50px;">
              <!-- <td v-if="booking.id">{{  booking.id  }}</td>   -->
              <td v-if="booking.booking_number">{{  booking.booking_number  }}</td>  
              <td v-else>Not set</td>          
              <td>{{  booking.shipper[1] }}</td> 
              <td>{{  booking.type_of_move.toUpperCase() }}</td> 
              <td v-if="direction === 'exports'">{{ booking.etd }}</td>
              <td v-if="direction === 'imports'">{{ booking.eta }}</td>  
              <td @click="toggle(booking.id, booking.all_follow_up_comments, booking.commercial_invoice)" class="btn btn-info" style="">Show/Hide Details</td>
            </tr>
            <tr v-if="opened.includes(booking.id)">
              <table>
                <th>Lastest Update</th>
                <th>Last Updated Date</th>
                <tbody v-for="comment in comments[booking.id]" :key="comment.id">
                  <tr>
                    <td>{{ comment.name }}</td>
                    <td>{{ comment.next_follow_up_date }}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <th>File Name</th>
                <th>Link</th>
                <tbody v-if="attachments_data[booking.id] == undefined">
                  <tr>
                    <td colspan="5" class="text-center">No Data Available</td>
                  </tr>
                </tbody>
                <tbody v-for="attach in attachments_data[booking.id]" :key="attach.id">
                
                  <tr>
                    <td>{{ attach.display_name }}</td>
                    <td><a class="btn btn-primary" @click="downloadPDF(attach.datas, attach.display_name)">Download PDF document</a></td>
                  </tr>
                </tbody>
              </table>
              <td>
                <b>Linked Purchase Orders: </b>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </template>