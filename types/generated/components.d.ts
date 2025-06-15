import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface WidgetLocale extends Struct.ComponentSchema {
  collectionName: 'components_widget_locales';
  info: {
    displayName: 'Locale';
  };
  attributes: {
    code: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface WidgetLocaleValue extends Struct.ComponentSchema {
  collectionName: 'components_widget_locale_values';
  info: {
    displayName: 'LocaleValue';
  };
  attributes: {
    code: Schema.Attribute.Enumeration<
      [
        'en',
        'ar',
        'ur',
        'de',
        'fr',
        'nl',
        'es',
        'sv',
        'zh',
        'th',
        'id',
        'bn',
        'ta',
        'hi',
        'ja',
        'ko',
        'ru',
      ]
    >;
    value: Schema.Attribute.String;
  };
}

export interface WidgetStringEntry extends Struct.ComponentSchema {
  collectionName: 'components_widget_string_entries';
  info: {
    displayName: 'StringEntry';
  };
  attributes: {
    key: Schema.Attribute.String;
    translations: Schema.Attribute.Component<'widget.locale-value', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'widget.locale': WidgetLocale;
      'widget.locale-value': WidgetLocaleValue;
      'widget.string-entry': WidgetStringEntry;
    }
  }
}
