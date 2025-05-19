import './AboutUs.css';
import AboutUsCard from '../../components/AboutUsCard';
import palta from '../../assets/palta.png';

function AboutUs() {
return (
    <div className="about-us-container px-6 py-10 text-center">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-primary mb-2">About Us</h1>

        {/* Subtítulo*/}
        <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
            Somos un equipo motivado por la comodidad de las personas. Nuestra meta es crear soluciones simples y modernas para facilitar la vida de los chilenos.
        </p>

        {/* Cards del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            <AboutUsCard
                name="Jose Barrera"
                image={palta}
                description="Estudiante de ingeniería de software UC."
            />
            <AboutUsCard
                name="Guillermo Castro"
                image={palta}
                description="Estudante de agronomía UC."
            />
            <AboutUsCard
                name="Joaquín Narvaez"
                image={palta}
                description="Estudiante de ingeniería mecánica e industrial UAI"
            />
        </div>
    </div>
);
}

export default AboutUs;
