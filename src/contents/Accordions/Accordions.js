import React from "react";

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

const SQLServerIntegrationServices = [
  {
    title: "Chapter 1 : SSIS Architecture and Fundamentals",
    paragraph: (
      <ul>
        <li>Integration Services Architecture</li>
        <li>Key SSIS Features and New Features in 2012</li>
        <li>Creating Basic SSIS Routines</li>
        <li>Understanding SSIS Advanced Features</li>
      </ul>
    ),
  },
  {
    title: "Chapter 2 : SSIS Data Transformation",
    paragraph: (
      <ul>
        <li>Data Type Conversions</li>
        <li>Using Lookups for Missing Data</li>
        <li>Merging and Data</li>
        <li>Splitting Data to Multiple Destinations</li>
        <li>Using Fuzzy Logic to Locate Matching Records</li>
        <li>Sorting and Sampling Data</li>
        <li>Isolating and Counting Keywords</li>
      </ul>
    ),
  },
  {
    title: "Chapter 3 : OLAP and Data Warehouse Fundamental",
    paragraph: (
      <ul>
        <li>OLTP vs. OLAP Databases</li>
        <li>Data Warehouse Design</li>
        <li>Identifying Measures</li>
        <li>Creating Fact Tables</li>
        <li>Defining Dimensions Tables and Attributes</li>
      </ul>
    ),
  },
  {
    title: "Chapter 4 : Designing Data Integration with SSIS",
    paragraph: (
      <ul>
        <li>Using Control Flow Tasks</li>
        <li>Defining Data Flows to Import, Export and/or Migrate Data</li>
        <li>Integrating Data from Multiple Sources</li>
        <li>Creating and Using Staging Areas</li>
        <li>Sending Administrators Success/Failure Messages</li>
      </ul>
    ),
  },
  {
    title: "Chapter 5 : Deploying and Managing SSIS Projects",
    paragraph: (
      <ul>
        <li>Deploying SSIS Routines</li>
        <li>Scheduling Automatic Execution of SSIS Routines</li>
        <li>Securing SSIS Packages</li>
        <li>Manually Executing SSIS Routines</li>
      </ul>
    ),
  },
];

const SQLServerReportingServices = [
  {
    title: "Chapter 1 : Reporting Services Architecture",
    paragraph: (
      <ul>
        <li>All Report Server Components Defined</li>
        <li>Review of the Report Server Databases</li>
        <li>Managing the Report Manager Web Interface</li>
        <li>Report Lifecycle Step by Step</li>
      </ul>
    ),
  },
  {
    title: "Chapter 2 : Advanced Report Features",
    paragraph: (
      <ul>
        <li>Setting Up Input Parameters</li>
        <li>Adding Custom Report Navigation</li>
        <li>Adding Drill-Down for Master-Detail Reports</li>
        <li>Linking Reports</li>
        <li>Using Sub-reports</li>
        <li>Adding Conditional Formatting</li>
      </ul>
    ),
  },
  {
    title: "Chapter 3 : Implementing Report Models",
    paragraph: (
      <ul>
        <li>Understanding Report Models</li>
        <li>Defining and Deploying Report Models</li>
        <li>Setting Friendly Names for Source Data</li>
        <li>Managing and Securing Report Models</li>
      </ul>
    ),
  },
  {
    title: "Chapter 4 : Reporting Services Security",
    paragraph: (
      <ul>
        <li>Organizing Reports in Folders</li>
        <li>Setting Permissions on Reports and Folders</li>
        <li>Managing Security Roles</li>
        <li>Securing Data Sources and Report Models</li>
        <li>Logging Activity on the Report Server</li>
      </ul>
    ),
  },
  {
    title: "Chapter 5 : Adding Custom Code",
    paragraph: (
      <ul>
        <li>Querying the Report Server</li>
        <li>Creating Custom Data Extensions</li>
        <li>Creating Command Objects</li>
        <li>Creating Data Reader Objects</li>
        <li>Generating Report Definition Language</li>
      </ul>
    ),
  },
  {
    title: "Chapter 6 : Creating Basic Reports",
    paragraph: (
      <ul>
        <li>Creating Table Reports</li>
        <li>Formatting Options</li>
        <li>Adding Headers and Footers</li>
        <li>Using Subtotals and Formulas</li>
        <li>Adding Charts and Gauges</li>
        <li>Using Lists for Free-Form Reports</li>
        <li>Paging and Sorting</li>
        <li>Managing Data Sources</li>
      </ul>
    ),
  },
  {
    title: "Chapter 7 : Matrix Reports",
    paragraph: (
      <ul>
        <li>Pivoting Data with Matrix Controls</li>
        <li>Adding Multiple Data Regions</li>
        <li>Grouping and Sorting</li>
        <li>Adding Subtotals</li>
        <li>Adding Custom Aggregate Formulas</li>
        <li>Using the TablixControl</li>
      </ul>
    ),
  },
  {
    title: "Chapter 8 : Report Builder Utility",
    paragraph: (
      <ul>
        <li>Creating Reports with Report Builder</li>
        <li>Connecting to Report Models</li>
        <li>Adding Charts and Gauges in Report Builder</li>
        <li>Differences Between SQL Server Data Tools and Report Builder</li>
      </ul>
    ),
  },
  {
    title: "Chapter 9 : Automating Report Creation and Delivery",
    paragraph: (
      <ul>
        <li>Creating Snapshot Reports</li>
        <li>Storing Previous Versions of Reports</li>
        <li>Caching Reports to Improve Performance</li>
        <li>Defining Subscriptions to Automate Report Delivery</li>
        <li>Rendering Reports in Excel, MS Word or as a PDF</li>
        <li>Hiding Reports from Users</li>
      </ul>
    ),
  },
  {
    title: "Chapter 10 : .NET Integration with Reporting Services",
    paragraph: (
      <ul>
        <li>Writing User-Defined Functions in .NET</li>
        <li>Using Custom Functions</li>
        <li>Referencing .NET Libraries</li>
        <li>Managing Report Servers from .NET Applications</li>
        <li>Accessing SSRS from .NET Applications</li>
        <li>Retrieving Report Items</li>
        <li>Listing Report Metadata</li>
        <li>Using the ReportViewer Control in ASP.NET Applications</li>
      </ul>
    ),
  },
];

