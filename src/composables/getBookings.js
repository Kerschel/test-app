import { ref } from 'vue'
import { url } from "../App.vue";
const getBookings = () => {
    const bookings = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`${url}/bookings`)
            console.log(`${url}`);
            if(!data.ok) {
                throw Error("no data available")
            }
            bookings.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {bookings, error, load}
}

export default getBookings