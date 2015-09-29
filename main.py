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
    return self.response.write(template.render(path, {}))


class ImageHandler(webapp2.RequestHandler):

  def get(self):
    name, ext = self.request.path.split(".")
    device_pixel_ratio = "1"
    if (self.request.headers.get('DPR', 1) > 1):
      device_pixel_ratio = "2"

    if ext == "png":
      self.response.headers['Content-Type'] = 'image/png'
    elif ext == "svg":
      self.response.headers['Content-Type'] = 'image/svg+xml'

    self.response.headers.add_header('Content-DPR', device_pixel_ratio);
    if ext == "png" and not "touch/" in name:
      path = os.path.join(os.path.dirname(__file__), 'static/' + name + '@' + device_pixel_ratio + '.' + ext)
    else:
      path = os.path.join(os.path.dirname(__file__), 'static/' + name + '.' + ext)
    return self.response.write(file(path, 'rb').read())


app = webapp2.WSGIApplication([
    ('/images/.*', ImageHandler),
    ('/', MainHandler),
], debug=True)
