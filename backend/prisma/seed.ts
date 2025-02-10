import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample users
  await prisma.user.createMany({
    data: [
      { email: 'john@example.com', password: 'password123', name: 'John Doe' },
      { email: 'jane@example.com', password: 'password123', name: 'Jane Smith' },
    ],
  });

  // Create sample products
  await prisma.product.createMany({
    data: [
      { name: 'Product 1', description: 'A sample product', price: 49.99, stock: 10 },
      { name: 'Product 2', description: 'Another sample product', price: 99.99, stock: 5 },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
