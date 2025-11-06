import { Phone, Mail, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajul a fost trimis! Vă vom contacta în curând.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Rezervări și Contact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Vă așteptăm cu drag să vă bucurați de ospitalitatea bucovinenească
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="border-border mb-6">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Nume complet
                    </label>
                    <Input placeholder="Ion Popescu" required />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="ion.popescu@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input type="tel" placeholder="+40 7XX XXX XXX" required />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Mesaj
                    </label>
                    <Textarea
                      placeholder="Aș dori să rezerv... / Am o întrebare despre..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="default">
                    Trimite Mesaj
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
              <h3 className="font-serif font-bold text-foreground mb-4">Metode de Plată</h3>
              <div className="flex items-center gap-3 text-muted-foreground">
                <CreditCard className="w-5 h-5" />
                <span className="font-sans">Card bancar și card de vacanță acceptate</span>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Telefon</h3>
                  <a href="tel:+40123456789" className="text-muted-foreground hover:text-secondary transition-colors font-sans">
                    +40 XXX XXX XXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:contact@casutadinpovesti.ro" className="text-muted-foreground hover:text-secondary transition-colors font-sans">
                    contact@casutadinpovesti.ro
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Locație</h3>
                  <p className="text-muted-foreground font-sans">
                    Aproape de Vatra Dornei<br />
                    Bucovina, România
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43520.89472447805!2d25.317766!3d47.343611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734d810f63d1fb3%3A0x4f3b3c3c3c3c3c3c!2sVatra%20Dornei!5e0!3m2!1sen!2sro!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Căsuței din Povești"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
