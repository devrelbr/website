import * as React from 'react';
import clsx from 'clsx';
import type * as prismic from '@prismicio/client';
import { format } from '@/utils/date';

type DatetimeElement = HTMLTimeElement;
export type DatetimeProps = {
  /**
   * Optional `className` to add to the root element.
   */
  className?: string;
  date: NonNullable<prismic.TimestampField>
}
/**
 * This component works with Prismic integration but also
 * can be used without it.
 */
export const Datetime = React.forwardRef<
  DatetimeElement,
  DatetimeProps
>((props, ref) => {
  const {
    className,
    date,
  } = props;

  return (
    <time
      className={clsx(
        className,
        `
          text-sm
          text-gray-400
          mb-1
          block
        `
      )}
    >
      {format(date)}
    </time>
  )}
);

Datetime.displayName = 'Component.Post';
