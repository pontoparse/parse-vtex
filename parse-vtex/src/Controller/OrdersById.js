const axios = require('axios')
const config = require('../config/index');
const services = require('../Services/index');
const adapters = require('../Adapter/index');

OrdersById = async (req, res) => {

  const ordersId = req.params.id;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');

    if (parts.length == 2) {
        var scheme = parts[0],
            credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
            token = credentials;
        }
    } else {
        return res.status(401).json({message: 'Você não possui acesso ao recurso solicitado'});
    }
  } else {
    return res.status(401).json({message: 'Você precisa passar um Header e um token'});
  }

  try {

    if (ordersId === '1202860243834-01') {

      const client = {
        "orderId": "1202860243834-01",
        "sequence": "574097",
        "marketplaceOrderId": "",
        "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=leggingbrasil",
        "sellerOrderId": "00-1202860243834-01",
        "origin": "Marketplace",
        "affiliateId": "",
        "salesChannel": "1",
        "merchantName": null,
        "status": "ready-for-handling",
        "statusDescription": "Pronto para o manuseio",
        "value": 18327,
        "creationDate": "2022-01-12T22:04:02.9530699+00:00",
        "lastChange": "2022-01-12T22:34:26.3706060+00:00",
        "orderGroup": "1202860243834",
        "totals": [
          {
            "id": "Items",
            "name": "Total dos Itens",
            "value": 23950
          },
          {
            "id": "Discounts",
            "name": "Total dos Descontos",
            "value": -7950
          },
          {
            "id": "Shipping",
            "name": "Total do Frete",
            "value": 2327
          },
          {
            "id": "Tax",
            "name": "Total da Taxa",
            "value": 0
          }
        ],
        "items": [
          {
            "uniqueId": "B5FC6BDCBDFF4BD6819895B6F576D239",
            "id": "1685",
            "productId": "489",
            "ean": "7881230003640",
            "lockId": "00-1202860243834-01",
            "itemAttachment": {
              "content": {},
              "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "1",
            "name": "Calça Legging Estampa Digital Carpet Marine G",
            "refId": "1685",
            "price": 3990,
            "listPrice": 5873,
            "manualPrice": null,
            "priceTags": [
              {
                "name": "DISCOUNT@MARKETPLACE",
                "value": -790,
                "isPercentual": false,
                "identifier": "d344e544-ce70-4a6d-af78-7be401cd0e28",
                "rawValue": -7.90000,
                "rate": null,
                "jurisCode": null,
                "jurisType": null,
                "jurisName": null
              }
            ],
            "imageUrl": "https://leggingbrasil.vteximg.com.br/arquivos/ids/156323-105-135/LBR-408.jpg?v=637640756080900000",
            "detailUrl": "/calca-legging-estampa-digital-carpet-marine-489/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "1685",
            "priceValidUntil": null,
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
              "brandName": "LEGGING BRASIL",
              "brandId": "2000001",
              "categoriesIds": "/2/7/",
              "categories": [
                {
                  "id": 7,
                  "name": "Estampada"
                },
                {
                  "id": 2,
                  "name": "Legging"
                }
              ],
              "productClusterId": "144,147,148,149,150,151,152,153,154,155,157,160,161",
              "commercialConditionId": "1",
              "dimension": {
                "cubicweight": 0.0000,
                "height": 2.0000,
                "length": 12.0000,
                "weight": 100.0000,
                "width": 10.0000
              },
              "offeringInfo": null,
              "offeringType": null,
              "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 3200,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
              "sellingPrices": [
                {
                  "value": 3200,
                  "quantity": 1
                }
              ],
              "calculatedSellingPrice": 3200,
              "total": 3200
            },
            "taxCode": "",
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": 3990
          },
          {
            "uniqueId": "74DA0C5266DA47E89DACE5D306CA6B95",
            "id": "1481",
            "productId": "453",
            "ean": "7881230002391",
            "lockId": "00-1202860243834-01",
            "itemAttachment": {
              "content": {},
              "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "1",
            "name": "Calça Legging Estampa Digital Fantasy G",
            "refId": "1481",
            "price": 4990,
            "listPrice": 7338,
            "manualPrice": null,
            "priceTags": [
              {
                "name": "DISCOUNT@MARKETPLACE",
                "value": -1790,
                "isPercentual": false,
                "identifier": "d344e544-ce70-4a6d-af78-7be401cd0e28",
                "rawValue": -17.90000,
                "rate": null,
                "jurisCode": null,
                "jurisType": null,
                "jurisName": null
              }
            ],
            "imageUrl": "https://leggingbrasil.vteximg.com.br/arquivos/ids/156358-105-135/LBR-331.jpg?v=637640780318670000",
            "detailUrl": "/calca-legging-estampa-digital-fantasy-453/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "1481",
            "priceValidUntil": null,
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
              "brandName": "LEGGING BRASIL",
              "brandId": "2000001",
              "categoriesIds": "/2/7/",
              "categories": [
                {
                  "id": 7,
                  "name": "Estampada"
                },
                {
                  "id": 2,
                  "name": "Legging"
                }
              ],
              "productClusterId": "144,147,148,149,150,151,152,153,154,155,157,160,161",
              "commercialConditionId": "1",
              "dimension": {
                "cubicweight": 0.0000,
                "height": 2.0000,
                "length": 12.0000,
                "weight": 100.0000,
                "width": 10.0000
              },
              "offeringInfo": null,
              "offeringType": null,
              "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 3200,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
              "sellingPrices": [
                {
                  "value": 3200,
                  "quantity": 1
                }
              ],
              "calculatedSellingPrice": 3200,
              "total": 3200
            },
            "taxCode": "",
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": 4990
          },
          {
            "uniqueId": "EB9EA805F1914354BCA90C88539307A9",
            "id": "1535",
            "productId": "463",
            "ean": "7881230008058",
            "lockId": "00-1202860243834-01",
            "itemAttachment": {
              "content": {},
              "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "1",
            "name": "Calça Legging Estampa Digital Find Your Power Grey G",
            "refId": "1535",
            "price": 4990,
            "listPrice": 7338,
            "manualPrice": null,
            "priceTags": [
              {
                "name": "DISCOUNT@MARKETPLACE",
                "value": -1790,
                "isPercentual": false,
                "identifier": "d344e544-ce70-4a6d-af78-7be401cd0e28",
                "rawValue": -17.90000,
                "rate": null,
                "jurisCode": null,
                "jurisType": null,
                "jurisName": null
              }
            ],
            "imageUrl": "https://leggingbrasil.vteximg.com.br/arquivos/ids/158489-105-135/LBR-2408-100.jpg?v=637762367956700000",
            "detailUrl": "/calca-legging-estampa-digital-find-your-power-grey-463/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "1535",
            "priceValidUntil": null,
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
              "brandName": "LEGGING BRASIL",
              "brandId": "2000001",
              "categoriesIds": "/2/7/",
              "categories": [
                {
                  "id": 7,
                  "name": "Estampada"
                },
                {
                  "id": 2,
                  "name": "Legging"
                }
              ],
              "productClusterId": "144,147,148,149,150,151,152,153,154,155,157,160,161",
              "commercialConditionId": "1",
              "dimension": {
                "cubicweight": 0.0000,
                "height": 2.0000,
                "length": 12.0000,
                "weight": 100.0000,
                "width": 10.0000
              },
              "offeringInfo": null,
              "offeringType": null,
              "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 3200,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
              "sellingPrices": [
                {
                  "value": 3200,
                  "quantity": 1
                }
              ],
              "calculatedSellingPrice": 3200,
              "total": 3200
            },
            "taxCode": "",
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": 4990
          },
          {
            "uniqueId": "CD13256FE7034F28ABEDBEF74C587746",
            "id": "1116",
            "productId": "422",
            "ean": "7881230004241",
            "lockId": "00-1202860243834-01",
            "itemAttachment": {
              "content": {},
              "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "1",
            "name": "Calça Legging Estampa Digital 3D White G",
            "refId": "1116",
            "price": 4990,
            "listPrice": 7338,
            "manualPrice": null,
            "priceTags": [
              {
                "name": "DISCOUNT@MARKETPLACE",
                "value": -1790,
                "isPercentual": false,
                "identifier": "d344e544-ce70-4a6d-af78-7be401cd0e28",
                "rawValue": -17.90000,
                "rate": null,
                "jurisCode": null,
                "jurisType": null,
                "jurisName": null
              }
            ],
            "imageUrl": "https://leggingbrasil.vteximg.com.br/arquivos/ids/157024-105-135/LBR-2408-044.jpg?v=637655969695170000",
            "detailUrl": "/calca-legging-estampa-digital-3d-white-422/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "1116",
            "priceValidUntil": null,
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
              "brandName": "LEGGING BRASIL",
              "brandId": "2000001",
              "categoriesIds": "/2/7/",
              "categories": [
                {
                  "id": 7,
                  "name": "Estampada"
                },
                {
                  "id": 2,
                  "name": "Legging"
                }
              ],
              "productClusterId": "144,147,148,149,150,151,152,153,154,155,157,160,161",
              "commercialConditionId": "1",
              "dimension": {
                "cubicweight": 0.0000,
                "height": 2.0000,
                "length": 12.0000,
                "weight": 100.0000,
                "width": 10.0000
              },
              "offeringInfo": null,
              "offeringType": null,
              "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 3200,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
              "sellingPrices": [
                {
                  "value": 3200,
                  "quantity": 1
                }
              ],
              "calculatedSellingPrice": 3200,
              "total": 3200
            },
            "taxCode": null,
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": 4990
          },
          {
            "uniqueId": "42FEF2F103E4483389A05A16B7ED1C2D",
            "id": "999",
            "productId": "396",
            "ean": "7881230002230",
            "lockId": "00-1202860243834-01",
            "itemAttachment": {
              "content": {},
              "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "1",
            "name": "Calça Legging Estampa Digital Camouf Green G",
            "refId": "999",
            "price": 4990,
            "listPrice": 7338,
            "manualPrice": null,
            "priceTags": [
              {
                "name": "DISCOUNT@MARKETPLACE",
                "value": -1790,
                "isPercentual": false,
                "identifier": "d344e544-ce70-4a6d-af78-7be401cd0e28",
                "rawValue": -17.90000,
                "rate": null,
                "jurisCode": null,
                "jurisType": null,
                "jurisName": null
              }
            ],
            "imageUrl": "https://leggingbrasil.vteximg.com.br/arquivos/ids/156493-105-135/LBR-079.jpg?v=637640849712730000",
            "detailUrl": "/calca-legging-estampa-digital-camouf-green-396/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "999",
            "priceValidUntil": null,
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
              "brandName": "LEGGING BRASIL",
              "brandId": "2000001",
              "categoriesIds": "/2/7/",
              "categories": [
                {
                  "id": 7,
                  "name": "Estampada"
                },
                {
                  "id": 2,
                  "name": "Legging"
                }
              ],
              "productClusterId": "144,147,148,149,150,151,152,153,154,155,157,160,161",
              "commercialConditionId": "1",
              "dimension": {
                "cubicweight": 0.0000,
                "height": 2.0000,
                "length": 12.0000,
                "weight": 100.0000,
                "width": 10.0000
              },
              "offeringInfo": null,
              "offeringType": null,
              "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 3200,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
              "sellingPrices": [
                {
                  "value": 3200,
                  "quantity": 1
                }
              ],
              "calculatedSellingPrice": 3200,
              "total": 3200
            },
            "taxCode": null,
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": 4990
          }
        ],
        "marketplaceItems": [],
        "clientProfileData": {
          "id": "clientProfileData",
          "email": "21db2a4a4656482e940b24582d7bbce5@ct.vtex.com.br",
          "firstName": "Ney Gilberto",
          "lastName": "Monteiro de Souza",
          "documentType": "cpf",
          "document": "95178678591",
          "phone": "+5575988829960",
          "corporateName": null,
          "tradeName": null,
          "corporateDocument": null,
          "stateInscription": "",
          "corporatePhone": null,
          "isCorporate": false,
          "userProfileId": "b59a7a40-9613-4302-94ef-9ba2e7fd3fe0",
          "customerClass": null
        },
        "giftRegistryData": null,
        "marketingData": {
          "id": "marketingData",
          "utmSource": "facebook",
          "utmPartner": null,
          "utmMedium": "ads",
          "utmCampaign": "verde-3-por-99-copia",
          "coupon": "5por160",
          "utmiCampaign": "",
          "utmipage": "",
          "utmiPart": "",
          "marketingTags": []
        },
        "ratesAndBenefitsData": {
          "id": "ratesAndBenefitsData",
          "rateAndBenefitsIdentifiers": [
            {
              "description": "5 peças por R$ 160",
              "featured": false,
              "id": "d344e544-ce70-4a6d-af78-7be401cd0e28",
              "name": "5 peças por R$ 160",
              "matchedParameters": {
                "forThePriceOf@Marketing": "1685,1481,1535,1116,999",
                "forThePriceOfMatchedItemsWithQuantity@Marketing": "1481-1,1535-1,1116-1,999-1,1685-1",
                "usedItemsInPromotion@Marketing": "1481,1535,1116,999,1685",
                "couponCode@Marketing": "5por160"
              },
              "additionalInfo": null
            }
          ]
        },
        "shippingData": {
          "id": "shippingData",
          "address": {
            "addressType": "residential",
            "receiverName": "Ney Gilberto Monteiro de Souza",
            "addressId": "4926074169645",
            "postalCode": "48603-440",
            "city": "Paulo Afonso",
            "state": "BA",
            "country": "BRA",
            "street": "Rua Campos Sales",
            "number": "10",
            "neighborhood": "Clériston Andrade",
            "complement": "Casa",
            "reference": null,
            "geoCoordinates": [
              -38.243671417236328,
              -9.3998632431030273
            ]
          },
          "logisticsInfo": [
            {
              "itemIndex": 0,
              "selectedSla": "Envio Normal",
              "lockTTL": "12d",
              "price": 467,
              "listPrice": 467,
              "sellingPrice": 467,
              "deliveryWindow": null,
              "deliveryCompany": "DBA",
              "shippingEstimate": "21bd",
              "shippingEstimateDate": "2022-02-10T22:04:15.2550304+00:00",
              "slas": [
                {
                  "id": "Envio Normal",
                  "name": "Envio Normal",
                  "shippingEstimate": "21bd",
                  "deliveryWindow": null,
                  "price": 467,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                },
                {
                  "id": "Envio Super Rápido",
                  "name": "Envio Super Rápido",
                  "shippingEstimate": "19bd",
                  "deliveryWindow": null,
                  "price": 659,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                }
              ],
              "shipsTo": [
                "BRA"
              ],
              "deliveryIds": [
                {
                  "courierId": "13405e0",
                  "courierName": "DBA",
                  "dockId": "1609812",
                  "quantity": 1,
                  "warehouseId": "14bfceb",
                  "accountCarrierName": "leggingbrasil"
                }
              ],
              "deliveryChannel": "delivery",
              "pickupStoreInfo": {
                "additionalInfo": null,
                "address": null,
                "dockId": null,
                "friendlyName": null,
                "isPickupStore": false
              },
              "addressId": "4926074169645",
              "polygonName": "",
              "pickupPointId": null,
              "transitTime": "16bd"
            },
            {
              "itemIndex": 1,
              "selectedSla": "Envio Normal",
              "lockTTL": "12d",
              "price": 465,
              "listPrice": 465,
              "sellingPrice": 465,
              "deliveryWindow": null,
              "deliveryCompany": "DBA",
              "shippingEstimate": "21bd",
              "shippingEstimateDate": "2022-02-10T22:04:15.2550304+00:00",
              "slas": [
                {
                  "id": "Envio Normal",
                  "name": "Envio Normal",
                  "shippingEstimate": "21bd",
                  "deliveryWindow": null,
                  "price": 465,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                },
                {
                  "id": "Envio Super Rápido",
                  "name": "Envio Super Rápido",
                  "shippingEstimate": "19bd",
                  "deliveryWindow": null,
                  "price": 659,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                }
              ],
              "shipsTo": [
                "BRA"
              ],
              "deliveryIds": [
                {
                  "courierId": "13405e0",
                  "courierName": "DBA",
                  "dockId": "1609812",
                  "quantity": 1,
                  "warehouseId": "14bfceb",
                  "accountCarrierName": "leggingbrasil"
                }
              ],
              "deliveryChannel": "delivery",
              "pickupStoreInfo": {
                "additionalInfo": null,
                "address": null,
                "dockId": null,
                "friendlyName": null,
                "isPickupStore": false
              },
              "addressId": "4926074169645",
              "polygonName": "",
              "pickupPointId": null,
              "transitTime": "16bd"
            },
            {
              "itemIndex": 2,
              "selectedSla": "Envio Normal",
              "lockTTL": "12d",
              "price": 465,
              "listPrice": 465,
              "sellingPrice": 465,
              "deliveryWindow": null,
              "deliveryCompany": "DBA",
              "shippingEstimate": "21bd",
              "shippingEstimateDate": "2022-02-10T22:04:15.2550304+00:00",
              "slas": [
                {
                  "id": "Envio Normal",
                  "name": "Envio Normal",
                  "shippingEstimate": "21bd",
                  "deliveryWindow": null,
                  "price": 465,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                },
                {
                  "id": "Envio Super Rápido",
                  "name": "Envio Super Rápido",
                  "shippingEstimate": "19bd",
                  "deliveryWindow": null,
                  "price": 659,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                }
              ],
              "shipsTo": [
                "BRA"
              ],
              "deliveryIds": [
                {
                  "courierId": "13405e0",
                  "courierName": "DBA",
                  "dockId": "1609812",
                  "quantity": 1,
                  "warehouseId": "14bfceb",
                  "accountCarrierName": "leggingbrasil"
                }
              ],
              "deliveryChannel": "delivery",
              "pickupStoreInfo": {
                "additionalInfo": null,
                "address": null,
                "dockId": null,
                "friendlyName": null,
                "isPickupStore": false
              },
              "addressId": "4926074169645",
              "polygonName": "",
              "pickupPointId": null,
              "transitTime": "16bd"
            },
            {
              "itemIndex": 3,
              "selectedSla": "Envio Normal",
              "lockTTL": "12d",
              "price": 465,
              "listPrice": 465,
              "sellingPrice": 465,
              "deliveryWindow": null,
              "deliveryCompany": "DBA",
              "shippingEstimate": "21bd",
              "shippingEstimateDate": "2022-02-10T22:04:15.2550304+00:00",
              "slas": [
                {
                  "id": "Envio Normal",
                  "name": "Envio Normal",
                  "shippingEstimate": "21bd",
                  "deliveryWindow": null,
                  "price": 465,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                },
                {
                  "id": "Envio Super Rápido",
                  "name": "Envio Super Rápido",
                  "shippingEstimate": "19bd",
                  "deliveryWindow": null,
                  "price": 659,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                }
              ],
              "shipsTo": [
                "BRA"
              ],
              "deliveryIds": [
                {
                  "courierId": "13405e0",
                  "courierName": "DBA",
                  "dockId": "1609812",
                  "quantity": 1,
                  "warehouseId": "14bfceb",
                  "accountCarrierName": "leggingbrasil"
                }
              ],
              "deliveryChannel": "delivery",
              "pickupStoreInfo": {
                "additionalInfo": null,
                "address": null,
                "dockId": null,
                "friendlyName": null,
                "isPickupStore": false
              },
              "addressId": "4926074169645",
              "polygonName": "",
              "pickupPointId": null,
              "transitTime": "16bd"
            },
            {
              "itemIndex": 4,
              "selectedSla": "Envio Normal",
              "lockTTL": "12d",
              "price": 465,
              "listPrice": 465,
              "sellingPrice": 465,
              "deliveryWindow": null,
              "deliveryCompany": "DBA",
              "shippingEstimate": "21bd",
              "shippingEstimateDate": "2022-02-10T22:04:15.2550304+00:00",
              "slas": [
                {
                  "id": "Envio Normal",
                  "name": "Envio Normal",
                  "shippingEstimate": "21bd",
                  "deliveryWindow": null,
                  "price": 465,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                },
                {
                  "id": "Envio Super Rápido",
                  "name": "Envio Super Rápido",
                  "shippingEstimate": "19bd",
                  "deliveryWindow": null,
                  "price": 659,
                  "deliveryChannel": "delivery",
                  "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                  },
                  "polygonName": "",
                  "lockTTL": "12d",
                  "pickupPointId": null,
                  "transitTime": "16bd"
                }
              ],
              "shipsTo": [
                "BRA"
              ],
              "deliveryIds": [
                {
                  "courierId": "13405e0",
                  "courierName": "DBA",
                  "dockId": "1609812",
                  "quantity": 1,
                  "warehouseId": "14bfceb",
                  "accountCarrierName": "leggingbrasil"
                }
              ],
              "deliveryChannel": "delivery",
              "pickupStoreInfo": {
                "additionalInfo": null,
                "address": null,
                "dockId": null,
                "friendlyName": null,
                "isPickupStore": false
              },
              "addressId": "4926074169645",
              "polygonName": "",
              "pickupPointId": null,
              "transitTime": "16bd"
            }
          ],
          "trackingHints": null,
          "selectedAddresses": [
            {
              "addressId": "4926074169645",
              "addressType": "residential",
              "receiverName": "Ney Gilberto Monteiro de Souza",
              "street": "Rua Campos Sales",
              "number": "10",
              "complement": "Casa",
              "neighborhood": "Clériston Andrade",
              "postalCode": "48603-440",
              "city": "Paulo Afonso",
              "state": "BA",
              "country": "BRA",
              "reference": null,
              "geoCoordinates": [
                -38.243671417236328,
                -9.3998632431030273
              ]
            }
          ]
        },
        "paymentData": {
          "giftCards": [],
          "transactions": [
            {
              "isActive": true,
              "transactionId": "7B91FCB7FED640A2838CC3A409C6AE4C",
              "merchantName": "LEGGINGBRASIL",
              "payments": [
                {
                  "id": "927E0EA793AC4B8AA111AFF21E62166C",
                  "paymentSystem": "4",
                  "paymentSystemName": "Mastercard",
                  "value": 18327,
                  "installments": 7,
                  "referenceValue": 18327,
                  "cardHolder": null,
                  "cardNumber": null,
                  "firstDigits": "511477",
                  "lastDigits": "5284",
                  "cvv2": null,
                  "expireMonth": null,
                  "expireYear": null,
                  "url": null,
                  "giftCardId": null,
                  "giftCardName": null,
                  "giftCardCaption": null,
                  "redemptionCode": null,
                  "group": "creditCard",
                  "tid": "19475093363",
                  "dueDate": null,
                  "connectorResponses": {
                    "Tid": "19475093363",
                    "ReturnCode": null,
                    "Message": null,
                    "authId": "19475093363",
                    "acquirer": "MercadoPagoV1",
                    "message": "pending_capture"
                  },
                  "giftCardProvider": null,
                  "giftCardAsDiscount": null,
                  "koinUrl": null,
                  "accountId": "DE534FE4E6904F8A957D326763BCACA1",
                  "parentAccountId": null,
                  "bankIssuedInvoiceIdentificationNumber": null,
                  "bankIssuedInvoiceIdentificationNumberFormatted": null,
                  "bankIssuedInvoiceBarCodeNumber": null,
                  "bankIssuedInvoiceBarCodeType": null,
                  "billingAddress": {
                    "postalCode": "48603-440",
                    "city": "Paulo Afonso",
                    "state": "BA",
                    "country": "BRA",
                    "street": "Rua Campos Sales",
                    "number": "10",
                    "neighborhood": "Clériston Andrade",
                    "complement": "Casa",
                    "reference": null,
                    "geoCoordinates": [
                      -38.243671417236328,
                      -9.3998632431030273
                    ]
                  }
                }
              ]
            }
          ]
        },
        "packageAttachment": {
          "packages": []
        },
        "sellers": [
          {
            "id": "1",
            "name": "Legging Brasil",
            "logo": "",
            "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?sc=1&an=leggingbrasil"
          }
        ],
        "callCenterOperatorData": null,
        "followUpEmail": "bce8222c01b84363affb4ee81de8ff8b@ct.vtex.com.br",
        "lastMessage": null,
        "hostname": "leggingbrasil",
        "invoiceData": null,
        "changesAttachment": null,
        "openTextField": null,
        "roundingError": 0,
        "orderFormId": "3f633544cc4e493db84b708ecd8f1968",
        "commercialConditionData": null,
        "isCompleted": true,
        "customData": null,
        "storePreferencesData": {
          "countryCode": "BRA",
          "currencyCode": "BRL",
          "currencyFormatInfo": {
            "CurrencyDecimalDigits": 2,
            "CurrencyDecimalSeparator": ",",
            "CurrencyGroupSeparator": ".",
            "CurrencyGroupSize": 3,
            "StartsWithCurrencySymbol": true
          },
          "currencyLocale": 1046,
          "currencySymbol": "R$",
          "timeZone": "E. South America Standard Time"
        },
        "allowCancellation": true,
        "allowEdition": false,
        "isCheckedIn": false,
        "marketplace": {
          "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=leggingbrasil",
          "isCertified": null,
          "name": "leggingbrasil"
        },
        "authorizedDate": "2022-01-12T22:04:12.6714816+00:00",
        "invoicedDate": null,
        "cancelReason": null,
        "itemMetadata": {
          "Items": [
            {
              "Id": "1685",
              "Seller": "1",
              "Name": "Calça Legging Estampa Digital Carpet Marine G",
              "SkuName": "Calça Legging Estampa Digital Carpet Marine G",
              "ProductId": "489",
              "RefId": "1685",
              "Ean": "7881230003640",
              "ImageUrl": "http://leggingbrasil.vteximg.com.br/arquivos/ids/156323-105-135/LBR-408.jpg?v=637640756080900000",
              "DetailUrl": "/calca-legging-estampa-digital-carpet-marine-489/p",
              "AssemblyOptions": []
            },
            {
              "Id": "1481",
              "Seller": "1",
              "Name": "Calça Legging Estampa Digital Fantasy G",
              "SkuName": "Calça Legging Estampa Digital Fantasy G",
              "ProductId": "453",
              "RefId": "1481",
              "Ean": "7881230002391",
              "ImageUrl": "http://leggingbrasil.vteximg.com.br/arquivos/ids/156358-105-135/LBR-331.jpg?v=637640780318670000",
              "DetailUrl": "/calca-legging-estampa-digital-fantasy-453/p",
              "AssemblyOptions": []
            },
            {
              "Id": "1535",
              "Seller": "1",
              "Name": "Calça Legging Estampa Digital Find Your Power Grey G",
              "SkuName": "Calça Legging Estampa Digital Find Your Power Grey G",
              "ProductId": "463",
              "RefId": "1535",
              "Ean": "7881230008058",
              "ImageUrl": "http://leggingbrasil.vteximg.com.br/arquivos/ids/158489-105-135/LBR-2408-100.jpg?v=637762367956700000",
              "DetailUrl": "/calca-legging-estampa-digital-find-your-power-grey-463/p",
              "AssemblyOptions": []
            },
            {
              "Id": "1116",
              "Seller": "1",
              "Name": "Calça Legging Estampa Digital 3D White G",
              "SkuName": "Calça Legging Estampa Digital 3D White G",
              "ProductId": "422",
              "RefId": "1116",
              "Ean": "7881230004241",
              "ImageUrl": "http://leggingbrasil.vteximg.com.br/arquivos/ids/157024-105-135/LBR-2408-044.jpg?v=637655969695170000",
              "DetailUrl": "/calca-legging-estampa-digital-3d-white-422/p",
              "AssemblyOptions": []
            },
            {
              "Id": "999",
              "Seller": "1",
              "Name": "Calça Legging Estampa Digital Camouf Green G",
              "SkuName": "Calça Legging Estampa Digital Camouf Green G",
              "ProductId": "396",
              "RefId": "999",
              "Ean": "7881230002230",
              "ImageUrl": "http://leggingbrasil.vteximg.com.br/arquivos/ids/156493-105-135/LBR-079.jpg?v=637640849712730000",
              "DetailUrl": "/calca-legging-estampa-digital-camouf-green-396/p",
              "AssemblyOptions": []
            }
          ]
        },
        "subscriptionData": null,
        "taxData": null,
        "checkedInPickupPointId": null,
        "cancellationData": null
      }

      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Pedido não localizado' });
    }

  } catch (e) {
    return { "status": 400, "message": "Erro ao acesso o recurso" };
  }

}


module.exports = {
  OrdersById
}