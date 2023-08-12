import {BLISS_API} from '../utils/constant';
import axios from 'axios';

export async function loginApi(obj) {
  var url = BLISS_API + 'login';
  try {
    const res = await axios
      .post(url, obj)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}

export async function getHotelsListApi() {
  var url = BLISS_API + 'hotels';
  try {
    const res = await axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}

export async function getHotelsFilterListApi(category) {
  var url = BLISS_API + `hotels/filter/${category}`;
  try {
    const res = await axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}

export async function getHotelsFilterByCityApi(category, city, page) {
  var url = BLISS_API + `hotels/filter/${category}/${city}?page=${page}`;
  try {
    const res = await axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}

export async function getLocationsApi() {
  var url = BLISS_API + 'locations';
  try {
    const res = await axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}

export async function changePassword(jwtToken, id, data) {
  var url = BLISS_API + `users/${id}`;
  try {
    const res = await axios
      .put(url, data, {headers: {Authorization: 'Bearer ' + jwtToken}})
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}

export async function bookingApi(data) {
  var url = BLISS_API + 'booking';
  try {
    const res = await axios
      .post(url, data)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  } catch (e) {
    return e;
  }
}
