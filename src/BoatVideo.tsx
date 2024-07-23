function BoatVideo() {
    return (
        <video
            className="h-100vh w-full object-cover animate-clip-from-top-animation"
            autoPlay
            loop
        >
            <source src="./assets/boat-video.mp4" type="video/mp4" />
        </video>
    );
}

export default BoatVideo;
