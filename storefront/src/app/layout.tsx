import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SlimLight — 超薄发光标识，引领全球车规级照明美学",
    template: "%s | SlimLight",
  },
  description:
    "SlimLight 采用车规级 Mini LED 技术，总厚度<5mm，亮度≥5000nit，能耗仅0.6W。消费级版本现已发布，让全球车主享受车规级发光体验。",
  keywords: [
    "Mini LED",
    "超薄发光字标",
    "汽车改装",
    "发光车标",
    "车规级 LED",
    "SlimLight",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slimlight.com",
    siteName: "SlimLight",
    title: "SlimLight — 超薄发光标识，全球领先",
    description: "车规级 Mini LED 技术，消费级超薄发光标识",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlimLight",
    description: "车规级 Mini LED 技术，消费级超薄发光标识",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        {/* 顶部导航 */}
        <header className="glass-nav">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 slim-glow flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SL</span>
                </div>
                <span className="font-display text-xl font-bold tracking-tight">
                  Slim<span className="text-brand-500">Light</span>
                </span>
              </div>

              {/* 导航链接 */}
              <div className="hidden md:flex items-center gap-8">
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/technology">Technology</NavLink>
                <NavLink href="/vehicle-fit">Vehicle Fit</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>

              {/* 操作区 */}
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <CartButton />
              </div>
            </div>
          </nav>
        </header>

        {/* 主内容 */}
        <main>{children}</main>

        {/* 页脚 */}
        <footer className="border-t border-border bg-muted/30 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SL</span>
                  </div>
                  <span className="font-display text-xl font-bold">SlimLight</span>
                </div>
                <p className="text-muted-foreground text-sm max-w-xs">
                  车规级 Mini LED 超薄发光技术，引领全球消费级发光标识市场。
                  已获 9 项发明专利，通过车规级验证。
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/products/classic" className="hover:text-foreground transition-colors">SlimLight Classic</a></li>
                  <li><a href="/products/rgb" className="hover:text-foreground transition-colors">SlimLight RGB</a></li>
                  <li><a href="/products/halo" className="hover:text-foreground transition-colors">SlimLight Halo</a></li>
                  <li><a href="/products" className="hover:text-foreground transition-colors">All Products</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/installation" className="hover:text-foreground transition-colors">Installation Guide</a></li>
                  <li><a href="/vehicle-fit" className="hover:text-foreground transition-colors">Vehicle Fit</a></li>
                  <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                  <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2026 SlimLight. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                车规级 Mini LED · 发明专利支撑 · 全球配送
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
}

function CartButton() {
  return (
    <button className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {/* 购物车数量徽章（未来接入 cart store 后动态显示） */}
      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
        0
      </span>
    </button>
  );
}
