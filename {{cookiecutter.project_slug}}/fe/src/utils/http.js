/**
 * A simple HTTP request module based on axios
 */
import axios from 'axios'
{% if cookiecutter.use_sentry == 'y' -%}
import raven from '@/utils/raven'
{%- endif %}

// axios instance with default configurations
const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  responseType: 'json'
})

instance.interceptors.request.use(function (config) {
  config.headers = {...config.headers, 'X-CSRFToken': window['DJ-X-CSRFToken']}
  return config
}, function (error) {
  {% if cookiecutter.use_sentry == 'y' -%}
  raven.raise(error)
  {%- endif %}
  return Promise.reject(error)
})

const request = (url, method, data, headers) => {
  return instance.request({
    method,
    url,
    data,
    headers
  }).then(res => {
    // support 2xx-3xx response
    if (res.status >= 200 && res.status < 400) {
      return res.data
    } else {
      throw new Error(`wrong http status: ${res.status}`)
    }
  }).catch(e => {
    {% if cookiecutter.use_sentry == 'y' -%}
    raven.raise(e)
    {%- endif %}
    return null
  })
}

/**
 * http get
 */
export const get = (url, headers) => {
  return request(url, 'get', headers)
}

/**
 * http post
 */
export const post = (url, data, headers) => {
  return request(url, 'post', data, headers)
}

/**
 * http put
 */
export const put = (url, data, headers) => {
  return request(url, 'put', data, headers)
}

/**
 * http delete
 */
export const del = (url, headers) => {
  return request(url, 'delete', null, headers)
}

/**
 * default exports
 */
export default {
  get, post, put, del
}
