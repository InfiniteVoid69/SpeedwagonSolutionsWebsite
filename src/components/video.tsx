import videoBg from '../assets/videos/backgroundVideo.mp4';

const Video = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="w-full h-full object-cover pointer-events-none"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">Speedwagon Solutions</h1>
        <p className="text-lg md:text-2xl mt-2">Pressure Washing</p>
      </div>
    </div>
  );
};

export default Video;
