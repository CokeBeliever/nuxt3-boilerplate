import { useDayjs } from '#dayjs'
import { consola } from 'consola'
import { message as $message } from 'ant-design-vue'
import { useUserStore } from '@/stores'

const dayjs = useDayjs()

interface IRequestOptions {
  /** 请求 URL */
  url: string
  /** 请求基础 URL */
  baseURL?: string
  /** 请求头 */
  headers?: object
  /** 请求查询参数 */
  query?: object
  /** 请求体 */
  body?: object
}

interface ICreateRequestApiOptions {
  /** 基础 URL */
  baseURL?: string
  /** 请求拦截器列表 */
  requestInterceptors?: ((config: any) => any)[]
}

/**
 * 创建请求
 * @param method 请求方式
 * @param createRequestApiOptions 选项
 */
function createRequest(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  createRequestApiOptions: ICreateRequestApiOptions,
) {
  return function <T = any>(requestOptions: IRequestOptions) {
    return new Promise<{
      code: number
      message: string
      data: T
    }>((resolve, reject) => {
      const START_TIME = Date.now()
      const isClient = import.meta.client
      const userStore = useUserStore()
      const { url, baseURL, body, query, headers } = requestOptions
      let fetchOptions = {
        baseURL: baseURL || createRequestApiOptions.baseURL,
        url,
        method,
        body,
        query,
        headers: {
          Authorization: `${userStore.tokenType} ${userStore.accessToken}`,
          ...headers,
        },
      }

      // 执行请求拦截器列表
      if (createRequestApiOptions.requestInterceptors) {
        for (const fn of createRequestApiOptions.requestInterceptors) {
          fetchOptions = fn(fetchOptions)
        }
      }

      const sendHttpRequest = () => {
        const { url, ...options } = fetchOptions
        const { baseURL } = options

        return $fetch<{
          code: number
          message: string
          data: T
        }>(url, options)
          .then((res) => {
            const { code, message } = res
            const log = `${method} ${baseURL}${url} ${code} "${dayjs().format('YYYY-MM-DD HH:mm:ss')}" ${Date.now() - START_TIME}ms ${message}`

            if (code === 200) {
              consola.success(log)
              resolve(res)
            } else if (code === 401 || code === 403) {
              consola.warn(log)

              if (isClient) {
                $message.warn(message)
              }

              if (code === 401) {
                if (isClient) {
                  userStore.logout()
                  navigateTo('/login')
                }
              }

              reject(res)
            } else {
              consola.error(log)

              if (isClient) {
                $message.error(message)
              }

              reject(res)
            }
          })
          .catch((error) => {
            consola.fail(
              `${method} ${baseURL}${url} - "${dayjs().format('YYYY-MM-DD HH:mm:ss')}" ${Date.now() - START_TIME}ms ${error}`,
            )

            if (isClient) {
              $message.error(error.message)
            }

            reject(error)
          })
      }

      sendHttpRequest()
    })
  }
}

/**
 * 创建请求 api
 * @param options 创建请求 API 选项
 */
export default function createRequestApi(options: ICreateRequestApiOptions) {
  return {
    get: createRequest('GET', options),
    post: createRequest('POST', options),
    patch: createRequest('PATCH', options),
    delete: createRequest('DELETE', options),
  }
}
