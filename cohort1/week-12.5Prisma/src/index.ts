import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// async function insertUser(
//   username: string,
//   firstName: string,
//   password: string,
//   lastName: string,
// ) {
//   prisma.user.create({
//     data: {
//       username: username,
//       firstName: firstName,
//       password: password,
//       lastName: lastName,
//     },
//   });
//   console.log("user created");
// }

// insertUser("test", "test", "test", "test");

async function getTodosAndUserDetails(userId: number) {
  //   await prisma.todo.create({});
  const response = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true,
    },
  });
  console.log(response);
}
getTodosAndUserDetails(1);
