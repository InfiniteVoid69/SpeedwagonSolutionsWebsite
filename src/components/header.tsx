import Navigation from "./navigation";

const header = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-[9999] bg-accent1/25 backdrop-blur-[8px] transition-colors duration-300">
      <div className="top-0 z-header flex min-h-header-height items-center border-b border-border-light">
        <Navigation/>
      </div>
    </header>
  );
};

export default header