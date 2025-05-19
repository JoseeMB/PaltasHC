

const BenefitsCard = ({ icon, title, description, delay = 0 }) => (
  <div className={`p-6 bg-white rounded-xl shadow-lg animate-fadeIn ${delay && `delay-${delay}`}`}>
    {/*<img src={icon} className="w-12 h-12 mx-auto mb-4" alt={title} />*/}
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-muted text-sm">{description}</p>
  </div>
);

export default BenefitsCard;
