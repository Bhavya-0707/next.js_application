/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Enables Next.js to output a standalone server directory, 
  // which drastically reduces the final Docker image size by including only runtime dependencies.
  output: 'standalone',

  // Optional: Set the base path for static assets if you serve them from a different host, 
  // but for Minikube deployment, the default is fine.
};

module.exports = nextConfig;
