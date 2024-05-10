import { testClient } from 'hono/testing'
import { Hono } from 'hono'
import app from './src'

describe('Example', () => {
  test('GET /hello', async () => {
    const res = await app.request('/hello')
    expect(res.status).toBe(200)
    expect(await res.text()).toEqual("{\"message\":\"Hello!\"}")
  })
})