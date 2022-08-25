import { useEffect } from 'react';
import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: any
}


export const prisma =
  global.prisma || new PrismaClient({
    log: [{ level: 'query', emit: 'event' }],
  })
  
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

const test =
new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
})

test.$on('query', (e) => {
  e
})

useEffect(()=> export )