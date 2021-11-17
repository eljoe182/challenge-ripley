const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

class API {
  SERVER_CONNECTION = '';

  constructor() {
    this.SERVER_CONNECTION = process.env.REACT_APP_API_URL;
  }

  async get(path) {
    return await fetch(`${this.SERVER_CONNECTION}/${path}`, {
      method: 'get',
      headers,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw await response.json();
        }
        return await response.json();
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  async post(path, params = {}) {
    try {
      return await fetch(`${this.SERVER_CONNECTION}/${path}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(params),
      })
        .then(async (response) => {
          if (response.status === 500) {
            throw await response.json();
          }
          if (response.status === 204) {
            return response;
          }

          const body = await response.json();
          return {
            status: response.status,
            ...body,
          };
        })
        .catch((error) => {
          console.log('marca error en:', `${this.SERVER_CONNECTION}/${path}`);
          throw error;
        });
    } catch (error) {
      throw error;
    }
  }

  async put(path, params = {}) {
    return fetch(`${this.SERVER_CONNECTION}${path}`, {
      method: 'put',
      headers,
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log('marca error en:', path);
        throw error;
      });;
  }
}

export default new API();
