import { ref } from 'vue'
import { url } from "../App.vue";
const getOrders = () => {
    const orders = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`${url}/orders`)
            if(!data.ok) {
                throw Error("no data available")
            }
            orders.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {orders, error, load}
}

export default getOrders