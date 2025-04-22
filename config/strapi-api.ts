export const strapiApiConfig = {
  endpoints: {
    posts: {
      path: '/posts',
      methods: ['GET', 'POST'],
      config: {
        auth: false,
        policies: [],
        middlewares: ['global::rate-limit'],
      },
    },
    post: {
      path: '/posts/:slug',
      methods: ['GET'],
      config: {
        auth: false,
        policies: [],
        middlewares: ['global::rate-limit'],
      },
    },
    categories: {
      path: '/categories',
      methods: ['GET'],
      config: {
        auth: false,
        policies: [],
        middlewares: ['global::rate-limit'],
      },
    },
    tags: {
      path: '/tags',
      methods: ['GET'],
      config: {
        auth: false,
        policies: [],
        middlewares: ['global::rate-limit'],
      },
    },
    comments: {
      path: '/comments',
      methods: ['GET', 'POST'],
      config: {
        auth: false,
        policies: ['global::recaptcha'],
        middlewares: ['global::rate-limit'],
      },
    },
    'contact-form': {
      path: '/contact-form',
      methods: ['POST'],
      config: {
        auth: false,
        policies: ['global::recaptcha'],
        middlewares: ['global::rate-limit'],
      },
    },
  },
  middlewares: {
    'rate-limit': {
      enabled: true,
      config: {
        interval: 1 * 60 * 1000, // 1 minute
        max: 100, // 100 requests per minute
      },
    },
    'recaptcha': {
      enabled: true,
      config: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        score: 0.5, // Minimum score required
      },
    },
  },
  security: {
    cors: {
      enabled: true,
      origin: process.env.CORS_ORIGIN || '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
    rateLimit: {
      enabled: true,
      interval: 1 * 60 * 1000, // 1 minute
      max: 100, // 100 requests per minute
    },
  },
} 