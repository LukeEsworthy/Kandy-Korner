const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/products/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/products`).then((result) => result.json());
  },
};
