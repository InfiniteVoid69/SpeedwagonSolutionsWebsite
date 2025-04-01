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
          At Speedwagon Solutions, we specialize in providing top-notch exterior cleaning services for residential and commercial properties. Our team of experienced professionals is dedicated to delivering exceptional results that exceed your expectations.
          We understand the importance of maintaining the appearance and integrity of your property, which is why we use commercial equipment and cleaning solutions to ensure a thorough and safe cleaning process.
          Whether you need pressure washing, window cleaning, or gutter cleaning, we have the expertise and resources to handle any job, big or small. Our commitment to customer satisfaction means that we go above and beyond to ensure that you are happy with the results.
        </p>
        <Button buttonType="secondary" className="mt-6" onClick={() => (window.location.href = '/about')}>
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default About;
