import { Lock, MapPin, Users } from "lucide-react";

const Features = () => {
    return (
        <section className="features revelar activo">
            <div className="feature-card">
                <Lock className="feature-icon" size={38} />

                <h3>Búsqueda Confidencial</h3>

                <p>
                    Tus datos privados están protegidos. Solo se requiere
                    información personal conocida para la búsqueda.
                </p>
            </div>

            <div className="feature-card">
                <MapPin className="feature-icon" size={38} />

                <h3>Cobertura Nacional</h3>

                <p>
                    Conectamos todo el territorio para que encuentres tu
                    cédula, sin importar dónde se perdió.
                </p>
            </div>

            <div className="feature-card">
                <Users className="feature-icon" size={38} />

                <h3>Comunidad Solidaria</h3>

                <p>
                    Participa reportando documentos encontrados y ayuda a que
                    vuelvan a sus dueños.
                </p>
            </div>
        </section>
    );
};

export default Features;