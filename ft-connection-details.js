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
`ft-connection-details`
An element that displays a number of details about a FileThis connection.

It would typically be used alongside a list of connections, showing details for the currently-selected one.

@demo
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import './ft-connection-detail-item.js';

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
                @apply --ft-connection-details;
            }
        </style>

        <div class="layout vertical center" style="background-color:white">

            <div class="layout vertical" style="padding-top:60px; padding-top: 40px;">

                <!-- Nickname -->
                <ft-connection-detail-item name="Nickname" value="[[connection.name]]" name-width="100"></ft-connection-detail-item>
                <div style="height:30px;"></div>

                <!-- Category -->
                <ft-connection-detail-item name="Category" value="[[_typeDisplayName(sources.type)]]" name-width="100"></ft-connection-detail-item>
                <div style="height:30px;"></div>

                <!-- Website -->
                <ft-connection-detail-item name="Website" value="[[sources.homePageUrl]]" name-width="100"></ft-connection-detail-item>
                <div style="height:30px;"></div>

                <!-- Phone Number -->
                <ft-connection-detail-item name="Phone Number" value="[[sources.phone]]" name-width="100"></ft-connection-detail-item>
                <div style="height:30px;"></div>

                <!-- Last Refresh -->
                <ft-connection-detail-item name="Last Refresh" value="[[connection.checkedDate]]" name-width="100"></ft-connection-detail-item>
                <div style="height:30px;"></div>

                <!-- Last Fetch -->
                <ft-connection-detail-item name="Last Fetch" value="[[connection.successDate]]" name-width="100"></ft-connection-detail-item>
                <div style="height:30px;"></div>

            </div>
        </div>
`,

  is: 'ft-connection-details',

  properties: {

      /** The connection resource whose properties are displayed. */
      connection:
      {
          type: Object,
          notify: true,
          observer: "_onConnectionChanged",
          value:
              {
                  id: "1",
                  accountId: "1",
                  attemptDate: "2016-12-15T01:11:48+00:00",
                  checkedDate: "2016-03-15T01:11:48+00:00",
                  documentCount: 1,
                  enabled: true,
                  fetchAll: false,
                  historicalPeriod: "30",
                  info: "",
                  logoUrl: "https://filethis.com/static/logos/72/Logo_FileThisHosted.png",
                  name: "Untitled",
                  period: "2d",
                  sourceId: "1",
                  state: "waiting",
                  successDate: "2016-03-15T01:11:48+00:00",
                  tries: 0,
                  validation: "done"
              },
      },

      /** The list of all sources. This is used to look up certain properties of the given connection's source for display. */
      sources:
      {
          type: Array,
          notify: true,
          value: []
      },

      /** This is the source resource corresponding to the given connection's "sourceId" property. */
      source:
      {
          type: Object,
          notify: true,
          value: null
      }
  },

  _onConnectionChanged: function(to, from)
  {
      this.source = this._findSource(this.connection);
  },

  _findSource: function(connection)
  {
      if (connection === null)
          return null;
      var sourceId = connection.sourceId;
      var count = this.sources.length;
      for (var index = 0; index < count; index++)
      {
          var source = this.sources[index];
          if (source.id === sourceId)
              return source;
      }
      return null;
  },

  _TYPE_FINANCIAL: "fina",
  _TYPE_UTILITY: "util",
  _TYPE_TEST: "test",

  _typeDisplayName: function(type)
  {
      switch (type)
      {
          case this._TYPE_FINANCIAL:
              return "Financial";
          case this._TYPE_UTILITY:
              return "Utility";
          case this._TYPE_TEST:
              return "Test";
          default:
              return "";
      }
  }
});
