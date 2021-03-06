import { normalizeRequest } from './common'

export const TEST_HTTP_URL = `http://localhost:${process.env.PORT}`
export const TEST_HTTPS_URL = `https://localhost:${process.env.HTTPS_PORT}`

describe('common', () => {
  it('should export `normalizeRequest` middleware', () => {
    expect(typeof normalizeRequest).toEqual('function')
  })
})
