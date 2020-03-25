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
/**
`<ft-connection-detail-item>`

An element that shows properties of a given FileThis connection resource.

@demo
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

import '@polymer/iron-label/iron-label.js';
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

        <div class="layout horizontal center">

            <!-- Label -->
            <iron-label style\$="width:{{nameWidth}}px; font-family: Arial, Helvetica, sans-serif; text-align:right;">
                [[name]]
            </iron-label>

            <!-- Spacer -->
            <div style="width:20px;"></div>

            <!-- Value -->
            <iron-label id="value" style="font-family:Arial;">
                [[value]]
            </iron-label>
        </div>
`,

  is: 'ft-connection-detail-item',

  properties:
  {
      /** The name of the property to be used as a right-justified label. */
      name:
      {
          type: String,
          value: ""
      },

      /** The value of the property displayed to the right of the label. */
      value:
      {
          type: String,
          value: ""
      },

      /** The width in pixels of the label. This will usually have the same value as other items in a list, so that the right-aligned labels line up vertically. */
      nameWidth:
      {
          type: String,
          value: "100"
      }
  }
});
