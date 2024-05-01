import object_to_url_param from "@/modules/functions/object_to_url_param";
import axios from 'axios'

async function searchPatients(filter, token){
    var result = null

    await axios.get(
        process.env.VUE_APP_ROOT_API+'api/patients/filter?'+object_to_url_param(filter),
        {
            headers: {
                'Authorization': 'Bearer '+token
            }
        }
    )
    .then(function (response) {
      result = response.data.data
    })

    return result

    // TODO: handle error on api calls
}


export {
    searchPatients
};