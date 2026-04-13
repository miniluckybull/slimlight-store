import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding SlimLight database...");

  // ── 清空现有数据 ──
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // ── 创建管理员用户 ──
  const admin = await prisma.user.create({
    data: {
      email: "admin@slimlight.com",
      name: "SlimLight Admin",
      role: "ADMIN",
    },
  });
  console.log("✅ Admin user created:", admin.email);

  // ── 产品数据 ──
  const products = [
    {
      name: "SlimLight Classic",
      slug: "slimlight-classic",
      description:
        "SlimLight 经典版，采用车规级 Mini LED 技术，超薄设计，超高亮度。适合追求纯净白光效果的车主。IP67 防水，3M 胶粘贴式安装，无需破线。",
      price: 14900, // $149.00
      fobPrice: 8900, // $89.00
      currency: "USD",
      images: ["/images/products/classic-1.jpg", "/images/products/classic-2.jpg"],
      colors: ["正白 6000K"],
      sizes: ["标准版（适配主流车型）"],
      vehicleMakes: ["Toyota", "Tesla", "Honda", "BMW", "Mercedes-Benz"],
      vehicleModels: {
        Toyota: ["RAV4", "Camry", "Corolla", "Highlander"],
        Tesla: ["Model 3", "Model Y", "Model S", "Model X"],
        Honda: ["Civic", "CR-V", "Accord"],
        BMW: ["3 Series", "5 Series", "X3", "X5"],
        "Mercedes-Benz": ["C-Class", "E-Class", "GLC"],
      },
      features: {
        thickness: "<6mm",
        brightness: "≥4000nit",
        power: "≤0.8W",
        ipRating: "IP67",
        weight: "≤25g",
        lifespan: "30,000h",
      },
      stock: 500,
      published: true,
    },
    {
      name: "SlimLight RGB",
      slug: "slimlight-rgb",
      description:
        "SlimLight RGB 变色版，支持 16 色手机 APP 控制，蓝牙连接，亮度可调。支持夜灯模式（低亮度）和高亮模式，满足不同场景需求。",
      price: 18900,
      fobPrice: 11500,
      currency: "USD",
      images: ["/images/products/rgb-1.jpg"],
      colors: ["16色可调（APP控制）"],
      sizes: ["标准版（适配主流车型）"],
      vehicleMakes: ["Toyota", "Tesla", "Honda", "BMW"],
      vehicleModels: {
        Toyota: ["RAV4", "Camry", "Corolla"],
        Tesla: ["Model 3", "Model Y"],
        Honda: ["Civic", "CR-V"],
        BMW: ["3 Series", "5 Series"],
      },
      features: {
        thickness: "<6mm",
        brightness: "≥4000nit（可调）",
        power: "≤1.0W（最大亮度）",
        ipRating: "IP65",
        weight: "≤28g",
        connectivity: "蓝牙 BLE",
      },
      stock: 200,
      published: false, // Phase 2
    },
    {
      name: "SlimLight Halo",
      slug: "slimlight-halo",
      description:
        "SlimLight Halo 迎宾套装，包含字标 + 4 门迎宾灯。开门即亮，关门即灭，智能感应。给每次上下车带来仪式感。",
      price: 22900,
      fobPrice: 13900,
      currency: "USD",
      images: ["/images/products/halo-1.jpg"],
      colors: ["正白 6000K"],
      sizes: ["标准套装"],
      vehicleMakes: ["Toyota", "Tesla", "Honda", "BMW"],
      vehicleModels: {
        Toyota: ["RAV4", "Camry"],
        Tesla: ["Model 3", "Model Y"],
        Honda: ["Civic"],
        BMW: ["3 Series"],
      },
      features: {
        thickness: "<6mm（字标）",
        brightness: "≥4000nit",
        power: "≤1.5W（全套）",
        ipRating: "IP65",
        weight: "≤80g（套装）",
        sensors: "门控感应×4",
      },
      stock: 100,
      published: false, // Phase 2
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
    console.log(`✅ Product created: ${product.name}`);
  }

  // ── 车型数据（用于搜索） ──
  const vehicleModels = [
    { make: "Toyota", model: "RAV4", year: "2019-2024" },
    { make: "Toyota", model: "Camry", year: "2018-2024" },
    { make: "Toyota", model: "Corolla", year: "2017-2024" },
    { make: "Toyota", model: "Highlander", year: "2020-2024" },
    { make: "Tesla", model: "Model 3", year: "2017-2024" },
    { make: "Tesla", model: "Model Y", year: "2020-2024" },
    { make: "Tesla", model: "Model S", year: "2012-2024" },
    { make: "Tesla", model: "Model X", year: "2015-2024" },
    { make: "Honda", model: "Civic", year: "2016-2024" },
    { make: "Honda", model: "CR-V", year: "2017-2024" },
    { make: "Honda", model: "Accord", year: "2018-2024" },
    { make: "BMW", model: "3 Series", year: "2019-2024" },
    { make: "BMW", model: "5 Series", year: "2017-2024" },
    { make: "BMW", model: "X3", year: "2018-2024" },
    { make: "BMW", model: "X5", year: "2014-2024" },
    { make: "Mercedes-Benz", model: "C-Class", year: "2015-2024" },
    { make: "Mercedes-Benz", model: "E-Class", year: "2017-2024" },
    { make: "Mercedes-Benz", model: "GLC", year: "2016-2024" },
  ];

  console.log(`✅ ${vehicleModels.length} vehicle models seeded`);

  console.log("\n🎉 Database seeded successfully!");
  console.log("\nNext steps:");
  console.log("1. Run: npm run db:push     # 同步数据库结构");
  console.log("2. Run: npm run db:seed     # 填充数据");
  console.log("3. Run: npm run dev         # 启动开发服务器");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
