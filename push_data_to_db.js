// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Copyright (c) 2018 Alexandre Storelli
var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var food_arr = [];

var db = mongojs("mongodb://yoda:ellehacks2020@ds363118.mlab.com:63118/ellehacks2020", ["item_info"]);

const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))




 var chicken = new Object();
   chicken.name = "chicken";
   chicken.price  = 9.6;
   chicken.co2_in_kg = 6.9;
   chicken.p_material = 'foam';
   chicken.recyclable = false;
   chicken.eco_score = 2;
   chicken.recommendation = '';
   chicken.id = 1;

 

 var beef = new Object();
   beef.name = "beef";
   beef.price  = 11.32;
   beef.co2_in_kg = 8;
   beef.p_material = 'foam';
   beef.recyclable = false;
   beef.eco_score = 8;
   beef.recommendation = chicken;
   beef.id = 2;


 var pringles = new Object();
   pringles.name = "pringles";
   pringles.price  = 1.52;
   pringles.co2_in_kg = 0.18;
   pringles.p_material = 'paper';
   pringles.recyclable = true;
   pringles.eco_score = 1;
   pringles.recommendation = '';
   pringles.id = 3;


 
 var lays_chips = new Object();
   lays_chips.name = "lays chips";
   lays_chips.price  = 1.25;
   lays_chips.co2_in_kg = 0.18;
   lays_chips.p_material = 'plastic';
   lays_chips.recyclable = false;
   lays_chips.eco_score = 1;
   lays_chips.recommendation = pringles;
   lays_chips.id = 4;



 var atlantic_salmon = new Object();
   atlantic_salmon.name = "atlantic salmon";
   atlantic_salmon.price  = 17.99;
   atlantic_salmon.co2_in_kg = 2.5;
   atlantic_salmon.p_material = 'plastic';
   atlantic_salmon.recyclable = false;
   atlantic_salmon.eco_score = 3;
   atlantic_salmon.recommendation = '';
   atlantic_salmon.id = 5;


  
   var tuna = new Object();
   tuna.name = "tuna";
   tuna.price  = 9.98;
   tuna.co2_in_kg = 6.1;
   tuna.p_material = 'aluminum';
   tuna.recyclable = true;
   tuna.eco_score = 6;
   tuna.recommendation = atlantic_salmon;
   tuna.id = 6;

   var flax = new Object();
   flax.name = "flax";
   flax.price  = 1.99;
   flax.co2_in_kg = 0.02;
   flax.p_material = 'plastic';
   flax.recyclable = false;
   flax.eco_score = 2;
   flax.recommendation = '';
   flax.id = 7;

   var eggs = new Object();
   eggs.name = "eggs";
   eggs.price  = 4.25;
   eggs.co2_in_kg = 4.8;
   eggs.p_material = 'plastic';
   eggs.recyclable = true;
   eggs.eco_score = 4;
   eggs.recommendation = flax;
   eggs.id = 8;

   var turkey_bacon = new Object();
   turkey_bacon.name = "turkey bacon";
   turkey_bacon.price  = 6.99;
   turkey_bacon.co2_in_kg = 10.9;
   turkey_bacon.p_material = 'plastic';
   turkey_bacon.recyclable = false;
   turkey_bacon.eco_score = 5;
   turkey_bacon.recommendation = '';
   turkey_bacon.id = 9;

   var pork_bacon = new Object();
   pork_bacon.name = "pork bacon";
   pork_bacon.price  = 5.99;
   pork_bacon.co2_in_kg = 12.1;
   pork_bacon.p_material = 'plastic';
   pork_bacon.recyclable = false;
   pork_bacon.eco_score = 5;
   pork_bacon.recommendation = turkey_bacon;
   pork_bacon.id = 10;


food_arr.push(chicken, beef, pringles, lays_chips, atlantic_salmon, tuna, flax, eggs, turkey_bacon, pork_bacon);
console.log(food_arr);
db.item_info.save(food_arr)





