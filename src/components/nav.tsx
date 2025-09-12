import Link from "next/link"

const Nav = () => {
  return (
    <nav className='space-x-4'>
      <Link href='/dashboard' className='hover:underline'>Панель управления</Link>
      <Link href='/vacancies' className='hover:underline'>Вакансии</Link>
    </nav>
  )
}

export default Nav