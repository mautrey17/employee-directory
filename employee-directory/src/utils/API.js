import axios from "axios";

export default {
    search: function(query) {
        let search = query ? `?${query}` : '?results=15';
        console.log('https://randomuser.me/api/' + search);
        return axios.get('https://randomuser.me/api/' + search)
    }
}