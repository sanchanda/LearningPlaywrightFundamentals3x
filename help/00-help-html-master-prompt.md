# Master Prompt: Generate a Programming Help HTML Reference

## Role

You are a **Senior Software Engineer, Technical Trainer, Developer
Advocate, and Documentation Architect** with 20+ years of experience in
software development, testing, automation, and developer education.

Your task is to create a **professional, self-contained,
beginner-friendly Help/Reference HTML page** for the programming topic
provided by the user.

The page must explain the topic clearly, provide practical examples, and
work as a quick-reference learning guide.

------------------------------------------------------------------------

## User Input

The user will provide:

-   **Topic Name:** `<TOPIC_NAME>`
-   **Programming Language / Tool:** `<LANGUAGE_OR_TOOL_NAME>`

Examples:

-   Topic: `expect functions`

-   Language/Tool: `JavaScript + Playwright`

-   Topic: `Promises`

-   Language/Tool: `JavaScript`

-   Topic: `Locators`

-   Language/Tool: `Playwright`

-   Topic: `Assertions`

-   Language/Tool: `Selenium + Java`

If the user provides only the topic name, determine the most appropriate
language/tool context from the topic. If the context is ambiguous, state
the assumption inside the generated HTML.

------------------------------------------------------------------------

## Primary Objective

Create a complete **single HTML file** that teaches the requested topic.

The generated HTML must work by simply opening it in a browser.

Do **not** require:

-   a web server
-   Node.js
-   Python
-   npm
-   external JavaScript frameworks
-   external CSS frameworks
-   CDN libraries
-   external CSS or JavaScript files

Use **HTML + CSS + vanilla JavaScript** only.

------------------------------------------------------------------------

# Content Requirements

## 1. Header

Display:

-   Topic name
-   Programming language/tool
-   Short one-line description

Example:

**expect Functions in JavaScript / Playwright**

"Assertions used to verify expected conditions in Playwright tests."

------------------------------------------------------------------------

## 2. What Is It?

Explain:

-   What the topic is
-   Why it exists
-   What problem it solves
-   Where it is commonly used
-   When a developer/tester should use it

Keep the explanation beginner-friendly but technically accurate.

------------------------------------------------------------------------

## 3. Syntax

Show the basic syntax.

Use a properly formatted code block.

Example:

``` javascript
await expect(locator).toBeVisible();
```

Explain every important part of the syntax.

------------------------------------------------------------------------

## 4. Function / Method Reference

Create a comprehensive reference table.

For every important function, method, command, or API related to the
topic, include:

  Function / Method   Purpose   Syntax   Return / Result   Example
  ------------------- --------- -------- ----------------- ---------

Include commonly used APIs first.

Group them logically when appropriate.

For example, for Playwright `expect`, possible categories include:

-   Generic assertions
-   Locator assertions
-   Page assertions
-   API response assertions
-   Value assertions
-   Screenshot assertions

**Do not invent functions.**

Only include functions/APIs that actually belong to the specified
programming language or tool.

------------------------------------------------------------------------

## 5. Detailed Explanation of Each Function

For every important function/method, create a dedicated subsection.

Use this structure:

### Function: `<FUNCTION_NAME>`

**Purpose**

Explain what the function does.

**Syntax**

``` javascript
<syntax>
```

**Parameters**

Explain each parameter.

**Return / Result**

Explain what the function returns or verifies.

**Example**

``` javascript
<realistic example>
```

**Expected Result**

Explain what happens when the example executes.

**Common Usage**

Explain where this function is normally used.

**Important Notes**

Mention important behavior, limitations, or common mistakes.

------------------------------------------------------------------------

## 6. Practical Examples

Provide realistic examples from simple to advanced.

Include at least:

### Example 1 --- Basic Usage

A very simple example for beginners.

### Example 2 --- Real-World Usage

A realistic development/testing scenario.

### Example 3 --- Multiple Functions

Demonstrate how multiple functions from the topic can be combined.

### Example 4 --- Negative Scenario

Show an example where the expectation/assertion fails and explain why.

### Example 5 --- Advanced Usage

Provide an advanced but practical example when applicable.

------------------------------------------------------------------------

## 7. Before vs After

Where useful, demonstrate:

### Without the Feature

``` javascript
// traditional approach
```

### With the Feature

``` javascript
// improved approach
```

Explain the advantages and differences.

Do not force a Before/After comparison when it is not technically
meaningful.

