import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// https://fullstackopen.com/en/part2/altering_data_in_server#extracting-communication-with-the-backend-into-a-separate-module

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll,
                 create,
                 update }
