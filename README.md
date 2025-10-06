1. Repository Setup
Create your repository on GitHub.

Clone this structure into your new repository.

Critical: Replace Placeholders!

Open k8s/deployment.yaml.

Find the line starting with image: ghcr.io/YOUR_GITHUB_USERNAME...

Replace YOUR_GITHUB_USERNAME with your actual GitHub username or organization name. Example: image: ghcr.io/john-doe/nextjs-minikube-app:latest

2. GitHub Permissions
Ensure your repository is configured to allow GitHub Actions to push packages:

Go to your repository Settings.

Navigate to Actions -> General.

Under Workflow permissions, ensure that Read and write permissions is selected. This allows the built-in GITHUB_TOKEN to push images to GHCR.

3. Execution
Commit all the files to your repository.

Push the changes to the main branch.

The ci-cd.yml workflow will automatically trigger, executing the full pipeline:

Build: Creates a small Docker image using the Next.js standalone output.

Push: Uploads the image to ghcr.io under your username.

Deploy: Starts Minikube, loads the image, applies the deployment.yaml and service.yaml files, and runs a connectivity test against the deployed service.

Check the Actions tab in your repository to monitor the pipeline status and logs!
