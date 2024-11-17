const Layout = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          {children}
        </main>
        <Footer />
      </div>
    );
  };

  export { Layout };
