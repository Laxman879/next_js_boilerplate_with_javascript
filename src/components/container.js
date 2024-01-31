const Container = ({ children, className }) => {
  return (
    <div className={"w-full relative min-h-screen " + className}>
      {children}
    </div>
  );
};

export default Container;
