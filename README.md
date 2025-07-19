# 🤣 Random Joke App with Azure DevOps + Minikube + Docker Hub

This is a full-stack web application that serves random jokes using a backend API and a frontend UI.

---

## 🗂️ Project Structure

random-joke-azure/
├── k8s/ # Kubernetes manifests
│ ├── backend-deployment.yaml
│ ├── backend-service.yaml
│ ├── frontend-deployment.yaml
│ └── frontend-service.yaml
├── rja-backend/ # Node.js backend API
│ ├── Dockerfile
│ └── server.js
├── rja-frontend/ # React frontend
│ ├── Dockerfile
│ └── src/App.js
├── azure-pipelines.yml # Azure DevOps pipeline file
└── README.md # You are here


---

## 🚀 Features

- Full-stack app using Node.js + React
- Containerized with Docker
- CI/CD pipeline using Azure DevOps
- Docker images pushed to Docker Hub
- Deployed to Minikube (locally running Kubernetes) from a **self-hosted Azure agent**

---

## ⚙️ Prerequisites

- Docker Hub account (with a **repository created** for frontend and backend)
- Minikube running locally
- Azure DevOps project and pipeline
- Self-hosted agent configured to run on the local machine with `kubectl` and `docker` access

---

## 🧪 Run Locally (Optional)

If you want to test locally without Azure:

```bash
# Start minikube
minikube start

# Build images locally
cd rja-backend && docker build -t joke-backend:latest .
cd ../rja-frontend && docker build -t joke-frontend:latest .

# Apply manifests
kubectl apply -f k8s/


