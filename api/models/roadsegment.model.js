
const Sequelize = require('sequelize');

var sequelize = require('../utils/config');

var roadSegment = sequelize.define('RoadSegment', {
	idRoadSegment : { 
		type : Sequelize.STRING(100), 
        primaryKey: true,
	},
	type: { 
		type: Sequelize.STRING,
		defaultValue: "RoadSegment"
	},
	name : {
		type : Sequelize.STRING,
		allowNull: false
    },
    alternateName:{
        type: Sequelize.STRING
    },
    location:{
		type: Sequelize.TEXT,
		allowNull: false
    },
    refRoad:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    startPoint:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    endPoint:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    totalLaneNumber:{
        type: Sequelize.INTEGER
    },
    maximumAllowedSpeed:{
        type: Sequelize.NUMBER
    },
    minimumAllowedSpeed:{
        type: Sequelize.NUMBER
    },
	dateCreated : { 
		type: Sequelize.DATE, 
		defaultValue: Sequelize.NOW
	},
	dateModified : { 
		type: Sequelize.DATE, 
		defaultValue: Sequelize.NOW 
	},
	status : { 
		type: Sequelize.CHAR(1),
		defaultValue: "1"
	}
});
module.exports = roadSegment;