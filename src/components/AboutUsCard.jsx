import './AboutUsCard.css';

function AboutUsCard({ name, image, description }) {
  return (
    <div className="aboutus-card w-[320px] h-[420px] rounded-[20px] relative flex items-center justify-center overflow-hidden animate-fadeIn pt-10">
      <div className="card-content text-text text-center p-2">
        {/*<img
            src={image}
            alt={name}
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
        />*/}
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}

export default AboutUsCard;
