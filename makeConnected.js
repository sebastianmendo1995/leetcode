//Problem #1319

// There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] 
// represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.
// Given an initial computer network connections.You can extract certain cables between two directly connected computers, and place them 
// between any pair of disconnected computers to make them directly connected.Return the minimum number of times you need to do this in order 
// to make all the computers connected.If it's not possible, return -1. 


var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1

    const set = new DisjointSet(n)
    for (const [start, end] of connections)
        set.union(start, end)

    return set.numOfComponents - 1
}
class DisjointSet {
    constructor(N) {
        this.numOfComponents = N
        this.componentSize = Array(N).fill(1)
        this.parent = []

        for (let i = 0; i < N; i++)
            this.parent[i] = i
    }

    find(p) {
        let root = p
        while (root !== this.parent[root]) {
            root = this.parent[root]
        }

        while (p !== root) {
            const next = this.parent[p]
            this.parent[p] = root
            p = next
        }

        return root
    }

    union(p, q) {
        const rootP = this.find(p)
        const rootQ = this.find(q)

        if (rootP === rootQ) return

        if (this.componentSize[rootP] < this.componentSize[rootQ]) {
            this.componentSize[rootQ] += this.componentSize[rootP]
            this.parent[rootP] = rootQ
        } else {
            this.componentSize[rootP] += this.componentSize[rootQ]
            this.parent[rootQ] = rootP
        }

        this.numOfComponents--
    }
}