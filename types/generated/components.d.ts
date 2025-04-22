import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageDetail extends Struct.ComponentSchema {
  collectionName: 'components_about_page_details';
  info: {
    displayName: 'detail';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for content types';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.detail': AboutPageDetail;
      'shared.seo': SharedSeo;
    }
  }
}
