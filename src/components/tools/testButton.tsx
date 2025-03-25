const testButton = () => {
  return (
    <section className="py-8 px-4 text-center">
      <button
        onClick={() => console.log('test')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Test
      </button>
    </section>
  );
};

export default testButton