const SQLServerAnalysisServices = [
  {
    title: "Chapter 1 : SSAS Installation and Configuration",
    paragraph: (
      <ul>
        <li>Introduction to SSAS</li>
        <li>Multidimensional Mode Configuration</li>
        <li>Tabular Mode Configuration, In-Memory</li>
        <li>Testing SSAS Workspace Servers in SSDT</li>
        <li>Understanding Real-world Databases</li>
        <li>Need for OLAP Databases and Mining</li>
        <li>Need for Cubes and Faster Reports</li>
        <li>Identifying OLAP / Analysis Entities</li>
        <li>Kimball and Inmon Methods – BI Design</li>
        <li>SSAS Usage and Target Access Methods</li>
        <li> Column Storage, Row Storage Options</li>
      </ul>
    ),
  },
  {
    title: "Chapter 2 : Basic SSAS Entities & Usage",
    paragraph: (
      <ul>
        <li>Data Source and Data Source Views</li>
        <li>Computed Columns and Attributes</li>
        <li>Building Relationships For Cubes</li>
        <li>Identifying Facts and Dimensions</li>
        <li>Identifying Measurable Aggregates</li>
        <li>Identifying Attributes and Hierarchies</li>
        <li>Deciding Cube (MOLAP) Schema</li>
        <li>Named Queries and Relations in DSV</li>
        <li>Database Dimensions from DSV Entities</li>
        <li>Cube Dimensions from DSV Relations</li>
        <li>Cube & Database Dimensions – Issues</li>
      </ul>
    ),
  },
  {
    title: "Chapter 3 : Dimension Wizard and Attributes",
    paragraph: (
      <ul>
        <li>Creating Multi-Dimensional Entities</li>
        <li>Attributes and Key Member Names</li>
        <li>Cube Dimension Templates and Options</li>
        <li>Applying Time Based Dimensions</li>
        <li>Dimension Hierarchies and Limitations</li>
        <li>Cube Attribute Relations and Uses</li>
        <li>Composite Attribute Keys in OLAP Cubes</li>
        <li>Building Attribute Levels and Hierarchies</li>
        <li>Duplicate Attribute Key Errors</li>
        <li>Common Deployment & Security Errors</li>
        <li>Deployment Warnings in Real-World</li>
      </ul>
    ),
  },
  {
    title: "Chapter 4 : Cube Wizard and Relations",
    paragraph: (
      <ul>
        <li>Cube Design – Regular Templates</li>
        <li>Cube Measures and Dimension Keys</li>
        <li>Additive and Semi Additive Measures</li>
        <li>Cube Customization Options and MDX</li>
        <li>Calculations and MDX Members</li>
        <li>MDX Scripts for Member Calculations</li>
        <li>Cube Calculation Sets and MDX Scripts</li>
        <li>BI Enhancements and MDX in MOLAP</li>
        <li>Time Based Calculations with MDX</li>
      </ul>
    ),
  },
  {
    title: "Chapter 5 : Dimension Types & KPI",
    paragraph: (
      <ul>
        <li>Role Playing Dimensions and MDX</li>
        <li>Fact and Factless Dimensions</li>
        <li>Referenced Dimensions & Usage</li>
        <li>Conformed Dimensions & Usage</li>
        <li>Degenerate Dimensions & Usage</li>
        <li>Junk & Hierarchical Dimensions</li>
        <li>Dimension Usage and Granularity</li>
        <li>Building Fact Less Dimensions</li>
        <li>Static and Dynamic KPIs with MDX</li>
        <li>Parent and Child KPIs with MDX</li>
        <li>Defining KPIs and Goals using MDX</li>
        <li>Perspectives using MDX Expressions</li>
        <li>SSAS Actions with MDX and XMLA</li>
      </ul>
    ),
  },
  {
    title: "Chapter 6 : SSAS Partitions and Aggregations",
    paragraph: (
      <ul>
        <li>Local and Remote Cube Partitions</li>
        <li>Storage Modes – MOLAP, ROLAP, HOLAP</li>
        <li>Aggregations and Proactive Caching</li>
        <li>Tuning Cube Partition Processing</li>
        <li>Row Estimations and Aggregations</li>
        <li>Assigning Aggregations, Scripts</li>
        <li>Usage Based Optimization (UBO)</li>
      </ul>
    ),
  },
  {
    title: "Chapter 7 : MDX Functions, FILTERS and JOINS",
    paragraph: (
      <ul>
        <li>MDX Functions & Conditional JOINS</li>
        <li>Complex MDX Queries & FILTERS</li>
        <li>CROSSAPPLY versus MDX JOINS</li>
        <li>CROSSAPPLY and MDX Query Filters</li>
        <li>Cube and Dimension Writebacks</li>
        <li>MDX with Role playing Dimensions</li>
        <li>MDX Transactions & Limitations</li>
      </ul>
    ),
  },
  {
    title: "Chapter 8 : Data Mining and Forecast",
    paragraph: (
      <ul>
        <li>Need for Data Mining Structures</li>
        <li>Data Mining Algorithms and Rules</li>
        <li>DMX Queries and Forecast Reports</li>
        <li>Data Mining Scope and DMX Ranks</li>
      </ul>
    ),
  },
  {
    title: "Chapter 9 : Tabular Mode Cube Design",
    paragraph: (
      <ul>
        <li>Entity Identification Procedures</li>
        <li>Workspace Configuration Settings</li>
        <li>In-Memory Processing Options</li>
        <li>Advance Cube Design Scenarios</li>
        <li>Aggregated Measures with KPIs</li>
        <li>Partitioned Dimensions & Usage</li>
        <li>Conditional MDX Scripts & Options</li>
        <li>Hierarchical MDX in Tabular Mode</li>
        <li>MDX Filters and Joins in Tabular Mode</li>
      </ul>
    ),
  },
  {
    title: "Chapter 10 : Deployment (Tabular & Multidimensional)",
    paragraph: (
      <ul>
        <li>Deployment Options and Prerequisites</li>
        <li>Cube Deployment Process and Tools</li>
        <li>SSAS Deployment Wizard Tool & Errors</li>
        <li>Storage Locations – Cube & Partitions</li>
        <li>Creating OLAP Databases, Scripts</li>
        <li>Processing Options and Schedules</li>
        <li>Managing Deployment Process (OLAP)</li>
        <li>SSAS Database and Cube/Mining Audits</li>
        <li>MDX Query Log Tables in DB Engine</li>
        <li>Flight Recorder Options and Sampling</li>
        <li>Managing SSAS Log Providers</li>
      </ul>
    ),
  },
  {
    title: "Chapter 11 : OLAP Database Management",
    paragraph: (
      <ul>
        <li>OLAP &amp; Tabular Database Backups</li>
        <li>OLAP Compressions and Encryptions</li>
        <li>Backups, Restores and Passwords</li>
        <li>Scheduling Backups and Jobs</li>
        <li>OLAP DB Synchronizations and XMLA</li>
        <li>Partitions – Splits and Merge Options</li>
        <li>Managing Partitions & Aggregations</li>
      </ul>
    ),
  },
  {
    title: "Chapter 12 : Usage Based Optimization (UBO)",
    paragraph: (
      <ul>
        <li>Need for Optimization and Audits</li>
        <li>Designing Aggregations using UBO</li>
        <li>Aggregations For Optimization Levels</li>
        <li>Audit Query Filters and Resuse Options</li>
        <li>OLAP Restore Options and XMLA</li>
      </ul>
    ),
  },
  {
    title: "Chapter 13 : Using OLAP Structures",
    paragraph: (
      <ul>
        <li>Cube Analysis with Excel Tables</li>
        <li>Excel Pivots and Refresh Options</li>
        <li>Configuring ODC (Office) Connections</li>
        <li>Prediction Functions and Analysis</li>
        <li>DMX and MDX Queries Interfaces</li>
        <li>SubCubes and OLAP Tuning Options</li>
      </ul>
    ),
  },
  {
    title: "Chapter 14 : Managing Security with MDX",
    paragraph: (
      <ul>
        <li>SSAS Security Roles and Scope</li>
        <li>Object Level Access and Dynamic MDX</li>
        <li>Item Security and DAX Expressions</li>
        <li>Dynamic Cube Security with MDX</li>
        <li>OLAP Security Audits and Query Logs</li>
        <li>OLAP Management &amp; Integrations</li>
        <li>MDX and OLAP Operations with ETL</li>
        <li>Scheduling SSAS Operations (XMLA)</li>
      </ul>
    ),
  },
];
const MicrosoftBI = [
  {
    title: "Part 1: Dimension Modeling & Data Ware Housing",
    paragraph: (
      <ul>
        <li>Dimension Modeling & Data Ware Housing</li>
        <li>Basic concepts of Business Intelligence</li>
        <li>Basic concepts of Data Warehousing</li>
        <li>Designing facts and dimensions</li>
        <li>Employing key performance indicators</li>
        <li>Dimensional modeling process to design Data Warehouse</li>
      </ul>
    ),
  },
  {
    title: "Part 2: MS SQL Server Integration Services (SSIS)",
    paragraph: (
      <ul>
        <li>
          Extract, Transform and Load (ETL) data – Covering various
          transformations
        </li>
        <li>Solve data management problems by migrating and processing data</li>
        <li>
          Demo on populating data into dimension and fact table using adventure
          works data warehouse
        </li>
        <li>ETL Framework</li>
        <li>Enhance package functionality with scripting</li>
        <li>Implementing loops to import multiple files</li>
        <li>Handling errors and managing exception rows</li>
        <li>SSIS Package Performance Tuning & Best practices</li>
        <li>Deploy packages to an SSIS server</li>
        <li>Administering the storage, security and execution of packages</li>
      </ul>
    ),
  },
  {
    title: "Part 3: MS SQL Server Reporting Services (SSRS)",
    paragraph: (
      <ul>
        <li>
          Producing table and matrix report with drill down and drill through
          functionality
        </li>
        <li>
          Produce reports with enhanced visualization features such as charts,
          map and gauge
        </li>
        <li>
          Integrate parameters, filters and interactive components into reports
        </li>
        <li>Create reports on SSAS cubes with Report Builder</li>
        <li>Deploying reports to the Report Server</li>
        <li>Creating cached instances, snapshots and subscriptions</li>
        <li>Configuring and testing security on report items</li>
        <li>Report performance tuning</li>
      </ul>
    ),
  },
  {
    title:
      "Part 4: MS SQL Server Analysis Services – Multidimensional Analysis Model (SSAS)",
    paragraph: (
      <ul>
        <li>Creating and deploying a cube</li>
        <li>Extend hierarchies and exploit advanced dimension relationships</li>
        <li>Configuring many-to-many dimension relationships</li>
        <li>Building aggregations with the Aggregation Design Wizard</li>
        <li>
          Implement Key Performance Indicators to monitor business objectives
        </li>
        <li>Cube storage mode - MOLAP, ROLAP and HOLAP</li>
        <li>
          Implementing an action to open a Reporting Services report or to
          analyze data using Excel
        </li>
        <li>Automating cube processing with an XMLA script</li>
      </ul>
    ),
  },
  {
    title:
      "Part 5: MS SQL Server Analysis Services - Tabular Analysis Model (SSAS)",
    paragraph: (
      <ul>
        <li>Basics of in memory processing</li>
        <li>Multiple dimensional model vs. tabular analysis model</li>
        <li>Creating and deploying a tabular analysis cube</li>
        <li>Building hierarchy and dimension relationship</li>
        <li>
          Implement Key Performance Indicators to monitor business objectives
        </li>
        <li>Query language DAX</li>
      </ul>
    ),
  },
  {
    title: "Part 6: MDX Queries",
    paragraph: (
      <ul>
        <li>Basics of MDX</li>
        <li>Working with Sets</li>
        <li>Working with Calculations</li>
        <li>Working with Hierarchical Calculations</li>
        <li>Working with Time Intelligence functions like QTD, YTD</li>
        <li>Deploying calculations</li>
      </ul>
    ),
  },
  {
    title: "Part 7: Power BI",
    paragraph: (
      <ul>
        <li>Perform Power BI desktop data transformation</li>
        <li>Describe Power BI desktop modelling</li>
        <li>Create a Power BI desktop visualization</li>
        <li>Implement the Power BI service</li>
        <li>Describe how to connect to Excel data</li>
        <li>Describe how to collaborate with Power BI data</li>
        <li>Connect directly to data stores</li>
      </ul>
    ),
  },
];

