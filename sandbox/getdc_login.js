function loginDC(login) {

  var randomN = (Math.floor(Math.random()*1000)).toString(16);
  var currentTime = new Date().getTime();

  var raw = login + "165dc834-c63d-42df-bbec-5a2ef471193c" + currentTime + randomN;
  var signature = md5(raw);

  console.log("randomN: " + randomN);
  console.log("currentTime: " + currentTime);
  console.log("raw: " + raw);
  console.log("signature: " + signature);
  
  var data = JSON.stringify({ 
      "credentials_login" : "ofis26",
      "credentials_random" : randomN,
      "credentials_time" : currentTime,
      "credentials_signature" : signature,
      "JuridicalName" : "none",
      "FirstName" : "Blah",
      "SecondName" : "BlaBla",
      "ThirdName" : "none",
      "DocumentType" : "RegTalon",
      "SerialNumber" : "none",
      "Number" : "none",
      "DateOfIssue" : "none",
      "PlaceOfIssue" : "none",
      "VehicleType" : "A",
      "RegisterSign" : "none",
      "VIN" : "none",
      "BodyNumber" : "none",
      "FrameNumber" : "none",
      "Brand" : "none",
      "Model" : "none",
      "ReleseYear" : "2001",
      "UnladenWeight" : "100",
      "MaxWeight" : "200",
      "Mileage" : "1000",
      "FuelType" : "Petrol",
      "BrakeType" : "Mechanical",
      "TireModelString" : "none",
      "IsTaxi" : "true",
      "IsTruck" : "false",
      "IsForeign" : "false",
      "IsDanger" : "false",
      "IsEducation" : "false",
      "ValidyTimeInMonth" : "12"
    })
  
  console.log("data: " + data);  

  var xhr = $.ajax({
    url: "http://getdc.ru/api/IsRequestValid",
    method: "POST",
    crossDomain: true,
    dataType: 'json',
    //contentType: "application/json; charset=utf-8",
    data: data,

    error: function(error){
        console.log(error);
    },

    success: function( data, status, xhttp) {

             console.log(data);
             console.log(status);
             console.log(xhttp);
        }
  });

console.log(xhr);

}
function loginDC2() {
  
  var form = new FormData();
  form.append("credentials_login", "abtabto");
  form.append("credentials_random", "947");
  form.append("credentials_time", "2016-03-28 21:42:29");
  form.append("credentials_signature", "8c5a4b9ee1f596f8bbd3be95f4cf99e2");
  form.append("FirstName", "дк");
  form.append("SecondName", "ТЕСТОВАЯ");
  form.append("ThirdName", "");
  form.append("DocumentType", "RegTalon");
  form.append("SerialNumber", "2311");
  form.append("Number", "221541");
  form.append("DateOfIssue", "23.12.2015 ");
  form.append("PlaceOfIssue", "ГУВД МО Ленинский район ");
  form.append("VehicleType", "E ");
  form.append("RegisterSign", "2331WD ");
  form.append("VIN", "2233F1MYWUZGETJCM ");
  form.append("BodyNumber", "");
  form.append("FrameNumber", "");
  form.append("Brand", "Toyota ");
  form.append("Model", "Camry ");
  form.append("ReleseYear", "2001 ");
  form.append("UnladenWeight", "1800 ");
  form.append("MaxWeight", "2000 ");
  form.append("Mileage", "20000 ");
  form.append("FuelType", "Petrol ");
  form.append("BrakeType", "Hydraulic ");
  form.append("TireModelString", "Bridgestone ");
  form.append("IsTaxi", "false ");
  form.append("IsTruck", "false ");
  form.append("IsForeign", "false ");
  form.append("IsDanger", "false ");
  form.append("IsEducation", "false ");
  form.append("ValidyTimeInMonth", "Twelve ");
  form.append("IsSingleRequest", "true");

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://getdc.ru/api/IsRequestValid",
    "method": "POST",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "97d9adb3-59bf-857b-ffcb-fec0ad7f831c"
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  
}

loginDC2();

//loginDC("ofis26");