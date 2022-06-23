// all 404 pages will be redirected to home page
// https://github.com/vercel/next.js/discussions/16749  = iK is where I found the solution
// it will not error on vercel build process which it was doing before

export const Custom404 = () => <div></div>;

export const getServerSideProps = () => {
  return { redirect: { destination: "/", permanent: false } };
};

export default Custom404;
