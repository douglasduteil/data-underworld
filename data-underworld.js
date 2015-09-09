#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')

workshopper({
    name     : 'data-underworld'
  , title    : '~ Data ~~ Underworld ~'
  , subtitle : ''
  , appDir   : __dirname
  , menu     : {
        bg : 'magenta'
    }
});
