import prisma from "../db/prisma";

export const createLink = (short: shortLink) => {
  return prisma.shortLink.create({
    data: {
      ...short,
    },
  });
};

export const findUrlBySlug = (slug: string) => {
  return prisma.shortLink.findUnique({
    where: {
      slug,
    },
    select: {
      url: true,
    },
  });
};

export const itExists = (url: string) => {
  return prisma.shortLink.findUnique({
    where: {
      url,
    },
    select: {
      slug: true,
    },
  });
};

interface shortLink {
  slug: string;
  url: string;
  idSlug: string;
}
