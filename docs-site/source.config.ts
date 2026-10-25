import { defineConfig } from 'fumadocs-mdx/config';
import { remarkMermaid } from '@theguild/remark-mermaid';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
    remarkImageOptions: { external: false },
    // The book uses AOSP-specific code languages Shiki has no grammar for
    // (aidl, blueprint, dts, edify, ninja, te, rc, soong, conf). `fallbackLanguage`
    // makes rehype-code skip the "language not loaded" guard and render those
    // blocks as plain text instead of failing the whole build.
    rehypeCodeOptions: {
      fallbackLanguage: 'plaintext',
    },
  },
});
