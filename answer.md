# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

`db.json` is essentially a flat JSON file used for simple storage, often with tools like `json-server`. While useful for prototyping, it is unsuitable for real-world production applications due to several critical limitations:

*   **Performance:** As the file size grows, performance degrades significantly. Every read or write operation often requires parsing the entire file, which is inefficient for large datasets.
*   **Concurrency & Locking:** It does not support concurrent writes effectively. If multiple users try to update the data simultaneously, it can lead to race conditions, data overwrites, or file corruption. It lacks the sophisticated locking mechanisms found in real databases.
*   **Scalability:** File-based storage cannot easily scale to handle concurrent requests or large volumes of data. It lacks indexing capabilities, making searches slow as data grows.
*   **Reliability & ACID Properties:** It does not guarantee ACID (Atomicity, Consistency, Isolation, Durability) properties. A system crash during a write operation can corrupt the entire file, leading to total data loss.
*   **Security:** It lacks built-in security features like user authentication, role-based access control, and encryption.

## 2. What are the ideal characteristics of a database system?

Beyond simple storage, a robust database system should possess the following key characteristics:

*   **Performance:** High throughput and low latency for read and write operations, optimized via indexing and caching strategies.
*   **Concurrency:** The ability to handle multiple users and transactions simultaneously without data conflicts, typically managed through isolation levels and locking.
*   **Reliability & Durability:** Guarantees that once data is committed, it persists even in the event of power loss or system crashes (e.g., utilizing Write-Ahead Logging).
*   **Data Integrity:** Enforcement of rules (constraints, foreign keys) to ensure data accuracy and consistency across the system.
*   **Scalability:** The ability to handle growth in data and traffic, either vertically (adding more power to a single server) or horizontally (distributing data across multiple servers/sharding).
*   **Fault Tolerance:** Mechanisms to recover from failures, such as automated backups, replication, and failover systems to ensure high availability.

## 3. How many types of databases are there? What are their use cases?

Database systems are primarily categorized into two main groups: **Relational** and **Non-relational (NoSQL)**.

### a. Relational Databases (RDBMS)
Relational databases store data in a structured format using tables with rows and columns. They use **SQL** (Structured Query Language) for defining and manipulating data, emphasizing rigid schemas and ACID compliance.

*   **Examples:** MySQL, PostgreSQL, Oracle, SQL Server.
*   **Use Cases:**
    *   **Financial Systems:** Banking applications where strict data integrity and complex transactions are critical.
    *   **Enterprise Resource Planning (ERP):** Systems managing complex relationships between inventory, sales, and HR.
    *   **e-Commerce Platforms:** Managing orders, customers, and inventory where consistency is paramount.

### b. Non-Relational Databases (NoSQL)
NoSQL databases are designed for unstructured or semi-structured data, offering flexible schemas and horizontal scalability. They effectively handle large volumes of distributed data.

*   **Types & Use Cases:**
    *   **Document Stores (e.g., MongoDB):** Store data as JSON-like documents. Ideal for **Content Management Systems (CMS)**, catalogs, and rapid prototyping.
    *   **Key-Value Stores (e.g., Redis):** Store data as simple key-value pairs. Ideal for **caching**, session management, and real-time analytics.
    *   **Column-Family Stores (e.g., Cassandra):** Optimized for writing large amounts of data. Ideal for **IoT sensor data**, logs, and time-series analytics.
    *   **Graph Databases (e.g., Neo4j):** Optimized for data with complex relationships. Ideal for **social networks**, recommendation engines, and fraud detection.
