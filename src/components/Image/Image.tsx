import * as React from 'react';
import clsx from 'clsx';
import NextImage from 'next/image';

type ImageElement = HTMLImageElement;
export type ImageProps = {
  [key: string]: unknown;
  /**
   *
   */
  as?: React.ElementType;
} & React.ImgHTMLAttributes<ImageElement>;

export const Image = React.forwardRef<
  ImageElement,
  ImageProps
>((props, ref) => {
  const {
    className,
    as: Component = NextImage,
    ...inheritedProps
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
          bg-white
        `
      )}
    >
      <Component
        {...inheritedProps}
        className={`
          w-full
          h-full
          object-cover
        `}
      />
    </div>
  );
});

Image.displayName = 'Component.Image';
