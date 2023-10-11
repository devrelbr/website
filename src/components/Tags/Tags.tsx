import * as React from 'react';
import clsx from 'clsx';
import type * as prismic from '@prismicio/client';
import { format } from '@/utils/date';

type TagsElement = HTMLElement;
export type TagsProps = {
  /**
   * Optional `className` to add to the root element.
   */
  className?: string;
  list: string[] | string;
  /**
   * @example
   * ```ts
   * {
   *  event: 'bg-green-500',
   *  blog: 'bg-blue-500',
   *  news: 'bg-red-500',
   * }
   * ```
   */
  colors?: Record<
    string,
    /**
     * @todo Pegar cores diretamente da configuração do Tailwind.
     */
    string
  >;
}
/**
 * This component works with Prismic integration but also
 * can be used without it.
 */
export const Tags = React.forwardRef<
  TagsElement,
  TagsProps
>((props, ref) => {
  const {
    className,
    list,
    colors = {},
  } = props;

  let tags: string[] = [];

  if (typeof list === 'string') {
    tags = list
      .trim()
      .toLocaleLowerCase()
      .split(',')
    ;
  } else if (Array.isArray(list)) {
    tags = list;
  }

  console.log(tags)

  if (tags.length === 0) {
    return null;
  }

  return (
    <ul
      className={clsx(
        className,
        `
          flex
          flex-row
          gap-1
          mb-4
          flex-wrap
        `
      )}
    >
      {tags.map((tag, i) => (
        <li
          key={i}
          className={clsx(
            `
              border-${colors[tag]}-400
              border-2
              text-xs
              rounded-1/2
              px-[10px]
              py-[4px]
            `
          )}
        >
          <b
            className={clsx(
              `
                text-${colors[tag]}-400
              `
            )}
          >
            #
          </b>
          <span>
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )}
);

Tags.displayName = 'Component.Tags';
