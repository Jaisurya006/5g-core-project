'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withWidth = require('../../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jai/open5gs/webui/src/components/Profile/Edit.js';


var schema = {
  "title": "Profile Configuration",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title*",
      "required": true,
      "maxLength": 24
    },
    "msisdn": {
      "type": "array",
      "title": "",
      "maxItems": 2,
      "messages": {
        "maxItems": "2 MSISDN are supported"
      },
      "items": {
        "type": "string",
        "title": "MSISDN",
        "maxLength": 15,
        "required": true,
        "pattern": "^\\d+$",
        "messages": {
          "pattern": "Only digits are allowed"
        }
      }
    },
    "security": {
      "title": "",
      "type": "object",
      "properties": {
        "k": {
          "type": "string",
          "title": "Profile Key (K)*",
          "required": true,
          "pattern": "^[0-9a-fA-F\\s]+$",
          "messages": {
            "pattern": "Only hexadecimal digits are allowed"
          }
        },
        "amf": {
          "type": "string",
          "title": "Authentication Management Field (AMF)*",
          "required": true,
          "pattern": "^[0-9a-fA-F\\s]+$",
          "messages": {
            "pattern": "Only hexadecimal digits are allowed"
          }
        },
        "op_type": {
          "type": "number",
          "title": "USIM Type",
          "enum": [0, 1],
          "enumNames": ["OPc", "OP"],
          "default": 0
        },
        "op_value": {
          "type": "string",
          "title": "Operator Key (OPc/OP)*",
          "required": true,
          "pattern": "^[0-9a-fA-F\\s]+$",
          "messages": {
            "pattern": "Only hexadecimal digits are allowed"
          }
        }
      }
    },
    "ambr": {
      "type": "object",
      "title": "",
      "properties": {
        "downlink": {
          "type": "object",
          "title": "",
          "properties": {
            "value": {
              "type": "number",
              "title": "UE-AMBR Downlink*",
              "required": true
            },
            "unit": {
              "type": "number",
              "title": "Unit",
              "enum": [0, 1, 2, 3, 4],
              "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
              "default": 3
            }
          }
        },
        "uplink": {
          "type": "object",
          "title": "",
          "properties": {
            "value": {
              "type": "number",
              "title": "UE-AMBR Uplink*",
              "required": true
            },
            "unit": {
              "type": "number",
              "title": "Unit",
              "enum": [0, 1, 2, 3, 4],
              "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
              "default": 3
            }
          }
        }
      }
    },
    "subscriber_status": {
      "type": "number",
      "title": "Subscriber Status (TS 29.272 7.3.29)",
      "enum": [0, 1],
      "enumNames": ["SERVICE_GRANTED", "OPERATOR_DETERMINED_BARRING"],
      "default": 0
    },
    "operator_determined_barring": {
      "type": "number",
      "title": "Operator Determined Barring (TS 29.272 7.3.30)",
      "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8],
      "enumNames": ["(0) All Packet Oriented Services Barred", "(1) Roamer Access HPLMN-AP Barred", "(2) Roamer Access to VPLMN-AP Barred", "(3) Barring of all outgoing calls", "(4) Barring of all outgoing international calls", "(5) Barring of all outgoing international calls except those directed to the home PLMN country", "(6) Barring of all outgoing inter-zonal calls", "(7) Barring of all outgoing inter-zonal calls except those directed to the home PLMN country", "(8) Barring of all outgoing international calls except those directed to the home PLMN country and Barring of all outgoing inter-zonal calls"],
      "default": 0
    },
    "slice": {
      "type": "array",
      "title": "Slice Configurations",
      "minItems": 1,
      "maxItems": 8,
      "messages": {
        "minItems": "At least 1 Slice is required",
        "maxItems": "8 Slices are supported"
      },
      "items": {
        "type": "object",
        "properties": {
          "sst": {
            "type": "number",
            "title": "SST*",
            "enum": [1, 2, 3, 4],
            "required": true
          },
          "sd": {
            "type": "string",
            "title": "SD",
            "pattern": "^[0-9a-fA-F]+$",
            "minLength": 6,
            "maxLength": 6,
            "messages": {
              "pattern": "Only hexadecimal digits are allowed"
            }
          },
          "default_indicator": {
            "type": "boolean",
            "title": "Default S-NSSAI"
          },
          "session": {
            "type": "array",
            "title": "Session Configurations",
            "minItems": 1,
            "maxItems": 4,
            "messages": {
              "minItems": "At least 1 Session is required",
              "maxItems": "4 Sessions are supported"
            },
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "title": "DNN/APN*",
                  "required": true
                },
                "type": {
                  "type": "number",
                  "title": "Type*",
                  "enum": [1, 2, 3],
                  "enumNames": ["IPv4", "IPv6", "IPv4v6"],
                  "default": 3
                },
                "lbo_roaming_allowed": {
                  "type": "boolean",
                  "title": "LBO Roaming Allowed"
                },
                "qos": {
                  "type": "object",
                  "title": "",
                  "properties": {
                    "index": {
                      "type": "number",
                      "title": "5QI/QCI*",
                      "enum": [1, 2, 3, 4, 65, 66, 67, 75, 71, 72, 73, 74, 76, 5, 6, 7, 8, 9, 69, 70, 79, 80, 82, 83, 84, 85, 86],
                      "default": 5
                    },
                    "arp": {
                      "type": "object",
                      "title": "",
                      "properties": {
                        "priority_level": {
                          "type": "number",
                          "title": "ARP Priority Level (1-15)*",
                          "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                          "default": 1
                        },
                        "pre_emption_capability": {
                          "type": "number",
                          "title": "Capability*",
                          "enum": [1, 2],
                          "enumNames": ["Disabled", "Enabled"],
                          "default": 1
                        },
                        "pre_emption_vulnerability": {
                          "type": "number",
                          "title": "Vulnerability*",
                          "enum": [1, 2],
                          "enumNames": ["Disabled", "Enabled"],
                          "default": 1
                        }
                      }
                    }
                  }
                },
                "ambr": {
                  "type": "object",
                  "title": "",
                  "properties": {
                    "downlink": {
                      "type": "object",
                      "title": "",
                      "properties": {
                        "value": {
                          "type": "number",
                          "title": "Session-AMBR Downlink*",
                          "default": 1,
                          "required": true
                        },
                        "unit": {
                          "type": "number",
                          "title": "Unit",
                          "enum": [0, 1, 2, 3, 4],
                          "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
                          "default": 3
                        }
                      }
                    },
                    "uplink": {
                      "type": "object",
                      "title": "",
                      "properties": {
                        "value": {
                          "type": "number",
                          "title": "Session-AMBR Uplink*",
                          "default": 1,
                          "required": true
                        },
                        "unit": {
                          "type": "number",
                          "title": "Unit",
                          "enum": [0, 1, 2, 3, 4],
                          "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
                          "default": 3
                        }
                      }
                    }
                  }
                },
                "ue": {
                  "type": "object",
                  "title": "",
                  "properties": {
                    "ipv4": {
                      "type": "string",
                      "title": "UE IPv4 Address",
                      "format": "ipv4"
                    },
                    "ipv6": {
                      "type": "string",
                      "title": "UE IPv6 Address",
                      "format": "ipv6"
                    }
                  }
                },
                "smf": {
                  "type": "object",
                  "title": "",
                  "properties": {
                    "ipv4": {
                      "type": "string",
                      "title": "SMF IPv4 Address",
                      "format": "ipv4"
                    },
                    "ipv6": {
                      "type": "string",
                      "title": "SMF IPv6 Address",
                      "format": "ipv6"
                    }
                  }
                },
                "pcc_rule": {
                  "type": "array",
                  "title": "PCC Rules",
                  "maxItems": 8,
                  "messages": {
                    "maxItems": "8 PCC Rules are supported"
                  },
                  "items": {
                    "type": "object",
                    "properties": {
                      "flow": {
                        "type": "array",
                        "title": "",
                        "maxItems": 8,
                        "messages": {
                          "maxItems": "8 Flows are supported"
                        },
                        "items": {
                          "type": "object",
                          "properties": {
                            "direction": {
                              "type": "number",
                              "title": "Flow Direction*",
                              "enum": [1, 2],
                              "enumNames": ["Downlink", "Uplink"],
                              "default": 1
                            },
                            "description": {
                              "type": "string",
                              "title": "Description*",
                              "default": "permit out udp from any 1-65535 to 45.45.45.45",
                              "required": true,
                              "pattern": "^permit\\s+out",
                              "messages": {
                                "pattern": "Begin with reserved keyword 'permit out'."
                              }
                            }
                          }
                        }
                      },
                      "qos": {
                        "type": "object",
                        "title": "",
                        "properties": {
                          "index": {
                            "type": "number",
                            "title": "5QI/QCI*",
                            "enum": [1, 2, 3, 4, 65, 66, 67, 75, 71, 72, 73, 74, 76, 5, 6, 7, 8, 9, 69, 70, 79, 80, 82, 83, 84, 85, 86],
                            "default": 1
                          },
                          "arp": {
                            "type": "object",
                            "title": "",
                            "properties": {
                              "priority_level": {
                                "type": "number",
                                "title": "ARP Priority Level (1-15)*",
                                "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                                "default": 2
                              },
                              "pre_emption_capability": {
                                "type": "number",
                                "title": "Capability*",
                                "enum": [1, 2],
                                "enumNames": ["Disabled", "Enabled"],
                                "default": 2
                              },
                              "pre_emption_vulnerability": {
                                "type": "number",
                                "title": "Vulnerability*",
                                "enum": [1, 2],
                                "enumNames": ["Disabled", "Enabled"],
                                "default": 2
                              }
                            }
                          },
                          "mbr": {
                            "type": "object",
                            "title": "",
                            "properties": {
                              "downlink": {
                                "type": "object",
                                "title": "",
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "title": "MBR Downlink"
                                  },
                                  "unit": {
                                    "type": "number",
                                    "title": "Unit",
                                    "enum": [0, 1, 2, 3, 4],
                                    "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
                                    "default": 1
                                  }
                                }
                              },
                              "uplink": {
                                "type": "object",
                                "title": "",
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "title": "MBR Uplink"
                                  },
                                  "unit": {
                                    "type": "number",
                                    "title": "Unit",
                                    "enum": [0, 1, 2, 3, 4],
                                    "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
                                    "default": 1
                                  }
                                }
                              }
                            }
                          },
                          "gbr": {
                            "type": "object",
                            "title": "",
                            "properties": {
                              "downlink": {
                                "type": "object",
                                "title": "",
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "title": "GBR Downlink"
                                  },
                                  "unit": {
                                    "type": "number",
                                    "title": "Unit",
                                    "enum": [0, 1, 2, 3, 4],
                                    "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
                                    "default": 1
                                  }
                                }
                              },
                              "uplink": {
                                "type": "object",
                                "title": "",
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "title": "GBR Uplink"
                                  },
                                  "unit": {
                                    "type": "number",
                                    "title": "Unit",
                                    "enum": [0, 1, 2, 3, 4],
                                    "enumNames": ["bps", "Kbps", "Mbps", "Gbps", "Tbps"],
                                    "default": 1
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

var uiSchema = {
  "title": {
    classNames: "col-xs-12"
  },
  "msisdn": {
    classNames: "col-xs-7"
  },
  "security": {
    classNames: "col-xs-12",
    "k": {
      classNames: "col-xs-7"
    },
    "amf": {
      classNames: "col-xs-5"
    },
    "op_type": {
      classNames: "col-xs-4"
    },
    "op_value": {
      classNames: "col-xs-8"
    }
  },
  "ambr": {
    classNames: "col-xs-12",
    "downlink": {
      classNames: "col-xs-6",
      "value": {
        classNames: "col-xs-8"
      },
      "unit": {
        classNames: "col-xs-4"
      }
    },
    "uplink": {
      classNames: "col-xs-6",
      "value": {
        classNames: "col-xs-8"
      },
      "unit": {
        classNames: "col-xs-4"
      }
    }
  },
  "slice": {
    classNames: "col-xs-12",
    "items": {
      "sst": {
        classNames: "col-xs-3",
        "ui:widget": "radio",
        "ui:options": { "inline": true }
      },
      "sd": {
        classNames: "col-xs-6"
      },
      "default_indicator": {
        classNames: "col-xs-3"
      },
      "session": {
        classNames: "col-xs-12",
        "items": {
          "name": {
            classNames: "col-xs-8"
          },
          "type": {
            classNames: "col-xs-4"
          },
          "lbo_roaming_allowed": {
            classNames: "col-xs-12"
          },
          "qos": {
            classNames: "col-xs-12",
            "index": {},
            "arp": {
              "priority_level": {},
              "pre_emption_capability": {
                classNames: "col-xs-6"
              },
              "pre_emption_vulnerability": {
                classNames: "col-xs-6"
              }
            }
          },
          "ambr": {
            classNames: "col-xs-12",
            "downlink": {
              "value": {
                classNames: "col-xs-8"
              },
              "unit": {
                classNames: "col-xs-4"
              }
            },
            "uplink": {
              "value": {
                classNames: "col-xs-8"
              },
              "unit": {
                classNames: "col-xs-4"
              }
            }
          },
          "ue": {
            classNames: "col-xs-12",
            "ipv4": {
              classNames: "col-xs-6"
            },
            "ipv6": {
              classNames: "col-xs-6"
            }
          },
          "smf": {
            classNames: "col-xs-12",
            "ipv4": {
              classNames: "col-xs-6"
            },
            "ipv6": {
              classNames: "col-xs-6"
            }
          },
          "pcc_rule": {
            classNames: "col-xs-12",
            "items": {
              "flow": {
                "items": {
                  "direction": {},
                  "description": {
                    "ui:help": "Hint: 5.4.2 Flow-Description in TS29.212"
                  }
                }
              },
              "qos": {
                "index": {},
                "arp": {
                  "priority_level": {
                    classNames: "col-xs-12"
                  },
                  "pre_emption_capability": {
                    classNames: "col-xs-6"
                  },
                  "pre_emption_vulnerability": {
                    classNames: "col-xs-6"
                  }
                },
                "mbr": {
                  "downlink": {
                    "value": {
                      classNames: "col-xs-8"
                    },
                    "unit": {
                      classNames: "col-xs-4"
                    }
                  },
                  "uplink": {
                    "value": {
                      classNames: "col-xs-8"
                    },
                    "unit": {
                      classNames: "col-xs-4"
                    }
                  }
                },
                "gbr": {
                  "downlink": {
                    "value": {
                      classNames: "col-xs-8"
                    },
                    "unit": {
                      classNames: "col-xs-4"
                    }
                  },
                  "uplink": {
                    "value": {
                      classNames: "col-xs-8"
                    },
                    "unit": {
                      classNames: "col-xs-4"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

var Edit = function (_Component) {
  (0, _inherits3.default)(Edit, _Component);

  function Edit(props) {
    (0, _classCallCheck3.default)(this, Edit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || (0, _getPrototypeOf2.default)(Edit)).call(this, props));

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  (0, _createClass3.default)(Edit, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }, {
    key: 'getStateFromProps',
    value: function getStateFromProps(props) {
      var action = props.action,
          width = props.width;

      var state = {
        schema: schema,
        uiSchema: uiSchema
      };

      if (action === 'update') {
        state = (0, _extends3.default)({}, state, {
          uiSchema: (0, _extends3.default)({}, uiSchema, {
            "title": {
              "ui:disabled": true
            }
          })
        });
      } else if (width !== _withWidth.SMALL) {
        state = (0, _extends3.default)({}, state, {
          uiSchema: (0, _extends3.default)({}, uiSchema, {
            "title": {
              "ui:autofocus": true
            }
          })
        });
      }

      return state;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          action = _props.action,
          formData = _props.formData,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onHide = _props.onHide,
          onSubmit = _props.onSubmit,
          onError = _props.onError;

      return _react2.default.createElement(_.Form, {
        visible: isLoading ? false : visible,
        title: action === 'update' ? 'Edit Profile' : 'Create Profile',
        schema: this.state.schema,
        uiSchema: this.state.uiSchema,
        formData: formData,
        isLoading: isLoading,
        validate: validate,
        onHide: onHide,
        onSubmit: onSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        }
      });
    }
  }]);

  return Edit;
}(_react.Component);

Edit.propTypes = {
  visible: _propTypes2.default.bool,
  action: _propTypes2.default.string,
  formData: _propTypes2.default.object,
  isLoading: _propTypes2.default.bool,
  validate: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onError: _propTypes2.default.func
};

exports.default = (0, _withWidth2.default)()(Edit);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Byb2ZpbGUvRWRpdC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJ3aXRoV2lkdGgiLCJTTUFMTCIsIkZvcm0iLCJzY2hlbWEiLCJ1aVNjaGVtYSIsImNsYXNzTmFtZXMiLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsImdldFN0YXRlRnJvbVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJhY3Rpb24iLCJ3aWR0aCIsInZpc2libGUiLCJmb3JtRGF0YSIsImlzTG9hZGluZyIsInZhbGlkYXRlIiwib25IaWRlIiwib25TdWJtaXQiLCJvbkVycm9yIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVM7Ozs7Ozs7QUFFVCxJQUFNO1dBQVMsQUFDSixBQUNUO1VBRmEsQUFFTCxBQUNSOzs7Y0FDVyxBQUNDLEFBQ1I7ZUFGTyxBQUVFLEFBQ1Q7a0JBSE8sQUFHSyxBQUNaO21CQUxVLEFBQ0gsQUFJTSxBQUVmO0FBTlMsQUFDUDs7Y0FLUSxBQUNBLEFBQ1I7ZUFGUSxBQUVDLEFBQ1Q7a0JBSFEsQUFHSSxBQUNaOztvQkFKUSxBQUlJLEFBQ0UsQUFFZDtBQUhZLEFBQ1Y7O2dCQUVPLEFBQ0MsQUFDUjtpQkFGTyxBQUVFLEFBQ1Q7cUJBSE8sQUFHTSxBQUNiO29CQUpPLEFBSUssQUFDWjttQkFMTyxBQUtJLEFBQ1g7O3FCQXBCUSxBQU9GLEFBT0MsQUFNSyxBQUNDLEFBSWpCO0FBTGdCLEFBQ1Y7QUFQSyxBQUNQO0FBUk0sQUFDUjs7ZUFpQlUsQUFDRCxBQUNUO2NBRlUsQUFFRixBQUNSOzs7a0JBQ08sQUFDSyxBQUNSO21CQUZHLEFBRU0sQUFDVDtzQkFIRyxBQUdTLEFBQ1o7cUJBSkcsQUFJUSxBQUNYOzt1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LEFBQ1gsQUFFTjs7VUFBQSxBQUFLLFFBQVEsTUFBQSxBQUFLLGtCQUhELEFBR2pCLEFBQWEsQUFBdUI7V0FDckM7Ozs7OzhDLEFBRXlCLFdBQVcsQUFDbkM7V0FBQSxBQUFLLFNBQVMsS0FBQSxBQUFLLGtCQUFuQixBQUFjLEFBQXVCLEFBQ3RDOzs7O3NDLEFBRWlCLE9BQU87VUFBQSxBQUVyQixTQUZxQixBQUluQixNQUptQixBQUVyQjtVQUZxQixBQUdyQixRQUhxQixBQUluQixNQUptQixBQUdyQixBQUdGOztVQUFJO2dCQUFRLEFBRVY7a0JBRkYsQUFBWSxBQUtaO0FBTFksQUFDVjs7VUFJRSxXQUFKLEFBQWUsVUFBVSxBQUN2QjsyQ0FBQSxBQUNLOytDQUNILEFBQ0s7OzZCQUhQLEFBRUUsQUFFVyxBQUNRLEFBSXRCO0FBTGMsQUFDUDtBQURGO0FBRkY7QUFISixhQVVPLElBQUEsQUFBSSxBQUFVLDRCQUFPLEFBQzFCOzJDQUFBLEFBQ0s7K0NBQ0gsQUFDSzs7OEJBSFAsQUFFRSxBQUVXLEFBQ1MsQUFJdkI7QUFMYyxBQUNQO0FBREY7QUFGRjtBQVNKOzthQUFBLEFBQU8sQUFDUjs7Ozs2QkFFUTttQkFVSCxLQVZHLEFBVUU7VUFWRixBQUVMLGlCQUZLLEFBRUw7VUFGSyxBQUdMLGdCQUhLLEFBR0w7VUFISyxBQUlMLGtCQUpLLEFBSUw7VUFKSyxBQUtMLG1CQUxLLEFBS0w7VUFMSyxBQU1MLGtCQU5LLEFBTUw7VUFOSyxBQU9MLGdCQVBLLEFBT0w7VUFQSyxBQVFMLGtCQVJLLEFBUUw7VUFSSyxBQVNMLGlCQVRLLEFBU0wsQUFHRjs7NkJBQ0UsQUFBQztpQkFDVSxZQUFBLEFBQVksUUFEdkIsQUFDK0IsQUFDN0I7ZUFBUSxXQUFELEFBQVksV0FBWixBQUF3QixpQkFGakMsQUFFa0QsQUFDaEQ7Z0JBQVEsS0FBQSxBQUFLLE1BSGYsQUFHcUIsQUFDbkI7a0JBQVUsS0FBQSxBQUFLLE1BSmpCLEFBSXVCLEFBQ3JCO2tCQUxGLEFBS1ksQUFDVjttQkFORixBQU1hLEFBQ1g7a0JBUEYsQUFPWSxBQUNWO2dCQVJGLEFBUVUsQUFDUjtrQkFURixBQVNZLEFBQ1Y7aUJBVkYsQUFVVztvQkFWWDtzQkFERixBQUNFLEFBWUg7QUFaRztBQUNFLE9BREY7Ozs7O0EsQUF2RWE7O0EsQUFBYixLLEFBQ0c7V0FDSSxvQkFEUSxBQUNFLEFBQ25CO1VBQVEsb0JBRlMsQUFFQyxBQUNsQjtZQUFVLG9CQUhPLEFBR0csQUFDcEI7YUFBVyxvQkFKTSxBQUlJLEFBQ3JCO1lBQVUsb0JBTE8sQUFLRyxBQUNwQjtVQUFRLG9CQU5TLEFBTUMsQUFDbEI7WUFBVSxvQkFQTyxBQU9HLEFBQ3BCO1dBQVMsb0IsQUFSUSxBQVFFLEFBNkV2QjtBQXJGcUIsQUFDakI7O2tCQW9GVywyQkFBZixBQUFlLEFBQVkiLCJmaWxlIjoiRWRpdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYWkvb3BlbjVncy93ZWJ1aSJ9