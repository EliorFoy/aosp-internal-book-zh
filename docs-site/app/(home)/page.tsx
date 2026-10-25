import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Background glow effects typical of Fumadocs hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-20 pointer-events-none"
      >
        <div className="w-[600px] h-[350px] bg-gradient-to-tr from-fd-primary to-fd-accent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-fd-border bg-fd-secondary text-fd-secondary-foreground mb-8">
          <span>Android 17 (Cinnamon Bun) 深度解析</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-fd-foreground mb-6">
          AOSP 内部原理
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-fd-muted-foreground max-w-2xl mb-10 leading-relaxed">
          深入 Android 开源项目核心架构。全书共 67 章与 4 个附录，涵盖从 Linux 内核驱动、
          HAL 与原生运行时，到 System Server、UI 渲染管线与最新特性的全栈系统内幕。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/docs/introduction"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-fd-primary text-fd-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
          >
            开始阅读 →
          </Link>
          <Link
            href="/docs/frontmatter"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium border border-fd-border bg-fd-background text-fd-foreground hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
          >
            查看前言
          </Link>
        </div>

        {/* Feature Cards Grid (Fumadocs Showcase Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          <div className="p-6 rounded-xl border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm">
            <div className="text-xl mb-2">⚡</div>
            <h3 className="font-semibold text-base mb-1">底层原生架构</h3>
            <p className="text-xs text-fd-muted-foreground leading-relaxed">
              深入剖析 Linux GKI 内核、Bionic C 库、Binder IPC 底层驱动及 HIDL/AIDL HAL 抽象层。
            </p>
          </div>
          <div className="p-6 rounded-xl border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm">
            <div className="text-xl mb-2">🎨</div>
            <h3 className="font-semibold text-base mb-1">图形渲染与框架</h3>
            <p className="text-xs text-fd-muted-foreground leading-relaxed">
              详解 SurfaceFlinger、RenderThread、View 测量绘制流水线，以及 1700+ 精确架构时序图。
            </p>
          </div>
          <div className="p-6 rounded-xl border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm">
            <div className="text-xl mb-2">🛡️</div>
            <h3 className="font-semibold text-base mb-1">系统服务与安全</h3>
            <p className="text-xs text-fd-muted-foreground leading-relaxed">
              涵盖 system_server 启动生命周期、SELinux 策略模型、Mainline 模块化与 OTA 双槽无缝更新。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
