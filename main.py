#!/usr/bin/env python
#
# Copyright 2015, 2016 Intel Corporation.
# Copyright 2015 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

__author__ = 'Eric Bidelman <ebidel@> and Kenneth Christiansen'

import os
import sys
import webapp2
import logging

from google.appengine.ext.webapp import template

import http2push as http2


class MainHandler(http2.PushHandler):

  @http2.push('push_manifest.json')
  def get(self):
    path = os.path.join(os.path.dirname(__file__), 'static/index.html')
#    self.response.headers.add_header('Accept-CH', 'DPR')
    return self.response.write(file(path, 'rb').read())


class ImageHandler(webapp2.RequestHandler):

  def get(self):
    device_pixel_ratio = "1"
    if (self.request.headers.get('DPR', 1) > 1):
      device_pixel_ratio = "2"
    self.response.headers.add_header('Content-DPR', device_pixel_ratio);

    if '.' in os.path.basename(self.request.path):
      name, ext = self.request.path.split(".");

      if ext == "png" and not "touch/" in name:
        path = os.path.join(os.path.dirname(__file__), 'static/' + name + '@' + device_pixel_ratio + '.' + ext)
      else:
        path = os.path.join(os.path.dirname(__file__), 'static/' + name + '.' + ext)

      if os.path.exists(path):
        if ext == "png":
          self.response.headers['Content-Type'] = 'image/png'
        elif ext == "svg":
          self.response.headers['Content-Type'] = 'image/svg+xml'
        return self.response.write(file(path, 'rb').read())

    path = os.path.join(os.path.dirname(__file__), 'static/' + os.path.dirname(self.request.path));
    self.response.out.write("<ul>");
    for filename in os.listdir(path):
      self.response.out.write("<li>" + filename + "</li>")
    self.response.out.write("</ul>");

app = webapp2.WSGIApplication([
    ('/images/.*', ImageHandler),
    ('/', MainHandler),
], debug=True)
