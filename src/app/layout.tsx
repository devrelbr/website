import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Discord from './icons/Discord.svg';
import Instagram from './icons/Instagram.svg';
import Twitter from './icons/Twitter.svg';
import Logo from './Logo.svg';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Developer Relations Brasil',
  description: 'Seu portal de conteúdo sobre Developer Relations.',
  keywords: [
    'developer relations',
    'devrel',
    'devrelbr',
    'devrel brasil',
    'devrel br',
    'devrel brazil',
    'eventos tecnologia',
    'comunidade tecnologia',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={clsx(
          inter.className,
          `
            h-full
          `
        )}
      >
        <header
          className={`
            container
            mx-auto
          `}
        >
          <div
            className={`
              py-4
            `}
          >
            <h1>
              <span
                className={`
                  sr-only
                `}
              >
                DevRelBr - Developer Relations Brasil
              </span>

              <Logo
                width={100}
                height={100}
              />
            </h1>
          </div>
        </header>

        {children}

        <footer
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
            <div
              className={`
                grid
                grid-cols-1
                gap-2
                md:grid-cols-[1fr,auto]
              `}
            >
              <nav>
                <ul
                  className={`
                    h-full
                    flex
                    flex-row
                    gap-1
                    items-center
                  `}
                >
                  <li>
                    <a
                      href="https://pudim.com.br"
                      className={`
                        hover:underline
                      `}
                    >
                      Pudim
                    </a>
                  </li>
                </ul>
              </nav>

              <div>
                <ul
                  className={`
                    flex
                    flex-row
                    gap-1
                  `}
                >
                  <li>
                    <a
                      href="https://discord.gg/he4rt"
                      className={`
                        hover:opacity-90
                        hover:transition-opacity
                      `}
                    >
                      <Discord />
                      <span
                        className={`
                          sr-only
                        `}
                      >
                        Discord
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`
                        hover:opacity-90
                        hover:transition-opacity
                      `}
                    >
                      <Twitter />
                      <span
                        className={`
                          sr-only
                        `}
                      >
                        Twitter
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`
                        hover:opacity-90
                        hover:transition-opacity
                      `}
                    >
                      <Instagram />
                      <span
                        className={`
                          sr-only
                        `}
                      >
                        Instagram
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
