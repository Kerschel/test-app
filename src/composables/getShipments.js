import { ref } from 'vue'
import { url } from "../App.vue";
const getShipments = () => {
    const shipments = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`${url}/shipments`)
            if(!data.ok) {
                throw Error("no data available")
            }
            shipments.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {shipments, error, load}
}

export default getShipments