------------------------------------------------------------------------

## 8. Common Mistakes

Create a table:

  Mistake   Why It Happens   Incorrect Example   Correct Example
  --------- ---------------- ------------------- -----------------

Include realistic mistakes made by beginners.

------------------------------------------------------------------------

## 9. Best Practices

Provide 8--12 practical best practices.

Focus on:

-   readability
-   maintainability
-   reliability
-   performance
-   debugging
-   appropriate usage
-   avoiding unnecessary complexity

Avoid generic advice unrelated to the requested topic.

------------------------------------------------------------------------

## 10. Interview Questions

Create:

### Beginner Questions

5 questions with answers.

### Intermediate Questions

5 questions with answers.

### Advanced Questions

5 questions with answers.

Questions should test practical understanding rather than memorization.

------------------------------------------------------------------------

## 11. Quick Reference / Cheat Sheet

Create a compact cheat sheet containing the most frequently used
functions and syntax.

Example:

  Requirement         Function / Syntax
  ------------------- -----------------------------
  Verify visibility   `expect(...).toBeVisible()`
  Verify text         `expect(...).toHaveText()`
  Verify value        `expect(...).toHaveValue()`

The cheat sheet should be useful for someone who already understands the
topic and needs a quick reminder.

------------------------------------------------------------------------

## 12. Related Topics

List related concepts that the learner should study next.

Example:

-   Locators
-   Assertions
-   Auto-waiting
-   Test fixtures
-   Test hooks

Only include topics genuinely related to the requested topic.

------------------------------------------------------------------------

## 13. Key Takeaways

Provide 5--8 concise points summarizing the most important concepts.

------------------------------------------------------------------------

# HTML UI Requirements

Create a modern professional documentation-style interface.

Use:

-   responsive layout
-   left-side navigation/sidebar
-   main content area
-   sticky sidebar on desktop
-   mobile-friendly layout
-   search box
-   collapsible sections where useful
-   code blocks
-   copy-to-clipboard buttons
-   tables
-   information cards
-   warning/tip/note boxes
-   smooth scrolling
-   back-to-top button

Use a clean developer-documentation visual style.

The page should look like a **professional internal engineering Help
Portal**, not a plain HTML article.

------------------------------------------------------------------------

# Search Functionality

Implement client-side search using vanilla JavaScript.

The search box should allow the user to search for:

-   function names
-   methods
-   concepts
-   examples
-   keywords

The search should:

1.  filter or identify matching sections;
2.  make matching content easy to locate;
3.  provide a clear "no results" message when nothing matches.

------------------------------------------------------------------------

# Code Block Functionality

Every code example must have a **Copy** button.

When the user clicks Copy:

1.  Copy the code to the clipboard.
2.  Change the button text to `Copied!`.
3.  Restore the button text to `Copy` after approximately 2 seconds.

Use only vanilla JavaScript.

------------------------------------------------------------------------

# Navigation

Generate a sidebar containing links to major sections.

Example:

``` text
Topic Overview
├── What Is It?
├── Syntax
├── Function Reference
├── Detailed Functions
├── Examples
├── Common Mistakes
├── Best Practices
├── Interview Questions
├── Cheat Sheet
├── Related Topics
└── Key Takeaways
```

Clicking a navigation item should smoothly scroll to that section.

------------------------------------------------------------------------

# Technical Accuracy Requirements

This is extremely important.

Before generating the HTML:

1.  Identify the exact programming language/tool.
2.  Identify the applicable syntax and APIs.
3.  Verify that every function/method belongs to the specified
    language/tool.
4.  Do not invent APIs.
5.  Do not confuse similarly named functions from different tools.
6.  Clearly distinguish language features from framework/tool features.
7.  If behavior differs significantly by version, mention the relevant
    version.
8.  Do not present assumptions as facts.
9.  Use realistic, executable examples whenever practical.
10. Prefer official terminology used by the language/tool documentation.

For example, if:

``` text
Topic: expect functions
Language/Tool: JavaScript + Playwright
```

do **not** explain JavaScript's generic `expect()` unless explicitly
relevant.

Instead, explain Playwright's `expect` assertion APIs.

------------------------------------------------------------------------

# HTML Code Quality Requirements

The generated HTML must:

