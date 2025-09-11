import './globals.css'
import {Inter} from 'next/font/google'// шрифты
import { ThemeProvider } from 'next-themes'// переключение между светлой и тёмной темами
import Link from 'next/link'

const fontInter = Inter({subsets: ['latin', 'cyrillic']})// подключаем шрифт Inter из Google Fonts с поддержкой латиницы и кириллицы

export const metadata = {
  title: 'HH Viewer',
  description: 'Визуализация вакансий hh.ru',
}

type ChildrenType = {
  children: React.ReactNode
}

const RootLayout = ({children}: ChildrenType) => {
  return (
    <html lang='ru' suppressContentEditableWarning>
      <body className={fontInter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-dvh flex flex-col">
            <header className="border-b">
              <div className="container mx-auto flex items-center justify-between py-3">
                <Link href="/" className='font-semibold'>HH Viewer</Link>
                <nav className='space-x-4'>
                  <Link href='dashboard' className='hover:underline'>Панель управления</Link>
                  <Link href='vacancies' className='hover:underline'>Вакансии</Link>
                </nav>
              </div>
            </header>
            <main className='container mx-auto flex-1 py-6'>{children}</main>
            <footer className='border-t py-3 text-center text-sm text-muted-foreground'>
              © {new Date().getFullYear()} HH Viewer
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
