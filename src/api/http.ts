import request from "./request"

const http = {
  get(url: string, params: object, headers?: object) {
    const config = {
      method: "GET",
      url: url,
      params: params ? params : {},
      headers: headers ? headers : { "Content-Type": "application/json;charset=UTF-8" }
    }
    return request(config)
  },
  post(url: string, data: object, headers?: object) {
    const config = {
      method: "POST",
      url: url,
      data: data ? data : {},
      headers: headers ? headers : { "Content-Type": "application/json;charset=UTF-8" }
    }
    return request(config)
  }
}

export default http