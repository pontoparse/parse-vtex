const sendMessageWhatsApp = require('../Services/sendMessageWhatsApp');
const getResourceService = require('../Services/getResourceService');
const setResourceService = require('../Services/setResourceService');
const setTrackingEvent = require('../Services/setTrackingEvent');
const setResourceCronService = require('../Services/setResourceCronService');

const getResourceAll = require('../Services/getResourceAll');
const deleteResourceById = require('../Services/deleteResourceById');
const getResourceById = require('../Services/getResourceById');




module.exports = {
  sendMessageWhatsApp,
  getResourceService,
  setResourceService,
  setTrackingEvent,
  setResourceCronService,
  getResourceAll,
  deleteResourceById,
  getResourceById

}