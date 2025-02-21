import http from "./http"

// 获取站点信息
export const backendCfg = (data?: object) => {
  return http.get("api/backend/cfg", data)
}
