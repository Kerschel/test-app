<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import SidePanel from '../sidepanel.vue'
import GroupTable from './table.vue'

import getOrdersShipping from '../../../../composables/getOrdersShipping.js'

export default {
    components: {
        SidePanel, 
        GroupTable, 
        Layout, 
        PageHeader
    },
    props: ['group'],
    data() {
    return {
      title: "Orders > In Transit",

    };
  },
  setup(){
    let {orders, error, load} = getOrdersShipping()
    load()
    return {orders, error}
  }
}
</script>

<template>
    <div>
        <Layout>
            <PageHeader :title="title" :items="items"/>
            <div class="container-fluid">
                <div class="d-inline-flex">
                    <div class="col-sm-auto">
                        <div class="p-3 border bg-light"><SidePanel/></div>
                    </div>
                    <div class="col-lg-auto">
                        <div class="p-3 border bg-light"><GroupTable :orders="orders" :group="group"/></div>
                    </div>
                </div>
            </div>
        </Layout>

    </div>

</template>

