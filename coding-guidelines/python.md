# Coding Style and Guidelines

## Introduction

This document serves to give a brief overview of the accepted coding style for python as stated in the PEP 8 style guide. For those who would like 
more information about accepted Python code style practices, consult the 
Additional Resources section at the bottom of this document. Now without further ado, let's get started.

## Code Layout

### Indentation

Use 4 spaces per indentation level. Spaces are the preferred indentation
method, however, code that has already been written using tabs should
continue to use tabs to maintain consistency.

It is important to note that Python 3 does not allow the mixing of tabs
and spaces for indentation. 

Often times, we need to break code up along multiple lines.

### Maximum Line Length

Limit all lines to a maximum of 79 characters. You might wonder why this
is a convention. Limiting the length of the lines allows others to view
your code easily even if they are not using the same editor as you. For
example, many programmers often have multiple files at the same time, the
limited line length helps prevent text wrapping that makes the code
visually unappealing and difficult to understand.

### Imports

Imports are always put at the top of the file, just after any module
comments and docstrings.
Imports should typically be placed on separate lines. For example:
```python
# Acceptable
import os
import sys

# Not Acceptable
import sys, os
```
This is okay though:
```python
from ex_module import Foo, FooBar
```
Avoid wildcard imports (i.e. `from <module> import *`); they pollute the
namespace.

Imports should be grouped in the following order:
1. Standard library imports
2. Related third party imports
3. Local application/library specific imports

## Comments

Comments should be written in complete sentences. The first word in the
sentence is capitalized, unless the first word is an identifier that 
begins with a lower case letter.

If comment is short, the period can be omitted.

Use English when writing comments.

### Block Comments

Each line of block comment starts with a `#` and a single space.

Paragraphs inside a block comment are separated by a line containing
a single `#`.

#### Example

```python
# Hello, I am an example block comment. Usually, block comments
# apply to the code that follows them, and is indented to same level
# as that code.
#
# When starting new paragraph, remember to separate it like this!
#Remember to add space after #, THIS LINE IS FORMATTED WRONG.
# Normally, this block comment would describe the function foo.
def foo():
    pass
```

### Inline Comments

Use inline comments sparingly.

Inline comments are comments on the same line as a statement. They are 
used to describe the statement if it is confusing. They should be 
separated by at least two spaces from the statement.  They start with a `#`
and a single space.

#### Example
```python
x = x + 1	# Compensate for border.

```
### Documentation Strings

Commonly called docstrings.

Docstrings provide an easy way to write documentation for Python modules, 
classes, and functions. It is good practice to write docstrings for all
public modules, functions, classes, and methods.  

#### Examples

Single-line docstrings should be used for obvious cases.
```python
def simple_function():
    """Single line docstrings look like this."""
```
Multi-line docstrings, like single-line docstrings, consist of
a summary. The summary is followed by a blank line, which is followed
by a more elaborate description.
```python
def complex(real=0.0, imag=0.0):
    """Form a complex number.

    Keyword arguments:
    real -- the real part
    imag -- the imaginary part
    """
    ...
```
**Note:** For a much more in depth look at docstring conventions and
uses, see [PEP 257-Docstring Conventions](https://www.python.org/dev/peps/pep-0257/).

## Naming Conventions

### Class Names

Class names should use the CapsWords convention.

### Exception Names

Exceptions also use the CapsWords convention.

### Function/Method Names

Function names should be lowercase, with words separated by underscores.
i.e `def do_function_foo():`

**Note:** Always use `self` for first argument to instance methods.

### Constants

Constants are written in all capital letters with underscores separating
words. i.e `MAX_OVERFLOW`.

### Variable Names

Variables should be lowercase, with words separated by underscores.
i.e `jeff_apples = 16`

## Additional Resources

These are a collection of additional resources that do an excellent job
describing the "pythonic" way of writing code.

* [Code Style - The Hitchiker's Guide to Python](http://docs.python-guide.org/en/latest/writing/style/)
* [PEP 8 - Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)
* [Code Like a Pythonista: Idiomatic Python](http://python.net/~goodger/projects/pycon/2007/idiomatic/handout.html)
* [PEP 257 - Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)
 
