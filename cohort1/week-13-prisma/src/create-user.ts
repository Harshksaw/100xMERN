import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  prisma.user.create({
    data: {
      email: "QpBQ4@example.com",
      name: "John Doe",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default prisma;
