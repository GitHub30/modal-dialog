(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ModalDialog = require('./view/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.modalDialog = new _ModalDialog2.default();

},{"./view/ModalDialog":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by inoue on 16/10/13.
 */

var ModalDialog = function () {
    function ModalDialog() {
        var _this = this;

        _classCallCheck(this, ModalDialog);

        this.rootElement = document.querySelector('.js-modal');
        this.dialogElements = document.querySelectorAll('.js-modal_dialog');

        this.rootElement.addEventListener('click', function () {
            _this.close();
        });

        this.dialogElements.forEach(function (dialogElement) {
            dialogElement.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });
    }

    _createClass(ModalDialog, [{
        key: 'isOpen',
        value: function isOpen() {
            return this.rootElement.classList.contains('modal--visible');
        }
    }, {
        key: 'open',
        value: function open(dialogElement) {
            ModalDialog.lockScroll(true);
            this.rootElement.classList.add('modal--visible');
            dialogElement.classList.add('modal_dialog--visible');
        }
    }, {
        key: 'close',
        value: function close() {
            this.dialogElements.forEach(function (dialogElement) {
                dialogElement.classList.remove('modal_dialog--visible');
            });
            this.rootElement.classList.remove('modal--visible');
            ModalDialog.lockScroll(false);
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.isOpen()) {
                this.close();
            } else {
                this.close();
            }
        }
    }], [{
        key: 'lockScroll',
        value: function lockScroll(isLock) {
            document.body.style.overflowY = isLock ? 'hidden' : 'auto';
        }
    }]);

    return ModalDialog;
}();

exports.default = ModalDialog;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb3JlLmpzIiwic3JjL3NjcmlwdHMvdmlldy9Nb2RhbERpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLE9BQU8sV0FBUCxHQUFxQiwyQkFBckI7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztJQUlxQixXO0FBQ2pCLDJCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsYUFBSyxXQUFMLEdBQW1CLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFuQjtBQUNBLGFBQUssY0FBTCxHQUFzQixTQUFTLGdCQUFULENBQTBCLGtCQUExQixDQUF0Qjs7QUFFQSxhQUFLLFdBQUwsQ0FBaUIsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDN0Msa0JBQUssS0FBTDtBQUNILFNBRkQ7O0FBSUEsYUFBSyxjQUFMLENBQW9CLE9BQXBCLENBQTRCLFVBQUMsYUFBRCxFQUFtQjtBQUMzQywwQkFBYyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFDLENBQUQsRUFBTztBQUMzQyxrQkFBRSxlQUFGO0FBQ0gsYUFGRDtBQUdILFNBSkQ7QUFLSDs7OztpQ0FFUTtBQUNMLG1CQUFPLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQUEyQixRQUEzQixDQUFvQyxnQkFBcEMsQ0FBUDtBQUNIOzs7NkJBRUksYSxFQUFlO0FBQ2hCLHdCQUFZLFVBQVosQ0FBdUIsSUFBdkI7QUFDQSxpQkFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLGdCQUEvQjtBQUNBLDBCQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsdUJBQTVCO0FBQ0g7OztnQ0FFTztBQUNKLGlCQUFLLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBNEIsVUFBQyxhQUFELEVBQW1CO0FBQzNDLDhCQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsdUJBQS9CO0FBQ0gsYUFGRDtBQUdBLGlCQUFLLFdBQUwsQ0FBaUIsU0FBakIsQ0FBMkIsTUFBM0IsQ0FBa0MsZ0JBQWxDO0FBQ0Esd0JBQVksVUFBWixDQUF1QixLQUF2QjtBQUNIOzs7aUNBRVE7QUFDTCxnQkFBSSxLQUFLLE1BQUwsRUFBSixFQUFtQjtBQUNmLHFCQUFLLEtBQUw7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSyxLQUFMO0FBQ0g7QUFDSjs7O21DQUVpQixNLEVBQVE7QUFDdEIscUJBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsU0FBcEIsR0FBZ0MsU0FBUyxRQUFULEdBQW9CLE1BQXBEO0FBQ0g7Ozs7OztrQkE1Q2dCLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vdmlldy9Nb2RhbERpYWxvZyc7XG5cbndpbmRvdy5tb2RhbERpYWxvZyA9IG5ldyBNb2RhbERpYWxvZygpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBpbm91ZSBvbiAxNi8xMC8xMy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbW9kYWwnKTtcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1tb2RhbF9kaWFsb2cnKTtcblxuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnRzLmZvckVhY2goKGRpYWxvZ0VsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZ0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS12aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgb3BlbihkaWFsb2dFbGVtZW50KSB7XG4gICAgICAgIE1vZGFsRGlhbG9nLmxvY2tTY3JvbGwodHJ1ZSk7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLXZpc2libGUnKTtcbiAgICAgICAgZGlhbG9nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9kaWFsb2ctLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50cy5mb3JFYWNoKChkaWFsb2dFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBkaWFsb2dFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX2RpYWxvZy0tdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tdmlzaWJsZScpO1xuICAgICAgICBNb2RhbERpYWxvZy5sb2NrU2Nyb2xsKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9ja1Njcm9sbChpc0xvY2spIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBpc0xvY2sgPyAnaGlkZGVuJyA6ICdhdXRvJztcbiAgICB9XG59Il19
