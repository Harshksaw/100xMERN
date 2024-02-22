// interface User {
//   id: number;
//   name: string;
//   age: number;

//   email: string;
//   password: string;
// }

// // function sumOfAge(user1: User, user2: User) {
// //   return user1.age + user2.age;
// // }

// // const age = sumOfAge({ name: "sachin", age: 23 }, { name: "sachin", age: 23 });
// // console.log(age);
// //subset of USer

// type UpdateProps = Pick<User, "name" | "age" | "email">;

// type UpdatePropsOPT = Partial<UpdateProps>;

// function updateUser(updateProps: UpdatePropsOPT) {
//   console.log(updateProps);
// }
import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type finaluserScehma = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: finaluserScehma = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
