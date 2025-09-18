import { SiReact, SiFacebook, SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';

export function Footer() {
  const socialLinks = [
    {
      icon: SiGithub,
      href: 'https://github.com/osizwr',
      label: 'GitHub'
    },
    {
      icon: SiInstagram,
      href: 'https://www.instagram.com/marvin_jseph/',
      label: 'Instagram'
    },
    {
      icon: SiFacebook,
      href: 'https://www.facebook.com/marvinsrmtc',
      label: 'Facebook'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              MJ/MC
            </button>
          </div>

          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <SiReact className="w-4 h-4 fill-red-500 text-red-500 mx-2" />
            <span>©<span className='font-bold'>MJ/MC</span>. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}