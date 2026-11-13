import glintus from './assets/Clients/glintus.png'
import studioResidence from './assets/Clients/studio-residence.png'
import mnAluminium from './assets/Clients/mn-aluminium-transparent.png'
import nuvio from './assets/Clients/nuvio-transparent.png'

const clients = [
  { name: 'Glintus', logo: glintus, url: 'https://glintus.vercel.app/', lightLogo: true },
  { name: 'Studio Residence', logo: studioResidence, url: 'https://glintus.vercel.app/', lightLogo: true },
  { name: 'M. N. Aluminium Fabricators', logo: mnAluminium, url: undefined, lightLogo: false },
  { name: 'NUVIO', logo: nuvio, url: undefined, lightLogo: false },
]

export default function TrustedBy() {
  return (
    <section id="clients" aria-labelledby="trusted-heading" className="scroll-mt-24 overflow-hidden bg-transparent py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 id="trusted-heading" className="afacad-bold text-4xl sm:text-5xl lg:text-6xl">Trusted By</h2>
        <div className="logo-strip mt-12">
          <div className="logo-track">
            {[0, 1].map((copy) => (
              <div className="logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {[...clients, ...clients, ...clients].map((client, index) => {
                  const logo = <img src={client.logo} alt={client.name} className={`h-24 w-60 object-contain ${client.lightLogo ? "brightness-0 invert" : ""}`}
                    style={client.logo === studioResidence ? { filter: 'url(/logo-filters.svg#clean-alpha) brightness(0) invert(1)' } : undefined} />
                  return client.url ? (
                    <a key={`${client.name}-${index}`} href={client.url} target="_blank" rel="noopener noreferrer"
                      tabIndex={copy === 1 || index >= clients.length ? -1 : 0}
                      aria-label={`Visit ${client.name} website (opens in a new tab)`}
                      className={`logo-card ${index >= clients.length ? 'logo-repeat' : ''}`}>{logo}</a>
                  ) : <div key={`${client.name}-${index}`} className={`logo-card ${index >= clients.length ? 'logo-repeat' : ''}`}>{logo}</div>
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

