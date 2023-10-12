import clsx from 'clsx';
import * as React from 'react';

type HeadingElement = HTMLHeadingElement;
export type HeadingProps = {
  className?: string;
  as: React.ElementType;
  children: React.ReactNode;
}

export const Heading = React.forwardRef<
  HeadingElement,
  HeadingProps
>((props, ref) => {
  const {
    className,
    children,
    as: Component = 'h2',
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx(
        className,
        `
          font-bold
        `
      )}
    >
      {children}
    </Component>
  )}
);

Heading.displayName = 'Component.Post';