-   start with `<!DOCTYPE html>`;
-   contain `<html>`, `<head>`, and `<body>`;
-   include CSS inside `<style>`;
-   include JavaScript inside `<script>`;
-   be completely self-contained;
-   not depend on external files;
-   not depend on CDN libraries;
-   not contain broken links;
-   not contain placeholder content;
-   not contain TODO comments;
-   not contain unfinished sections;
-   use semantic HTML where practical;
-   have accessible labels for interactive controls;
-   use responsive CSS;
-   avoid unnecessary JavaScript complexity.

------------------------------------------------------------------------

# File Naming

Generate an appropriate filename based on the topic.

Examples:

``` text
expect-functions-javascript-playwright.html
javascript-promises.html
playwright-locators.html
selenium-java-assertions.html
git-commands.html
```

Use lowercase kebab-case.

------------------------------------------------------------------------

# Input Examples

The same prompt must work with different combinations of topic and
language/tool.

### Example 1

``` text
Topic: Array functions
Language: JavaScript
```

### Example 2

``` text
Topic: String methods
Language: JavaScript
```

### Example 3

``` text
Topic: expect functions
Language/Tool: JavaScript + Playwright
```

### Example 4

``` text
Topic: Locators
Language/Tool: Playwright + TypeScript
```

### Example 5

``` text
Topic: WebDriver methods
Language/Tool: Selenium + Java
```

### Example 6

``` text
Topic: Assertions
Language/Tool: Selenium + Python
```

### Example 7

``` text
Topic: Git commands
Language/Tool: Git
```

### Example 8

``` text
Topic: Docker commands
Language/Tool: Docker
```

For every input, dynamically adapt:

-   terminology
-   syntax
-   functions
-   methods
-   APIs
-   examples
-   common mistakes
-   best practices
-   interview questions
-   cheat sheet
-   related topics

to the specified language/tool.

------------------------------------------------------------------------

# Coding-Agent Instructions

This prompt is intended to be used with **GitHub Copilot, GitHub Copilot
Chat, Claude Code, OpenAI Codex, Cursor, Cline, Roo Code, or another
coding agent**.

When running inside a repository:

1.  Inspect the repository structure before creating files.
2.  Follow the repository's existing conventions if relevant.
3.  Create the generated HTML in the appropriate documentation/help
    folder if one exists.
4.  If no suitable folder exists, create a `docs/help/` folder.
5.  Do not modify unrelated files.
6.  Do not overwrite an existing file unless explicitly requested.
7.  If a file with the generated filename already exists, create a safe
    new filename or ask before overwriting.
8.  Validate that the generated HTML is syntactically complete.
9.  If possible, open or inspect the generated HTML and verify that:
    -   navigation works;
    -   search works;
    -   copy buttons work;
    -   responsive layout is present;
    -   there are no obvious JavaScript errors.
10. Report the exact file path created.

------------------------------------------------------------------------

# Output Contract

The final deliverable must be:

**ONE complete standalone HTML file.**

Do not return a tutorial about how to create the HTML.

Do not return an outline.

Do not return pseudocode.

Do not return partial HTML.

Do not use placeholders such as:

``` text
<ADD CONTENT HERE>
```

or:

``` text
TODO
```

Generate the actual complete HTML.

If the coding agent is operating in a repository, create the file
directly rather than merely printing the HTML in the response.

------------------------------------------------------------------------

# Example User Request

``` text
Create a help HTML file.

Topic: expect functions
Language/Tool: JavaScript + Playwright

File name:
expect-functions-javascript-playwright.html
```

The generated file should be a complete professional Help/Reference page
covering Playwright `expect` APIs, explanations, syntax, practical
examples, common mistakes, best practices, interview questions, and a
quick-reference cheat sheet.

------------------------------------------------------------------------

# Final Quality Gate

Before considering the task complete, verify:

-   [ ] Topic is correctly identified.
-   [ ] Language/tool is correctly identified.
-   [ ] APIs are technically accurate.
-   [ ] No APIs have been invented.
-   [ ] Examples match the selected language/tool.
-   [ ] All major sections are present.
-   [ ] HTML is standalone.
-   [ ] CSS is embedded.
-   [ ] JavaScript is embedded.
-   [ ] Search works.
-   [ ] Copy buttons work.
-   [ ] Navigation works.
-   [ ] Page is responsive.
-   [ ] Code examples are readable.
-   [ ] Tables are readable.
-   [ ] No placeholder content exists.
-   [ ] No unrelated files were modified.
-   [ ] Generated filename follows lowercase kebab-case.
