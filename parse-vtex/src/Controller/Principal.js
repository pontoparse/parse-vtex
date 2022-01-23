const services = require('../Services/index');


Principal = async (req, res) => {

  const bodyData = req.body;
  const templateName = req.query.template;

   await services.setTrackingEvent.setTrackingEvent('event-log-calls', JSON.stringify(bodyData));
   await services.setTrackingEvent.setTrackingEvent('event-log-templates', templateName);
   
   res.status(200).json({message: 'success'});
   
}


module.exports = {
  Principal
}