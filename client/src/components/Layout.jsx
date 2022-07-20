import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
