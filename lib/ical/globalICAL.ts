/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */

/* istanbul ignore next */
/* jshint ignore:start */
if (typeof module === 'object') {
  // CommonJS, where exports may be different each time.
  var ICAL = module.exports;
} else if (typeof ICAL !== 'object') {/* istanbul ignore next */
  /** @ignore */
  this.ICAL = {};
}
/* jshint ignore:end */
