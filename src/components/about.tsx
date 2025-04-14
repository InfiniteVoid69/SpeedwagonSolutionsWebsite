import { Button } from "./buttons";

const About = () => {
  return (
    <section className="mt-8 py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 text-primary">
        <h2 className="text-4xl font-bold leading-tight">
          <span className="text-text-primary">Exterior Cleaning</span>{" "}
          <span className="text-text-primary">You Can Trust</span>
        </h2>
        <p className="mt-4 text-lg">
          Speedwagon Solutions specialize in providing top-notch pressure
          washing, soft washing, and more. Our services are constanly expanding,
          allowing us to better help, you, the customer. We service both
          residential and commercial properties. Our team of professionals is
          dedicated to delivering exceptional results while ensuring the safety
          and satisfaction of our clients.
        </p>
        <Button
          buttonType="secondary"
          className="mt-6"
          onClick={() => (window.location.href = "/about")}
        >
          Learn More
        </Button>
      </div>
      <div className="md:col-span-1">
        <img
          src="/images/gallery/IMG_2013.jpg"
          alt="Exterior Cleaning"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default About;
