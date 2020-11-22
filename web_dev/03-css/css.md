## Adding styles to our documents

- External style sheets
- Internal CSS
- Inline styles

### External style sheets

Simply add a line to the `<head>` section of the site, which looks like below:

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

Explanations:

- `<link>` is an HTML element, it has following attributes.
- `rel`, to indicate the relationship between the HML document and the linked file
- `type`, specifies the MIMEtype of the document so the browser knows how to load it
- `href` is used to specify the location of the file, recommend always use relative pathnames for the file name

### Internal CSS

OK for using in small projects or projects you would like to limit to a single HTML file so that it is easy to email to someone.

```HTML
<style type="text/css">
p.red {
    color:red;
}
</style>
```

### Inline styles

```HTML
<h3 style="color:green;">Congratulations</h3>
```
