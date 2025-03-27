import { useState } from "react";
import { Button } from "./buttons";
import { services } from "./resources";
import RequiredIcon from "../styles/css/requiredIcon";
import DropdownMenu from "../styles/css/dropdownMenu";
import InputBox from "../styles/css/inputBox";
import requiredIcon from "../styles/css/requiredIcon";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    address: "",
    service: "",
  });

  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid =
    form.fullName &&
    form.lastName &&
    form.email &&
    /^\(\d{3}\) \d{3}-\d{4}$/.test(form.phone) &&
    form.service;

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 10)];
    if (digits.length > 6) return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
    if (digits.length > 3) return `(${parts[0]}) ${parts[1]}`;
    if (digits.length > 0) return `(${parts[0]}`;
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const updatedValue = name === "phone" ? formatPhoneNumber(value) : value;
    setForm({ ...form, [name]: updatedValue });
  };

  return (
    <section className="mt-8 py-12 max-w-xl mx-auto text-text-primary rounded-xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-text-primary text-center">
        Request a Quote
      </h2>
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          setError("");

          try {
            const response = await fetch("/api/formHandler", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            });

            if (!response.ok) {
              throw new Error(`[${response.status}: ${response.statusText}]`);
            }

            setForm({
              fullName: "",
              lastName: "",
              email: "",
              phone: "",
              address: "",
              service: "",
              message: "",
            });
            console.log(`[${response.status}: ${response.statusText}]`)
            setConfirmation("Message sent! You will be contacted soon");
            setTimeout(() => setConfirmation(""), 5000);
            setLoading(false);
          } catch (err) {
            console.error("Failed to send email :/ ", err);
            setError(
              `Failed to send message: ${err instanceof Error ? err.message : "Oppsie, IDK what this is! Have fun :3"}`
            );
            setLoading(false);
          }
        }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="fullName"
              className={`block text-sm font-medium mb-1 ${RequiredIcon}`}
            >
              First Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              className={InputBox}
              placeholder="John"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className={`block text-sm font-medium mb-1 ${RequiredIcon}`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              className={InputBox}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${RequiredIcon}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className={InputBox}
              placeholder="you@example.com"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className={`block text-sm font-medium mb-1 ${RequiredIcon}`}
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className={InputBox}
              placeholder="(123) 456-7890"
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Enter a phone number in the format (123) 456-7890"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className={InputBox}
              placeholder="123 Main St, 90210"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="service"
              className={`block text-sm font-medium mb-1 ${requiredIcon}`}
            >
              Service
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={DropdownMenu}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option value={service.name} key={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={InputBox}
            placeholder="Let us know how we can help..."
          />
        </div>
        <div className="pt-4">
          <Button
            size="large"
            buttonType="primary"
            className="w-full"
            isDisabled={!isFormValid}
            isLoading={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
          {confirmation && (
            <p className="text-green-400 text-center mt-2">{confirmation}</p>
          )}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </div>
      </form>
    </section>
  );
};

export default Contact;
