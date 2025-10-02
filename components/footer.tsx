import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border circuit-line">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="AnErZ Logo" width={120} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UI/UX Designer passionate about creating innovative solutions through thoughtful design and clean code.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-muted hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-muted hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>angeliedejer@gmail.com</li>
              <li>(+63) 922 533 5975</li>
              <li>Bulacao, Talisay City, Cebu</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">© {currentYear} Ana Angeli S. Edejer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
