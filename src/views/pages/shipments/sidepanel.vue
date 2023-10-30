<script>

</script>

<template>
    <div class="email-leftbar card">
      <div class="mail-list  d-flex flex-column">

        <h6 class="mt-4">Imports</h6>
        
        <div class="mail-list mt-1">
          <router-link to="/shipments/imports/air" :params="air">
            <span class="mdi mdi-circle-outline text-info float-end"></span>
            <span v-if="this.$route.path.includes('imports/air') || this.$route.path == '/'" class="active-side">Air</span>
            <span v-else>Air</span>
          </router-link>
          <router-link to="/shipments/imports/ocean" :params="ocean">
          <span class="mdi mdi-circle-outline text-info float-end"></span>
          <span v-if="this.$route.path.includes('imports/ocean')" class="active-side">Ocean</span>
          <span v-else>Ocean</span>
          </router-link>
        </div>

        <h6 class="mt-4">Exports</h6>

        <div class="mail-list mt-1">
          <router-link to="/shipments/exports/air" :params="air">
            <span class="mdi mdi-circle-outline text-info float-end"></span>
            <span v-if="this.$route.path.includes('exports/air') || this.$route.path == '/'" class="active-side">Air</span>
            <span v-else>Air</span>
          </router-link>
          <router-link to="/shipments/exports/ocean" :params="ocean">
          <span class="mdi mdi-circle-outline text-info float-end"></span>
          <span v-if="this.$route.path.includes('exports/ocean')" class="active-side">Ocean</span>
          <span v-else>Ocean</span>
          </router-link>
        </div>


      </div>
    </div>
</template>