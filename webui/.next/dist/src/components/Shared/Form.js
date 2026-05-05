'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jai/open5gs/webui/src/components/Shared/Form.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: calc(100vh - 16rem);\n  '], ['\n    height: calc(100vh - 16rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-0'
})(['display:flex;flex-direction:column;postion:relative;width:', ';', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], function (p) {
  return p.width || '1050px';
}, _styleUtils.media.mobile(_templateObject));

var Header = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-1'
})(['display:flex;justify-content:flex-start;padding:1rem;font-size:1.5rem;background:', ';'], _openColor2.default.gray[1]);

var Body = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-2'
})(['padding:2rem;font-size:14px;height:', ';', ' overflow:scroll;'], function (p) {
  return p.height || '500px';
}, _styleUtils.media.mobile(_templateObject2));

var Footer = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-3'
})(['display:flex;justify-content:flex-end;padding:1rem;']);

/* We can UI design with styled-componented. Later! */
var REQUIRED_FIELD_SYMBOL = "*";

var CustomTitleField = function CustomTitleField(props) {
  var id = props.id,
      title = props.title,
      required = props.required;

  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return _react2.default.createElement('legend', { id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, legend);
};

var fields = {
  TitleField: CustomTitleField
};

function Label(props) {
  //  modified by acetcom
  //  const { label, required, id } = props;
  var label = props.label,
      id = props.id;

  var required = 0;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    });
  }
  return _react2.default.createElement('label', { className: 'control-label', htmlFor: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, required ? label + REQUIRED_FIELD_SYMBOL : label);
}

var CustomFieldTemplate = function CustomFieldTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel;

  if (hidden) {
    return children;
  }

  return _react2.default.createElement('div', { className: classNames, __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, displayLabel && _react2.default.createElement(Label, { label: label, required: required, id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }), displayLabel && description ? description : null, children, errors, help);
};

