import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: any
}

const test = new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
})
export const prisma =
  global.prisma || test
  
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

test.$on('query', (e) => {
  if (e.query.includes("UPDATE")) {
    const list = e.params.replace("'", "")
    const orderId = list[list.length - 1]
  }
  console.log({"Evenement": e})
})