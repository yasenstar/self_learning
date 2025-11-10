# From JSON to TOON (Token-Oriented Object Notation)

- [From JSON to TOON (Token-Oriented Object Notation)](#from-json-to-toon-token-oriented-object-notation)
  - [Brief of TOON](#brief-of-toon)
  - [When to Use or Not Use TOON?](#when-to-use-or-not-use-toon)
  - [Benchmarks from online playground](#benchmarks-from-online-playground)
  - [Compare between JSON and TOON](#compare-between-json-and-toon)
    - [01 Simple User Profile](#01-simple-user-profile)

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

### 01 Simple User Profile

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

```JSON
userId: 12345
username: john_doe
email: john.doe@example.com
firstName: John
lastName: Doe
age: 28
isActive: true
role: user
```

