/* regex expression from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */

import React, { useState, useEffect } from 'react';

const UrlFormatter = (props) => {

  const [text, setText] = useState("");
  const [style, setStyle] = useState(props.style);
  const [space, setSpace] = useState(props.space);
  const [word, setWord] = useState(props.word);
  const [url, setUrl] = useState(props.url);
  const [formatted, setFormatted] = useState([]);
  const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/;
  const url_regex = new RegExp(expression);
  
  useEffect(()=>{
    setText(props.text);
  }, [props.text]);
  
  useEffect(() => {
    const s = text;
    let parts = s.split('\n');
    for (let i=1; i<parts.length; i+=2) {
      parts.splice(i, 0, '\n');
    }
    let i=0;
    while (true) {
      if (i===parts.length) {
        break;
      }
      if (parts[i]==='\n') {}
      else if (parts[i].includes(' ')) {
        let part = parts[i].split(' ');
        parts.splice(i, 0, part[0]);
        parts[i+1] = part.slice(1, part.length).join(' ');
      }
      i++;
    }
    setFormatted(parts);
  }, [text]);

  useEffect(() => {
      setWord(props.word);
  }, [props.word]);

  useEffect(() => {
      setUrl(props.url);
  }, [props.url]);

  useEffect(()=> {
    setStyle(props.style);
  }, [props.style]);

  useEffect(()=> {
      setSpace(props.space);
  }, [props.space]);
  
  const flexStyle = {
    'display': 'flex',
    'flexFlow': 'row wrap',
  };
  const breakStyle = {
    'flexBasis': '100%',
    'height': '0',
  };
  const spaceStyle = {
    'height': '0',
    'width': space || '4px',
  };
  const wordStyle = {
      'marginRight': space || '4px',
      'height': 'minContent',
  };

  return (
    <div style={{...flexStyle, ...style}}>
      {formatted.map((value, index) => {
        if (value==='\n') { 
          return ( <div style={ breakStyle } key={index} /> )
        }
        else if (value===' ') {
          return( <div style={ spaceStyle } key={index} /> )
        }
        else if (value.match(url_regex)) {
          return (
            <a style={{ ...wordStyle, ...url }}
              rel='noopener noreferrer'
              target='_blank'
              href={value.includes('//') ? value : '//'+value}
              key={index}>
                {value}
            </a>
          )
        }
        else {
          return ( <div style={{ ...wordStyle, ...word }} key={index}>{value}</div> )
        }
      })}
    </div>
  )

}

export default UrlFormatter;