const DWH = [
  {
    title: "Introduction to Data Warehousing",
    paragraph: (
      <ul>
        <li>Overview of Data Warehousing</li>
        <li>Considerations for a Data Warehouse Solution</li>
        <li>Lab: Exploring a Data Warehouse Solution</li>
      </ul>
    ),
  },
  {
    title: "Dimension Modeling & Data Ware Housing",
    paragraph: (
      <ul>
        <li>Dimension Modeling & Data Ware Housing</li>
        <li>Basic concepts of Business Intelligence</li>
        <li>Basic concepts of Data Warehousing</li>
        <li>Designing facts and dimensions</li>
        <li>Employing key performance indicators</li>
        <li>Dimensional modeling process to design Data Warehouse</li>
      </ul>
    ),
  },
  {
    title: "Planning Data Warehouse Infrastructure",
    paragraph: (
      <ul>
        <li>Considerations for Building a Data Warehouse</li>
        <li>Data Warehouse Reference Architectures and Appliances</li>
        <li>Lab: Planning Data Warehouse Infrastructure</li>
      </ul>
    ),
  },
  {
    title: "Designing and Implementing a Data Warehouse",
    paragraph: (
      <ul>
        <li>Logical Design for a Data Warehouse</li>
        <li>Physical Design for a Data Warehouse</li>
        <li>Lab: Implementing a Data Warehouse Schema</li>
      </ul>
    ),
  },
  {
    title: "Columnstore Indexes",
    paragraph: (
      <ul>
        <li>Introduction to Columnstore Indexes</li>
        <li>Creating Columnstore Indexes</li>
        <li>Working with Columnstore Indexes</li>
        <li>Lab: Using Columnstore Indexes</li>
      </ul>
    ),
  },
  {
    title: "Creating an ETL Solution",
    paragraph: (
      <ul>
        <li>Introduction to ETL with SSIS</li>
        <li>Exploring Source Data</li>
        <li>Implementing Data Flow</li>
        <li>Lab: Implementing Data Flow in an SSIS Package</li>
      </ul>
    ),
  },
  {
    title: "Implementing Control Flow in an SSIS Package",
    paragraph: (
      <ul>
        <li>Introduction to Control Flow</li>
        <li>Creating Dynamic Packages</li>
        <li>Introduction to Control Flow</li>
        <li>Using Containers</li>
        <li>
          Lab: Implementing Control Flow in an SSIS Package and Lab: Using
          Transactions and Checkpoints
        </li>
      </ul>
    ),
  },
  {
    title: "Debugging and Troubleshooting SSIS Packages",
    paragraph: (
      <ul>
        <li>Debugging an SSIS Package</li>
        <li>Logging SSIS Package Events</li>
        <li>Handling Errors in an SSIS Package</li>
        <li>Lab: Debugging and Troubleshooting an SSIS Package</li>
      </ul>
    ),
  },
  {
    title: "Implementing an Incremental ETL Process",
    paragraph: (
      <ul>
        <li>Introduction to Incremental ETL</li>
        <li>Extracting Modified Data</li>
        <li>Temporal Tables</li>
        <li>Lab: Extracting Modified DataLab: Loading Incremental Changes</li>
      </ul>
    ),
  },
  {
    title: "Extending SQL Server Integration Services (SSIS)",
    paragraph: (
      <ul>
        <li>Using Custom Components in SSIS</li>
        <li>Using Scripting in SSIS</li>
        <li>Lab: Using Scripts and Custom Components</li>
      </ul>
    ),
  },
  {
    title: "Deploying and Configuring SSIS Packages",
    paragraph: (
      <ul>
        <li>Overview of SSIS Deployment</li>
        <li>Deploying SSIS Projects</li>
        <li>Planning SSIS Package Execution</li>
        <li>Lab: Deploying and Configuring SSIS Packages</li>
      </ul>
    ),
  },
  {
    title: "Enforcing Data Quality",
    paragraph: (
      <ul>
        <li>Introduction to Data Quality</li>
        <li>Using Data Quality Services to Cleanse Data</li>
        <li>Using Data Quality Services to Match Data</li>
        <li>Lab: Cleansing DataLab: De-duplicating Data</li>
      </ul>
    ),
  },
  {
    title: "Consuming Data in a Data Warehouse",
    paragraph: (
      <ul>
        <li>Introduction to Business Intelligence</li>
        <li>Introduction to Reporting</li>
        <li>An Introduction to Data Analysis</li>
        <li>Analyzing Data with Azure SQL Data Warehouse</li>
        <li>Lab: Using Business Intelligence Tools</li>
      </ul>
    ),
  },
  {
    title: "Using Master Data Services",
    paragraph: (
      <ul>
        <li>Master Data Services Concepts</li>
        <li>Implementing a Master Data Services Model</li>
        <li>Managing Master Data</li>
        <li>Creating a Master Data Hub</li>
        <li>Lab: Implementing Master Data Services</li>
      </ul>
    ),
  },
  {
    title: "Implementing an Azure SQL Data Warehouse",
    paragraph: (
      <ul>
        <li>Implementing an Azure SQL Data Warehouse</li>
        <li>Advantages of Azure SQL Data Warehouse</li>
        <li>Developing an Azure SQL Data Warehouse</li>
        <li>Migrating to an Azure SQ Data Warehouse</li>
        <li>Lab: Implementing an Azure SQL Data Warehouse</li>
      </ul>
    ),
  },
  {
    title: "MS SQL Server Reporting Services (SSRS)",
    paragraph: (
      <ul>
        <li>
          Producing table and matrix report with drill down and drill through
          functionality
        </li>
        <li>
          Produce reports with enhanced visualization features such as charts,
          map and gauge
        </li>
        <li>
          Integrate parameters, filters and interactive components into reports
        </li>
        <li>Create reports on SSAS cubes with Report Builder</li>
        <li>Deploying reports to the Report Server</li>
        <li>Creating cached instances, snapshots and subscriptions</li>
        <li>Configuring and testing security on report items</li>
        <li>Report performance tuning</li>
      </ul>
    ),
  },
  {
    title: "Power BI",
    paragraph: (
      <ul>
        <li>Perform Power BI desktop data transformation</li>
        <li>Describe Power BI desktop modelling</li>
        <li>Create a Power BI desktop visualization</li>
        <li>Implement the Power BI service</li>
        <li>Describe how to connect to Excel data</li>
        <li>Describe how to collaborate with Power BI data</li>
        <li>Connect directly to data stores</li>
      </ul>
    ),
  },
];

