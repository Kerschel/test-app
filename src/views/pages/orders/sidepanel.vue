<script>
</script>

<template>
  <div class="email-leftbar card">
    <div class="mail-list  d-flex flex-column">
      <!-- <router-link tag="a" to="/orders/pending" class="active">
        <i class="mdi mdi-email-outline font-size-16 align-middle me-2"></i> Pending
      </router-link> -->

      <h6 class="mt-4">Awaiting Supplier</h6>
 
      <div class="mail-list mt-1">
        <router-link to="/orders/pending/air" :params="air">
          <span class="mdi mdi-circle-outline text-info float-end"></span>
          <span v-if="this.$route.path.includes('air') || this.$route.path == '/'" class="active-side">Air</span>
          <span v-else>Air</span>
        </router-link>
        <router-link to="/orders/pending/ocean" :params="ocean">
        <span class="mdi mdi-circle-outline text-info float-end"></span>
        <span v-if="this.$route.path.includes('ocean')" class="active-side">Ocean</span>
        <span v-else>Ocean</span>
        </router-link>
        <router-link to="/orders/pending/nan" :params="nan">
        <span class="mdi mdi-circle-outline text-info float-end"></span>
        <span v-if="this.$route.path.includes('nan')" class="active-side">Mode Not Set</span>
        <span v-else>Mode Not Set</span>
        </router-link>
      </div>

      <h6 class="mt-4">Available for Pickup</h6>
 
      <div class="mail-list mt-1">
        <router-link to="/orders/transit/trucker" :params="trucker">
        <span class="mdi mdi-circle-outline text-warning float-end"></span>
        <span v-if="this.$route.path.includes('transit/trucker')" class="active-side">Has a Trucker Booking</span>
        <span v-else>Has a Trucker Booking</span>
        </router-link>
        <router-link to="/orders/transit/no-trucker" :params="no-trucker">
        <span class="mdi mdi-circle-outline text-warning float-end"></span>
        <span v-if="this.$route.path.includes('no-trucker')" class="active-side">No Trucker Booking</span>
        <span v-else>No Trucker Booking</span>
        </router-link>
      </div>

      <h6 class="mt-4">At Warehouse</h6>
      
      <div class="mail-list mt-1">
        <router-link to="/orders/warehouse/warehouse" :params="warehouse">
        <span class="mdi mdi-circle-outline text-success float-end"></span>
        <span v-if="this.$route.path.includes('warehouse/warehouse')" class="active-side">Miami Warehouse</span>
        <span v-else>Miami Warehouse</span>
        </router-link>
        <!-- <router-link to="/orders/warehouse/no-warehouse" :params="no-warehouse">
        <span class="mdi mdi-circle-outline text-success float-end"></span>
        <span v-if="this.$route.path.includes('no-warehouse')" class="active-side">Received, Not Docked</span>
        <span v-else>Received, Not Docked</span>
        </router-link> -->
      </div>



      <!-- <div class="btn-group">
        
        

        <button class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Pending
          <i class="mdi mdi-chevron-down"></i>
        </button>
        <ul class="dropdown-menu"  aria-labelledby="dropdownMenuLink">
          <li><router-link to="/orders/pending/air" :params="air"></router-link></li>
          <li><router-link to="/orders/pending/ocean" :params="ocean"><button class="dropdown-item">Ocean</button></router-link></li>
          <li><router-link to="/orders/pending/nan" :params="nan"><button class="dropdown-item">Not Set</button></router-link></li>
        </ul>
      </div>
      <div class="btn-group">
        <button class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Transit
          <i class="mdi mdi-chevron-down"></i>
        </button>
        <ul class="dropdown-menu"  aria-labelledby="dropdownMenuLink">
          <li><router-link to="/orders/transit/trucker" :params="trucker"><button class="dropdown-item">Trucker</button></router-link></li>
          <li><router-link to="/orders/transit/no-trucker" :params="no-trucker"><button class="dropdown-item">No Trucker</button></router-link></li>
        </ul>
      </div>
        <button class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Warehouse
          <i class="mdi mdi-chevron-down"></i>
        </button>
        <ul class="dropdown-menu"  aria-labelledby="dropdownMenuLink">
          <li><router-link to="orders/transit/trucker" :params="warehouse"><button class="dropdown-item">Warehouse</button></router-link></li>
          <li><router-link to="/orders/warehouse" :params="no-warehouse"><button class="dropdown-item">No Warehouse</button></router-link></li>
        </ul> -->
    </div>
  </div>
</template>
