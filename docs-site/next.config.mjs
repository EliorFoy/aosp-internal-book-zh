import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  basePath: '/aosp-internal-book-zh',
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
