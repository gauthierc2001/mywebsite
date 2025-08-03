export function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Disponible pour de nouveaux projets</h3>
                              <p className="text-gray-300 leading-relaxed mb-6">
                  Je suis actuellement disponible pour des missions freelance en tant qu&apos;AI Software Engineer. 
                  Spécialisé dans le développement d&apos;applications IA, la blockchain et les architectures modernes.
                </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">gauthier.compan@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Localisation</p>
                  <p className="text-gray-300">Portugal (Remote)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Disponibilité</p>
                  <p className="text-gray-300">Immédiate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Réseaux sociaux</h3>
              <p className="text-gray-300 mb-6">
                Suivez mon travail et mes projets sur les réseaux sociaux
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://medium.com/@blackmirroros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Medium</p>
                  <p className="text-gray-300">@blackmirroros</p>
                </div>
              </a>

              <a 
                href="https://x.com/BlackMirrorOS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">X (Twitter)</p>
                  <p className="text-gray-300">@BlackMirrorOS</p>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.5c-.5.5-1.5.5-2 0l-2.5-2.5-2.5 2.5c-.5.5-1.5.5-2 0s-.5-1.5 0-2l2.5-2.5-2.5-2.5c-.5-.5-.5-1.5 0-2s1.5-.5 2 0l2.5 2.5 2.5-2.5c.5-.5 1.5-.5 2 0s.5 1.5 0 2l-2.5 2.5 2.5 2.5c.5.5.5 1.5 0 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Telegram</p>
                  <p className="text-gray-300">Coming soon</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à collaborer ?</h3>
                          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Je suis disponible pour des missions freelance en tant qu&apos;AI Software Engineer. 
                Spécialisé dans les technologies de pointe, je peux vous aider à développer 
                vos projets IA, blockchain ou web.
              </p>
            <a 
              href="mailto:gauthier.compan@example.com" 
              className="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 