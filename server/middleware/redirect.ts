export default defineEventHandler(async (event) => {
  // since i havent found  way to specifi which route should this
  // middleware work for. i used if statement
  if (event.req.url.includes("/api/link/")) {
    // turn the url into an array
    const splited = event.req.url.split("/");
    // get the slug from the array
    const slug = splited[splited.length - 1];
    // fetch the data from the api we made
    const res: resData = await $fetch(`/api/slug/${slug}`);
    // if the url exists redirect to that url
    if (res.url) {
      event.res.writeHead(301, {
        Location: res?.url,
      });
      event.res.end();
    }
    // if not send the our page
    event.res.writeHead(301, {
      Location: res?.url,
    });
    event.res.end();
  }
});

interface resData {
  url: string;
}
