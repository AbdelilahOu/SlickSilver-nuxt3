import { findUrlBySlug } from "~~/server/utils/crud";

export default defineEventHandler(async (event) => {
  const { slug } = await useBody(event);
  try {
    const res = await findUrlBySlug(slug);
    return {
      url: res.url,
    };
  } catch (error) {
    sendError(event, error);
  }
});
