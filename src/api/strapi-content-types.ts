export const strapiContentTypes = {
  post: {
    name: 'Post',
    fields: {
      title: {
        type: 'text',
        required: true,
        unique: true,
      },
      slug: {
        type: 'uid',
        targetField: 'title',
      },
      content: {
        type: 'richtext',
        required: true,
      },
      excerpt: {
        type: 'text',
        required: true,
      },
      cover: {
        type: 'media',
        multiple: false,
        required: true,
        allowedTypes: ['images'],
      },
      category: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::category.category',
      },
      tags: {
        type: 'relation',
        relation: 'manyToMany',
        target: 'api::tag.tag',
      },
      author: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'plugin::users-permissions.user',
      },
      publishedAt: {
        type: 'datetime',
      },
      seo: {
        type: 'component',
        component: 'shared.seo',
        repeatable: false,
      },
      status: {
        type: 'enumeration',
        enum: ['draft', 'published'],
        default: 'draft',
      },
    },
  },
  category: {
    name: 'Category',
    fields: {
      name: {
        type: 'text',
        required: true,
        unique: true,
      },
      slug: {
        type: 'uid',
        targetField: 'name',
      },
      description: {
        type: 'text',
      },
    },
  },
  tag: {
    name: 'Tag',
    fields: {
      name: {
        type: 'text',
        required: true,
        unique: true,
      },
      slug: {
        type: 'uid',
        targetField: 'name',
      },
    },
  },
  comment: {
    name: 'Comment',
    fields: {
      content: {
        type: 'text',
        required: true,
      },
      authorName: {
        type: 'text',
        required: true,
      },
      authorEmail: {
        type: 'email',
        required: true,
      },
      post: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::post.post',
      },
      status: {
        type: 'enumeration',
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
      },
    },
  },
  contactForm: {
    name: 'Contact Form',
    fields: {
      name: {
        type: 'text',
        required: true,
      },
      email: {
        type: 'email',
        required: true,
      },
      subject: {
        type: 'text',
        required: true,
      },
      message: {
        type: 'text',
        required: true,
      },
    },
  },
  seo: {
    name: 'SEO',
    fields: {
      metaTitle: {
        type: 'text',
        required: true,
      },
      metaDescription: {
        type: 'text',
        required: true,
      },
      metaImage: {
        type: 'media',
        multiple: false,
        allowedTypes: ['images'],
      },
      keywords: {
        type: 'text',
      },
      structuredData: {
        type: 'json',
      },
    },
  },
} 