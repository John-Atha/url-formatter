"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.match.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UrlFormatter = props => {
  const [text, setText] = (0, _react.useState)("");
  const [style, setStyle] = (0, _react.useState)(props.style);
  const [space, setSpace] = (0, _react.useState)(props.space);
  const [word, setWord] = (0, _react.useState)(props.word);
  const [url, setUrl] = (0, _react.useState)(props.url);
  const [formatted, setFormatted] = (0, _react.useState)([]);
  const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/;
  const url_regex = new RegExp(expression);
  (0, _react.useEffect)(() => {
    setText(props.text);
  }, [props.text]);
  (0, _react.useEffect)(() => {
    const s = text;
    let parts = s.split('\n');

    for (let i = 1; i < parts.length; i += 2) {
      parts.splice(i, 0, '\n');
    }

    let i = 0;

    while (true) {
      if (i === parts.length) {
        break;
      }

      if (parts[i] === '\n') {} else if (parts[i].includes(' ')) {
        let part = parts[i].split(' ');
        parts.splice(i, 0, part[0]);
        parts[i + 1] = part.slice(1, part.length).join(' ');
      }

      i++;
    }

    setFormatted(parts);
  }, [text]);
  (0, _react.useEffect)(() => {
    setWord(props.word);
  }, [props.word]);
  (0, _react.useEffect)(() => {
    setUrl(props.url);
  }, [props.url]);
  (0, _react.useEffect)(() => {
    setStyle(props.style);
  }, [props.style]);
  (0, _react.useEffect)(() => {
    setSpace(props.space);
  }, [props.space]);
  const flexStyle = {
    'display': 'flex',
    'flexFlow': 'row wrap'
  };
  const breakStyle = {
    'flexBasis': '100%',
    'height': '0'
  };
  const spaceStyle = {
    'height': '0',
    'width': space || '4px'
  };
  const wordStyle = {
    'marginRight': space || '4px',
    'height': 'minContent'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexStyle), style)
  }, formatted.map((value, index) => {
    if (value === '\n') {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: breakStyle,
        key: index
      });
    } else if (value === ' ') {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: spaceStyle,
        key: index
      });
    } else if (value.match(url_regex)) {
      return /*#__PURE__*/_react.default.createElement("a", {
        style: _objectSpread(_objectSpread({}, wordStyle), url),
        rel: "noopener noreferrer",
        target: "_blank",
        href: value.includes('//') ? value : '//' + value,
        key: index
      }, value);
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: _objectSpread(_objectSpread({}, wordStyle), word),
        key: index
      }, value);
    }
  }));
};

var _default = UrlFormatter;
exports.default = _default;