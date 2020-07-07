export default context => {
  if (
    (context.req.headers &&
      context.req.headers.host === 'https://www.dezalroletypoznan.pl') ||
    context.req.headers.host === 'www.dezalroletypoznan.pl'
  ) {
    redirect(301, 'https://dezalroletypoznan.pl' + context.req.url);
    return;
  }
};