const Html_Css = [
  {
    title: "Chapter 1 : Introduction to Coding & HTML",
    paragraph:
      "Welcome to Web Development! Before jumping into any coding, we’ll give you a high-level overview of how the internet works and go through the tools we’ll need for the course. Learning HTML, or Hypertext Markup Language, is the first step in being able to build functional websites. In this lesson, we’ll introduce HTML, talk about elements and discuss, the importance of building websites with accessibility in mind.",
  },
  {
    title: "Chapter 2 : HTML Elements",
    paragraph:
      "In this lesson we’ll continue to explore various HTML elements, including HTML5 semantic elements that help us build accessible, SEO-friendly websites. We’ll look at how to properly describe our content and add structure to our web pages using this markup language. We’ll also dive into attributes and investigate what role they play in HTML as well as how they relate to links and images. There will also be an HTML mock up exercise available for extra practice at home!",
  },
  {
    title: "Chapter 3 : Introduction to CSS",
    paragraph:
      "HTML is used to create content on our website and give pages their structure. To style it, we need another language – CSS, or Cascading Style Sheets. With CSS, you can control virtually any visual aspect of your HTML. We’ll learn how to target elements using CSS and get comfortable with the language’s syntax. In this lesson, we’ll also deep dive into understanding CSS cascades, specificity, inheritance, and how to successfully debug your code.",
  },
  {
    title:
      "Chapter 4 : CSS Measurements, Dev Tools & Text Editor Customization",
    paragraph:
      "Working with dimensions and CSS measurements, we will explore the various ways elements can be spaced and sized and how they relate to each other. Then we’ll dive into Dev Tools, the secret weapon for any designer or developer, to help really understand what is happening in our websites. In this lesson we’ll also learn how to customize our text editors, to help us work faster and more efficiently.",
  },
  {
    title: "Chapter 5 : CSS Typography",
    paragraph:
      "In this lesson we’ll dive headfirst into the world of CSS typography, including how to use fonts hosted on the web or on our computer. We’ll also cover how to use CSS Normalize – a preset code snippet that helps make our site more consistent across browsers. The lesson ends off with a client-challenge exercise where students are asked to mimic a design and turn it into code. This is a common task for digital designers and web developers, and will require students to draw on all the skills they’ve learned up to this lesson.",
  },
  {
    title: "Chapter 6 : Layout Methods I",
    paragraph:
      "In this lesson, we’ll learn how to layout pages effectively using Flexbox – a modern layout method that will help us create dynamic designs. Then we’ll take on the Display property. This will help us understand how to best approach working with the various types of elements and how they work in relation to one another. We’ll also explore the relationship between those using Assistive Technologies and how we can create websites that best meet their needs. In this lesson, we’ll also introduce the Fundamental Design Conversion Project!",
  },
  {
    title: "Chapter 7 : Layout Methods II",
    paragraph:
      "To help students master the power of Flexbox, this lesson explores the more complex topics and concepts associated with Flexbox layouts. We will then take on advanced layout best-practices and how to approach and solve many of the challenges associated with creating complex layouts.",
  },
  {
    title: "Chapter 8 : Responsive Design & Images",
    paragraph:
      "When someone visits your website, you want them to have the best experience, no matter what device they are using. In this lesson you’ll learn how to use media queries to craft websites that rearrange and restyle elements based on what screen size your user is on. We’ll also explore the use of different images formats, what role they play on our websites, and how to best optimize them to keep our websites lightening fast.",
  },
  {
    title: "Chapter 9 : Positioning & Before/After Elements",
    paragraph:
      "Now that we’re comfortable with layouts we’ll tackle positioning to help us understand how to add interesting styles to our websites. This includes features like keeping a navigation bar at the top of our page as we scroll and overlapping elements. We’ll finish up this lesson with a round-up exercise to help solidify the concepts we have covered so far.",
  },
  {
    title: "Chapter 10 : Pseudo Selectors & Advanced Lists and Navigations",
    paragraph:
      "In this lesson, we’ll be walking through pseudo-selectors to enhance our websites with things like hover effects and focus states. We will also be exploring advanced uses of lists including how to use them to build drop- down menus.",
  },
  {
    title:
      "Chapter 11 : Transitions, CSS Filters, Transforms, Perspective & Animations",
    paragraph:
      "Working with keyframes, we’ll look into how we can create animations using CSS. We’ll also explore other useful properties like transitions, transforms and CSS filters that help us modify the position and shape of our elements. In this lesson, we’ll also learn how to apply photoshop-like filters and subtle transitions to give our website some enhanced user experience. ",
  },
  {
    title: "Chapter 12 : Cross-Browser Compatibility & Floats",
    paragraph:
      "The internet is always changing and not all browsers play well with different types of code! In this lesson, we’ll learn how to manage cross-browser issues that can come up through the use of prefixes, and we’ll also explore the layout method of floats. In this lesson you’ll also be introduced to the Responsive Design Conversion Project.",
  },
  {
    title: "Chapter 13 : Forms",
    paragraph:
      "Forms are one of the final aspects of HTML that we will explore in this course. In this lesson you’ll learn how to style forms and how they interact with a server. We’ll also cover how to make your form accessible and easy to use for all types of users.",
  },
  {
    title: "Chapter 14 : Advanced Selectors",
    paragraph:
      "In this lesson we’ll show you more complex selectors and explore the powerful effects you can create without using a programming language. We’ll also create a sliding navigation by using dynamically target elements and writing smarter CSS declarations with advanced selectors.",
  },
  {
    title: "Chapter 15 : SCSS",
    paragraph:
      "Let’s give your CSS super powers! In this lesson we’ll teach you the newer syntax of Sass – SCSS. With this preprocessing language, you will be able to extend the basic functionalities of CSS by adding features such as variables, nesting, and more. This will create CSS that is more maintainable, organized, and modular.",
  },
  {
    title: "Chapter 16 : jQuery & jQuery Plugins",
    paragraph:
      "For our final lesson, we will be exploring how to add interactions to our website through the use of jQuery, a JavaScript library. With the use of plugins, we will be able to quickly and easily add interesting effects and features.",
  },
];

