import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: any
}

export const test =
new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
})

  


test.$on('query', (e) => {
  const [State, setState] = useState({})
  console.log(e)
  setState(e)
  console.log(State)
  
  })
  
export const prisma =
  global.prisma || test
  
if (process.env.NODE_ENV !== 'production') global.prisma = prisma








