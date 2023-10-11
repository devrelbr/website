import * as React from 'react';
import clsx from 'clsx';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import {
  PrismicNextLink,
  PrismicNextImage,
} from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import type * as prismic from '@prismicio/client';
import Datetime from '@/components/Datetime';

type PostElement = HTMLDivElement;
export type PostProps = {
  date: prismic.TimestampField;
  title: prismic.TitleField;
  description: prismic.RichTextField;
  type: NonNullable<prismic.SelectField>;
  link: prismic.LinkField;
  cover: prismic.ImageField;
} & {
  /**
   * Optional `className` to add to the root element.
   */
  className?: string;
}
/**
 * This component works with Prismic integration and
 * can't be used without it.
 */
export const Post = React.forwardRef<
  PostElement,
  PostProps
>((props, ref) => {
  const {
    className,
    title,
    description,
    date,
    type,
    link,
    cover,
  } = props;

  return (
    <article
      ref={ref}
      className={clsx(
        className,
      )}
    >
      <header
        className={`
          mb-2
        `}
      >
        <PrismicRichText
          field={title}
          components={{
            /**
             * @todo Transformar em componente quando houver definição de layout.
             */
            heading3: ({ children }) => (
              <h2
                className={`
                  text-xl
                  font-bold
                  md:text-2xl
                `}
              >
                {children}
              </h2>
            ),
          }}
        />

        {date && (
          <Datetime
            date={date}
          />
        )}
      </header>

      <div
        className={`
          flex
          flex-row
          flex-wrap
          gap-1
          mb-4
        `}
      >
        <span
          className={`
            text-xs
            rounded-1/2
            px-[10px]
            py-[4px]
            text-white
            bg-blue-500
          `}
        >
          #{type.toLowerCase()}
        </span>
      </div>

      <div
        className={`
          rounded-2
          overflow-hidden
          max-h-[400px]
          mb-2
        `}
      >
        <PrismicNextImage
          field={cover}
          alt=""
          className={`
            w-full
            h-full
            object-cover
          `}
          width={300}
          height={300}
        />
      </div>

      <div
        className={`
          mb-2
        `}
      >
        <PrismicRichText
          field={description}
        />
      </div>

      <footer
        className={`
          flex
          flex-row
          gap-2
          items-center
        `}
      >
        <PrismicNextLink
          field={link}
          className={`
            text-sm
            text-blue-400
            hover:underline
            flex
            flex-row
            gap-1/2
            items-center
          `}
        >
          <ArrowTopRightOnSquareIcon
            width={16}
            height={16}
          />
          <span>
            Participar
          </span>
        </PrismicNextLink>
      </footer>
    </article>
  )}
)

Post.displayName = 'Component.Post';
