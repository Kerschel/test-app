import { ref } from 'vue'
import { url } from '../App.vue'
const getQuotations = () => {
    const quotations = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`${url}/quotations`)
            if(!data.ok) {
                throw Error("no data available")
            }
            quotations.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {quotations, error, load}
}

export default getQuotations