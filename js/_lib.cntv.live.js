"use strict";

function setH5Str(inputStr) {
    function _0x40fe15(_0x5a9643, _0xd017ad) {
        var _0x2f8d9c = (65535 & _0x5a9643) + (65535 & _0xd017ad);
        var _0x3ec3c0 = (_0x5a9643 >> 16) + (_0xd017ad >> 16) + (_0x2f8d9c >> 16);
        return _0x3ec3c0 << 16 | 65535 & _0x2f8d9c;
    }

    function _0x15f4df(_0x4428e8, _0x557134) {
        return _0x4428e8 << _0x557134 | _0x4428e8 >>> 32 - _0x557134;
    }

    function _0x4299a6(_0x291970, _0x2bb2a6, _0x1c883d, _0x2d9554, _0x2ba4b1, _0xacbca3) {
        return _0x40fe15(_0x15f4df(_0x40fe15(_0x40fe15(_0x2bb2a6, _0x291970), _0x40fe15(_0x2d9554, _0xacbca3)), _0x2ba4b1), _0x1c883d);
    }

    function _0x9063c4(_0x4d294a, _0x4dad24, _0x5f3fd9, _0x35bb55, _0x244abb, _0x5ee604, _0x319d8c) {
        return _0x4299a6(_0x4dad24 & _0x5f3fd9 | ~_0x4dad24 & _0x35bb55, _0x4d294a, _0x4dad24, _0x244abb, _0x5ee604, _0x319d8c);
    }

    function _0xe4d841(_0x44b59, _0x12258e, _0x354492, _0x402689, _0x2d60e6, _0x21154a, _0x5ef56f) {
        return _0x4299a6(_0x12258e & _0x402689 | _0x354492 & ~_0x402689, _0x44b59, _0x12258e, _0x2d60e6, _0x21154a, _0x5ef56f);
    }

    function _0x2b7921(_0x257d64, _0x57e029, _0x5c41dd, _0x39139, _0x2f15ca, _0x3995a2, _0x139334) {
        return _0x4299a6(_0x57e029 ^ _0x5c41dd ^ _0x39139, _0x257d64, _0x57e029, _0x2f15ca, _0x3995a2, _0x139334);
    }

    function _0x55488d(_0x5953d3, _0x155874, _0x4d68fc, _0x3fb337, _0x45c3ec, _0x2fc081, _0x308e70) {
        return _0x4299a6(_0x4d68fc ^ (_0x155874 | ~_0x3fb337), _0x5953d3, _0x155874, _0x45c3ec, _0x2fc081, _0x308e70);
    }

    function _0x9e36fc(_0x36e96d, _0x5974bf) {
        _0x36e96d[_0x5974bf >> 5] |= 128 << _0x5974bf % 32;
        _0x36e96d[(_0x5974bf + 64 >>> 9 << 4) + 14] = _0x5974bf;
        var _0x4b5343;
        var _0x177957;
        var _0x4460f4;
        var _0x103679;
        var _0x2e6fd1;
        var _0xa1432a = 1732584193;
        var _0x247c23 = -271733879;
        var _0x5cfb87 = -1732584194;
        var _0xfbd0d2 = 271733878;
        for (_0x4b5343 = 0; _0x4b5343 < _0x36e96d.length; _0x4b5343 += 16) {
            _0x177957 = _0xa1432a;
            _0x4460f4 = _0x247c23;
            _0x103679 = _0x5cfb87;
            _0x2e6fd1 = _0xfbd0d2;
            _0xa1432a = _0x9063c4(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343], 7, -680876936);
            _0xfbd0d2 = _0x9063c4(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 1], 12, -389564586);
            _0x5cfb87 = _0x9063c4(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 2], 17, 606105819);
            _0x247c23 = _0x9063c4(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 3], 22, -1044525330);
            _0xa1432a = _0x9063c4(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 4], 7, -176418897);
            _0xfbd0d2 = _0x9063c4(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 5], 12, 1200080426);
            _0x5cfb87 = _0x9063c4(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 6], 17, -1473231341);
            _0x247c23 = _0x9063c4(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 7], 22, -45705983);
            _0xa1432a = _0x9063c4(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 8], 7, 1770035416);
            _0xfbd0d2 = _0x9063c4(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 9], 12, -1958414417);
            _0x5cfb87 = _0x9063c4(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 10], 17, -42063);
            _0x247c23 = _0x9063c4(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 11], 22, -1990404162);
            _0xa1432a = _0x9063c4(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 12], 7, 1804603682);
            _0xfbd0d2 = _0x9063c4(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 13], 12, -40341101);
            _0x5cfb87 = _0x9063c4(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 14], 17, -1502002290);
            _0x247c23 = _0x9063c4(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 15], 22, 1236535329);
            _0xa1432a = _0xe4d841(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 1], 5, -165796510);
            _0xfbd0d2 = _0xe4d841(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 6], 9, -1069501632);
            _0x5cfb87 = _0xe4d841(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 11], 14, 643717713);
            _0x247c23 = _0xe4d841(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343], 20, -373897302);
            _0xa1432a = _0xe4d841(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 5], 5, -701558691);
            _0xfbd0d2 = _0xe4d841(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 10], 9, 38016083);
            _0x5cfb87 = _0xe4d841(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 15], 14, -660478335);
            _0x247c23 = _0xe4d841(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 4], 20, -405537848);
            _0xa1432a = _0xe4d841(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 9], 5, 568446438);
            _0xfbd0d2 = _0xe4d841(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 14], 9, -1019803690);
            _0x5cfb87 = _0xe4d841(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 3], 14, -187363961);
            _0x247c23 = _0xe4d841(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 8], 20, 1163531501);
            _0xa1432a = _0xe4d841(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 13], 5, -1444681467);
            _0xfbd0d2 = _0xe4d841(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 2], 9, -51403784);
            _0x5cfb87 = _0xe4d841(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 7], 14, 1735328473);
            _0x247c23 = _0xe4d841(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 12], 20, -1926607734);
            _0xa1432a = _0x2b7921(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 5], 4, -378558);
            _0xfbd0d2 = _0x2b7921(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 8], 11, -2022574463);
            _0x5cfb87 = _0x2b7921(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 11], 16, 1839030562);
            _0x247c23 = _0x2b7921(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 14], 23, -35309556);
            _0xa1432a = _0x2b7921(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 1], 4, -1530992060);
            _0xfbd0d2 = _0x2b7921(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 4], 11, 1272893353);
            _0x5cfb87 = _0x2b7921(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 7], 16, -155497632);
            _0x247c23 = _0x2b7921(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 10], 23, -1094730640);
            _0xa1432a = _0x2b7921(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 13], 4, 681279174);
            _0xfbd0d2 = _0x2b7921(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343], 11, -358537222);
            _0x5cfb87 = _0x2b7921(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 3], 16, -722521979);
            _0x247c23 = _0x2b7921(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 6], 23, 76029189);
            _0xa1432a = _0x2b7921(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 9], 4, -640364487);
            _0xfbd0d2 = _0x2b7921(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 12], 11, -421815835);
            _0x5cfb87 = _0x2b7921(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 15], 16, 530742520);
            _0x247c23 = _0x2b7921(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 2], 23, -995338651);
            _0xa1432a = _0x55488d(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343], 6, -198630844);
            _0xfbd0d2 = _0x55488d(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 7], 10, 1126891415);
            _0x5cfb87 = _0x55488d(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 14], 15, -1416354905);
            _0x247c23 = _0x55488d(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 5], 21, -57434055);
            _0xa1432a = _0x55488d(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 12], 6, 1700485571);
            _0xfbd0d2 = _0x55488d(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 3], 10, -1894986606);
            _0x5cfb87 = _0x55488d(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 10], 15, -1051523);
            _0x247c23 = _0x55488d(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 1], 21, -2054922799);
            _0xa1432a = _0x55488d(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 8], 6, 1873313359);
            _0xfbd0d2 = _0x55488d(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 15], 10, -30611744);
            _0x5cfb87 = _0x55488d(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 6], 15, -1560198380);
            _0x247c23 = _0x55488d(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 13], 21, 1309151649);
            _0xa1432a = _0x55488d(_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2, _0x36e96d[_0x4b5343 + 4], 6, -145523070);
            _0xfbd0d2 = _0x55488d(_0xfbd0d2, _0xa1432a, _0x247c23, _0x5cfb87, _0x36e96d[_0x4b5343 + 11], 10, -1120210379);
            _0x5cfb87 = _0x55488d(_0x5cfb87, _0xfbd0d2, _0xa1432a, _0x247c23, _0x36e96d[_0x4b5343 + 2], 15, 718787259);
            _0x247c23 = _0x55488d(_0x247c23, _0x5cfb87, _0xfbd0d2, _0xa1432a, _0x36e96d[_0x4b5343 + 9], 21, -343485551);
            _0xa1432a = _0x40fe15(_0xa1432a, _0x177957);
            _0x247c23 = _0x40fe15(_0x247c23, _0x4460f4);
            _0x5cfb87 = _0x40fe15(_0x5cfb87, _0x103679);
            _0xfbd0d2 = _0x40fe15(_0xfbd0d2, _0x2e6fd1);
        }
        return [_0xa1432a, _0x247c23, _0x5cfb87, _0xfbd0d2];
    }

    function _0x474399(_0x59408d) {
        var _0x3f20bd;
        var _0x230126 = "";
        for (_0x3f20bd = 0; _0x3f20bd < 32 * _0x59408d.length; _0x3f20bd += 8) {
            _0x230126 += String.fromCharCode(_0x59408d[_0x3f20bd >> 5] >>> _0x3f20bd % 32 & 255);
        }
        return _0x230126;
    }

    function _0x58cf0b(_0x5320fd) {
        var _0x34b4ab;
        var _0x20f031 = [];
        for (_0x20f031[(_0x5320fd.length >> 2) - 1] = undefined, _0x34b4ab = 0; _0x34b4ab < _0x20f031.length; _0x34b4ab += 1) {
            _0x20f031[_0x34b4ab] = 0;
        }
        for (_0x34b4ab = 0; _0x34b4ab < 8 * _0x5320fd.length; _0x34b4ab += 8) {
            _0x20f031[_0x34b4ab >> 5] |= (255 & _0x5320fd.charCodeAt(_0x34b4ab / 8)) << _0x34b4ab % 32;
        }
        return _0x20f031;
    }

    function _0x538feb(_0x452384) {
        return _0x474399(_0x9e36fc(_0x58cf0b(_0x452384), 8 * _0x452384.length));
    }

    function _0x445ef4(_0x3db039, _0xa97f2c) {
        var _0x111dd7;
        var _0x13267f;
        var _0x4f9b31 = _0x58cf0b(_0x3db039);
        var _0x4aa321 = [];
        var _0x28b715 = [];
        for (_0x4aa321[15] = _0x28b715[15] = undefined, _0x4f9b31.length > 16 && (_0x4f9b31 = _0x9e36fc(_0x4f9b31, 8 * _0x3db039.length)), _0x111dd7 = 0; 16 > _0x111dd7; _0x111dd7 += 1) {
            _0x4aa321[_0x111dd7] = 909522486 ^ _0x4f9b31[_0x111dd7];
            _0x28b715[_0x111dd7] = 1549556828 ^ _0x4f9b31[_0x111dd7];
        }
        _0x13267f = _0x9e36fc(_0x4aa321.concat(_0x58cf0b(_0xa97f2c)), 512 + 8 * _0xa97f2c.length);
        return _0x474399(_0x9e36fc(_0x28b715.concat(_0x13267f), 640));
    }

    function _0x2acaa8(_0xc47959) {
        var _0x4e7ed5;
        var _0x51c2ae;
        var _0x4d44da = "0123456789abcdef";
        var _0x1ebc07 = "";
        for (_0x51c2ae = 0; _0x51c2ae < _0xc47959.length; _0x51c2ae += 1) {
            _0x4e7ed5 = _0xc47959.charCodeAt(_0x51c2ae);
            _0x1ebc07 += _0x4d44da.charAt(_0x4e7ed5 >>> 4 & 15) + _0x4d44da.charAt(15 & _0x4e7ed5);
        }
        return _0x1ebc07;
    }

    function _0x121bf0(_0x631fbf) {
        return unescape(encodeURIComponent(_0x631fbf));
    }

    function _0x218f09(_0x3f20d0) {
        return _0x538feb(_0x121bf0(_0x3f20d0));
    }

    function _0x344538(_0x3272ca) {
        return _0x2acaa8(_0x218f09(_0x3272ca));
    }

    function _0x368c5d(_0x5615f1, _0x33dcea) {
        return _0x445ef4(_0x121bf0(_0x5615f1), _0x121bf0(_0x33dcea));
    }

    function _0x689745(_0x598b54, _0x178048) {
        return _0x2acaa8(_0x368c5d(_0x598b54, _0x178048));
    }

    function _0x42da5a(_0x5112c3, _0xccc72d, _0x2b086d) {
        return _0xccc72d ? _0x2b086d ? _0x368c5d(_0xccc72d, _0x5112c3) : _0x689745(_0xccc72d, _0x5112c3) : _0x2b086d ? _0x218f09(_0x5112c3) : _0x344538(_0x5112c3);
    }

    return _0x42da5a(inputStr);
}

$.exports = {
    setH5Str,
}

// 调用示例
// const result = setH5Str("example input");
// console.log(result);
