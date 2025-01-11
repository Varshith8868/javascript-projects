const Navbar = () => {
    return (
      <div className="navbar">
        <h1>This is Navbar.</h1>
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    );
  };
  
  export default Navbar;
  