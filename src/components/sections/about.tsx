import { Button } from "../buttons";

const About = () => {
  return (
    <section className="mt-8 py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 text-primary">
        <h2 className="text-4xl font-bold leading-tight">
          <span className="text-text-primary">Exterior Cleaning</span>{" "}
          <span className="text-text-primary">You Can Trust</span>
        </h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button buttonType="secondary" className="mt-6" onClick={() => (window.location.href = '/about')}>
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default About;
