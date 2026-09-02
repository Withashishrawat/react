//named export
// 1st way to export , use "export" in front of funnction
const Main = () => {
  // named export
  return (
    <>
      <main style="color:red;">this is main </main>
    </>
  );
};

// 2nd way to export
export { Main }; // export as an object.

// default export
const Footer = () => {
  return (
    <footer>
      <h5>This is footer</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        sint corporis dolorum labore dignissimos! Magnam, aperiam ipsum! Nobis,
        ratione quibusdam.
      </p>
      <Date />
    </footer>
  );
};
export default Footer; // it's default export
