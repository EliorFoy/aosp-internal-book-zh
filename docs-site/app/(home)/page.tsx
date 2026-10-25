import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-4xl font-bold mb-4">AOSP Internals - 中文版</h1>
      <p className="text-lg text-gray-600 mb-6">
        Android 开源项目开发者指南 · 中文翻译版
      </p>
      <Link
        href="/docs/introduction"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        开始阅读 →
      </Link>
    </div>
  );
}
