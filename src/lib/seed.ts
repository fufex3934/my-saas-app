// prisma/seed.ts
import { prisma } from './prisma'
import bcrypt from 'bcryptjs';

async function main() {
  const password = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@saaskit.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@saaskit.com',
      password,
      role: 'ADMIN',
    },
  })

  console.log('Admin user created:', admin)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
