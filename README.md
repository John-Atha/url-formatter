# Url-Formatter

* This is a simple react component to format urls of text
* Technologies used:
    * [ReactJs](https://reactjs.org) (with npx create-react-app)
    * [react-bootstrap](https://react-bootstrap.github.io)

* It uses a simple javascript code snippet to split the text
* Then, a regural expression is used during render to filter the text parts, and with some HTML and CSS simple tricks, the urls are displayed as clickable hrefs
* Most importantly, <b>the initial text format (spaces, new lines, etc) remains the same</b>

## Quick demo 

[url-formatter](https://john-atha.github.io/url-formatter-demo)

## Github repository

[url-formatter](https://github.com/John-Atha/url-formatter)

## Installation

* Install using `npm i url-formatter`

## Quick start/Usage:

In a React app:
    import { UrlFormatter } from 'url-formatter';

### Basic Usage
* Pass the text you want to format with the `text` prop
* Text should be a <b>string</b>
```javascript
    <UrlFormatter text={text} />
```
### Styling
###### Text container styling
* you can define the container styling giving the prop `style` which should be an object and follow the general rules of decalring styling in react (css)
* example:
```javascript
    <UrlFormatter text={text} style={{'border': '1px solid red'}}/>
```
###### Urls styling
* you can define the urls styling giving the prop `url` which should be an object (again following the general styling syntax)
* example:
```javascript
    <UrlFormatter text={text} url={{'color': 'red'}}/>
```
###### Other words styling
* you can define the simple words styling giving the prop `word` which should be an object (again following the general styling syntax)
* example:
```javascript
    <UrlFormatter text={text} word={{'color': 'red'}}/>
```
###### Space character length
* you can define the length of the space character giving the prop `space` as string
* the default value is 4px
* example:
```javascript
    <UrlFormatter text={text} space={'4px'}/>
```
###### In general, bear in mind that
* words are divided by whitespaces and then they are rendered as seperate divs
* as a result, they are going to inherit all their ancestors' CSS

## Contact me
* Developer: Giannis Athanasiou
* Github: [John-Atha](https://www.github.com/John-Atha)
* Email: giannisj3@gmail.com