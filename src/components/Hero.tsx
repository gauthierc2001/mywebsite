import Image from 'next/image';

export function Hero() {
  return (
    <section id="about" className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo et informations personnelles */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <Image
                  src="/image0.jpeg"
                  alt="Gauthier Compan"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Gauthier Compan
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
                AI Software Engineer
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Né en France et expatrié au Portugal, je suis spécialisé dans le développement 
                d&apos;applications IA et l&apos;ingénierie de systèmes intelligents. Mon expertise couvre 
                les LLMs, le NLP, la blockchain et les architectures distribuées.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-black text-white px-6 py-3 rounded-full font-medium">
                  🇫🇷 France
                </div>
                <div className="bg-gray-100 text-black px-6 py-3 rounded-full font-medium">
                  🇵🇹 Portugal
                </div>
                <div className="bg-gray-100 text-black px-6 py-3 rounded-full font-medium">
                  🎓 Université de Montpellier
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques et highlights */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Formation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Licence d&apos;informatique</span>
                  <span className="font-semibold text-black">2021</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bac S - Spécialité ISN</span>
                  <span className="font-semibold text-black">2018</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-black">8+</div>
                  <div className="text-sm text-gray-600">Projets IA</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-black">3+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-black">10+</div>
                  <div className="text-sm text-gray-600">Technologies maîtrisées</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-black">100%</div>
                  <div className="text-sm text-gray-600">Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 