/*
Copyright 2018 FileThis, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* ft-connection-details element demo */
/* Imports */
/**

An element that shows properties of a given FileThis connection resource

@demo
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import '../ft-connection-details.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer
({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
            }
        </style>

        <div class="layout vertical center">
            <ft-connection-details id="details" style="width:400px; height: 293px; border: 1px solid #DDD;"></ft-connection-details>
        </div>
`,

  is: 'demo-fixture',

  properties:
  {
  },

  ready: function()
  {
      this._loadFakeSources();
  },

  _loadFakeSources: function()
  {
      var path = "fake-sources.json";

      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.overrideMimeType("application/json");
      xmlHttpRequest.open('GET', path, true);
      xmlHttpRequest.onreadystatechange = function()
      {
          if (xmlHttpRequest.readyState === 4 &&
              xmlHttpRequest.status === 200)
          {
              var sources = JSON.parse(xmlHttpRequest.responseText);
              details.sources = sources;

              this._loadFakeConnection()
          }
      }.bind(this);
      xmlHttpRequest.send();
  },

  _loadFakeConnection: function()
  {
      var path = "fake-connection.json";

      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.overrideMimeType("application/json");
      xmlHttpRequest.open('GET', path, true);
      xmlHttpRequest.onreadystatechange = function()
      {
          if (xmlHttpRequest.readyState === 4 &&
              xmlHttpRequest.status === 200)
          {
              var connection = JSON.parse(xmlHttpRequest.responseText);
              details.connection = connection;
          }
      }.bind(this);
      xmlHttpRequest.send();
  }
});
