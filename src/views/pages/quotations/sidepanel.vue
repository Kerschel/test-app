<script>
</script>

<template>
  <div class="email-leftbar card">
    <div class="mail-list  d-flex flex-column">

      <h6 class="mt-4">Open Quotations</h6>
 
      <div class="mail-list mt-1">
        <router-link to="/quotations/open">
          <span class="mdi mdi-circle-outline text-info float-end"></span>
          <span v-if="this.$route.path.includes('open')" class="active-side">All Open Quotes</span>
          <span v-else>All Open Quotes</span>
        </router-link>
      </div>

      <h6 class="mt-4">Closed Quotations</h6>
 
        <div class="mail-list mt-1">
          <router-link to="/quotations/won" :params="won">
            <span class="mdi mdi-circle-outline text-success float-end"></span>
            <span v-if="this.$route.path.includes('won')" class="active-side">Won</span>
            <span v-else>Won</span>
          </router-link>

          <router-link to="/quotations/lost" :params="lost">
            <span class="mdi mdi-circle-outline text-warning float-end"></span>
            <span v-if="this.$route.path.includes('lost')" class="active-side">Lost</span>
            <span v-else>Lost</span>
          </router-link>

          <router-link to="/quotations/cancelled" :params="cancelled">
            <span class="mdi mdi-circle-outline text-danger float-end"></span>
            <span v-if="this.$route.path.includes('cancelled')" class="active-side">Canceled</span>
            <span v-else>Canceled</span>
          </router-link>
        </div>

     
    </div>
  </div>
</template>


