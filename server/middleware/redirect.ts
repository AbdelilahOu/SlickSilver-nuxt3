export default defineEventHandler(async (event) => {
  // since i havent found  way to specifi which route should this
  // middleware work for. i used if statement
  if (event.req.url.includes("/api/L/")) {
    // turn the url into an array
    const splited = event.req.url.split("/");
    // get the slug from the array
    const slug = splited[splited.length - 1];
    // fetch the data from the api we made
    const res: resData = await $fetch(`/api/slug`, {
      method: "POST",
      body: {
        slug,
      },
    });
    // if the url exists redirect to that url
    if (res.url) {
      return sendRedirect(event, res.url, 301);
    }
    // if not send the our page
    return sendRedirect(event, event.req.headers.origin, 301);
  }
});

interface resData {
  url: string;
}
