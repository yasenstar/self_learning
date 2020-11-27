## 4 key elements in Kubernetes

1. kube-apiserver

- Front-end to the control plane
- Exposes the API (REST)
- Consumes JSON only (via manifest files)

2. Cluster stor

- Persistent storage
- Cluster state and config
- Uses etcd
- Distributed, consistent, watchable...
- The _"source of truth"_ for the cluster
- Have a backup plan for it!

3. kube-controller-manager

- Controller of controllers
  - Node controller
  - Endpoints controller
  - Namespace controller
  - ---
- Watches for changes
- Helps maintain _desired state_

4. kube-scheduler

- Watches apiserver for new pods
- Assigns work to nodes
  - affinity/anti-affinity
  - constraints
  - resources
  - ...

