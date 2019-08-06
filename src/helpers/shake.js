/* eslint-disable */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shake = function () {
  function Shake(options) {
    _classCallCheck(this, Shake);

    var threshold = options.threshold || 1,
        timeout = options.timeout || 1000;

    if (options) {
      this.options = {
        threshold: threshold,
        timeout: timeout
      };
    }

    this.hasDeviceMotion = 'ondevicemotion' in window;
    this.lastTime = null;
    this.lastX = null;
    this.lastY = null;
    this.lastZ = null;

    if (typeof CustomEvent === 'function') {
      this.event = new CustomEvent('shake', {
        bubbles: true,
        cancelable: true
      });
    } else {
      this.event = document.createEvent('Event');
      this.event.initEvent('shake', true, true);
    }
    this.handleDeviceMotion = this.handleDeviceMotion.bind(this);
  }

  _createClass(Shake, [{
    key: 'reset',
    value: function reset() {
      this.lastTime = new Date();
      this.lastX = null;
      this.lastY = null;
      this.lastZ = null;
    }
  }, {
    key: 'start',
    value: function start() {
      this.reset();
      if (this.hasDeviceMotion) {
        window.addEventListener('devicemotion', this.handleDeviceMotion, false);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      if (this.hasDeviceMotion) {
        window.removeEventListener('devicemotion', this.handleDeviceMotion, false);
      }
      this.reset();
    }
  }, {
    key: 'handleDeviceMotion',
    value: function handleDeviceMotion(e) {
      var current = e.accelerationIncludingGravity;
      var currentTime = void 0;
      var timeDifference = void 0;
      var deltaX = 0;
      var deltaY = 0;
      var deltaZ = 0;

      if (this.lastX === null && this.lastY === null && this.lastZ === null) {
        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;
        return;
      }

      deltaX = Math.abs(this.lastX - current.x);
      deltaY = Math.abs(this.lastY - current.y);
      deltaZ = Math.abs(this.lastZ - current.z);

      if (deltaX > this.options.threshold && deltaY > this.options.threshold || deltaX > this.options.threshold && deltaZ > this.options.threshold || deltaY > this.options.threshold && deltaZ > this.options.threshold) {
        currentTime = new Date();
        timeDifference = currentTime.getTime() - this.lastTime.getTime();

        if (timeDifference > this.options.timeout) {
          this.event.acceleration = { deltaX: deltaX, deltaY: deltaY, deltaZ: deltaZ };
          window.dispatchEvent(this.event);
          this.lastTime = new Date();
        }
      }

      this.lastX = current.x;
      this.lastY = current.y;
      this.lastZ = current.z;
    }
  }]);

  return Shake;
}();

exports.default = Shake;