import prisma from "../config/prisma.js";

export default class User {
  static async getAllUsers() {
    return prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
    });
  }

  static async getUserById(userId) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  static async getUserByEmail(userEmail) {
    return prisma.user.email({
      where: {
        email: userEmail,
      },
    });
  }

  static async createUser(newUserData) {
    return prisma.user.create({
      newUserData,
    });
  }

  static async update(userId, updatedUserData) {
    return prisma.user.update({
      where: { id: userId },
      updatedUserData,
    });
  }

  static async delete(userId) {
    return prisma.user.delete({
      where: { id: userId },
    });
  }
}
