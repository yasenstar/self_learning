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

## Nodes

a.k.a "Minions", or The Kubernetes Worker

1. Kubelet

- The main Kubernetes agent
- Registers node with cluster
- Watches apiserver
- Instantiates pods
- Reports back to master
- Exposes endpoint on :10525

2. Container Engine

- Does container management
  - Pulling images
  - Starting/Stopping containers
  - ...
- Pluggable:
  - Usually Docker
  - Can be rkt

3. kube-proxy

- Kubernetes networking:
  - Pod IP addresses
    - All containers in a pod share a single IP
  - Load balances across all pods in a service

## Declarative Model and Desired State

Manifest file: YAML or JSON, Describe desired state

## Pods

Similar concept: VM, Container, Pod (in K8S), which is the Atomic Units of Scheduling

- Containers always run inside of Pods
- Pods can have multiple contains
- Pods are managed by Kubernetes
- Pods get the IP address
- All containers in pod share the pod environments

Lifecycle of the Pod

1. Phase: pending
2. Phase: running
3. Phase: succeeded / failed

## Services

- Only send to healthy pods
- Can be configured for session affinity
- Can point to things outside the cluster
- Random load balancing
- Uses TCP by default

## Deployments

Replication Controller then Deployment

```
apiVersion: v1
kind: ReplicationController
metadata:
    name: xyz
spec:
    replicas: 4
```

Deployments is the advanced of Replication Controller

