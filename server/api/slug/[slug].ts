import { findUrlBySlug } from "~~/server/utils/crud";
export default defineEventHandler(async (event) => {
  const { slug } = event.context.params;
  try {
    const res = await findUrlBySlug(slug);
    // event.res.writeHead(301, { Location: res.url });
    // event.res.end();
    return {
      url: res.url,
    };
  } catch (error) {
    sendError(event, error);
  }
});
