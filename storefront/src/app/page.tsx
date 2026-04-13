import Link from "next/link";

// ──────────────────────────────────────────────
// Hero — 主视觉
// ──────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* 背景发光效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-400/8 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
          </span>
          <span className="text-sm font-medium text-brand-400">
            车规级技术，消费级价格
          </span>
        </div>

        {/* 主标题 */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">超薄发光</span>
          <br />
          <span className="text-gradient-brand slim-glow-text">
            重新定义车灯光芒
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          SlimLight 采用车规级 Mini LED 技术，总厚度仅
          <span className="font-semibold text-foreground"> 5mm</span>，
          亮度达
          <span className="font-semibold text-foreground"> 5000nit</span>，
          能耗却低至
          <span className="font-semibold text-foreground"> 0.6W</span>。
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          已获 9 项发明专利 · 1 年实车验证 · IP67 防护等级
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 transition-all shadow-glow hover:shadow-glow-intense"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            探索产品
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border hover:border-brand-500/50 text-foreground font-semibold px-8 py-4 transition-all hover:bg-brand-500/5"
          >
            了解技术
          </Link>
        </div>

        {/* 技术参数 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
          {[
            { value: "<5mm", label: "超薄厚度" },
            { value: "5000nit", label: "峰值亮度" },
            { value: "0.6W", label: "超低功耗" },
            { value: "IP67", label: "防护等级" },
          ].map((stat) => (
            <div key={stat.label}
              className="rounded-xl border border-border bg-card p-4 text-center hover:border-brand-500/30 transition-colors">
              <div className="text-2xl font-bold text-brand-500 font-display">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// 产品展示
// ──────────────────────────────────────────────
function ProductsSection() {
  const products = [
    {
      name: "SlimLight Classic",
      tagline: "经典版 · 纯净白光",
      price: "$149",
      fobPrice: "$89",
      image: "/images/product-classic.jpg",
      badge: "最受欢迎",
      badgeColor: "bg-brand-500",
      features: ["正白 6000K", "IP67 防水", "≤0.8W", "<6mm 厚度"],
      href: "/products/classic",
    },
    {
      name: "SlimLight RGB",
      tagline: "变色版 · 16色 APP 控制",
      price: "$189",
      fobPrice: "$115",
      image: "/images/product-rgb.jpg",
      badge: "Phase 2",
      badgeColor: "bg-purple-500",
      features: ["16色变色", "蓝牙 APP", "亮度可调", "IP65 防水"],
      href: "/products/rgb",
    },
    {
      name: "SlimLight Halo",
      tagline: "迎宾套装 · 字标+门灯",
      price: "$229",
      fobPrice: "$139",
      image: "/images/product-halo.jpg",
      badge: "完整体验",
      badgeColor: "bg-amber-500",
      features: ["4门迎宾灯", "同步发光", "智能感应", "全套安装配件"],
      href: "/products/halo",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-4">
            三步，选对你的 SlimLight
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            从经典单色到智能变色，总有一款适合你的车
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href}
              className="group product-card cursor-pointer">
              {/* 产品图片区 */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-500/10 to-brand-900/5 flex items-center justify-center overflow-hidden">
                {/* 占位图：实际图片替换 */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent flex items-center justify-center">
                  <div className="w-32 h-20 rounded-lg bg-brand-500/30 flex items-center justify-center border border-brand-500/40 group-hover:bg-brand-500/40 transition-colors">
                    <span className="text-brand-400 font-display font-bold text-lg group-hover:scale-110 transition-transform">
                      {product.name.split(" ").pop()}
                    </span>
                  </div>
                </div>
                {/* Badge */}
                <div className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                  {product.badge}
                </div>
                {/* Hover 发光效果 */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 transition-colors" />
              </div>

              {/* 产品信息 */}
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-1">{product.tagline}</div>
                <h3 className="font-display text-xl font-bold mb-3">{product.name}</h3>

                {/* 特性标签 */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((f) => (
                    <span key={f}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>

                {/* 价格 */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">零售价</div>
                    <div className="text-2xl font-bold text-foreground">{product.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">FOB 批发价</div>
                    <div className="text-lg font-semibold text-brand-500">{product.fobPrice}</div>
                  </div>
                </div>

                <div className="mt-4 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 text-center transition-colors">
                  查看详情
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products"
            className="text-brand-500 hover:text-brand-400 font-medium inline-flex items-center gap-1 transition-colors">
            查看全部产品
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// 技术优势
// ──────────────────────────────────────────────
function TechSection() {
  const specs = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "车规级认证",
      description: "Mini LED 模组已通过车规级验证试验，工作温度范围-40°C~+85°C，适应全球各种气候。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "超低功耗",
      description: "额定功耗仅0.6W，即使整晚开启也不会消耗过多电瓶电量，智能休眠模式更省电。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "5000nit 超高亮度",
      description: "即使在强烈阳光下依然清晰可见，晚上开启时带来令人惊叹的发光效果。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "30,000 小时寿命",
      description: "车规级 LED 光源，每天使用 4 小时，可持续使用超过 20 年，无需更换。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "IP67 防水防尘",
      description: "完全防尘，防水深度可达 1 米 30 分钟。雨天、洗车完全不受影响。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "仅 14~16g",
      description: "比一枚鸡蛋还轻。不会给车标粘贴面带来任何负担，3M 胶即可稳稳固定。",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-4">
            车规级技术细节
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            每一个参数，都来自真实的车规级测试数据
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec) => (
            <div key={spec.title}
              className="rounded-xl border border-border bg-card p-6 hover:border-brand-500/30 transition-all hover:shadow-glow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4">
                {spec.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{spec.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// 定制预览 CTA
// ──────────────────────────────────────────────
function PreviewCTA() {
  return (
    <section className="py-24 bg-brand-500/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/20 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
          上传你的 Logo，<br />
          <span className="text-brand-500">实时预览</span>发光效果
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          我们的 Three.js 定制预览工具，可以让你在上购买前就看到实际发光效果。
          支持自定义文字、图案、颜色。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/preview"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 transition-all shadow-glow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            开始定制预览
          </Link>
          <Link href="/vehicle-fit"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border hover:border-brand-500/50 text-foreground font-semibold px-8 py-4 transition-all">
            查询我的车型
          </Link>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// 社交证明
// ──────────────────────────────────────────────
function SocialProof() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            {[
              { value: "9+", label: "发明专利", sub: "已获授权/公布中" },
              { value: "1年+", label: "实车验证", sub: "后市场长期测试" },
              { value: "50,000h", label: "设计寿命", sub: "车规级 LED 光源" },
            ].map((item) => (
              <div key={item.label} className="p-8 text-center">
                <div className="text-4xl font-bold text-brand-500 font-display mb-1">
                  {item.value}
                </div>
                <div className="font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// 首页主组件
// ──────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <TechSection />
      <PreviewCTA />
      <SocialProof />
    </>
  );
}
