'use client';

import { useState, useEffect } from 'react'

const Footer = () => {

  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className='border-t py-3 text-center text-sm text-muted-foreground'>
      © {year} HH Viewer
    </footer>
  )
}

export default Footer