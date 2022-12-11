import { createLink, itExists } from "../utils/crud";
import uniqid from "uniqid";
import shortHash from "shorthash2";

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event);
  try {
    // check if the link already exists
    const itDoes = await itExists(url);
    if (itDoes) {
      return {
        slug: `${event.req.headers.origin}/api/L/${itDoes.slug}`,
      };
    }
    // since it doesnt lets create the slug
    // generate unique id
    const idSlug = uniqid();
    // use the id to generate a short slug
    const slug = shortHash(idSlug);
    // create the shortLink row
    const created = await createLink({
      url,
      slug,
      idSlug,
    });
    const newUrl = `${event.req.headers.origin}/api/L/${created.slug}`;
    return {
      slug: newUrl,
    };
  } catch (error) {
    sendError(event, error);
  }
});
