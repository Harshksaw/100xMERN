import random

# List of JavaScript statements and expressions for code generation
js_code_snippets = [
    "let x = 5;",
    "function add(a, b) { return a + b; }",
    "const message = 'Hello, World!';",
    "for (let i = 0; i < 10; i++) { console.log(i); }",
    "if (x > 0) { console.log('Positive'); } else { console.log('Non-positive'); }",
    "const numbers = [1, 2, 3, 4, 5];",
    "const squaredNumbers = numbers.map(num => num ** 2);",
    "console.log(squaredNumbers);",
    "// This is a comment",
    "/* This is a multiline comment",
    "   spanning multiple lines */",
]

# Generate 10,000 lines of JavaScript code
generated_code = "\n".join(random.choice(js_code_snippets) for _ in range(10000))

# Write the generated code to a file
with open("generated_code.js", "w") as file:
    file.write(generated_code)

print("JavaScript code generated and saved to 'generated_code.js'.")
