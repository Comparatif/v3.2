import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}
const test = new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
  
}).$on('query', (e) => {
  console.log(e)
})


export const prisma =  test
  
  
//if (process.env.NODE_ENV !== 'production') global.prisma = prisma

