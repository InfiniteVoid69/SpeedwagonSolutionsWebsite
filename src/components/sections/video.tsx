import videoBg from "../../assets/videos/backgroundVideo1.mp4";

const Video = () => {
  return (
    <div className="w-full h-screen">
      <video
        className="w-full h-full object-cover pointer-events-none"
        src={videoBg}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
