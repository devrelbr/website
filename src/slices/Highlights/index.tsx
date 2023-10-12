import Post from '@/components/Prismic/Post';
import RichText from '@/components/Prismic/RichText';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';


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
        <RichText
          field={slice.primary.title}
        />

        <RichText
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
