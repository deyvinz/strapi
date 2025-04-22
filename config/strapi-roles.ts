export const strapiRoles = {
  admin: {
    name: 'Admin',
    description: 'Full access to all features',
    permissions: {
      'api::post': {
        controllers: {
          post: ['find', 'findOne', 'create', 'update', 'delete'],
        },
      },
      'api::category': {
        controllers: {
          category: ['find', 'findOne', 'create', 'update', 'delete'],
        },
      },
      'api::tag': {
        controllers: {
          tag: ['find', 'findOne', 'create', 'update', 'delete'],
        },
      },
      'api::comment': {
        controllers: {
          comment: ['find', 'findOne', 'create', 'update', 'delete'],
        },
      },
      'api::contact-form': {
        controllers: {
          'contact-form': ['find', 'findOne', 'create', 'update', 'delete'],
        },
      },
    },
  },
  author: {
    name: 'Author',
    description: 'Can create and manage their own posts',
    permissions: {
      'api::post': {
        controllers: {
          post: ['find', 'findOne', 'create', 'update'],
        },
      },
      'api::category': {
        controllers: {
          category: ['find', 'findOne'],
        },
      },
      'api::tag': {
        controllers: {
          tag: ['find', 'findOne'],
        },
      },
      'api::comment': {
        controllers: {
          comment: ['find', 'findOne'],
        },
      },
    },
  },
  public: {
    name: 'Public',
    description: 'Can view published content and submit comments',
    permissions: {
      'api::post': {
        controllers: {
          post: ['find', 'findOne'],
        },
      },
      'api::category': {
        controllers: {
          category: ['find', 'findOne'],
        },
      },
      'api::tag': {
        controllers: {
          tag: ['find', 'findOne'],
        },
      },
      'api::comment': {
        controllers: {
          comment: ['create'],
        },
      },
      'api::contact-form': {
        controllers: {
          'contact-form': ['create'],
        },
      },
    },
  },
} 