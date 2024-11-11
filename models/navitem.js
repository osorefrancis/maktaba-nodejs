import prisma from "../config/prisma.js";

export default class NavItem {
  static async getAllNavItems() {
    return prisma.navItem.findMany({
      orderBy: {
        listOrder: "asc",
      },
    });
  }

  static async createNavItem(newNavItem) {
    return prisma.navItem.create({
      newNavItem,
    });
  }

  static async getNavItemById(navItemId) {
    return prisma.navItem.findUnique({
      where: {
        id: navItemId,
      },
    });
  }

  static async update(navItem, updatedNavItemdata) {
    return prisma.navItem.update({
      where: { id: navItem },
      updatedNavItemdata,
    });
  }

  static async delete(navItemId) {
    return prisma.navitem.delete({
      where: { id: navItemId },
    });
  }
}
