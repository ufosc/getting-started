# Rust Lang code guidelines for UF OSC

## General naming conventions
| Item | Convention |
| ---- | ---------  |
| Modules | `snake_case` |
| Types | `UpperCamelCase` | 
| Traits | `UpperCamelCase` | 
| Enum variants | `UpperCamelCase` | 
| Functions | `snake_case` |
| Methods | `snake_case` |
| General constructors | `new` or `with_more_details` |
| Conversion constructors | `from_some_other_type` |
| Macros | `snake_case!` | 
| Local variables | `snake_case` | 
| Statics | `SCREAMING_SNAKE_CASE` |
| Constants | `SCREAMING_SNAKE_CASE` |
| Type parameters | concise `UpperCamelCase`, usually single uppercase letter: `T` |
| LIfetimes | short `lowercase`, usually a single letter: `'a`,`'de`,`'src`. |

---

## Additional information
- Use `tabs` instead of `spaces`
- When using conversions, use the following naming conventions ([for more info](https://rust-lang-nursery.github.io/api-guidelines/naming.html))
    
    | Prefix | Cost |
    | --- | --- |
    | as_ | Free | 
    | to_ | Expensive | 
    | into_ | Variable |
    
- When using type names within file names, refer to the following

| Type Names | Names within method | 
| --- | --- | 
| `&str` | `str` | 
| `&[T]` | `slice` |
| `&Mut [T]` | `mut_slice` | 
| `&[u8]` | `bytes` | 
| `&T` | `ref` |
| `&mut T` | `mut` | 
| `*const T` | `pointer` | 
| `*mut T` | `mut_ptr` | 
