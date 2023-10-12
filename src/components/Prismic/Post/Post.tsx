import Datetime from '@/components/Datetime';
import Image from '@/components/Prismic/Image';
import RichText from '@/components/Prismic/RichText';
import Tags from '@/components/Tags';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type * as prismic from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import clsx from 'clsx';
import * as React from 'react';

type PostElement = HTMLDivElement;
export type PostProps = {
  date: prismic.TimestampField;
  title: prismic.TitleField;
  description: prismic.RichTextField;
  type: NonNullable<prismic.SelectField>;
  link: prismic.LinkField;
  cover: prismic.ImageField;
} & {
  className?: string;
}

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
        <PrismicNextLink
          field={link}
        >
          <RichText
            field={title}
          />
        </PrismicNextLink>

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
        <Tags
          list={type}
          colors={{
            live: 'purple',
          }}
        />
      </div>

      <PrismicNextLink
        field={link}
        className={`
          block
        `}
      >
        <Image
          field={cover}
          alt=""
          width={300}
          height={300}
        />
      </PrismicNextLink>

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
