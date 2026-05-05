'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _ = require('..');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jai/open5gs/webui/src/components/Subscriber/List.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0.5rem 0.25rem;\n  '], ['\n    margin: 0.5rem 0.25rem;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-13k69tf-0'
})(['display:block;margin:1rem 0.5rem;', ' .subscriber-enter{animation:', ' .3s ease-in;animation-fill-mode:forwards;}.subscriber-leave{animation:', ' .15s ease-in;animation-fill-mode:forwards;}'], _styleUtils.media.mobile(_templateObject), _styleUtils.transitions.stretchOut, _styleUtils.transitions.shrinkIn);

var propTypes = {
  subscribers: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onView: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  search: _propTypes2.default.string
};

var List = function List(_ref) {
  var subscribers = _ref.subscribers,
      deletedImsi = _ref.deletedImsi,
      onView = _ref.onView,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      search = _ref.search;

  function pred(s) {
    if (s.msisdn && s.msisdn[0] && s.msisdn[0].indexOf(search) !== -1 || s.msisdn && s.msisdn[1] && s.msisdn[1].indexOf(search) !== -1 || s.imsi.indexOf(search) !== -1) {
      return true;
    }
  }
  var subscriberList = subscribers.filter(pred).sort(function (a, b) {
    if (a.imsi > b.imsi) return 1;
    if (a.imsi < b.imsi) return -1;
    return 0;
  }).map(function (subscriber) {
    return _react2.default.createElement(_Item2.default, {
      key: subscriber.imsi,
      subscriber: subscriber,
      disabled: deletedImsi === subscriber.imsi,
      onView: onView,
      onEdit: onEdit,
      onDelete: onDelete, __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    });
  });

  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(_CSSTransitionGroup2.default, {
    transitionName: 'subscriber',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 150, __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, subscriberList));
};

List.propTypes = propTypes;

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1N1YnNjcmliZXIvTGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIm1lZGlhIiwidHJhbnNpdGlvbnMiLCJDU1NUcmFuc2l0aW9uR3JvdXAiLCJMYXlvdXQiLCJCbGFuayIsIkl0ZW0iLCJXcmFwcGVyIiwiZGl2IiwibW9iaWxlIiwic3RyZXRjaE91dCIsInNocmlua0luIiwicHJvcFR5cGVzIiwic3Vic2NyaWJlcnMiLCJhcnJheU9mIiwib2JqZWN0Iiwib25WaWV3IiwiZnVuYyIsIm9uRWRpdCIsIm9uRGVsZXRlIiwic2VhcmNoIiwic3RyaW5nIiwiTGlzdCIsImRlbGV0ZWRJbXNpIiwicHJlZCIsInMiLCJtc2lzZG4iLCJpbmRleE9mIiwiaW1zaSIsInN1YnNjcmliZXJMaXN0IiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibWFwIiwic3Vic2NyaWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU87O0FBQ2hCLEFBQU87Ozs7QUFFUCxBQUFTLEFBQVE7O0FBQ2pCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLHFDQUFBLEFBQWlCO2VBQWpCO0FBQUEsQ0FBVSxxTUFJWixrQkFKRSxBQUlJLHlCQUtPLHdCQVRYLEFBU3VCLFlBS1osd0JBZGpCLEFBQU0sQUFjdUI7O0FBSzdCLElBQU07ZUFDUyxvQkFBQSxBQUFVLFFBQVEsb0JBRGYsQUFDSCxBQUE0QixBQUN6QztVQUFRLG9CQUZRLEFBRUUsQUFDbEI7VUFBUSxvQkFIUSxBQUdFLEFBQ2xCO1lBQVUsb0JBSk0sQUFJSSxBQUNwQjtVQUFRLG9CQUxWLEFBQWtCLEFBS0U7QUFMRixBQUNoQjs7QUFPRixJQUFNLE9BQU8sU0FBUCxBQUFPLFdBQW9FO01BQWpFLEFBQWlFLG1CQUFqRSxBQUFpRTtNQUFwRCxBQUFvRCxtQkFBcEQsQUFBb0Q7TUFBdkMsQUFBdUMsY0FBdkMsQUFBdUM7TUFBL0IsQUFBK0IsY0FBL0IsQUFBK0I7TUFBdkIsQUFBdUIsZ0JBQXZCLEFBQXVCO01BQWIsQUFBYSxjQUFiLEFBQWEsQUFDL0U7O1dBQUEsQUFBUyxLQUFULEFBQWMsR0FBRSxBQUNkO1FBQUssRUFBQSxBQUFFLFVBQVUsRUFBQSxBQUFFLE9BQWQsQUFBWSxBQUFTLE1BQU0sRUFBQSxBQUFFLE9BQUYsQUFBUyxHQUFULEFBQVksUUFBWixBQUFvQixZQUFZLENBQTVELEFBQTZELEtBQzlELEVBQUEsQUFBRSxVQUFVLEVBQUEsQUFBRSxPQUFkLEFBQVksQUFBUyxNQUFNLEVBQUEsQUFBRSxPQUFGLEFBQVMsR0FBVCxBQUFZLFFBQVosQUFBb0IsWUFBWSxDQUQxRCxBQUMyRCxLQUM1RCxFQUFBLEFBQUUsS0FBRixBQUFPLFFBQVAsQUFBZSxZQUFZLENBRjlCLEFBRStCLEdBQUcsQUFDaEM7YUFBQSxBQUFPLEFBQ1I7QUFDRjtBQUNEO01BQU0sNkJBQWlCLEFBQ3BCLE9BRG9CLEFBQ2IsTUFEYSxBQUVwQixLQUNDLFVBQUEsQUFBQyxHQUFELEFBQUcsR0FBTSxBQUNQO1FBQUcsRUFBQSxBQUFFLE9BQU8sRUFBWixBQUFjLE1BQU0sT0FBQSxBQUFPLEFBQzNCO1FBQUksRUFBQSxBQUFFLE9BQU8sRUFBYixBQUFlLE1BQU0sT0FBTyxDQUFQLEFBQVEsQUFDN0I7V0FBQSxBQUFPLEFBQ1I7QUFQa0IsR0FBQSxFQUFBLEFBU3BCLElBQUksc0JBQUE7MkJBQ0gsQUFBQztXQUNNLFdBRFAsQUFDa0IsQUFDaEI7a0JBRkYsQUFFYyxBQUNaO2dCQUFVLGdCQUFnQixXQUg1QixBQUd1QyxBQUNyQztjQUpGLEFBSVUsQUFDUjtjQUxGLEFBS1UsQUFDUjtnQkFORixBQU1ZO2tCQU5aO29CQURHLEFBQ0g7QUFBQTtBQUNFLEtBREY7QUFWSixBQUF1QixBQW1CdkI7O3lCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQztvQkFBRCxBQUNpQixBQUNmOzRCQUZGLEFBRTBCLEFBQ3hCOzRCQUhGLEFBRzBCO2dCQUgxQjtrQkFBQSxBQUlHO0FBSkg7QUFDRSxLQUhOLEFBQ0UsQUFDRSxBQVFMO0FBckNEOztBQXVDQSxLQUFBLEFBQUssWUFBTCxBQUFpQixBQUVqQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2phaS9vcGVuNWdzL3dlYnVpIn0=