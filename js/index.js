var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

    _this.state = {
      url: 'https://vinnu1.github.io/assets/fff_transparent.png',
      userId: '',
      password: '',
      classes: 'eye1 image rounded-circle img-thumbnail'
    };
    _this.eyesRotate = _this.eyesRotate.bind(_this);
    _this.eyesClosed = _this.eyesClosed.bind(_this);
    _this.login = _this.login.bind(_this);
    return _this;
  }

  _createClass(Image, [{
    key: 'login',
    value: function login() {
      console.log("Login:" + this.state.userId + " Password:" + this.state.password);
      if (this.state.userId === 'iservethebrightlord' && this.state.password === 'pass123') {
        this.setState({
          classes: "eye10 image rounded-circle img-thumbnail"
        });
      } else {
        this.setState({
          classes: "eye9 image rounded-circle img-thumbnail" });
      }
    }
  }, {
    key: 'eyesRotate',
    value: function eyesRotate(event) {
      var userid = event.target.value;
      var len = userid.length;
      var classe = "image rounded-circle img-thumbnail";
      if (len == 0) {
        classe = classe + " eye1";
      } else if (len < 6 && len >= 1) {
        classe = classe + " eye2";
      } else if (len < 11 && len >= 6) {
        classe = classe + " eye3";
      } else if (len < 16 && len >= 11) {
        classe = classe + " eye4";
      } else if (len < 26 && len >= 16) {
        classe = classe + " eye5";
      } else if (len < 32 && len >= 26) {
        classe = classe + " eye6";
      } else if (len >= 32) {
        classe = classe + " eye7";
      }
      this.setState({
        userId: userid,
        classes: classe
      });
    }
  }, {
    key: 'eyesClosed',
    value: function eyesClosed(event) {
      this.setState({
        classes: "eye8 image rounded-circle img-thumbnail",
        password: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('img', { className: this.state.classes, src: this.state.url }),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', placeholder: 'UserID', className: 'form-control form-control-lg', onChange: this.eyesRotate }),
        React.createElement('input', { type: 'password', placeholder: 'Password', className: 'form-control form-control-lg', onChange: this.eyesClosed }),
        React.createElement('br', null),
        React.createElement(
          'button',
          { className: 'btn btn-info', onClick: this.login },
          'Login'
        )
      );
    }
  }]);

  return Image;
}(React.Component);

ReactDOM.render(React.createElement(Image, null), document.getElementById("root"));