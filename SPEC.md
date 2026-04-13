# SlimLight DTC E-commerce Platform — 技术规格书

> 文档版本：v0.1 | 更新日期：2026-04-13 | 作者：CTO 代码崽

---

## 一、项目愿景

SlimLight 全球 DTC（Direct-to-Consumer）品牌官网。
核心差异化：定制预览工具（Three.js）+ 车型适配查询 + 车规级产品力。

**技术使命：用开源轮子快速搭建，用自建代码建立长期护城河。**

---

## 二、技术栈

| 层级 | 技术选型 | 许可证 | 说明 |
|------|---------|--------|------|
| 前端框架 | Next.js 14 (App Router) | MIT | SSR + ISR，全球 CDN 加速 |
| UI 样式 | TailwindCSS + shadcn/ui | MIT | 设计系统级组件库 |
| 数据库 | PostgreSQL 15 | MIT | 关系型数据，Prisma ORM |
| 支付 | Stripe Checkout + Customer Portal | 免费 | 无月费，2.9%+交易费 |
| 邮件 | Resend | 免费 | 交易邮件发送 |
| 认证 | NextAuth.js v5 | MIT | Google/邮箱登录 |
| 搜索 | Meilisearch | MIT | 车型适配查询，轻量快速 |
| 3D 预览 | Three.js + @react-three/fiber | MIT | Logo 上传 → 发光效果预览 |
| 部署（待） | 阿里云 ECS + Docker | — | Kevin 提供服务器地址 |
| CI/CD | GitHub Actions | 免费 | 自动构建 + 部署 |

---

## 三、项目结构

```
slimlight-store/
├── apps/
│   ├── storefront/           # Next.js 前台（用户看到的官网）
│   │   ├── src/
│   │   │   ├── app/          # App Router 页面
│   │   │   ├── components/   # 页面组件
│   │   │   ├── lib/         # 工具函数
│   │   │   └── styles/      # 全局样式
│   │   ├── prisma/          # 数据库 Schema
│   │   └── package.json
│   └── admin/                # Next.js 后台（运营管理）暂定
├── packages/
│   ├── db/                   # Prisma Client 共享包
│   └── lib/                  # 共享工具函数
├── scripts/                   # 数据库种子、安装脚本
├── docs/                      # 技术文档
├── docker-compose.yml        # 本地开发用
└── README.md
```

---

## 四、核心功能

### Phase 1（M1-M2）：核心购物流程

| 功能 | 技术实现 | 优先级 |
|------|---------|--------|
| 首页 + 产品列表 | Next.js App Router + ISR | P0 |
| 产品详情页 | 动态路由 + Prisma | P0 |
| 车型适配查询 | Meilisearch 全文搜索 | P0 |
| 定制预览工具 | Three.js + WebGL + @react-three/fiber | P0 |
| 购物车 | React Context / Zustand | P0 |
| Stripe 结算 | Stripe Checkout Session | P0 |
| 订单确认邮件 | Resend API | P0 |
| 多语言（EN/ZH/JA） | next-intl | P1 |
| 多币种（USD/EUR/CNY/JPY） | Stripe Currency Conversion | P1 |
| 移动端适配 | TailwindCSS responsive | P1 |

### Phase 2（M3-M4）：用户运营

| 功能 | 技术实现 | 优先级 |
|------|---------|--------|
| 用户账号系统 | NextAuth.js + Prisma | P1 |
| 订单历史 + 地址管理 | Prisma + Stripe | P1 |
| 物流追踪 | Aftership API | P2 |
| 博客/SEO 内容 | Next.js App Router | P2 |

### Phase 3（M5-M6）：增长

| 功能 | 技术实现 | 优先级 |
|------|---------|--------|
| 会员积分体系 | Prisma | P2 |
| UGC 社区 | Next.js + Prisma | P3 |
| 联盟分销 | Prisma + Stripe | P3 |

---

## 五、数据库核心模型

```
User
  id, email, name, image, role, createdAt

Product
  id, name, slug, description, price, fobPrice,
  images[], colors[], sizes[], stock,
  vehicleModels[], features{},
  published, createdAt

Order
  id, userId, status, total, currency,
  stripeSessionId, shippingAddress{},
  lineItems[], trackingNumber,
  createdAt

Cart
  id, userId, items[], updatedAt

VehicleModel
  id, make, model, year, trim, productIds[]
```

---

## 六、关键决策

| 决策 | 选择 | 理由 |
|------|------|------|
| 自建 vs Shopify | **自建** | 定制预览工具是核心壁垒 |
| 框架 vs 裸写 | Next.js App Router | 成熟生态，SSR/ISR 兼顾 SEO |
| 关系型 vs NOSQL | PostgreSQL + Prisma | 订单/用户/产品关系清晰 |
| 搜索方案 | Meilisearch | 比 ES 轻量，车型查询足够 |
| 支付方案 | Stripe Checkout | 最成熟，无月费 |

---

## 七、迁移条件（Phase 1 验证成功后）

当 Shopify 月 GMV >$50,000 时，重新评估是否将核心逻辑迁移到自建平台。

---

## 八、待确认事项

- [ ] GitHub Token（Kevin 提供后配置 CI/CD）
- [ ] 阿里云服务器登录方式（SSH Key？）
- [ ] Stripe 账户（是否已有商户账户？）
- [ ] Resend 账户（交易邮件域名验证）
- [ ] 产品数据（20 款首发车型数据录入）
- [ ] LOGO / 产品图片素材（CMO 提供）

---

*本文档随项目迭代更新。任何技术变更需 CTO 记录并通知 CEO。*
