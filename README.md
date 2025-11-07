# Portfolio - Chiranjibi Paikaray

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Designed with a clean, minimalist aesthetic inspired by Brittany Chiang's v4 portfolio.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Docker + Kubernetes

## Features

- Responsive design optimized for all devices
- Smooth scroll animations
- Modern navy/slate color scheme with emerald accents
- Clean, professional UI/UX
- Optimized for performance

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio:latest .
```

### Run Docker Container

```bash
docker run -p 8080:80 portfolio:latest
```

Visit `http://localhost:8080`

## Kubernetes Deployment

### Prerequisites

- Kubernetes cluster (Minikube, EKS, GKE, AKS, etc.)
- kubectl configured
- Docker image pushed to registry

### Deploy to Kubernetes

1. Update the image name in `k8s-deployment.yaml`:
   ```yaml
   image: your-registry/portfolio:latest
   ```

2. Apply the Kubernetes configuration:
   ```bash
   kubectl apply -f k8s-deployment.yaml
   ```

3. Check deployment status:
   ```bash
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

4. Access the application:
   ```bash
   kubectl get service portfolio-service
   ```

### Scaling

Scale the deployment:
```bash
kubectl scale deployment portfolio-deployment --replicas=5
```

### Updates

Update the deployment:
```bash
kubectl set image deployment/portfolio-deployment portfolio=your-registry/portfolio:v2
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── Projects.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Dockerfile
├── nginx.conf
├── k8s-deployment.yaml
└── package.json
```

## Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - About section and skills
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### Update Colors

The color scheme uses:
- Background: `slate-900` (#0f172a)
- Text: `slate-200`, `slate-400`
- Accent: `emerald-400` (#34d399)

Modify in Tailwind classes throughout components.

## License

MIT

## Contact

- **Email**: chiranjibipaikaray3@gmail.com
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]
