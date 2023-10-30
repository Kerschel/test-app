import { ref } from 'vue'
import { url } from "../App.vue";
const getComments = (ids) => {
    const comments = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`${url}/booking-comments/${ids}`)
            if(!data.ok) {
                throw Error("no data available")
            }
            comments.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {comments, error, load}
}

export default getComments