import React from "react";
import Accordion from "../../components/blocks/Accordion/Accordion";

const SqlServerDeveloper = [
  {
    title: "Chapter 1 : Relational Database Fundamentals",
    paragraph: (
      <ul>
        <li>Overview of Relational Database Concepts</li>
        <li>Relational Databases and Relational Database Management Systems</li>
        <li>SQL, DML and DDL Languages</li>
      </ul>
    ),
  },
  {
    title: "Chapter 2 : Manipulating Query Results",
    paragraph: (
      <ul>
        <li>Displaying Table Structures</li>
        <li>Retrieving Column Data From a Table or View</li>
        <li>Selecting Unique Values</li>
        <li>Obtaining a Row Count</li>
        <li>Filtering Rows Using the WHERE Clause</li>
        <li>Sorting Results Using ORDER BY</li>
        <li>Joining Multiple Tables</li>
      </ul>
    ),
  },
  {
    title: "Chapter 3 : Advanced Query Techniques",
    paragraph: (
      <ul>
        <li>Outer Joins</li>
        <li>Joining a Table to Itself</li>
        <li>Subqueries</li>
        <li>Grouping, Filtering and Sorting Query Results</li>
        <li>Tips for Developing Complex SQL Queries</li>
      </ul>
    ),
  },
  {
    title: "Chapter 4 : Creating a Database",
    paragraph: (
      <ul>
        <li>Database Development Methodology Overview</li>
        <li>Building a Logical Data Model</li>
        <li>Identifying Entities and Attributes</li>
        <li>Isolating Keys</li>
        <li>Relationships Between Entities</li>
        <li>Creating Entity-Relationship Diagrams</li>
        <li>Transforming to Physical Design</li>
        <li>Migrating Entities to Tables</li>
        <li>Selecting Primary Keys</li>
        <li>Defining Columns</li>
        <li>Enforcing Relationships with Foreign Keys</li>
        <li>Constructing the Database using DDL</li>
        <li>Creating Tables, Indexes, Constraints and Views</li>
      </ul>
    ),
  },
  {
    title: "Chapter 5 : Stored Procedures",
    paragraph: (
      <ul>
        <li>Definition and Benefits of Use</li>
        <li>CREATE PROCEDURE</li>
        <li>Syntax</li>
        <li>Variables and Parameters</li>
        <li>Code Examples</li>
        <li>Temporary Tables</li>
        <li>Control of Program Flow</li>
        <li>ALTER and DROP PROCEDURE</li>
        <li>Implementation Differences</li>
      </ul>
    ),
  },
  {
    title: "Chapter 6 : Triggers",
    paragraph: (
      <ul>
        <li>Definition and Benefits of Use</li>
        <li>Alternatives (e.g., Constraints)</li>
        <li>CREATE TRIGGER</li>
        <li>Syntax</li>
        <li>Trigger Types</li>
        <li>“Inserted” (or “NEW”) and “Deleted” (or “OLD”) Tables</li>
        <li>Event Handling and Trigger Execution</li>
        <li>Modifying and Dropping Triggers</li>
      </ul>
    ),
  },
  {
    title: "Chapter 7 : T-SQL Code Constructs",
    paragraph: (
      <ul>
        <li>Exploiting the Programming Features of T-SQL</li>
        <li>Conditional Constructs</li>
        <li>Looping Constructs</li>
        <li>Building Multi-Batch Scripts</li>
        <li>Invoking System Functions</li>
        <li>Declaring Variables Inside Scripts</li>
        <li>Using Variables in Scripts</li>
        <li>Using Temporary Tables in Scripts</li>
        <li>Correctly Handling Errors</li>
        <li>Error Handling</li>
        <li>Debugging</li>
        <li>Code Blocks</li>
        <li>Predefined System Variables</li>
      </ul>
    ),
  },
  {
    title: "Chapter 8 : Transactions and Locking",
    paragraph: (
      <ul>
        <li>Effective use of Transactions</li>
        <li>Using Isolation Level</li>
        <li>Maximizing Concurrency with Correct Use of Locking</li>
        <li>Shared Locks</li>
        <li>Exclusive Locks</li>
        <li>Update Locks</li>
        <li>Increasing Throughput by Choosing Appropriate Transaction</li>
        <li>Isolation</li>
        <li>Preventing Deadlocks</li>
      </ul>
    ),
  },
  {
    title: "Chapter 9 : T-SQL Cursors",
    paragraph: (
      <ul>
        <li>Overview of Cursors</li>
        <li>Declaring a Cursor</li>
        <li>Using OPEN CURSOR, CLOSE CURSOR, DEALLOCATE CURSOR Statements</li>
        <li>FETCHing Results</li>
        <li>Testing @@FETCH_STATUS and @ @CURSOR_ROWS</li>
        <li>Updating Records with Cursors</li>
      </ul>
    ),
  },
  {
    title: "Chapter 10 : Working with XML",
    paragraph: (
      <ul>
        <li>Benefits of XML</li>
        <li>Working with XML Documents</li>
        <li>Working with XML Schemas</li>
        <li>Storing Data in XML Data Type</li>
        <li>Working with XML Methods</li>
        <li>Query</li>
        <li>Exist</li>
        <li>Value</li>
        <li>Modify</li>
        <li>Nodes</li>
        <li>Producing XML from SELECT Statements Using the FOR XML Clause</li>
        <li>Validating XML Using XML Schemas</li>
      </ul>
    ),
  },
  {
    title: "Chapter 11 : Writing Basic SQL Queries",
    paragraph: (
      <ul>
        <li>Displaying Table Structures</li>
        <li>Retrieving Column Data From a Table or View</li>
        <li>Selecting Unique Values</li>
        <li>Obtaining a Row Count</li>
        <li>Filtering Rows Using the WHERE Clause</li>
        <li>Sorting Results Using ORDER BY</li>
        <li>Joining Multiple Tables</li>
      </ul>
    ),
  },
  {
    title:
      "Chapter 12 : Manipulating Table Data Using SQL's Data Manipulation Language (DML)",
    paragraph: (
      <ul>
        <li>Inserting Data into Tables</li>
        <li>Updating Existing Data</li>
        <li>Deleting Records</li>
        <li>Truncating Tables</li>
        <li>Implementing Data Integrity with Transactions</li>
        <li>COMMIT</li>
        <li>ROLLBACK</li>
        <li>SAVEPOINT</li>
      </ul>
    ),
  },
  {
    title: "Chapter 13 : Managing Database Objects",
    paragraph: (
      <ul>
        <li>Dropping Tables, Indexes and Views</li>
        <li>Modifying Tables, Indexes and Views</li>
        <li>Enabling and Disabling Constraints</li>
        <li>Managing Security</li>
      </ul>
    ),
  },
  {
    title: "Chapter 14 : User-Defined Functions",
    paragraph: (
      <ul>
        <li>Definition and Benefits of Use</li>
        <li>CREATE FUNCTION</li>
        <li>Syntax</li>
        <li>Scalar vs. Table Functions</li>
        <li>Comparison with Stored Procedures</li>
        <li>Returning Scalar Values and Tables</li>
        <li>Modifying and Dropping Functions</li>
      </ul>
    ),
  },
  {
    title: "Chapter 15 : Complex Queries",
    paragraph: (
      <ul>
        <li>Using Wilcard Characters with Like</li>
        <li>Improving SQL Queries with Common Table Expressions (CTE’s)</li>
        <li>Using the OUTPUT clause</li>
        <li>Allowing Users to Build SQL Queries Dynamically</li>
      </ul>
    ),
  },
  {
    title: "Chapter 16 : Working with Data Types and Functions",
    paragraph: (
      <ul>
        <li>Effective Use of Data Types in SQL</li>
        <li>String</li>
        <li>Numeric</li>
        <li>Time/Date</li>
        <li>Other</li>
        <li>How to Convert Data Using CAST and CONVERT</li>
        <li>Creating Conditional Tests with the CASE Function</li>
        <li>Substitution of Non-null Values with the COALESCE and ISNULL</li>
        <li>Functions</li>
        <li>Analyzing Data Points Using Ranking Functions</li>
      </ul>
    ),
  },
  {
    title: "Chapter 17 : More Stored Procedures",
    paragraph: (
      <ul>
        <li>Designing a Stored Procedure</li>
        <li>Input Parameters</li>
        <li>Output Parameters</li>
        <li>Default Values</li>
        <li>Implementing Exception Handling</li>
        <li>Adding Fault Tolerant Transaction Logic</li>
      </ul>
    ),
  },
  {
    title: "Chapter 18 : Advanced Views",
    paragraph: (
      <ul>
        <li>Designing Views</li>
        <li>Updating through a View</li>
        <li>Inserting Records through a View</li>
        <li>Deleting through a View</li>
        <li>Indexed Views and Performance Applications</li>
      </ul>
    ),
  },
];

export { SqlServerDeveloper };
