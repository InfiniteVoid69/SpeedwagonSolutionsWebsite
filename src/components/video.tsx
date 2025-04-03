import videoBg from '../assets/videos/backgroundVideo.mp4';

const Video = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src={videoBg}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Video;
