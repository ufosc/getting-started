# Headers/Title

## Subtopics

Regular paragraphs continue in the same block and go on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on 
AND with a return this is the same paragraph

So double space at the end of the line   
for a new line  

### Quotes

In the words of Obi-Wan Kenobi

> May the force be with you, always

### Styling

*This text will be italic*
and
_This text will be italic_

**This text will be bold and _this will be both_**

If you wanted to display special characters like \* or \_ that are part of the markdown syntax, use \ to show it.

### List

#### Unordered

* Star
* Item
* Item

Double enter to separate list
- Dash
* Star
- Dash

#### Ordered

1. First
- Star
3. Third

#### Nested

Tab or space for indent
1. Item 1
	1. Sub-info for item 1
	2. And more information for item 1
2. Item 2
	* It can also be unordered
		- And be indented more than once 
		1. An ordered item can be under an unordered one
3. Item 3

### Code or Examples

Use ' ' to keep formatting on one line for `Sample Code` and `**Unformatted** Sample Code`.

Or ''' for multiple lines.

```c++
x = 0;
x = 2 + 2;
what is x
```

### Links

[Our Github](https://github.com/ufosc)

```
[Displayed Text](the.url)
```

### Preformed text

Put a tab in front of the line

	A block       of text
	that keeps    spacing
	and doesn't   _italicize_  


### Tables


| Tables   |      Are      |  Neat |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | 12345 |
| col 2 is |    centered   |   314 |
| col 3 is | right-aligned |    42 |

### Advanced

#### Link References

Make an easy reference by making the link a "variable".

[A Reference][Link]

[Link]: www.google.com

Code:
```markdown
[A Reference][Link]
[Link]: www.google.com
```

You can also link to headers within the document.

[Refrences](#link-references)

Code:
```markdown
[Refrences](#link-references)
```

#### Images

Images can also be added to markdown. They are similar to links.

```markdown
![Alt text](/path/to/img.jpg "Optional title")
```

Can also treat an image like a referenced link.

```markdown
![Alt text][id]
[id]: url/to/image  "Optional title attribute"
```

#### Tags
You can use regular HTML tags and characters as well.

```HTML
<a>              - hyperlink.
<b>              - bold, use as last resort <h1>-<h3>, <em>, and <strong> are
                   preferred.
<blockquote>     - specifies a section that is quoted from another source.
<code>           - defines a piece of computer code.
<del>            - delete, used to indicate modifications.
<dd>             - describes the item in a <dl> description list.
<dl>             - description list.
<dt>             - title of an item in a <dl> description list.
<em>             - emphasized.
<h1>, <h2>, <h3> - headings.
<i>              - italic.
<img>            - specifies an image tag.
<kbd>            - represents user input (usually keyboard input).
<li>             - list item in an ordered list <ol> or an unordered list <ul>.
<ol>             - ordered list.
<p>              - paragraph.
<pre>            - pre-element displayed in a fixed width font and and
                   unchanged line breaks.
<s>              - strikethrough.
<sup>            - superscript text appears 1/2 character above the baseline
                   used for footnotes and other formatting.
<sub>            - subscript appears 1/2 character below the baseline.
<strong>         - defines important text.
<strike>         - strikethrough is deprecated, use <del> instead.
<ul>             - unordered list.
<br>             - line break.
<hr>             - defines a thematic change in the content, usually via a
                   horizontal line.
```

#### Comments

[//]: # (This is a comment, it's faking a link)

Didn't see the above line? Cool, because it was commented out.

```markdown
[//]: # (This is a comment)
```