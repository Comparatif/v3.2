import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client'
import { Sub } from '../components/UserContext'


declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

const test =
new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
})

export const prisma =
  global.prisma || test
  
if (process.env.NODE_ENV !== 'production') global.prisma = prisma




test.$on('query', (e) => {
  Sub(e)
  })
*/





