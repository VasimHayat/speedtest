// var speedTest = require('speedtest-net');

// var test = speedTest({ maxTime: 5000 });
// test.on('testserver', function (server) {
//         pingTime = server.bestPing;
// });

// test.on('data', function (data) {
//          var downloadSpeed = data.speeds.download + ' Mbps';
//          var uploadSpeed = data.speeds.upload + ' mbps';

//          console.log("Download speed", downloadSpeed);
//          console.log("Upload speed", uploadSpeed);
// });

// test.on('error', function (error) {
//          console.error(error);
// });


const speedTest = require('speedtest-net');
 
(async () => {
  try {
     await speedTest({       
            acceptLicense: 'true', 
          
    }).then(function(resp){
        console.log("####################")
        console.log(resp)
        console.log("#########DDDDDDDDDDDDDDDd###########")
        console.log(resp.download)
        console.log("####################")
    })
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
})();