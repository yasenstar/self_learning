# From JSON to TOON (Token-Oriented Object Notation)

- [From JSON to TOON (Token-Oriented Object Notation)](#from-json-to-toon-token-oriented-object-notation)
  - [Brief of TOON](#brief-of-toon)
  - [When to Use or Not Use TOON?](#when-to-use-or-not-use-toon)
  - [Benchmarks from online playground](#benchmarks-from-online-playground)
  - [Compare between JSON and TOON](#compare-between-json-and-toon)
    - [01 Basic JSON - Simple User Profile](#01-basic-json---simple-user-profile)
    - [02 Basic JSON - E-commerce Product](#02-basic-json---e-commerce-product)
    - [03 Basic JSON - Address Information](#03-basic-json---address-information)
    - [04 JSON Array - List of Users](#04-json-array---list-of-users)
    - [05 JSON Array - Product Catalog](#05-json-array---product-catalog)
    - [06 Nested JSON - User Profile with Nested Address](#06-nested-json---user-profile-with-nested-address)
    - [07 Nested JSON - E-commerce Order with Items](#07-nested-json---e-commerce-order-with-items)

## Brief of TOON

TOON Project in GitHub: https://github.com/toon-format/toon

![logo TOON](img/logo_TOON.png)

TOON - Token-Oriented Object Notation - comparing to JSON (JavaScript Object Notation), is the latest introduced, compact, human-readable, schema-aware serialization for LLM prompts.

The purpose of its design is for passing structured data to Large Language Models with significantly reduced token usage.

TOON's sweet spot is **uniform arrays of objecvts** - multiple fields per row, same structure across items. It borrows YAML(YAML Ain't Markup Lanauage)'s indentation-based structure for nested objects and CSV(Comma-Separated Values)'s tabular formate for uniform data rows, then optimizes both for token efficiency in LLM contexts. While, for deeply nested or non-uniform data, JSON may be more efficient.

Think of TOON as a tranlation layer: use JSON programmatically, convert to TOON for LLM input. --> the goal is the minimize the numbers of tokens while it's still costly in LLM.

## When to Use or Not Use TOON?

For small payloads, JSON/CSV/YAML work fine. TOON's value emerges at scale: when you're making hundreds of LLM calls with uniform tabular data, eliminating repeated keys compounds saving significantly.

If token costs matter to your use case, TOON reduces them. If not, sticke with what works.

When NOT to use TOON: TOON excels with uniform arrays of objecvts, but there are cases where other formats are better:

- **Deeply nested or non-uniform structures** (tabular eligibility $\approx$ 0%): JSON-compact often uses fewer tokens.
- **Semi-uniform arrays** (~40-60% tabular eligibility): Token saving diminish. Prefer JSON if your pipelines already rely on it.
- **Flat CSV use-cases**: CSV is smaller than TOON for pure tabular data. TOON adds minimal overhead (~5-10%) to provide structure (length markers, field headers, delimiter scoping) that improves LLM reliability.

## Benchmarks from online playground

From interactive Format Tokenization Playground (https://www.curiouslychase.com/playground/format-tokenization-exploration), you can compare token usage across CSV, JSON, YAML, and TOON. For now it's only supporting the sample data.

![Format_Tokenization_Benchmark](img/Format_Tokenization_Benchmark.png)

## Compare between JSON and TOON

This article - using JSON-TOON converter - to show you the tokenization comparison between variable JSON format samples data with TOON

### 01 Basic JSON - Simple User Profile

Basic use information with common field.

Use case: User authentication, profile management, account systems

JSON:

```JSON
{
  "userId": 12345,
  "username": "john_doe",
  "email": "john.doe@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "age": 28,
  "isActive": true,
  "role": "user"
}
```

TOON:

```
userId: 12345
username: john_doe
email: john.doe@example.com
firstName: John
lastName: Doe
age: 28
isActive: true
role: user
```

JSON: ~48 tokens, TOON: ~31 tokens, (35.4% less)

### 02 Basic JSON - E-commerce Product

Product data for online stores and catalogs.

Use cases: E-commerce platforms, inventory management, product catalogs

JSON:

```JSON
{
  "productId": "PROD-2024-001",
  "name": "Wireless Bluetooth Headphones",
  "category": "Electronics",
  "price": 79.99,
  "currency": "USD",
  "inStock": true,
  "quantity": 145,
  "rating": 4.5,
  "brand": "AudioTech"
}
```

TOON:

```
productId: PROD-2024-001
name: Wireless Bluetooth Headphones
category: Electronics
price: 79.99
currency: USD
inStock: true
quantity: 145
rating: 4.5
brand: AudioTech
```

JSON: ~57 tokens, TOON: ~38 tokens, (33.3% less)

### 03 Basic JSON - Address Information

Standard address format for shipping and contact information.

Use case: Shipping systems, contact forms, location services

JSON:

```JSON
{
  "street": "123 Main Street",
  "city": "San Francisco",
  "state": "CA",
  "zipCode": "94102",
  "country": "USA",
  "type": "residential"
}
```

TOON:

```
street: 123 Main Street
city: San Francisco
state: CA
zipCode: "94102"
country: USA
type: residential
```

JSON: ~38 tokens, TOON: ~24 tokens, (36.8% less)

### 04 JSON Array - List of Users

Multiple user records in an array.

Use case: user management systemsm, admin dashboards, team directories.

JSON:

```JSON
{
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob@example.com",
      "role": "user"
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "email": "charlie@example.com",
      "role": "moderator"
    }
  ],
  "total": 3
}
```

TOON:

```
users[3]{id,name,email,role}:
  1,Alice Johnson,alice@example.com,admin
  2,Bob Smith,bob@example.com,user
  3,Charlie Brown,charlie@example.com,moderator
total: 3
```

JSON: ~91 tokens, TOON: ~50 tokens, (45.1% less)

### 05 JSON Array - Product Catalog

Collection of products with pricing and availability.

Use case: shopping carts, product lisitings, inventory APIs

JSON:

```JSON
{
  "products": [
    {
      "id": "P001",
      "name": "Laptop",
      "price": 999.99,
      "inStock": true
    },
    {
      "id": "P002",
      "name": "Mouse",
      "price": 29.99,
      "inStock": true
    },
    {
      "id": "P003",
      "name": "Keyboard",
      "price": 79.99,
      "inStock": false
    }
  ]
}
```

TOON:

```
products[3]{id,name,price,inStock}:
  P001,Laptop,999.99,true
  P002,Mouse,29.99,true
  P003,Keyboard,79.99,false
```

JSON: ~74 tokens, TOON: ~38 tokens, (48.6% less)

### 06 Nested JSON - User Profile with Nested Address

User object containing nested address and contact information.

Use case: customer relationship management, account profiles, registration systems

JSON:

```JSON
{
  "userId": 1001,
  "name": "Sarah Williams",
  "email": "sarah.w@example.com",
  "address": {
    "street": "456 Oak Avenue",
    "city": "Portland",
    "state": "OR",
    "zipCode": "97201",
    "country": "USA"
  },
  "phone": {
    "home": "+1-503-555-0123",
    "mobile": "+1-503-555-0124"
  },
  "preferences": {
    "newsletter": true,
    "notifications": false,
    "language": "en"
  }
}
```

TOON:

```
userId: 1001
name: Sarah Williams
email: sarah.w@example.com
address:
  street: 456 Oak Avenue
  city: Portland
  state: OR
  zipCode: "97201"
  country: USA
phone:
  home: +1-503-555-0123
  mobile: +1-503-555-0124
preferences:
  newsletter: true
  notifications: false
  language: en
```

JSON: ~103 tokens, TOON: ~68 tokens, (34.0% less)

### 07 Nested JSON - E-commerce Order with Items

Complete order structure with customers, items, and payment details.

Use case: order management, e-commerce platforms, invoice systems

JSON:

```
{
  "orderId": "ORD-2025-12345",
  "orderDate": "2025-01-15T10:30:00Z",
  "customer": {
    "customerId": 5678,
    "name": "Michael Chen",
    "email": "michael.chen@example.com"
  },
  "items": [
    {
      "productId": "PROD-001",
      "name": "Wireless Mouse",
      "quantity": 2,
      "price": 29.99
    },
    {
      "productId": "PROD-002",
      "name": "USB Cable",
      "quantity": 3,
      "price": 9.99
    }
  ],
  "shipping": {
    "method": "Express",
    "cost": 15.00,
    "address": {
      "street": "789 Pine Street",
      "city": "Seattle",
      "state": "WA",
      "zipCode": "98101"
    }
  },
  "payment": {
    "method": "credit_card",
    "last4": "4242",
    "status": "paid"
  },
  "subtotal": 89.95,
  "tax": 8.10,
  "total": 113.05,
  "status": "processing"
}
```

TOON:

```
orderId: ORD-2025-12345
orderDate: "2025-01-15T10:30:00Z"
customer:
  customerId: 5678
  name: Michael Chen
  email: michael.chen@example.com
items[2]{productId,name,quantity,price}:
  PROD-001,Wireless Mouse,2,29.99
  PROD-002,USB Cable,3,9.99
shipping:
  method: Express
  cost: 15
  address:
    street: 789 Pine Street
    city: Seattle
    state: WA
    zipCode: "98101"
payment:
  method: credit_card
  last4: "4242"
  status: paid
subtotal: 89.95
tax: 8.1
total: 113.05
status: processing
```

JSON: ~196 tokens, TOON: ~127 tokens, (35.2% less)



JSON: ~196 tokens, TOON: ~127 tokens, (35.2% less)