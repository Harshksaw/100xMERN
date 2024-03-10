import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstname: string,
//   lastname: string,
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: username,
//       password,
//       firstname,
//       lastname,
//     },
//     select: {
//       id: true,
//       password: true,
//     },
//   });
//   console.log(res);
// }

// insertUser("admin2", "1234562", "harsh", "saw");

interface UpdateParams {
  firstname: string;
  lastname: string;
}

async function updateUser(
  username: string,
  { firstname, lastname }: UpdateParams,
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstname,
      lastname,
    },
  });
  console.log(res);
}

updateUser("admin1", {
  firstname: "harsh k",
  lastname: "saw",
});
