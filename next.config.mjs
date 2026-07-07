import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static site — export plain HTML/CSS/JS so it can be hosted anywhere
  // (Netlify static hosting) with no server runtime.
  output: "export",
  // Static export can't use the on-demand image optimizer; serve the images
  // as-is. They're already web-sized (≤~450KB each) and lazy-loaded.
  images: {
    unoptimized: true,
  },
  // Pin the workspace root — a stray package-lock.json in the home dir
  // otherwise makes Next infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
