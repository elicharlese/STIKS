/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server'
import { GET } from '@/app/api/products/route'

// Mock the Supabase client
jest.mock('@/lib/supabase/client', () => ({
  supabaseAdmin: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          order: jest.fn(() => ({
            range: jest.fn(() => Promise.resolve({
              data: [
                {
                  id: '123e4567-e89b-12d3-a456-426614174000',
                  name: 'Test Product',
                  type: 'cdo_senior',
                  risk_level: 'low',
                  min_investment: 1000,
                  current_apy: 0.085,
                  status: 'active',
                }
              ],
              error: null,
              count: 1,
            }))
          }))
        }))
      }))
    }))
  }
}))

describe('/api/products', () => {
  it('should return products list', async () => {
    const request = new NextRequest('http://localhost:3000/api/products')
    
    const response = await GET(request, { params: {} })
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data).toHaveLength(1)
    expect(data.data[0].name).toBe('Test Product')
  })

  it('should handle pagination', async () => {
    const request = new NextRequest('http://localhost:3000/api/products?page=1&limit=10')
    
    const response = await GET(request, { params: {} })
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.pagination).toBeDefined()
    expect(data.pagination.page).toBe(1)
    expect(data.pagination.limit).toBe(10)
  })

  it('should filter by product type', async () => {
    const request = new NextRequest('http://localhost:3000/api/products?type=cdo_senior')
    
    const response = await GET(request, { params: {} })
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
  })
})
