import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const hightlight = [{
    title: 'Eventinho legal',
    tags: ['evento', 'online'],
    date: '19 de Julho de 2021',
    cover: 'http://lorempixel.com.br/120/120?1',
    link: {
      label: 'Participar',
      url: 'https://google.com.br',
    },
    description: `
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl.
      </p>
    `,
  }];

  const posts = [
    {
      title: 'Postizinho legal',
      date: '19 de Julho de 2021',
      cover: 'http://lorempixel.com.br/120/60?2',
      link: {
        label: 'Ler mais',
        url: 'https://google.com.br',
      },
      description: `
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.
        </p>
      `,
    },
    {
      title: 'Outro postizinho legal',
      tags: ['post'],
      date: '19 de Julho de 2021',
      cover: 'http://lorempixel.com.br/120/60?3',
      link: {
        label: 'Ler mais',
        url: 'https://google.com.br',
      },
      description: `
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.
        </p>
      `,
    },
  ];

  return (
    <main>
      <div
        className={`
          container
          mx-auto
        `}
      >
        {/* Highlight Content */}
        <div
          className={`
            py-4
          `}
        >
          <div
            className={`
              mb-8
            `}
          >
            <h2
              className={`
                text-4xl
                font-bold
                md:text-5xl
              `}
            >
              Próximos eventos
            </h2>

            <p>
              Participe dos nossos meetups e encontre outras pessoas da comunidade.
            </p>
          </div>

          <div>
            {hightlight.map((item, index) => (
              <article
                key={index}
              >
                <header
                  className={`
                    mb-2
                  `}
                >
                  <h3
                    className={`
                      text-xl
                      font-bold
                      md:text-2xl
                    `}
                  >
                    {item.title}
                  </h3>

                  <time
                    className={`
                      text-sm
                      text-gray-400
                      mb-1
                      block
                    `}
                  >
                    19 de Julho de 2021
                  </time>
                </header>

                <div
                  className={`
                    flex
                    flex-row
                    gap-1
                    mb-4
                  `}
                >
                  {item.tags.map((tag, index) => (
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
                  ))}
                </div>

                <div
                  className={`
                    rounded-2
                    overflow-hidden
                    max-h-[400px]
                    mb-2
                  `}
                >
                  <Image
                    src={item.cover}
                    alt=""
                    className={`
                      w-full
                      h-full
                      object-cover
                    `}
                    width={120}
                    height={120}
                  />
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
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
                    href={item.link.url}
                    target="_blank"
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
                      {item.link.label}
                    </span>
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div
          className={`
            py-4
          `}
        >
          <div
            className={`
              mb-8
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
              Confira abaixo as últimas publicações do blog.
            </p>
          </div>

          <div
            className={`
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              md:gap-3
              lg:grid-cols-3
            `}
          >
            {posts.map((item, index) => (
              <article
                key={index}
              >
                <header
                  className={`
                    mb-2
                  `}
                >
                  <h3
                    className={`
                      text-xl
                      font-bold
                      md:text-2xl
                    `}
                  >
                    {item.title}
                  </h3>

                  <time
                    className={`
                      text-sm
                      text-gray-400
                      mb-1
                      block
                    `}
                  >
                    19 de Julho de 2021
                  </time>
                </header>

                <div
                  className={`
                    rounded-2
                    overflow-hidden
                    h-[200px]
                    mb-2
                  `}
                >
                  <Image
                    src={item.cover}
                    alt=""
                    className={`
                      w-full
                      h-full
                      object-cover
                    `}
                    width={120}
                    height={60}
                  />
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
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
                    href={item.link.url}
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
                      {item.link.label}
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
