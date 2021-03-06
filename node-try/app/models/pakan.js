


'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');
var UserModel = require('../models/user');




// 1: The model schema.
var modelDefinition = {
    jenis_pakan: {
        type: Sequelize.STRING
    },

    nama_pakan: {
        type: Sequelize.STRING
    },


    jumlah_pakan: {
        type: Sequelize.INTEGER
    },

    kandungan: {
        type: Sequelize.STRING
    }

};

// 3: Define the User model.
var PakanModel = db.define('pakan', modelDefinition );



module.exports = PakanModel;
