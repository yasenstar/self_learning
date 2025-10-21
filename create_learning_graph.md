- [Create Learning graph in Neo4j](#create-learning-graph-in-neo4j)

# Create Learning graph in Neo4j

```SQL
// Neo4j: Beginner Courses
MERGE (:Graph {name: "Neo4j Fundamentals", level: "Beginner"})
MERGE (:Graph {name: "Cypher Fundamentals", level: "Beginner"})
MERGE (:Graph {name: "Aura Fundamentals", level: "Beginner"})
MERGE (:Graph {name: "Importing Data Fundamentals", level: "Beginner"})
MERGE (:Graph {name: "Graph Data Modeling Fundamentals", level: "Beginner"})
// Neo4j: Intermediate Courses
MERGE (:Graph {name: "Intermediate Cypher Queries", level: "Intermediate"})
MERGE (:Graph {name: "Cypher Aggregations", level: "Intermediate"})
MERGE (:Graph {name: "Importing CSV data into Neo4j", level: "Intermediate"})
MERGE (:Graph {name: "Cypher Indexes and Constraints", level: "Intermediate"})
MERGE (:Graph {name: "Neo4j & GenerativeAI Fundamentals", level: "Intermediate"})
MERGE (:Graph {name: "Introduction to Vector Indexes and Unstructured Data", level: "Intermediate"})
MERGE (:Graph {name: "Building Neo4j Applications with .NET", level: "Intermediate"})
MERGE (:Graph {name: "Building Neo4j Applications with Go", level: "Intermediate"})
MERGE (:Graph {name: "Building Neo4j Applications with Spring Data", level: "Intermediate"})
MERGE (:Graph {name: "Building Neo4j Applications with Node.js", level: "Intermediate"})
MERGE (:Graph {name: "Using Neo4j with Python", level: "Intermediate"})
MERGE (:Graph {name: "Using Neo4j with Java", level: "Intermediate"})
MERGE (:Graph {name: "Building Neo4j Applications with TypeScript", level: "Intermediate"})
MERGE (:Graph {name: "Introduction to Neo4j & GraphGL", level: "Intermediate"})
MERGE (:Graph {name: "Developing with Neo4j MCP Tools", level: "Intermediate"})
// Neo4j: Advanced Courses
MERGE (:Graph {name: "Using Neo4j with LangChain", level: "Advanced"})
MERGE (:Graph {name: "Building a Neo4j-backed Chatbot using Python", level: "Advanced"})
MERGE (:Graph {name: "Building a Neo4j-backed Chatbot using TypeScript", level: "Advanced"})
MERGE (:Graph {name: "Building Knowledge Graphs with LLMs", level: "Advanced"})
MERGE (:Graph {name: "Introduction to Neo4j Graph Data Science", level: "Advanced"})
MERGE (:Graph {name: "Neo4j Graph Data Science Fundamentals", level: "Advanced"})
MERGE (:Graph {name: "Path Finding with GDS", level: "Advanced"})
MERGE (:Graph {name: "Neo4j Graph Data Science Certification", level: "Advanced"})
MERGE (:Graph {name: "Neo4j Certiifed Professional", level: "Advanced"})
MERGE (:Graph {name: "Cypher Patterns", level: "Advanced"})
MERGE (:Graph {name: "Cypher Statement Processing", level: "Advanced"})
```

Create relationship for Learning Sequence

```SQL
MATCH (n1:Graph {name: "Neo4j Fundamentals"})
MATCH (n2:Graph {name: "Cypher Fundamentals"})
MERGE (n1)-[r:NEXT]->(n2)
RETURN n1,r,n2
```