var transformErrors = function transformErrors(errors) {
  return errors.map(function (error) {
    // use error messages from JSON schema if any
    if (error.schema.messages && error.schema.messages[error.name]) {
      return (0, _extends3.default)({}, error, {
        message: error.schema.messages[error.name]
      });
    }
    return error;
  });
};

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (data) {
      var onChange = _this.props.onChange;

      var formDataChanged = null;
      if (onChange) {
        formDataChanged = onChange(data.formData);
      }
      _this.setState({
        editing: true,
        disableSubmitButton: (0, _keys2.default)(data.errors).length > 0,
        formData: formDataChanged ? formDataChanged : data.formData
      });
    }, _this.handleSubmit = function (data) {
      var onSubmit = _this.props.onSubmit;

      onSubmit(data.formData);
    }, _this.handleSubmitButton = function () {
      _this.setState({
        disabled: true,
        disableSubmitButton: true
      });
      _this.submitButton.click();
    }, _this.handleOutside = function () {
      var onHide = _this.props.onHide;

      if (_this.state.editing === true) {
        _this.setState({ confirm: true });
      } else {
        onHide();
      }
    }, _this.handleClose = function () {
      var onHide = _this.props.onHide;

      _this.setState({ confirm: false });
      onHide();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible === false && nextProps.visible === true) {
        // Initialize State Variable when form view is visible for the first time
        this.setState({
          formData: nextProps.formData,
          disabled: false,
          editing: false,
          confirm: false,
          disableSubmitButton: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleChange = this.handleChange,
          handleSubmit = this.handleSubmit,
          handleSubmitButton = this.handleSubmitButton,
          handleOutside = this.handleOutside,
          handleClose = this.handleClose;
      var _props = this.props,
          visible = _props.visible,
          title = _props.title,
          schema = _props.schema,
          uiSchema = _props.uiSchema,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onSubmit = _props.onSubmit,
          onError = _props.onError;
      var _state = this.state,
          disabled = _state.disabled,
          disableSubmitButton = _state.disableSubmitButton,
          formData = _state.formData;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement(_Modal2.default, {
        visible: visible,
        onOutside: handleOutside,
        disableOnClickOutside: this.state.confirm, __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(Wrapper, { id: 'nprogress-base-form', width: this.props.width, __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, title), _react2.default.createElement(Body, { height: this.props.height, __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, isLoading && _react2.default.createElement(_Spinner2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), !isLoading && _react2.default.createElement(_reactJsonschemaForm2.default, {
        schema: schema,
        uiSchema: disabled ? (0, _extends3.default)({
          "ui:disabled": true
        }, uiSchema) : (0, _extends3.default)({}, uiSchema),
        formData: formData,
        disableSubmitButton: disableSubmitButton,
        fields: fields,
        FieldTemplate: CustomFieldTemplate,
        liveValidate: true,
        validate: validate,
        showErrorList: false,
        transformErrors: transformErrors,
        autocomplete: 'off',
        onChange: handleChange,
        onSubmit: handleSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, _react2.default.createElement('div', {
        'data-jsx': 301980644,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('button', { type: 'submit', ref: function ref(el) {
          return _this2.submitButton = el;
        }, 'data-jsx': 301980644,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 301980644,
        css: 'button[data-jsx="301980644"]{display:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNSZ0MsQUFHc0MsYUFDZiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TaGFyZWQvRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYWkvb3BlbjVncy93ZWJ1aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG9jIGZyb20gJ29wZW4tY29sb3InO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICdoZWxwZXJzL3N0eWxlLXV0aWxzJztcblxuaW1wb3J0IEpzb25TY2hlbWFGb3JtIGZyb20gJ3JlYWN0LWpzb25zY2hlbWEtZm9ybSc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcbmltcG9ydCBDb25maXJtIGZyb20gJy4vQ29uZmlybSc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3N0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRoIHx8IGAxMDUwcHhgfTtcblxuICAke21lZGlhLm1vYmlsZWBcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xuICBgfVxuXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbmBcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiAke29jLmdyYXlbMV19O1xuYFxuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIGhlaWdodDogJHtwID0+IHAuaGVpZ2h0IHx8IGA1MDBweGB9O1xuICAke21lZGlhLm1vYmlsZWBcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNnJlbSk7XG4gIGB9XG5cbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbmBcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBwYWRkaW5nOiAxcmVtO1xuYFxuXG4vKiBXZSBjYW4gVUkgZGVzaWduIHdpdGggc3R5bGVkLWNvbXBvbmVudGVkLiBMYXRlciEgKi9cbmNvbnN0IFJFUVVJUkVEX0ZJRUxEX1NZTUJPTCA9IFwiKlwiO1xuXG5jb25zdCBDdXN0b21UaXRsZUZpZWxkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGlkLCB0aXRsZSwgcmVxdWlyZWQgfSA9IHByb3BzO1xuICBjb25zdCBsZWdlbmQgPSByZXF1aXJlZCA/IHRpdGxlICsgUkVRVUlSRURfRklFTERfU1lNQk9MIDogdGl0bGU7XG4gIHJldHVybiA8bGVnZW5kIGlkPXtpZH0+e2xlZ2VuZH08L2xlZ2VuZD47XG5cbn07XG5cbmNvbnN0IGZpZWxkcyA9IHtcbiAgVGl0bGVGaWVsZDogQ3VzdG9tVGl0bGVGaWVsZCxcbn07XG5cbmZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XG4vLyAgbW9kaWZpZWQgYnkgYWNldGNvbVxuLy8gIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBpZCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwsIGlkIH0gPSBwcm9wcztcbiAgY29uc3QgcmVxdWlyZWQgPSAwO1xuICBpZiAoIWxhYmVsKSB7XG4gICAgLy8gU2VlICMzMTI6IEVuc3VyZSBjb21wYXRpYmlsaXR5IHdpdGggb2xkIHZlcnNpb25zIG9mIFJlYWN0LlxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXtpZH0+XG4gICAgICB7cmVxdWlyZWQgPyBsYWJlbCArIFJFUVVJUkVEX0ZJRUxEX1NZTUJPTCA6IGxhYmVsfVxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmNvbnN0IEN1c3RvbUZpZWxkVGVtcGxhdGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBjbGFzc05hbWVzLFxuICAgIGxhYmVsLFxuICAgIGNoaWxkcmVuLFxuICAgIGVycm9ycyxcbiAgICBoZWxwLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGhpZGRlbixcbiAgICByZXF1aXJlZCxcbiAgICBkaXNwbGF5TGFiZWwsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoaGlkZGVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICB7ZGlzcGxheUxhYmVsICYmIDxMYWJlbCBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gaWQ9e2lkfSAvPn1cbiAgICAgIHtkaXNwbGF5TGFiZWwgJiYgZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IG51bGx9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7ZXJyb3JzfVxuICAgICAge2hlbHB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybUVycm9ycyA9IGVycm9ycyA9PiB7XG4gIHJldHVybiBlcnJvcnMubWFwKGVycm9yID0+IHtcbiAgICAvLyB1c2UgZXJyb3IgbWVzc2FnZXMgZnJvbSBKU09OIHNjaGVtYSBpZiBhbnlcbiAgICBpZiAoZXJyb3Iuc2NoZW1hLm1lc3NhZ2VzICYmIGVycm9yLnNjaGVtYS5tZXNzYWdlc1tlcnJvci5uYW1lXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZXJyb3IsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLnNjaGVtYS5tZXNzYWdlc1tlcnJvci5uYW1lXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9KTtcbn07XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1aVNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtRGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB0aXRsZTogXCJcIlxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlID09PSBmYWxzZSAmJiBuZXh0UHJvcHMudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSBTdGF0ZSBWYXJpYWJsZSB3aGVuIGZvcm0gdmlldyBpcyB2aXNpYmxlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICBmb3JtRGF0YTogbmV4dFByb3BzLmZvcm1EYXRhLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgICBjb25maXJtOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBkYXRhID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNoYW5nZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGZvcm1EYXRhQ2hhbmdlZCA9IG51bGw7ICBcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICBmb3JtRGF0YUNoYW5nZWQgPSBvbkNoYW5nZShkYXRhLmZvcm1EYXRhKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0aW5nOiB0cnVlLFxuICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogKE9iamVjdC5rZXlzKGRhdGEuZXJyb3JzKS5sZW5ndGggPiAwKSxcbiAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YUNoYW5nZWQgPyBmb3JtRGF0YUNoYW5nZWQgOiBkYXRhLmZvcm1EYXRhXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uU3VibWl0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvblN1Ym1pdChkYXRhLmZvcm1EYXRhKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5zdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25IaWRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lZGl0aW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29uZmlybTogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkhpZGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maXJtOiBmYWxzZSB9KVxuICAgIG9uSGlkZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGhhbmRsZVN1Ym1pdEJ1dHRvbixcbiAgICAgIGhhbmRsZU91dHNpZGUsXG4gICAgICBoYW5kbGVDbG9zZVxuICAgIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdmlzaWJsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgc2NoZW1hLFxuICAgICAgdWlTY2hlbWEsXG4gICAgICBpc0xvYWRpbmcsXG4gICAgICB2YWxpZGF0ZSxcbiAgICAgIG9uU3VibWl0LFxuICAgICAgb25FcnJvclxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlU3VibWl0QnV0dG9uLFxuICAgICAgZm9ybURhdGFcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TW9kYWwgXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX0gXG4gICAgICAgICAgb25PdXRzaWRlPXtoYW5kbGVPdXRzaWRlfVxuICAgICAgICAgIGRpc2FibGVPbkNsaWNrT3V0c2lkZT17dGhpcy5zdGF0ZS5jb25maXJtfT5cbiAgICAgICAgICA8V3JhcHBlciBpZD0nbnByb2dyZXNzLWJhc2UtZm9ybScgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9PlxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Qm9keSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fT5cbiAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5lci8+fVxuICAgICAgICAgICAgICB7IWlzTG9hZGluZyAmJiBcbiAgICAgICAgICAgICAgICA8SnNvblNjaGVtYUZvcm1cbiAgICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgdWlTY2hlbWE9e1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInVpOmRpc2FibGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgLi4udWlTY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi51aVNjaGVtYVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlU3VibWl0QnV0dG9uPXtkaXNhYmxlU3VibWl0QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgICBGaWVsZFRlbXBsYXRlPXtDdXN0b21GaWVsZFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgbGl2ZVZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICAgICAgICBzaG93RXJyb3JMaXN0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUVycm9ycz17dHJhbnNmb3JtRXJyb3JzfVxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgb25FcnJvcj17b25FcnJvcn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiByZWY9eyhlbCA9PiB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGVsKX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0pzb25TY2hlbWFGb3JtPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsZWFyIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGVhciBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgZGlzYWJsZVN1Ym1pdEJ1dHRvbn0gb25DbGljaz17aGFuZGxlU3VibWl0QnV0dG9ufT5cbiAgICAgICAgICAgICAgICBTQVZFXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgICAgPC9XcmFwcGVyPiAgXG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDxDb25maXJtIFxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuY29uZmlybX0gXG4gICAgICAgICAgbWVzc2FnZT1cIllvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsb3NlP1wiXG4gICAgICAgICAgYnV0dG9ucz17W1xuICAgICAgICAgICAgeyB0ZXh0OiBcIkNMT1NFXCIsIGFjdGlvbjogaGFuZGxlQ2xvc2UsIGluZm86dHJ1ZSB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBcIk5PXCIsIGFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm06IGZhbHNlIH0pfVxuICAgICAgICAgIF19Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl19 */\n/*@ sourceURL=src/components/Shared/Form.js */'
      })))), _react2.default.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled, onClick: handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, 'CANCEL'), _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled || disableSubmitButton, onClick: handleSubmitButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, 'SAVE')))), _react2.default.createElement(_Confirm2.default, {
        visible: this.state.confirm,
        message: 'You have unsaved changes. Are you sure you want to close?',
        buttons: [{ text: "CLOSE", action: handleClose, info: true }, { text: "NO", action: function action() {
            return _this2.setState({ confirm: false });
          } }], __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }));
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  visible: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  schema: _propTypes2.default.object,
  uiSchema: _propTypes2.default.object,
  formData: _propTypes2.default.object,
  isLoading: _propTypes2.default.bool,
  valdate: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onError: _propTypes2.default.func
};
Form.defaultProps = {
  visible: false,
  title: ""
};

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Gb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwibWVkaWEiLCJKc29uU2NoZW1hRm9ybSIsIk1vZGFsIiwiQnV0dG9uIiwiU3Bpbm5lciIsIkNvbmZpcm0iLCJXcmFwcGVyIiwiZGl2IiwicCIsIndpZHRoIiwibW9iaWxlIiwiSGVhZGVyIiwiZ3JheSIsIkJvZHkiLCJoZWlnaHQiLCJGb290ZXIiLCJSRVFVSVJFRF9GSUVMRF9TWU1CT0wiLCJDdXN0b21UaXRsZUZpZWxkIiwiaWQiLCJwcm9wcyIsInRpdGxlIiwicmVxdWlyZWQiLCJsZWdlbmQiLCJmaWVsZHMiLCJUaXRsZUZpZWxkIiwiTGFiZWwiLCJsYWJlbCIsIkN1c3RvbUZpZWxkVGVtcGxhdGUiLCJjbGFzc05hbWVzIiwiY2hpbGRyZW4iLCJlcnJvcnMiLCJoZWxwIiwiZGVzY3JpcHRpb24iLCJoaWRkZW4iLCJkaXNwbGF5TGFiZWwiLCJ0cmFuc2Zvcm1FcnJvcnMiLCJtYXAiLCJlcnJvciIsInNjaGVtYSIsIm1lc3NhZ2VzIiwibmFtZSIsIm1lc3NhZ2UiLCJGb3JtIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJvbkNoYW5nZSIsImZvcm1EYXRhQ2hhbmdlZCIsImRhdGEiLCJmb3JtRGF0YSIsInNldFN0YXRlIiwiZWRpdGluZyIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwic3VibWl0QnV0dG9uIiwiY2xpY2siLCJoYW5kbGVPdXRzaWRlIiwib25IaWRlIiwiY29uZmlybSIsImhhbmRsZUNsb3NlIiwibmV4dFByb3BzIiwidmlzaWJsZSIsInVpU2NoZW1hIiwiaXNMb2FkaW5nIiwidmFsaWRhdGUiLCJvbkVycm9yIiwiZWwiLCJ0ZXh0IiwiYWN0aW9uIiwiaW5mbyIsInByb3BUeXBlcyIs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