const Javascript = [
  {
    title: "Chapter 1 : Intro to JavaScript, Control Flow, & Loops",
    paragraph:
      "Welcome to JavaScript! Today we’ll be introduced to what programming languages are and go over JavaScript syntax, variables, and script tags. We’ll also poke around and get comfortable in the Chrome Developer Tools console. In this lesson we’ll also be exploring loops, ‘if statements’ and Booleans. This knowledge will help us write more exciting code that flows based on logic.",
  },
  {
    title: "Chapter 2 : Functions & Scope",
    paragraph:
      "What is a function, and how is it used? In this lesson we’ll review built-in functions, and learn how to create and call our own functions. We will also explore parameters and arguments, and how to use them. In this lesson we’ll introduce the topic of scope and get some practice with working in different scopes. We’ll also talk about best practices with scoping variables.",
  },
  {
    title: "Chapter 3 : Data Structures, Object Methods & Enumeration",
    paragraph:
      "What is an object, an array, and a class, and how can we use them? In this lesson we’ll answer these questions, and also dive into object properties, methods, and “this”. We will also discuss passing variables by reference vs. value. In this lesson we’ll look into a few object and array methods, and then talk about enumerating through objects and arrays. We will also introduce the for-in loop!",
  },
  {
    title:
      "Chapter 4 : Advanced Array Methods, Introduction to the DOM, jQuery, & Events",
    paragraph:
      "In this lesson, we’ll cover more advanced functional programming topics such as mapping and filtering arrays. We’ll also give an overview of when, where, and how you can use jQuery on your pages. Getting comfortable with exploring jQuery will include learning about events and effects, and working in the jQuery API.",
  },
  {
    title:
      "Chapter 5 : jQuery Best Practices, Browser Events, Event Listeners, & Event Delegation",
    paragraph:
      "In this lesson we’ll put together all of the skills we’ve learned so far, as well as introducing how to add new HTML to the page with JavaScript. We’ll learn about how to allow our sites to listen for events such as button and mouse clicks.",
  },
  {
    title:
      "Chapter 6 : Command Line, Git and GitHub, GitHub Pages, Structuring an App, & ES6 Modules",
    paragraph:
      "This lesson will be focused on tooling, where we will be learning about the power of the command line and code organization. This includes using GitHub for code storage and organization, as well as learning best practices when it comes to organizing our code. ",
  },
  {
    title: "Chapter 7 : Asynchronous JavaScript & Intro to APIs and AJAX",
    paragraph:
      "So far we’ve learned about managing our own data that we’ve made available. In the lesson we’ll learn how to access data from external sources through the power of APIs. We can make requests and understand the concepts behind accessing live data.",
  },
  {
    title: "Chapter 8 : Promises & API Codealong",
    paragraph:
      "In this lesson we’ll explore the concepts behind using Promises which allow us to chain multiple API calls and be assured that previous requests are complete before making new ones. We’ll also go on a codealong journey where we’ll learn all about using APIs to make our projects more exciting.",
  },
];

