<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import GroupTable from './table.vue'
import getBookings from '../../../composables/getBookings.js'
import SidePanel from './sidepanel.vue'
export default {
    components: {
        Layout,
        GroupTable,
        PageHeader,
        SidePanel
    },
    props: ['direction', 'mode'],
    setup(){
        let {bookings, error, load} = getBookings()
        load()
        return {bookings, error}
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
                        <div class="p-3 border bg-light"><GroupTable :bookings="bookings" :direction="direction" :mode="mode"/></div>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
</template>