import { Mail, MapPin, Phone, User } from "lucide-react" // Añadimos 'User' para el formulario


export const Contacto = () => {

  return (
    <main className="min-h-screen bg-background">
      
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-stone-300">
              Contacto
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para responder tus preguntas y escuchar tus comentarios
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-start">
            
            {/* Columna de Información (Info + Horario) */}
            <div 
              className="bg-card p-8 rounded-lg border border-border shadow-lg animate-fade-in" 
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-600">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-muted-foreground">contacto@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Teléfono</h3>
                    <p className="text-muted-foreground">+52 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Saltillo Coahuila, México
                    </p>
                  </div>
                </div>
              </div>

              {/* Separador */}
              <hr className="my-8 border-border" />

              {/* Horario de Atención (ahora dentro de la misma tarjeta) */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-600">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábado: 10:00 AM - 2:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>

          

          </div>
        </div>
      </section>

    
    </main>
  )
}