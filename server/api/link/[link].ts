export default defineEventHandler(async (event) => {
  // just made this so that i can trigger the middleware
  // you might say that i could use /api/slug/someslug
  // but if i did i already use it in the middleware and i will end up in infine loop
  return {
    done: true,
  };
});
