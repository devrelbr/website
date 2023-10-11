import { Content } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import Post from '@/components/Post';

type HighlightsProps = SliceComponentProps<Content.HighlightsSlice>;

const Highlights = ({ slice }: HighlightsProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`
        py-4
      `}
      >
      <div
        className={`
          mb-6
        `}
      >
        <PrismicRichText
          field={slice.primary.title}
          components={{
            /**
             * @todo Transformar em componente quando houver definição de layout.
             */
            heading2: ({ children }) => (
              <h2
                className={`
                  text-2xl
                  font-bold
                  md:text-3xl
                `}
              >
                {children}
              </h2>
            ),
          }}
        />

        <PrismicRichText
          field={slice.primary.content}
        />
      </div>

      <div
        className={`
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          md:gap-4
        `}
      >
        {slice.items.map((item, i) => (
          <Post
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
