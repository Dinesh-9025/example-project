// eslint-disable-next-line
/* eslint-disable */

import axios from 'axios';

const tokenValue = localStorage.getItem('Token')

const $http = axios.create({
  baseURL: 'https://salixv3qa.radiusdirect.net/coreapi',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + tokenValue
  }
})

class HttpService {

    crud(method, urlWithQuery, payload) {

        // const VUE_APP_API_BASE_URL = 'https://leoqa.radiusdirect.net/coreapi';
        if(method == 'get') {
            return $http
            .get(urlWithQuery, payload);
        } else if (method == 'post') {
            return $http
            .post(urlWithQuery, payload);
        } else if (method == 'put') {
            return $http
            .put(urlWithQuery, payload);
        } else if (method == 'delete') {
            return $http
            .delete(urlWithQuery, payload);
        }
}
}
export default new HttpService();



// import axios from 'axios'

// const tokenValue = localStorage.getItem('Token')

// const $http = axios.create({
//   baseURL: 'https://salixv3qa.radiusdirect.net/coreapi',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer ' + tokenValue
//   }
// })

// class NoteService {
//   async postNotes () {
//     const response = await $http.post('/clientadminLogin')
//     return response.data
//   };
//   async getNotes () {
//     const response = await $http.get('/v2/noteslist')
//     return response.data
//   };
//   async getNotes1 () {
//     const response = await $http.get('/v2/notesTasksCatList?category_type=notes')
//     return response.data
//   };
//   async putNotes () {
//     const response = await $http.put('/v2')
//     return response.data
//   };
// //   async deleteNotes () {
// //     const response = await $http.delete('/v2')
// //     return response.data
// //   }

// }
// export default new NoteService();
