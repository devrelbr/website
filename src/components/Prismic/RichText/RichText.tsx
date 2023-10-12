import * as React from 'react';
import { PrismicRichText } from '@prismicio/react';
import type * as prismic from '@prismicio/client';

import Heading from '@/components/Heading';

export type RichTextProps = {
  field: prismic.RichTextField;
}

export function RichText(props: RichTextProps) {
  const { field } = props;

  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: (props) => (
          <Heading
            {...props}
            as="h1"
          />
        ),
        heading2: (props) => (
          <Heading
            {...props}
            as="h2"
          />
        ),
        heading3: (props) => (
          <Heading
            {...props}
            as="h3"
          />
        ),
        heading4: (props) => (
          <Heading
            {...props}
            as="h4"
          />
        ),
        heading5: (props) => (
          <Heading
            {...props}
            as="h5"
          />
        ),
        heading6: (props) => (
          <Heading
            {...props}
            as="h6"
          />
        ),
      }}
    />
  )
}

RichText.displayName = 'Component.RichText';
