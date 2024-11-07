import prisma from "../config/prisma";

export default class NavItem {
  static async create(navitem) {
    return prisma.navitem.create({
      navitem,
    });
  }
}