const FullstackDevelopment = [
  {
    title: "Chapter 1 : React Dive in deep",
    paragraph:
      "The basic requirement for this course is React so we will deep dive ES6 techniques and later we will talk in depth about front-end framework: React",
  },
  {
    title: "Chapter 2 : Introduction to Express",
    paragraph:
      "Front-end of our app is all ready! We’ll turn the project into a fully-fledged full-stack application through the power of Node JS. You’ll learn how to build fully functional API using the server-side framework Express, and how to manage the flow of data through HTTP requests and responses.",
  },
  {
    title: "Chapter 3 : Introduction to MongoDB",
    paragraph:
      "While continuing building out our application’s back-end by learning about the database ecosystem, and we’ll examine the differences between relational vs non-relational databases",
  },
  {
    title: "Chapter 4 : Introduction to Models and Mongoose",
    paragraph:
      "In this session, we will be learning how to build predictable and re-usable data models through our application, working with Mongoose to create schemas, validate types, and populate your database with meaningful data.",
  },
  {
    title: "Chapter 5 : Routing ",
    paragraph:
      "Learning about routing and its difference in the client and server side components for our application is very important! And that’s the target in this session. We’ll look at ways we can refactor and augment our server side router, and implement client side routs using React-Router.",
  },
  {
    title: "Chapter 6 : Advanced Mongoose Querying & Back-end Authentication",
    paragraph:
      "We will be learning how to make advanced queries to our Mondo Database through Mongoose. We will also look into how to add authentication to our application using JWT-JSON Web Tokens.",
  },
  {
    title: "Chapter 7 : Front-End Authentication",
    paragraph:
      "By this time, we have successfully learned how to manage backend authentication. Now, we’ll start to focus on how to create a user experience in our React app that supports taking a signed in user through the journey of using our app, and protecting routes against unauthorized users.",
  },
  {
    title: "Chapter 8 : Deploying our Application",
    paragraph:
      "As the application is all ready to launch, we will learn how to secure the application from any malicious misuse. Finally, we will learn ho to deploy your application onto the web so that it becomes publicly available.",
  },
  {
    title:
      "Chapter 9 : Scaling our app, Project Presentations Future path talks. ",
    paragraph:
      "As we wrap up the course, we will discuss about the application developer and its reality as a profession. We will make our application more scalable. Reasons behind testing the application and its importance.",
  },
];
const ReactRedux = [
  {
    title: "Chapter 1 : Welcome to React",
    paragraph: (
      <ul>
        <li>Obstacles and Roadblocks</li>
        <li>React’s Future</li>
        <li>Keeping Up with the Changes</li>
        <li>Working with Files</li>
      </ul>
    ),
  },
  {
    title: "Chapter 2 : Emerging JavaScript",
    paragraph: (
      <ul>
        <li>Declaring Variables in ES6</li>
        <li>Arrow Functions</li>
        <li>Transpiling ES6</li>
        <li>ES6 Objects and Arrays</li>
        <li>Promies</li>
        <li>Classes</li>
        <li>ES6 Modules</li>
      </ul>
    ),
  },
  {
    title: "Chapter 3 : Functional Programming with Javascript",
    paragraph: (
      <ul>
        <li>What is means to Be Functional</li>
        <li>Imperative Versus Declarative</li>
        <li>
          Functional Concepts
          <ul>
            <li>Immutability</li>
            <li>Pure Functions</li>
            <li>Data Transformations</li>
            <li>Higher-Order Functions</li>
            <li>Recursion</li>
            <li>Composition</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Chapter 4 : Pure React",
    paragraph: (
      <ul>
        <li>Setup</li>
        <li>The Virtual DOM</li>
        <li>React Elements</li>
        <li>ReactDOM</li>
        <li>Children</li>
        <li>Constructing Elements with Data</li>
        <li>React Components</li>
        <li>Dom Rendering</li>
      </ul>
    ),
  },
  {
    title: "Chapter 5 : Props, State, and the Component Tree",
    paragraph: (
      <ul>
        <li>Property Validation</li>
        <li>Refs</li>
        <li>React State Management</li>
        <li>State Within the Component Tree</li>
      </ul>
    ),
  },
  {
    title: "Chapter 6 : The Component LifeCycle",
    paragraph: (
      <ul>
        <li>Meet the Lifecycle Methods</li>
        <li>See the Lifecycle methods in Action</li>
        <li>The Initial Rendering Phase</li>
        <li>The Updating Phase</li>
        <li>The Unmounting Phase</li>
      </ul>
    ),
  },
  {
    title: "Chapter 7 : Redux",
    paragraph: (
      <ul>
        <li>State</li>
        <li>Actions</li>
        <li>Reducers</li>
        <li>The Store</li>
        <li>Action Creators</li>
        <li>Middleware</li>
      </ul>
    ),
  },
  {
    title: "Chapter 8 : React Redux",
    paragraph: (
      <ul>
        <li>Explicitly Passing the Store</li>
        <li>Passing the Store via Context</li>
        <li>Presentational Versus Container Components</li>
        <li>The React Redux Provider</li>
        <li>React Redux connect</li>
      </ul>
    ),
  },
  {
    title: "Chapter 9 : React Router",
    paragraph: (
      <ul>
        <li>Incorporating the Router</li>
        <li>Nesting Routes</li>
        <li>Router Parameters</li>
      </ul>
    ),
  },
  {
    title: "Chapter 10 : Hooks",
    paragraph: (
      <ul>
        <li>Introduction to Hooks</li>
        <li>State Hook</li>
        <li>Effect Hook</li>
        <li>Rules of Hooks</li>
        <li>Hooks API</li>
      </ul>
    ),
  },
  {
    title: "Chapter 11 : Node JS (Express Framework)",
    paragraph: (
      <ul>
        <li>Introduction to Node js</li>
        <li>Express Framework</li>
        <li>Accessing API from Browser</li>
        <li>Data Source</li>
        <li>Connect to database</li>
        <li>Performing CRUD operations</li>
      </ul>
    ),
  },
  {
    title: "Chapter 12 : React and Integration Testing",
    paragraph: (
      <ul>
        <li>We will learn about Test Driven Development</li>
        <li>
          Get to know about techniques to write test cases and its importance
        </li>
        <li>Introduction to libraries: ESLint, Jest, Enzyme and Mocking</li>
        <li>Performing Snapshot Testing</li>
      </ul>
    ),
  },
  {
    title: "Project 1: Building a Todo list App",
    paragraph: (
      <ul>
        <li>Getting Started</li>
        <li>Creating the UI</li>
        <li>
          Creating the Functionality
          <ul>
            <li>Initializing our State Object</li>
            <li>Handling the Form Submit</li>
            <li>Populating Our State</li>
            <li>Displaying the Tasks</li>
            <li>Adding the Finishing Touches</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Project 2: Fullstack Web App",
    paragraph:
      "We will be creating a Fullstack LMS Web Application to put your knowledge on into action. In the exercise we will be using class and functional components. We will be using Express framework, Bootstrap and MySql Database to build our exercise. Our UI will interact with HTTP server using API’s.",
  },
];

const Mern = [
  {
    title: "HTML5",
    paragraph: (
      <ul>
        <li>Introduction to HTML5</li>
        <li>Element and Structure</li>
        <li>Lists and Links</li>
        <li>Tables</li>
        <li>Forms</li>
        <li>Semantic HTML</li>
      </ul>
    ),
  },
  {
    title: "CSS3",
    paragraph: (
      <ul>
        <li>Introduction To CSS</li>
        <li>Selectors and Visual Rule</li>
        <li>The Box Model</li>
        <li>Display and Positioning</li>
        <li>Colors</li>
        <li>Typography</li>
        <li>Grid</li>
        <li>CSS – Transitions</li>
      </ul>
    ),
  },
  {
    title: "Git",
    paragraph: (
      <ul>
        <li>Base Concept of Git</li>
        <li>Working with Repositories</li>
        <li>Branching, Merging and Pull Requests</li>
      </ul>
    ),
  },
  {
    title: "JavaScript",
    paragraph: (
      <ul>
        <li>
          Introduction to Javascript and ES6
          <ul>
            <li>
              Introduction to Javascript and ES6 new features. Understand about
              imperative and declarative way of writing code.
            </li>
          </ul>
        </li>
        <li>
          ES6 Advance & Functional Programming
          <ul>
            <li>
              Learn advance concept like Data Transformation, Higher Order
              Function, Immutability, Pure Function, Recursion etc.
            </li>
          </ul>
        </li>
        <li>
          Classes and Arrow function
          <ul>
            <li>
              Understand and write code using classes. Learn oops connect using
              javascript. With ES6 one of important concept Arrow Function got
              introduced, which is very useful in handling the context of
              application
            </li>
          </ul>
        </li>
        <li>
          Callback and Async
          <ul>
            <li>
              Learn how Javascript execution work in Async way. Because of
              javascript Async nature there are concept like callback and async
              to execute functions after particular execution is done.
            </li>
          </ul>
        </li>
        <li>
          Execution Context and this keyword
          <ul>
            <li>
              Lean how Javascript manage current state and data in Execution
              Context. Understand and application of 'This' Keyword (one of the
              most imp concept)
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "React - Redux",
    paragraph: (
      <ul>
        <li>
          Introduction to React
          <ul>
            <li>
              React Scope and Application usage. Popularity of react technology.
              React vs other technologies. React Market Trend.{" "}
            </li>
          </ul>
        </li>
        <li>
          React Setup and Main Concepts
          <ul>
            <li>
              Learn how React works breaking down our React applications into
              the smallest bits: elements and even fibers. Learn about
              application setup and tools which will help in development. JSX
              (JavaScript extension) that allows us to define React elements
              using syntax that looks similar to HTML. Learn how to use JSX to
              construct a React application.
            </li>
          </ul>
        </li>
        <li>
          Props, State, and the Component Tree
          <ul>
            <li>
              What is Data Management? And its impact on react components. Learn
              and explore techniques that can be used for better data management
              and reduce time spent debugging applications. Learn to construct a
              component tree. A hierarchy of components that data was able to
              flow through as properties. Learn to create stateful function
              components. Learn how state can be sent down a component tree and
              user interactions back up the component tree.
            </li>
          </ul>
        </li>
        <li>
          React Hooks
          <ul>
            <li>
              what is React Hooks (new addition in react 16.8)? and its
              application. Learn how/where to use state and other React features
              without writing a class components. Learn how to extract stateful
              logic from a component and test it independently and in
              integration reuse. Hooks allow you to reuse stateful logic without
              changing your component hierarchy.
            </li>
          </ul>
        </li>
        <li>
          React-Redux
          <ul>
            <li>
              Learn/explore Redux State Management. This will help in building
              big enterprise level applications to better manage the state from
              single source of data.
            </li>
          </ul>
        </li>
        <li>
          Redux Middleware
          <ul>
            <li>
              We will learn about middleware to add logger and handling
              asynchronous calls in large applications
            </li>
          </ul>
        </li>
        <li>
          HOC and Custom Hooks
          <ul>
            <li>
              Understand and learn advance concept like Higher Order Component
              and Custom Hooks ,which will help to keep common logic like
              authorization, submitting forms and etc. at once and reuse it in
              application using composition.
            </li>
          </ul>
        </li>
        <li>
          React Router
          <ul>
            <li>
              What is React Router? Review how to leverage the Hash Router
              component to handle routing on the client. JavaScript is loading
              information and changing the UI. Learn role of routing solution
              for browser history, bookmarks, and forward, back buttons etc.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "MongoDB",
    paragraph: (
      <ul>
        <li>Introduction to Mongo DB</li>
        <li>Understanding the Basics & CRUD Operations</li>
        <li>Schemas & Relations: How to Structure Documents</li>
        <li>Exploring the Shell & The Server</li>
        <li>Using the MongoDB Compass to Explore Data Visually</li>
        <li>Diving into Create Operations</li>
        <li>Read Operations - A Closer Look</li>
        <li>Update Operations</li>
        <li>Understanding Delete Operations</li>
        <li>Working with Indexes</li>
        <li>Working with Geospatial Data</li>
        <li>Understanding the Aggregation Framework</li>
        <li>Working with Numeric Data</li>
        <li>MongoDB & Security</li>
        <li>Performance, Fault Tolerance & Deployment</li>
        <li>Transactions</li>
        <li>From Shell to Driver</li>
        <li>Introducing Stitch</li>
        <li>Roundup</li>
      </ul>
    ),
  },
  {
    title: "Node JS",
    paragraph: (
      <ul>
        <li>
          Introduction and Foundation
          <ul>
            <li>
              What is Node js /Application of node.js. Learn about node js
              installation, build in libraries like buffer, http, path and url.
            </li>
          </ul>
        </li>
        <li>
          File System and Express
          <ul>
            <li>
              Learn to create a server using Express. File I/O operation into
              server using File library.
            </li>
          </ul>
        </li>
        <li>
          Asynchronous Programming
          <ul>
            <li>
              Asynchronous vs synchronous .Understand asynchronous programming
              concepts like Event Loop, Callback and Promises. Learn and explore
              HTTP requests and Error handling.
            </li>
          </ul>
        </li>
        <li>
          REST APIs
          <ul>
            <li>
              Understand insights about the exposing API Endpoints for web
              applications to consume. Learn concepts of request type Get and
              Post.
            </li>
          </ul>
        </li>
        <li>
          Authentication and Security
          <ul>
            <li>
              What is authentication? What is session? Explore different
              authentication features. Explore security related concepts and
              learn to make server more secure by using library like Helmet and
              by JWT token.
            </li>
          </ul>
        </li>
        <li>
          Test Node Js Application
          <ul>
            <li>
              What is testing /testing types - overview. Inroduction and
              creation of test case . Learn how to test code in Node js to build
              robust application . Setup of test case and mocking the libraries.
            </li>
          </ul>
        </li>
        <li>
          REST with GraphQL
          <ul>
            <li>
              Learn GraphQL way of exposing data, learn writing GraphQL queries,
              API Mutation and GraphQL Playground.
            </li>
          </ul>
        </li>
        <li>
          Microservice Application
          <ul>
            <li>
              Understand Microservice architecture , learn docker ,run our node
              js server using docker.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const QualityEngineering = [
  {
    title: "Module 1",
    paragraph: (
      <ul>
        <li>Quality and Quality Engineering</li>
        <li>Roles and Responsibility</li>
        <li>Introduction to Testing</li>
      </ul>
    ),
  },
  {
    title: "Module 2",
    paragraph: (
      <ul>
        <li>Overview of SDLC</li>
        <li>Various delivery Type</li>
      </ul>
    ),
  },
  {
    title: "Module 3",
    paragraph: (
      <ul>
        <li>Overview of testing types</li>
        <li>Different phase in testing</li>
        <li>QA partners and stakeholders</li>
      </ul>
    ),
  },
  {
    title: "Module 4",
    paragraph: (
      <ul>
        <li>Introduction to various documentation</li>
        <li>Create your own test documents</li>
      </ul>
    ),
  },
  {
    title: "Module 5",
    paragraph: (
      <ul>
        <li>Defect Management</li>
        <li>Defect life cycle</li>
        <li>Defect tracking and reporting</li>
      </ul>
    ),
  },
  {
    title: "Module 6",
    paragraph: (
      <ul>
        <li>How to perform manual testing?</li>
        <li>Various type of manual testing</li>
        <li>Tools for manual testing</li>
      </ul>
    ),
  },
  {
    title: "Module 7",
    paragraph: (
      <ul>
        <li>Automation testing</li>
        <li>Tools and Technique</li>
        <li>Various type of Automation testing</li>
      </ul>
    ),
  },
  {
    title: "Module 8",
    paragraph: (
      <ul>
        <li>Write first java program</li>
        <li>Loops and conditional statement</li>
        <li>OOPS</li>
      </ul>
    ),
  },
  {
    title: "Module 9",
    paragraph: (
      <ul>
        <li>Introduction to Selenium</li>
        <li>Selenium RC</li>
        <li>Selenium Web Driver</li>
      </ul>
    ),
  },
  {
    title: "Module 10",
    paragraph: (
      <ul>
        <li>Object Based automation</li>
        <li>Framework and Reporting</li>
        <li>DevOps integration</li>
      </ul>
    ),
  },
  {
    title: "Module 11",
    paragraph: (
      <ul>
        <li>SOAP Webservices</li>
        <li>REST API</li>
        <li>Various tool for API automation</li>
      </ul>
    ),
  },
  {
    title: "Module 12",
    paragraph: (
      <ul>
        <li>Code versioning</li>
        <li>Various technique for code versioning</li>
      </ul>
    ),
  },
];

const BigDataHadoopSpark = [
  {
    title: "Module 1: Introduction to Big Data and Hadoop Ecosystem",
    paragraph: (
      <ul>
        <li>Introduction to Big Data</li>
        <li>Hadoop Ecosystem</li>
      </ul>
    ),
  },
  {
    title: "Module 2: Hadoop Framework and HDFS",
    paragraph: (
      <ul>
        <li>Hadoop Framework</li>
        <li>Hadoop Distributed File System (HDFS)</li>
        <li>Hadoop Cluster</li>
        <li>Understanding HDFS Commands & Web UI</li>
      </ul>
    ),
  },
  {
    title: "Module 3: Hadoop Map Reduce and YARN Framework",
    paragraph: (
      <ul>
        <li>Map Reduce – The Processing Layer</li>
        <li>Hadoop YARN Framework – Resource Management</li>
      </ul>
    ),
  },
  {
    title: "Module 4: Apache SQOOP",
    paragraph: (
      <ul>
        <li>Overview of Sqoop</li>
        <li>Working with Sqoop Tools</li>
        <li>Sqoop Jobs</li>
        <li>Sqoop Configurations</li>
      </ul>
    ),
  },
  {
    title: "Module 5: Apache Flume",
    paragraph: (
      <ul>
        <li>Overview of Flume</li>
        <li>Working with Flume</li>
      </ul>
    ),
  },
  {
    title: "Module 6: Apache Pig",
    paragraph: (
      <ul>
        <li>Overview of Pig</li>
        <li>Working with Pig</li>
      </ul>
    ),
  },
  {
    title: "Module 7: Apache Hive",
    paragraph: (
      <ul>
        <li>Overview of Hive</li>
        <li>Understanding Hive</li>
        <li>Hive Language</li>
        <li>Hive Advanced</li>
        <li>Hive Comparison</li>
      </ul>
    ),
  },
  {
    title: "Module 8: Apache Impala",
    paragraph: (
      <ul>
        <li></li>
      </ul>
    ),
  },
  {
    title: "Module 8: Apache Impala",
    paragraph: (
      <ul>
        <li>Overview of Impala</li>
        <li>Working with Impala</li>
      </ul>
    ),
  },
  {
    title: "Module 9: Apache SparkUsing Scala",
    paragraph: (
      <ul>
        <li>Overview of Spark</li>
        <li>Understanding Spark Environment</li>
        <li>Spark Core API</li>
        <li>Spark SQL</li>
        <li>Spark Streaming</li>
      </ul>
    ),
  },
  {
    title: "Module 10: Oozie & Zookeeper",
    paragraph: (
      <ul>
        <li>Overview of Oozie</li>
        <li>Overview of Zookeeper</li>
      </ul>
    ),
  },
  {
    title: "Module 11: Hadoop Administration Essentials",
    paragraph: (
      <ul>
        <li>
          Setup and Installation of Single-Node and Multi-Node Hadoop Cluster
        </li>
      </ul>
    ),
  },
  {
    title: "Module12: Projects & Assignments",
    paragraph:
      "You will be working on different real-life use cases to learn the industrial use of Hadoop components like Map Reduce, Sqoop, Flume, Pig, Hive,Spark and Spark Streaming.",
  },
];

const Python = [
  {
    title: "Module: 01",
    paragraph: (
      <ul>
        <li>A Installing Python</li>
        <li>Documentation</li>
        <li>Command Line</li>
        <li>Variables</li>
        <li>Simple Python Syntax</li>
        <li>Keywords</li>
        <li>Import Module</li>
        <li>Additional Topics</li>
        <li>Using Different IDE for python</li>
      </ul>
    ),
  },
  {
    title: "Module: 02",
    paragraph: (
      <ul>
        <li>If Elif Else</li>
        <li>Iterable</li>
        <li>For</li>
        <li>Loops</li>
        <li>Execute</li>
        <li>Exceptions</li>
        <li>Data Types</li>
      </ul>
    ),
  },
  {
    title: "Module: 03",
    paragraph: (
      <ul>
        <li>Number Types</li>
        <li>More Number Types</li>
        <li>Strings</li>
        <li>More Strings</li>
        <li>Files</li>
        <li>Lists</li>
        <li>Dictionaries</li>
        <li>Tuples</li>
        <li>Sets</li>
      </ul>
    ),
  },
  {
    title: "Module: 04",
    paragraph: (
      <ul>
        <li>Comprehensions</li>
        <li>Definitions</li>
        <li>Functions</li>
        <li>Default Arguments</li>
        <li>Doc Strings</li>
        <li>Variadic Functions</li>
        <li>Factorial</li>
        <li>Function Objects</li>
      </ul>
    ),
  },
  {
    title: "Module: 05",
    paragraph: (
      <ul>
        <li>Lambda</li>
        <li>Generators</li>
        <li>Closures</li>
      </ul>
    ),
  },
  {
    title: "Module: 06",
    paragraph: (
      <ul>
        <li>OOPS</li>
        <li>Creating Our Own Objects</li>
        <li>Attributes and Methods</li>
        <li>@classmethod and @staticmethod</li>
        <li>Encapsulation</li>
        <li>Abstraction</li>
        <li>Private vs Public Variables</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>super()</li>
        <li>Dunder Methods</li>
        <li>Multiple Inheritance</li>
        <li>MRO - Method Resolution Order</li>
      </ul>
    ),
  },
  {
    title: "Module: 07",
    paragraph: (
      <ul>
        <li>The import statement</li>
        <li>Module search path</li>
        <li>Creating Modules</li>
        <li>Using packages</li>
        <li>Function and Module aliases</li>
      </ul>
    ),
  },
  {
    title: "Module: 08",
    paragraph: (
      <ul>
        <li>Syntax errors</li>
        <li>Exceptions</li>
        <li>Using try/catch/else/finally</li>
        <li>Handling multiple exceptions</li>
        <li>Ignoring exceptions</li>
      </ul>
    ),
  },
  {
    title: "Data Science with Python:",
    paragraph: (
      <ol>
        <li>Data Science Environment Setup</li>
        <li>Over View of Data Science</li>
        <li>A glance at Python’s essential libraries</li>
        <li>NUMPY For Data Science</li>
        <li>Data pre-processing with Numpy; Introducing EDA</li>
        <li>Pandas For Data Science</li>
        <li>Data loading and pre-processing with pandas</li>
        <li>
          Data Visualization and presentation using seaborn, ggplot and
          matplotlib
        </li>
        <li>Data Processing</li>
      </ol>
    ),
  },
];

export {
  SqlServerDeveloper,
  SQLServerIntegrationServices,
  SQLServerReportingServices,
  SQLServerAnalysisServices,
  MicrosoftBI,
  Html_Css,
  Javascript,
  FullstackDevelopment,
  ReactRedux,
  Mern,
  QualityEngineering,
  BigDataHadoopSpark,
  Python,
  DWH,
};
