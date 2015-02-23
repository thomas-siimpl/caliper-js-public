/**
 *  @author Prashant Nayak
 *  @copyright @copyright ©2013 IMS Global Learning Consortium, Inc.  All Rights Reserved.
 *  @license For license information contact, info@imsglobal.org
 */

var _ = require('lodash-node');
var Entity = require('./caliperEntity');

/**
 * Represents Agent.  Analogous to a FOAF Agent
 * Agent's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @param {string} type type
 * @extends Entity
 */
function Agent(id, type) {

  Entity.call(this);

  this.setId(id);

  switch (type) {
  case "LIS_PERSON":
    this.setType("http://purl.imsglobal.org/caliper/v1/lis/Person");
    break;
  case "LIS_COURSE_SECTION":
    this.setType("http://purl.imsglobal.org/caliper/v1/lis/CourseSection");
    break;
  case "LIS_ORGANIZATION":
    this.setType("http://purl.imsglobal.org/caliper/v1/lis/Organization");
    break;
  case "SOFTWARE_APPLICATION":
    this.setType("http://purl.imsglobal.org/caliper/v1/SoftwareApplication");
    break;
  }

  this.setName(null);
  this.setDescription(null);
  this.setProperties({});
}

Agent.prototype = _.create(Entity.prototype);

module.exports = Agent;
