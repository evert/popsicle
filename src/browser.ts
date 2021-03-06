import { Request, createHeaders, CreateHeaders } from 'servie'
import { createBody, CreateBody } from 'servie/dist/body/browser'

// Use `xhr` transport in browsers.
export * from './transports/xhr'

/**
 * Universal request options.
 */
export interface RequestOptions {
  method?: string
  headers?: CreateHeaders
  trailer?: CreateHeaders | Promise<CreateHeaders>
  body?: CreateBody
}

/**
 * Simple universal request creator.
 */
export function request (url: string, options: RequestOptions = {}) {
  const { method } = options
  const headers = createHeaders(options.headers)
  const body = createBody(options.body)
  const trailer = Promise.resolve<CreateHeaders | undefined>(options.trailer).then(createHeaders)

  return new Request({ url, method, headers, body, trailer })
}
