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

  

export const hitlist = () => {
  const [State, UpdateState] = useState()
  
  return(
    test.$on('query', (e) => UpdateState(e))
  )
}
export const prisma =
  global.prisma || test
  
if (process.env.NODE_ENV !== 'production') global.prisma = prisma








