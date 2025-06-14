import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

const topicData = {
  1: {
    name: "Introduction to DBMS",
    description: "Understand what a DBMS is, its need, advantages, and applications in real-world software systems.",
  },
  2: {
    name: "Data Models",
    description: "Learn various data models including hierarchical, network, relational, and object-oriented models.",
  },
  3: {
    name: "Entity-Relationship Model",
    description: "Understand ER diagrams, entity sets, attributes, relationships, and how to model a real-world database.",
  },
  4: {
    name: "Relational Model",
    description: "Explore relations, tuples, schemas, keys, and integrity constraints in the relational model.",
  },
  5: {
    name: "SQL and Relational Algebra",
    description: "Master SQL queries and understand relational algebra operations used in query processing.",
  },
  6: {
    name: "Normalization",
    description: "Learn normalization techniques (1NF to 5NF) to remove redundancy and improve data integrity.",
  },
  7: {
    name: "Transaction Management",
    description: "Understand transactions, ACID properties, and the need for transaction control in DBMS.",
  },
  8: {
    name: "Concurrency Control",
    description: "Learn how DBMS handles concurrent access using locks, timestamps, and serializability techniques.",
  },
  9: {
    name: "Indexing and Hashing",
    description: "Explore indexing techniques (B+ trees, etc.) and hashing for faster data retrieval.",
  },
  10: {
    name: "Query Processing and Optimization",
    description: "Understand how queries are parsed, optimized, and executed efficiently in a DBMS.",
  },
  11: {
    name: "NoSQL and Modern Databases",
    description: "Get introduced to NoSQL databases and modern architectures like document, column, and graph stores.",
  },
  12: {
    name: "Distributed Databases",
    description: "Explore the architecture, challenges, and concepts of databases distributed across multiple nodes.",
  },
};


