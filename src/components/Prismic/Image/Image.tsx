import * as React from 'react';
import clsx from 'clsx';
import type * as prismic from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import type { PrismicNextImageProps } from '@prismicio/next';
import DefaultImage from '@/components/Image';

type ImageElement = HTMLImageElement;
export type ImageProps = PrismicNextImageProps
  & {
    className?: string;
    field: prismic.ImageField;
  }

export const Image = React.forwardRef<
  ImageElement,
  ImageProps
>((props, ref) => {
  const {
    className,
    field,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        `
          rounded-2
          overflow-hidden
          mb-2
          block
          [&>img]:transition-transform
          hover:[&>img]:scale-110
        `
      )}
    >
      <DefaultImage
        {...rest}
        as={PrismicNextImage}
        field={field}
      />
    </div>
  )}
);

Image.displayName = 'Component.Image';
