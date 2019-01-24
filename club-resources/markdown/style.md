# Markdown Style Guidelines

Use [GitHub flavored markdown][GitHub Flavored] syntax.

## Headers

- Headers must use `#`
- Use only one top level header
- Headers must be preceded and followed by a newline except at the beginning of a file

```md
# Top level header

## Secondary header

## Other secondary header
```

## Spacing

- Indent only with tabs
- Only force a linebreak by ending a line with two spaces
- No extra spaces after line

## Text

- Denote bold text using asterisks: `**bold text**`
- Denote italic text using underscores: `_emphasized text_`

## Lists

- Unordered list items should use `-` instead of `*`
- Ordered list items should be numbered correctly

## Code

- Inline code must use single backticks and must not have spaces between the backtick characters and the code

```md
Bad
` .this-is-wrong `

Good
`.this-is-good`
```

- Fenced code blocks must be preceded and followed by a newline
- Include language specifier when creating code block

````md
```cpp
void main()
{
	cout << "Hello Wold! << end;
}

```
````

## Table

- Tables must always be preceded and followed by newlines
- Always format tables so they are readable in pre-processing

```md
This is completely unreadable, although it is technically valid

table header | other table header
--- | ---
table data | other table data
```

```md
This can easily be read from markdown file

| table header | other table header |
| ------------ | ------------------ |
| table data   | table data         |
```

## Other

- Avoid using HTML tags
- If a link is repeated, use a reference-style link at the bottom of the file

```md
[Text][Reference Link]

[Reference Link]: ufosc.github.io "Club website"
```

## Resources

- [GitHub Flavored Markdown][GitHub Flavored]
- [Club Markdown Resource](https://github.com/ufosc/resources/tree/master/resources/markdown)
- [Inspiration for Style Guideline](https://github.com/carwin/markdown-styleguide)

[GitHub Flavored]: https://guides.github.com/features/mastering-markdown/ "GitHub flavored markdown guide"