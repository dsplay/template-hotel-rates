import './style.sass';

function ImageCard({ source }) {
  return (
    <div
      className="h-full max-w-full  rounded overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${source})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center',
      }}
    >
      &nbsp;
    </div>
  );
}

export default ImageCard;
