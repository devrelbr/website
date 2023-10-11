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
        <header
          className={`
            py-4
          `}
        >
          header
        </header>
      </div>

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
                text-5xl
                font-bold
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
                className={`
                  flex
                  flex-col
                  gap-2
                `}
              >
                <h3
                  className={`
                    text-3xl
                  `}
                >
                  {item.title}
                </h3>

                <time>
                  19 de Julho de 2021
                </time>

                <div
                  className={`
                    flex
                    flex-row
                    gap-1
                    mb-2
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
                        text-black
                        bg-blue-100
                      `}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <picture
                  className={`
                    rounded-2
                    overflow-hidden
                    max-h-[400px]
                    mb-2
                  `}
                >
                  <img
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
                </picture>

                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
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
        <div>
          <div
            className={`
              mb-8
            `}
          >
            <h2
              className={`
                text-5xl
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
              grid-cols-2
              gap-2
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
                      text-2xl
                      font-bold
                    `}
                  >
                    {item.title}
                  </h3>

                  <time>
                    19 de Julho de 2021
                  </time>
                </header>

                <picture
                  className={`
                    rounded-2
                    overflow-hidden
                    max-h-[200px]
                    mb-2
                  `}
                >
                  <img
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
                </picture>

                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
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
      </div>

      {/* <footer
        className={`
          py-4
        `}
      >
        <div
          className={`
            container
            mx-auto
          `}
        >
          footer
        </div>
      </footer> */}
    </main>
  );
}
