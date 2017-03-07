const DEV_HOST = '/api'

const PROD_HOST = 'http://private.instarx.cn'

export const API_HOST = process.env.NODE_ENV === 'production' ? PROD_HOST : DEV_HOST
