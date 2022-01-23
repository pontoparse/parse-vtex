module.exports = {

  brota: {
    notification: 'https://takebroadcast.cs.blip.ai/api/v1/Notification',
    commands: 'https://brotacompany.http.msging.net/commands'
  },
  headers: {
    key1: '',
    key2: '',
    authBlip: '',
    authBlip2: process.env['apikey']
  },
  payloadTemplate: {
    telephone: '',
    namespace: '',
    template: '',
    params: {},
    flow_id: '',
    state_id: '',
    trackOrigin: true
  },
  configHeadersNofitication: {
    headers: {
      'Content-Type': 'application/json',
      'identifier': '',
      'accessKey': ''
    }

  }, configHeadersBlip: {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ''

    }
  },
  configHeaders: {
    headers: {
      'Content-Type': 'application/json',
      'X-VTEX-API-AppToken': '',
      'X-VTEX-API-AppKey': ''

    }
  },
  messageTemplate: [
    {
      "state": "",
      "template": ""
    }
  ]

}