// topic-specific dummy content
const dummyContentByTopic = {
  1: {
    videos: [
      {
        title: "Introduction to DBMS",
        url: "https://www.youtube.com/embed/H9ICBRHz7Lo?si=VYd7zPkCdNFAZGQH",
      },
    ],
    articles: [
  {
    title: "Introduction to DBMS",
    content: (
      <>
        <h3>Understanding the Basics of Database Management Systems</h3>
        <li>
          DBMS stands for Database Management System, a software system that allows users to define, create, maintain, and control access to databases efficiently.
        </li>
        <li>
          It solves problems found in traditional file systems like redundancy, inconsistency, and lack of security.
        </li>
        <li>
          <strong>Components of DBMS:</strong> Includes hardware, software, data, users, and procedures to ensure smooth data operations.
        </li>
        <li>
          <strong>Functions of DBMS:</strong> Data storage, retrieval, manipulation, backup and recovery, concurrency control, and access management.
        </li>
        <li>
          <strong>Types of DBMS:</strong> Hierarchical, Network, Relational, and Object-Oriented models each serve different organizational data needs.
        </li>
        <li>
          DBMS is foundational to applications like banking systems, online shopping, airline reservations, and enterprise systems.
        </li>
      </>
    ),
  },
      {
        title: "Advantages of DBMS",
        content: (
          <>
            <h3>Benefits of Using a Database Management System</h3>
            <li>
              Data Integrity: Ensures accuracy and consistency of data through constraints and rules.
            </li>
            <li>
              Data Security: Provides controlled access to data, protecting it from unauthorized access.
            </li>
            <li>
              Data Redundancy Reduction: Minimizes duplicate data storage, saving space and improving efficiency.
            </li>
            <li>
              Data Independence: Allows changes in data structure without affecting application programs.
            </li>
            <li>
              Multi-user Environment: Supports concurrent access by multiple users while maintaining data integrity.
            </li>
          </>
        ),
      },
      {
        title: "Applications of DBMS",
        content: (
          <>
            <h3>Real-World Applications of Database Management Systems</h3>
            <li>
              Banking Systems: Manage customer accounts, transactions, and financial records.
            </li>
            <li>
              Online Shopping: Handle product catalogs, customer orders, and inventory management.
            </li>
            <li>
              Airline Reservations: Manage flight schedules, bookings, and passenger information.
            </li>
            <li>
              Enterprise Resource Planning (ERP): Integrate various business processes into a unified system.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in DBMS",
        content: (
          <>
            <h3>Emerging Trends in Database Management Systems</h3>
            <li>
              Cloud Databases: Offering scalable and flexible database solutions hosted on cloud platforms.
            </li>
            <li>
              NoSQL Databases: Catering to unstructured data and high-volume applications with flexible schemas.
            </li>
            <li>
              Big Data Technologies: Integrating with tools like Hadoop and Spark for large-scale data processing.
            </li>
            <li>
              AI and Machine Learning Integration: Enhancing data analysis and decision-making capabilities.
            </li>
          </>
        ),
      },
    ],
  },
  2: {
    videos: [
      {
        title: "Data Models Overview",
        url: "https://www.youtube.com/embed/OwQoj3GJfNY?si=agXFAt5d8SiYbHDO",
      },
    ],
    articles: [
      {
        title: "Understanding Data Models",
        content: (
          <>
            <h3>Types of Data Models in DBMS</h3>
            <li>
              Hierarchical Model: Organizes data in a tree-like structure with parent-child relationships.
            </li>
            <li>
              Network Model: Allows more complex relationships with multiple parent-child links.
            </li>
            <li>
              Relational Model: Represents data in tables (relations) with rows and columns, using keys for relationships.
            </li>
            <li>
              Object-Oriented Model: Integrates object-oriented programming concepts into database design.
            </li>
          </>
        ),
      },
      {
        title: "Choosing the Right Data Model",
        content: (
          <>
            <h3>Factors to Consider When Selecting a Data Model</h3>
            <li>
              Data Complexity: Choose a model that can handle the complexity of your data relationships.
            </li>
            <li>
              Scalability: Ensure the model can grow with your data needs.
            </li>
            <li>
              Performance: Consider how the model affects query performance and data retrieval speed.
            </li>
            <li>
              Flexibility: Look for models that allow easy changes to data structure without major disruptions.
            </li>
          </>
        ),
      },
      {
        title: "Future of Data Models",
        content: (
          <>
            <h3>Emerging Trends in Data Modeling</h3>
            <li>
              NoSQL Models: Gaining popularity for handling unstructured and semi-structured data.
            </li>
            <li>
              Graph Databases: Ideal for complex relationships and networked data.
            </li>
            <li>
              Hybrid Models: Combining features of multiple models to suit diverse data needs.
            </li>
            <li>
              Cloud-Based Data Models: Offering flexibility and scalability for modern applications.
            </li>
          </>
        ),
      },
    ],
  },
  3: {
    videos: [
      {
        title: "Entity-Relationship Model",
        url: "https://www.youtube.com/embed/GBjLgU1WZvo?si=3ls0mIXZlfq-ER1R",
      },
    ],
    articles: [
      {
        title: "Entity-Relationship Diagrams",
        content: (
          <>
            <h3>Understanding ER Diagrams</h3>
            <li>
              An Entity-Relationship (ER) diagram is a visual representation of entities and their relationships in a database.
            </li>
            <li>
              Entities represent real-world objects or concepts, while relationships show how entities are connected.
            </li>
            <li>
              Attributes provide additional information about entities, such as names, dates, or quantities.
            </li>
          </>
        ),
      },
      {
        title: "Creating ER Diagrams",
        content: (
          <>
            <h3>Steps to Create an ER Diagram</h3>
            <li>
              Identify entities and their attributes based on the requirements of the system.
            </li>
            <li>
              Define relationships between entities, specifying cardinality (one-to-one, one-to-many, etc.).
            </li>
            <li>
              Use standardized symbols (rectangles for entities, diamonds for relationships) to draw the diagram.
            </li>
          </>
        ),
      },
      {
        title: "Best Practices for ER Modeling",
        content: (
          <>
            <h3>Tips for Effective ER Modeling</h3>
            <li>
              Keep the diagram simple and clear, avoiding unnecessary complexity.
            </li>
            <li>
              Use meaningful names for entities and attributes to enhance understanding.
            </li>
            <li>
              Regularly review and update the ER diagram as requirements evolve.
            </li>
          </>
        ),
      },
      {
        title: "ER Modeling Tools",
        content: (
          <>
            <h3>Popular Tools for ER Diagram Creation</h3>
            <li>
              Lucidchart: An online diagramming tool with ER diagram templates.
            </li>
            <li>
              Draw.io: A free, web-based diagramming tool suitable for creating ER diagrams.
            </li>
            <li>
              Microsoft Visio: A professional diagramming tool with advanced features for ER modeling.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: ER Modeling for a Library System",
        content: (
          <>
            <h3>Example of ER Modeling in Practice</h3>
            <li>
              Entities: Book, Author, Member, Loan
            </li>
            <li>
              Relationships: A Book can have multiple Authors, a Member can borrow multiple Books, and Loans track the borrowing process.
            </li>
            <li>
              Attributes: Book (Title, ISBN), Author (Name), Member (MemberID, Name), Loan (LoanDate, ReturnDate).
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in ER Modeling",
        content: (
          <>
            <h3>Emerging Trends in Entity-Relationship Modeling</h3>
            <li>
              Integration with NoSQL databases, adapting ER concepts to handle unstructured data.
            </li>
            <li>
              Use of AI tools for automated ER diagram generation based on data analysis.
            </li>
            <li>
              Enhanced collaboration features in ER modeling tools for team-based design.
            </li>
          </>
        ),
      },
    ],
  },
  4: {
    videos: [
      {
        title: "Relational Model Basics",
        url: "https://www.youtube.com/embed/Q45sr5p_NmQ?si=GUxOfDcroqf6vmcA",
      },
    ],
    articles: [
      {
        title: "Understanding the Relational Model",
        content: (
          <>
            <h3>Key Concepts of the Relational Model</h3>
            <li>
              The relational model organizes data into tables (relations) with rows (tuples) and columns (attributes).
            </li>
            <li>
              Each table has a unique primary key that identifies each row, ensuring data integrity.
            </li>
            <li>
              Relationships between tables are established using foreign keys, linking data across different tables.
            </li>
          </>
        ),
      },
      {
        title: "Relational Algebra Operations",
        content: (
          <>
            <h3>Basic Operations in Relational Algebra</h3>
            <li>
              Selection (σ): Filters rows based on a specified condition.
            </li>
            <li>
              Projection (π): Selects specific columns from a table.
            </li>
            <li>
              Union (∪), Intersection (∩), and Difference (-): Set operations to combine or compare tables.
            </li>
          </>
        ),
      },
      {
        title: "Normalization in Relational Databases",
        content: (
          <>
            <h3>Importance of Normalization</h3>
            <li>
              Normalization reduces data redundancy and improves data integrity by organizing tables efficiently.
            </li>
            <li>
              It involves decomposing tables into smaller, related tables while maintaining relationships through foreign keys.
            </li>
          </>
        ),
      },
      {
        title: "SQL and the Relational Model",
        content: (
          <>
            <h3>Using SQL with the Relational Model</h3>
            <li>
              SQL (Structured Query Language) is used to interact with relational databases, allowing users to query, insert, update, and delete data.
            </li>
            <li>
              SQL commands like SELECT, INSERT, UPDATE, and DELETE are fundamental for managing relational data.
            </li>
          </>
        ),
      },
      {
        title: "Challenges in Relational Databases",
        content: (
          <>
            <h3>Common Challenges in Relational Database Management</h3>
            <li>
              Handling large volumes of data efficiently while maintaining performance.
            </li>
            <li>
              Ensuring data consistency and integrity across multiple tables and transactions.
            </li>
            <li>
              Adapting to changing data requirements without disrupting existing structures.
            </li>
          </>
        ),
      },
      {
        title: "Future of Relational Databases",
        content: (
          <>
            <h3>Emerging Trends in Relational Database Management</h3>
            <li>
              Integration with cloud platforms for scalability and flexibility in data management.
            </li>
            <li>
              Adoption of hybrid models combining relational and NoSQL databases for diverse data needs.
            </li>
            <li>
              Enhanced support for big data analytics and real-time processing in relational systems.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Relational Model in E-Commerce",
        content: (
          <>
            <h3>Example of Relational Model in Practice</h3>
            <li>
              Entities: Customers, Orders, Products, Categories
            </li>
            <li>
              Relationships: A Customer can place multiple Orders, each Order can contain multiple Products, and Products belong to Categories.
            </li>
            <li>
              Attributes: Customer (CustomerID, Name), Order (OrderID, OrderDate), Product (ProductID, Price), Category (CategoryID, CategoryName).
            </li>
          </>
        ),
      },
    ],
  },
  5: {
    videos: [
      {
        title: "Introduction to Structured Query Language (SQL)",
        url: "https://www.youtube.com/embed/Zqo-qNNMmdA?si=-k1WEiP1vC_0OHl7",
      },
      {
        title: "SQL Commands",
        url: "https://www.youtube.com/embed/vUj-kUEC_oA?si=jHhJ54BibpYuX50R",
      },
      {
        title: "Basics of Relational Algebra",
        url: "https://www.youtube.com/embed/76v3gRns28U?si=p7v3Rq4D0plKOhUV",
      },
      {
        title: "Relational Algebra (Project Operation)",
        url: "https://www.youtube.com/embed/QY2X_TlLkqo?si=wHwpYR8HEr4NhkM4",
      },
      {
        title: "Relational Algebra (Set Difference Operation)",
        url: "https://www.youtube.com/embed/dS214kONAZA?si=xJuK5bmm_YrdBRPW",
      },
      {
        title: "Relational Algebra (Set Intersection Operation)",
        url: "https://www.youtube.com/embed/NwgNWtkqDYM?si=Jn72FKhhBQx59mvT",
      },
      
    ],
    articles: [
      {
        title: "Introduction to SQL",
        content: (
          <>
            <h3>Understanding SQL (Structured Query Language)</h3>
            <li>
              SQL is the standard language for managing and manipulating relational databases.
            </li>
            <li>
              It allows users to perform operations like querying, inserting, updating, and deleting data.
            </li>
            <li>
              SQL commands are categorized into Data Definition Language (DDL), Data Manipulation Language (DML), and Data Control Language (DCL).
            </li>
          </>
        ),
      },
      {
        title: "Basic SQL Commands",
        content: (
          <>
            <h3>Common SQL Commands</h3>
            <li>
              SELECT: Retrieve data from one or more tables.
            </li>
            <li>
              INSERT: Add new records to a table.
            </li>
            <li>
              UPDATE: Modify existing records in a table.
            </li>
            <li>
              DELETE: Remove records from a table.
            </li>
          </>
        ),
      },
      {
        title: "Relational Algebra vs. SQL",
        content: (
          <>
            <h3>Comparing Relational Algebra and SQL</h3>
            <li>
              Relational algebra provides a theoretical foundation for database operations, while SQL is a practical implementation.
            </li>
            <li>
              SQL includes additional features like joins, subqueries, and aggregate functions not present in basic relational algebra.
            </li>
          </>
        ),
      },
      {
        title: "Advanced SQL Features",
        content: (
          <>
            <h3>Exploring Advanced SQL Capabilities</h3>
            <li>
              Joins: Combine rows from two or more tables based on related columns.
            </li>
            <li>
              Subqueries: Nested queries that allow complex data retrieval.
            </li>
            <li>
              Aggregate Functions: Perform calculations on multiple rows of data (e.g., COUNT, SUM, AVG).
            </li>
          </>
        ),
      },
      {
        title: "SQL Best Practices",
        content: (
          <>
            <h3>Best Practices for Writing SQL Queries</h3>
            <li>
              Use meaningful table and column names to enhance readability.
            </li>
            <li>
              Optimize queries by using indexes and avoiding unnecessary complexity.
            </li>
            <li>
              Regularly back up databases to prevent data loss.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in SQL",
        content: (
          <>
            <h3>Emerging Trends in SQL and Database Management</h3>
            <li>
              Integration with cloud databases for scalability and flexibility.
            </li>
            <li>
              Support for NoSQL features in traditional SQL databases.
            </li>
            <li>
              Enhanced security features to protect sensitive data.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: SQL in E-Commerce",
        content: (
          <>
            <h3>Example of SQL in Practice</h3>
            <li>
              Entities: Customers, Orders, Products, Categories
            </li>
            <li>
              Relationships: A Customer can place multiple Orders, each Order can contain multiple Products, and Products belong to Categories.
            </li>
            <li>
              Sample SQL Query: 
              <pre>
                SELECT Customers.Name, Orders.OrderDate 
                FROM Customers 
                JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
              </pre>
            </li>
          </>
        ),
      },
      {
        title: "SQL Tools and Resources",
        content: (
          <>
            <h3>Popular SQL Tools and Learning Resources</h3>
            <li>
              MySQL, PostgreSQL, and SQLite are popular relational database management systems that support SQL.
            </li>
            <li>
              Online platforms like W3Schools, Codecademy, and Khan Academy offer interactive SQL tutorials.
            </li>
            <li>
              Books like "SQL in 10 Minutes a Day" and "Learning SQL" provide comprehensive guides for beginners.
            </li>
          </>
        ),
      },
    ],
  },
  6: {
    videos: [
      {
        title: "Normalization Overview",
        url: "https://www.youtube.com/embed/GjnwJ9u33Hg?si=pedLOazQm0cmgXIJ",
      },
      {
        title: "Normalization Forms",
        url: "https://www.youtube.com/embed/GFQaEYEc8_8?si=bOu-VufXsbsMmtds",
      },
    ],
    articles: [
      {
        title: "Understanding Normalization",
        content: (
          <>
            <h3>What is Normalization?</h3>
            <li>
              Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
            </li>
            <li>
              It involves dividing large tables into smaller, related tables and defining relationships between them.
            </li>
            <li>
              The main goal is to eliminate undesirable characteristics like insertion, update, and deletion anomalies.
            </li>
          </>
        ),
      },
      {
        title: "Normal Forms Explained",
        content: (
          <>
            <h3>Different Normal Forms</h3>
            <li>
              First Normal Form (1NF): Ensures that all attributes are atomic and each record is unique.
            </li>
            <li>
              Second Normal Form (2NF): Achieved when a table is in 1NF and all non-key attributes are fully functionally dependent on the primary key.
            </li>
            <li>
              Third Normal Form (3NF): A table is in 3NF if it is in 2NF and all attributes are functionally dependent only on the primary key.
            </li>
          </>
        ),
      },
      {
        title: "Benefits of Normalization",
        content: (
          <>
            <h3>Advantages of Normalization</h3>
            <li>
              Reduces data redundancy, saving storage space and improving performance.
            </li>
            <li>
              Enhances data integrity by ensuring that updates are made consistently across related tables.
            </li>
            <li>
              Simplifies database design, making it easier to understand and maintain.
            </li>
          </>
        ),
      },
      {
        title: "Challenges of Normalization",
        content: (
          <>
            <h3>Potential Issues with Normalization</h3>
            <li>
              Over-normalization can lead to complex queries and decreased performance due to excessive joins.
            </li>
            <li>
              It may complicate the database schema, making it harder for developers to work with.
            </li>
            <li>
              Balancing normalization with performance requirements is crucial in database design.
            </li>
          </>
        ),
      },
      {
        title: "Denormalization",
        content: (
          <>
            <h3>Understanding Denormalization</h3>
            <li>
              Denormalization is the process of combining tables to improve read performance at the cost of increased redundancy.
            </li>
            <li>
              It is often used in data warehousing and reporting systems where read performance is prioritized over write efficiency.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Normalization in Practice",
        content: (
          <>
            <h3>Example of Normalization in a Library System</h3>
            <li>
              Entities: Books, Authors, Members, Loans
            </li>
            <li>
              Relationships: A Book can have multiple Authors, a Member can borrow multiple Books, and Loans track the borrowing process.
            </li>
            <li>
              Attributes: Book (Title, ISBN), Author (Name), Member (MemberID, Name), Loan (LoanDate, ReturnDate).
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in Normalization",
        content: (
          <>
            <h3>Emerging Trends in Database Normalization</h3>
            <li>
              Integration with NoSQL databases, adapting normalization concepts to handle unstructured data.
            </li>
            <li>
              Use of AI tools for automated normalization and schema optimization.
            </li>
            <li>
              Enhanced support for hybrid models combining normalized and denormalized structures for performance optimization.
            </li>
          </>
        ),
      },
    ],
  },
  7: {
    videos: [
      {
        title: "Transaction Management Overview",
        url: "https://www.youtube.com/embed/I9ZKE2qeDzo?si=4JPoFkPFvGWUtTN9",
      },
      {
        title: "ACID Properties",
        url: "https://www.youtube.com/embed/-GS0OxFJsYQ?si=dKe6ww_7obLp90lr",
      },
    ],
    articles: [
      {
        title: "Understanding Transactions",
        content: (
          <>
            <h3>What is a Transaction?</h3>
            <li>
              A transaction is a sequence of operations performed as a single logical unit of work.
            </li>
            <li>
              It ensures data integrity by adhering to the ACID properties (Atomicity, Consistency, Isolation, Durability).
            </li>
            <li>
              Transactions can be committed (saved) or rolled back (undone) based on success or failure.
            </li>
          </>
        ),
      },
      {
        title: "ACID Properties Explained",
        content: (
          <>
            <h3>ACID Properties of Transactions</h3>
            <li>
              Atomicity: Ensures that all operations in a transaction are completed successfully or none at all.
            </li>
            <li>
              Consistency: Guarantees that a transaction brings the database from one valid state to another.
            </li>
            <li>
              Isolation: Ensures that transactions are executed independently without interference from others.
            </li>
            <li>
              Durability: Guarantees that once a transaction is committed, it remains permanently in the database.
            </li>
          </>
        ),
      },
      {
        title: "Transaction Control Commands",
        content: (
          <>
            <h3>SQL Commands for Transaction Management</h3>
            <li>
              BEGIN TRANSACTION: Starts a new transaction.
            </li>
            <li>
              COMMIT: Saves all changes made during the transaction.
            </li>
            <li>
              ROLLBACK: Undoes all changes made during the transaction if an error occurs.
            </li>
          </>
        ),
      },
      {
        title: "Concurrency Control",
        content: (
          <>
            <h3>Managing Concurrent Transactions</h3>
            <li>
              Concurrency control ensures that multiple transactions can occur simultaneously without compromising data integrity.
            </li>
            <li>
              Techniques include locking mechanisms, timestamps, and optimistic concurrency control.
            </li>
          </>
        ),
      },
      {
        title: "Challenges in Transaction Management",
        content: (
          <>
            <h3>Common Challenges in Transaction Management</h3>
            <li>
              Deadlocks: Occur when two or more transactions are waiting for each other to release resources.
            </li>
            <li>
              Lost Updates: Happens when two transactions read the same data and one overwrites the other's changes.
            </li>
            <li>
              Inconsistent Reads: Occurs when a transaction reads data that is modified by another transaction before it is committed.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in Transaction Management",
        content: (
          <>
            <h3>Emerging Trends in Transaction Management</h3>
            <li>
              Integration with distributed databases, ensuring transactions across multiple nodes maintain ACID properties.
            </li>
            <li>
              Use of blockchain technology for immutable transaction records and enhanced security.
            </li>
            <li>
              AI-driven transaction management systems for automated conflict resolution and optimization.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Transaction Management in Banking Systems",
        content: (
          <>
            <h3>Example of Transaction Management in Practice</h3>
            <li>
              Entities: Accounts, Transactions, Customers
            </li>
            <li>
              Relationships: A Customer can have multiple Accounts, and each Account can have multiple Transactions.
            </li>
            <li>
              Attributes: Account (AccountID, Balance), Transaction (TransactionID, Amount, Date), Customer (CustomerID, Name).
            </li>
          </>
        ),
      },
    ],
  },
  8: {
    videos: [
      {
        title: "Concurrency Control in DBMS",
        url: "https://www.youtube.com/embed/OoYyiuTGT5E?si=svLAfMgiQalyGq_L", 
      },
      {
        title: "Locking Mechanisms",
        url: "https://www.youtube.com/embed/uh2rEWZnztY?si=pKdnVhtFSf2AdX6v",
      },
    ],
    articles: [
      {
        title: "Understanding Concurrency Control",
        content: (
          <>
            <h3>What is Concurrency Control?</h3>
            <li>
              Concurrency control is the management of simultaneous operations on a database without conflicting.
            </li>
            <li>
              It ensures that transactions are executed in a way that maintains data integrity and consistency.
            </li>
            <li>
              Techniques include locking, timestamps, and optimistic concurrency control.
            </li>
          </>
        ),
      },
      {
        title: "Locking Mechanisms",
        content: (
          <>
            <h3>Types of Locking Mechanisms</h3>
            <li>
              Shared Locks: Allow multiple transactions to read data but prevent modifications.
            </li>
            <li>
              Exclusive Locks: Prevent other transactions from reading or modifying data until the lock is released.
            </li>
            <li>
              Deadlocks: Occur when two or more transactions are waiting for each other to release locks, leading to a standstill.
            </li>
          </>
        ),
      },
      {
        title: "Timestamp-Based Concurrency Control",
        content: (
          <>
            <h3>Using Timestamps for Concurrency Control</h3>
            <li>
              Each transaction is assigned a unique timestamp, determining the order of execution.
            </li>
            <li>
              Transactions are executed based on their timestamps, ensuring a consistent view of the database.
            </li>
          </>
        ),
      },
      {
        title: "Optimistic Concurrency Control",
        content: (
          <>
            <h3>Optimistic vs. Pessimistic Concurrency Control</h3>
            <li>
              Optimistic concurrency control assumes conflicts are rare and allows transactions to execute without locks.
            </li>
            <li>
              If a conflict occurs, the transaction is rolled back and retried, ensuring data integrity.
            </li>
          </>
        ),
      },
      {
        title: "Challenges in Concurrency Control",
        content: (
          <>
            <h3>Common Challenges in Concurrency Control</h3>
            <li>
              Deadlocks can lead to performance issues and require deadlock detection and resolution mechanisms.
            </li>
            <li>
              Balancing performance and data integrity is crucial in designing effective concurrency control systems.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in Concurrency Control",
        content: (
          <>
            <h3>Emerging Trends in Concurrency Control</h3>
            <li>
              Integration with distributed databases, ensuring consistency across multiple nodes.
            </li>
            <li>
              Use of AI and machine learning for predictive concurrency control and conflict resolution.
            </li>
            <li>
              Enhanced support for real-time applications requiring high concurrency levels.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Concurrency Control in Online Banking",
        content: (
          <>
            <h3>Example of Concurrency Control in Practice</h3>
            <li>
              Entities: Accounts, Transactions, Customers
            </li>
            <li>
              Relationships: A Customer can have multiple Accounts, and each Account can have multiple Transactions.
            </li>
            <li>
              Attributes: Account (AccountID, Balance), Transaction (TransactionID, Amount, Date), Customer (CustomerID, Name).
            </li>
          </>
        ),
      },
      {
        title: "Concurrency Control Tools and Resources",
        content: (
          <>
            <h3>Popular Tools and Learning Resources for Concurrency Control</h3>
            <li>
              Database management systems like MySQL, PostgreSQL, and Oracle provide built-in concurrency control mechanisms.
            </li>
            <li>
              Online courses on platforms like Coursera and Udemy offer in-depth training on concurrency control techniques.
            </li>
            <li>
              Books like "Database System Concepts" and "Fundamentals of Database Systems" cover concurrency control in detail.
            </li>
          </>
        ),
      },
    ],
  },
  9: {
    videos: [
      {
        title: "Introduction to Indexing",
        url: "https://www.youtube.com/embed/SxHX1T53n_A?si=mEhPRypqPA7azzBx",
      },
      {
        title: "Introduction to Hashing",
        url: "https://www.youtube.com/embed/W5q0xgxmRd8?si=tiPytIklC6qCJxeb",
      },
    ],
    articles: [
      {
        title: "Understanding Indexing",
        content: (
          <>
            <h3>What is Indexing?</h3>
            <li>
              Indexing is a data structure technique that improves the speed of data retrieval operations on a database table.
            </li>
            <li>
              It creates a separate data structure that allows quick access to rows in a table based on the values of one or more columns.
            </li>
            <li>
              Common types of indexes include B-trees, hash indexes, and bitmap indexes.
            </li>
          </>
        ),
      },
      {
        title: "Types of Indexes",
        content: (
          <>
            <h3>Different Types of Indexes</h3>
            <li>
              Primary Index: Automatically created when a primary key is defined, ensuring unique values.
            </li>
            <li>
              Secondary Index: Created on non-primary key columns to speed up queries involving those columns.
            </li>
            <li>
              Composite Index: An index on multiple columns, useful for queries that filter on multiple attributes.
            </li>
          </>
        ),
      },
      {
        title: "Hashing Techniques",
        content: (
          <>
            <h3>Understanding Hashing</h3>
            <li>
              Hashing is a technique that maps data to a fixed-size value (hash) using a hash function.
            </li>
            <li>
              It allows for constant time complexity for search operations, making it efficient for large datasets.
            </li>
          </>
        ),
      },
      {
        title: "Challenges in Indexing and Hashing",
        content: (
          <>
            <h3>Common Challenges in Indexing and Hashing</h3>
            <li>
              Maintaining indexes can add overhead during insertions, updates, and deletions.
            </li>
            <li>
              Choosing the right indexing strategy requires understanding query patterns and data distribution.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in Indexing and Hashing",
        content: (
          <>
            <h3>Emerging Trends in Indexing and Hashing</h3>
            <li>
              Integration with NoSQL databases, adapting indexing techniques for unstructured data.
            </li>
            <li>
              Use of AI-driven indexing strategies for dynamic optimization based on query patterns.
            </li>
            <li>
              Enhanced support for distributed databases, ensuring efficient indexing across multiple nodes.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Indexing in E-Commerce",
        content: (
          <>
            <h3>Example of Indexing in Practice</h3>
            <li>
              Entities: Products, Categories, Customers, Orders
            </li>
            <li>
              Relationships: A Product belongs to a Category, a Customer can place multiple Orders, and each Order contains multiple Products.
            </li>
            <li>
              Attributes: Product (ProductID, Name, Price), Category (CategoryID, Name), Customer (CustomerID, Name), Order (OrderID, OrderDate).
            </li>
          </>
        ),
      },
      {
        title: "Indexing Tools and Resources",
        content: (
          <>
            <h3>Popular Tools and Learning Resources for Indexing</h3>
            <li>
              Database management systems like MySQL, PostgreSQL, and MongoDB provide built-in indexing capabilities.
            </li>
            <li>
              Online courses on platforms like Coursera and Udemy offer in-depth training on indexing techniques.
            </li>
            <li>
              Books like "Database System Concepts" and "Fundamentals of Database Systems" cover indexing in detail.
            </li>
          </>
        ),
      },
    ],
  },
  10: {
    videos: [
      {
        title: "Query Processing and Optimization",
        url: "https://www.youtube.com/embed/GPz7RgBNEYE?si=WcrIlBK6nys15wqI",
      },
    ],
    articles: [
      {
        title: "Understanding Query Processing",
        content: (
          <>
            <h3>What is Query Processing?</h3>
            <li>
              Query processing is the phase where a database management system interprets and executes SQL queries.
            </li>
            <li>
              It involves parsing the query, optimizing it, and executing it against the database.
            </li>
            <li>
              The goal is to retrieve results efficiently while minimizing resource usage.
            </li>
          </>
        ),
      },
      {
        title: "Query Optimization Techniques",
        content: (
          <>
            <h3>Common Query Optimization Techniques</h3>
            <li>
              Indexing: Using indexes to speed up data retrieval operations.
            </li>
            <li>
              Join Algorithms: Choosing the most efficient algorithm for joining tables (e.g., nested loop, hash join).
            </li>
            <li>
              Query Rewriting: Transforming queries into more efficient forms without changing their semantics.
            </li>
          </>
        ),
      },
      {
        title: "Execution Plans",
        content: (
          <>
            <h3>Understanding Execution Plans</h3>
            <li>
              An execution plan is a detailed roadmap of how a query will be executed by the database engine.
            </li>
            <li>
              It includes information about the order of operations, access paths, and estimated costs.
            </li>
          </>
        ),
      },
      {
        title: "Challenges in Query Processing",
        content: (
          <>
            <h3>Common Challenges in Query Processing</h3>
            <li>
              Complex queries can lead to performance issues if not optimized properly.
            </li>
            <li>
              Data distribution and volume can significantly impact query performance.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in Query Processing",
        content: (
          <>
            <h3>Emerging Trends in Query Processing</h3>
            <li>
              Integration with AI and machine learning for predictive query optimization.
            </li>
            <li>
              Enhanced support for distributed databases, ensuring efficient query processing across multiple nodes.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Query Processing in E-Commerce",
        content: (
          <>
            <h3>Example of Query Processing in Practice</h3>
            <li>
              Entities: Products, Categories, Customers, Orders
            </li>
            <li>
              Relationships: A Product belongs to a Category, a Customer can place multiple Orders, and each Order contains multiple Products.
            </li>
            <li>
              Attributes: Product (ProductID, Name, Price), Category (CategoryID, Name), Customer (CustomerID, Name), Order (OrderID, OrderDate).
            </li>
          </>
        ),
      },
      {
        title: "Query Processing Tools and Resources",
        content: (
          <>
            <h3>Popular Tools and Learning Resources for Query Processing</h3>
            <li>
              Database management systems like MySQL, PostgreSQL, and Oracle provide built-in query processing capabilities.
            </li>
            <li>
              Online courses on platforms like Coursera and Udemy offer in-depth training on query processing techniques.
            </li>
            <li>
              Books like "Database System Concepts" and "Fundamentals of Database Systems" cover query processing in detail.
            </li>
          </>
        ),
      },
    ],
  },
  11: {
    videos: [
      {
        title: "NoSQL and Modern Databases",
        url: "https://www.youtube.com/embed/0buKQHokLK8?si=_SeikiKfknMrChaX",
      },
    ],
    articles: [
      {
        title: "Introduction to NoSQL Databases",
        content: (
          <>
            <h3>What are NoSQL Databases?</h3>
            <li>
              NoSQL databases are non-relational databases designed to handle large volumes of unstructured or semi-structured data.
            </li>
            <li>
              They provide flexibility in data modeling and can scale horizontally across distributed systems.
            </li>
            <li>
              Common types include document stores, key-value stores, column-family stores, and graph databases.
            </li>
          </>
        ),
      },
      {
        title: "Key Features of NoSQL Databases",
        content: (
          <>
            <h3>Characteristics of NoSQL Databases</h3>
            <li>
              Schema-less design allows for dynamic data structures without predefined schemas.
            </li>
            <li>
              High scalability and performance for handling large datasets and high-velocity data streams.
            </li>
            <li>
              Support for distributed architectures, enabling data replication and partitioning across multiple nodes.
            </li>
          </>
        ),
      },
      {
        title: "Use Cases for NoSQL Databases",
        content: (
          <>
            <h3>Common Use Cases for NoSQL Databases</h3>
            <li>
              Big Data applications requiring real-time analytics and processing of large datasets.
            </li>
            <li>
              Content management systems with diverse data types and structures.
            </li>
            <li>
              Social media platforms handling user-generated content and relationships.
            </li>
          </>
        ),
      },
      {
        title: "Challenges with NoSQL Databases",
        content: (
          <>
            <h3>Common Challenges in NoSQL Database Management</h3>
            <li>
              Lack of standardization across different NoSQL databases, leading to vendor lock-in.
            </li>
            <li>
              Ensuring data consistency and integrity in distributed environments can be complex.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in NoSQL Databases",
        content: (
          <>
            <h3>Emerging Trends in NoSQL Database Management</h3>
            <li>
              Integration with AI and machine learning for advanced analytics and predictive modeling.
            </li>
            <li>
              Enhanced support for hybrid models combining relational and NoSQL databases for flexibility.
            </li>
            <li>
              Use of serverless architectures for scalable and cost-effective NoSQL solutions.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: NoSQL in Social Media",
        content: (
          <>
            <h3>Example of NoSQL Database in Practice</h3>
            <li>
              Entities: Users, Posts, Comments, Likes
            </li>
            <li>
              Relationships: A User can create multiple Posts, each Post can have multiple Comments and Likes.
            </li>
            <li>
              Attributes: User (UserID, Name), Post (PostID, Content, Timestamp), Comment (CommentID, Content), Like (LikeID).
            </li>
          </>
        ),
      },
      {
        title: "NoSQL Tools and Resources",
        content: (
          <>
            <h3>Popular Tools and Learning Resources for NoSQL Databases</h3>
            <li>
              MongoDB, Cassandra, and Redis are popular NoSQL databases with extensive documentation and community support.
            </li>
            <li>
              Online courses on platforms like Coursera and Udemy offer in-depth training on NoSQL database management.
            </li>
            <li>
              Books like "NoSQL Distilled" and "MongoDB: The Definitive Guide" provide comprehensive guides for beginners.
            </li>
          </>
        ),
      },
    ],
  },
  12: {
    videos: [
      {
        title: "Distributed Database Management",
        url: "https://www.youtube.com/embed/Q1RIpXS7lPc?si=eddlpS_jokzzPuI7",
      },
    ],
    articles: [
      {
        title: "Understanding Distributed Databases",
        content: (
          <>
            <h3>What are Distributed Databases?</h3>
            <li>
              Distributed databases are databases that are spread across multiple physical locations, often across different servers or data centers.
            </li>
            <li>
              They provide high availability, fault tolerance, and scalability by distributing data and processing across multiple nodes.
            </li>
            <li>
              Common architectures include master-slave replication, sharding, and peer-to-peer systems.
            </li>
          </>
        ),
      },
      {
        title: "Benefits of Distributed Databases",
        content: (
          <>
            <h3>Advantages of Distributed Database Systems</h3>
            <li>
              Improved performance through parallel processing and load balancing across multiple nodes.
            </li>
            <li>
              Enhanced fault tolerance by replicating data across multiple locations, ensuring data availability even in case of node failures.
            </li>
            <li>
              Scalability to handle large datasets and high-velocity data streams by adding more nodes to the system.
            </li>
          </>
        ),
      },
      {
        title: "Challenges in Distributed Database Management",
        content: (
          <>
            <h3>Common Challenges in Distributed Database Management</h3>
            <li>
              Data consistency can be challenging due to network latency and partitioning issues.
            </li>
            <li>
              Ensuring security and access control across distributed nodes requires careful planning and implementation.
            </li>
          </>
        ),
      },
      {
        title: "Future Trends in Distributed Databases",
        content: (
          <>
            <h3>Emerging Trends in Distributed Database Management</h3>
            <li>
              Integration with cloud computing for scalable and cost-effective distributed database solutions.
            </li>
            <li>
              Use of AI and machine learning for predictive analytics and automated management of distributed databases.
            </li>
          </>
        ),
      },
      {
        title: "Case Study: Distributed Databases in E-Commerce",
        content: (
          <>
            <h3>Example of Distributed Database in Practice</h3>
            <li>
              Entities: Products, Categories, Customers, Orders
            </li>
            <li>
              Relationships: A Product belongs to a Category, a Customer can place multiple Orders, and each Order contains multiple Products.
            </li>
            <li>
              Attributes: Product (ProductID, Name, Price), Category (CategoryID, Name), Customer (CustomerID, Name), Order (OrderID, OrderDate).
            </li>
          </>
        ),
      },
      {
        title: "Distributed Database Tools and Resources",
        content: (
          <>
            <h3>Popular Tools and Learning Resources for Distributed Databases</h3>
            <li>
              Apache Cassandra, MongoDB, and Amazon DynamoDB are popular distributed databases with extensive documentation and community support.
            </li>
            <li>
              Online courses on platforms like Coursera and Udemy offer in-depth training on distributed database management.
            </li>
            <li>
              Books like "Distributed Database Systems" and "Cassandra: The Definitive Guide" provide comprehensive guides for beginners.
            </li>
          </>
        ),
      },
    ],
  },
};

const DbmsTopicPage = () => {
  const { id } = useParams();
  const topic = topicData[id];
  const navigate = useNavigate();
  const content = dummyContentByTopic[id];
  const [activeTab, setActiveTab] = useState("videos");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [readArticles, setReadArticles] = useState([]);

  if (!topic || !content)
    return <h2 style={{ padding: "2rem" }}>Topic not found</h2>;

  const handleNextTopic = () => {
    const nextId = parseInt(id) + 1;
    if (topicData[nextId]) {
      navigate(`/study-material/dbms/topic/${nextId}`);
      setActiveTab("videos");
      setReadArticles([]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "200px" : "60px",
          background: "#f4f4f4",
          padding: "1rem",
          transition: "width 0.3s",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderRight: "2px solid aqua",
          borderRadius: "2rem",
        }}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            marginBottom: "1rem",
            cursor: "pointer",
            padding: "0.5rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          {isSidebarOpen ? "◀" : "▶"}
        </button>

        {isSidebarOpen && (
          <h3
            style={{
              marginTop: "1rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {topic.name}
          </h3>
        )}
        <Divider />

        <ul
          style={{
            listStyle: "none",
            padding: "auto",
            textAlign: "center",
            marginTop: "4rem",
            fontSize: "1.5rem",
          }}
        >
          <li
            onClick={() => setActiveTab("videos")}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              fontWeight: activeTab === "videos" ? "bold" : "normal",
            }}
          >
            {isSidebarOpen ? "Videos" : "🎥"}
          </li>
          <li
            onClick={() => setActiveTab("articles")}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              fontWeight: activeTab === "articles" ? "bold" : "normal",
            }}
          >
            {isSidebarOpen ? "Articles" : "📄"}
          </li>
        </ul>
      </div>

      {/* Content Panel */}
      <div style={{ flex: 1, padding: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>
          {topic.name}
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          {topic.description}
        </p>

        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />

        {activeTab === "videos" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Videos</h3>
            {content.videos.map((video, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: "1rem" }}>{video.title}</p>
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {activeTab === "articles" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.8rem", width: "20rem" }}>
              Articles
            </h3>
            <ul>
              {content.articles.map((article, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "2rem",
                    marginBottom: "1.5rem",
                    backgroundColor: readArticles.includes(i)
                      ? "#f9f9f9"
                      : "#fff",
                  }}
                >
                  <h3>{article.title}</h3>
                  <div
                    style={{
                      color: "#333",
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {article.content}
                  </div>
                  <button
                    onClick={() =>
                      setReadArticles((prev) =>
                        prev.includes(i)
                          ? prev.filter((index) => index !== i)
                          : [...prev, i]
                      )
                    }
                    style={{
                      marginTop: "1rem",
                      padding: "0.4rem 1rem",
                      backgroundColor: readArticles.includes(i)
                        ? "#dc3545"
                        : "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {readArticles.includes(i)
                      ? "Mark as Unread"
                      : "Mark as Read"}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "problems" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              Problems
            </h3>
            <ul>
              {content.problems.map((prob) => (
                <li key={prob.id}>
                  <a
                    href={`/problem/${prob.id}`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    {prob.title} ({prob.difficulty})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Topic Button */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {topicData[parseInt(id) + 1] && (
            <button
              onClick={handleNextTopic}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Next Topic →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DbmsTopicPage;
