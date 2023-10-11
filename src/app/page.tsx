import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import type { Content } from '@prismicio/client';
import Datetime from '@/components/Datetime';
import { Metadata, ResolvingMetadata } from 'next';

const DEV_TO_API_URL = process.env.DEV_TO_API_URL as string;

async function getDevToPosts() {
  try {
    const response = await fetch(DEV_TO_API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    return [];
  }
}

async function getPageData(): Promise<
  Content.HomeDocumentData & { uid: Content.HomeDocument['uid']; }
> {
  const client = createClient();

  try {
    const {
      data,
      uid,
    } = await client.getSingle('home');

    return {
      ...data,
      uid,
    };
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata(
  {},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const {
    meta_title: title,
    meta_description: description,
    meta_image: image,
  } = await getPageData();

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      images: [
        image?.url,
        ...previousImages,
      ].map(Boolean) as any as string[],
    },
  }
}

export default async function Home() {
  /**
   * @todo Seria interessante montar todo o objeto da página em uma
   * rota /api/home?
   */
  const page = await getPageData();
  /**
   * @todo Nas próximas versões, a exibição dos posts será controlada
   * através do Prismic.
   */
  const posts = await getDevToPosts();

  return (
    <main>
      <div
        className={`
          container
          mx-auto
        `}
      >
        {page.slices && (
          <SliceZone
            slices={page.slices}
            components={components}
          />
        )}

        {/* Articles */}
        <div
          className={`
            py-4
          `}
        >
          <div
            className={`
              mb-6
            `}
          >
            <h2
              className={`
                text-4xl
                md:text-5xl
                font-bold
              `}
            >
              Publicações
            </h2>

            <p>
              Confira abaixo as últimas publicações.
            </p>
          </div>

          <div
            className={`
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              md:gap-x-4
              md:gap-y-8
              lg:grid-cols-3
            `}
          >
            {posts.map(({ id, ...post }: any) => (
              <article
                key={id}
              >
                <header
                  className={`
                    mb-2
                    min-h-[93px]
                  `}
                >
                  <h3
                    className={`
                      text-xl
                      font-bold
                      line-clamp-2
                      md:text-2xl
                    `}
                  >
                    <a
                      href={post.url}
                      target="_blank"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <Datetime
                    date={post.published_at}
                  />
                </header>

                <div
                  className={`
                    flex
                    flex-row
                    gap-1
                    mb-4
                    flex-wrap
                  `}
                >
                  {post.tag_list.map(
                    (tag: string, index: number) => (
                      <span
                        key={index}
                        className={`
                          text-xs
                          rounded-1/2
                          px-[10px]
                          py-[4px]
                          text-white
                          bg-blue-500
                        `}
                      >
                        #{tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  className={`
                    rounded-2
                    overflow-hidden
                    h-[200px]
                    mb-2
                    block
                    [&>img]:transition-transform
                    hover:[&>img]:scale-110
                  `}
                  href={post.url}
                  target="_blank"
                >
                  <Image
                    src={post.cover_image}
                    alt=""
                    className={`
                      w-full
                      h-full
                      object-cover
                    `}
                    width={500}
                    height={250}
                  />
                </a>

                <div
                  dangerouslySetInnerHTML={{ __html: post.description }}
                  className={`
                    mb-2
                  `}
                />

                <footer
                  className={`
                    flex
                    flex-row
                    gap-2
                    items-center
                  `}
                >
                  <a
                    href={post.url}
                    target="_blank"
                    className={`
                      text-sm
                      text-blue-400
                      flex
                      flex-row
                      gap-1/2
                      items-center
                      hover:underline
                    `}
                  >
                    <ArrowTopRightOnSquareIcon
                      width={16}
                      height={16}
                    />
                    <span>
                      Ler artigo
                    </span>
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
