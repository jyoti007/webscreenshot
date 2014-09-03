var webshot = require('webshot');
var fs = require('fs');

  webshot('https://www.google.co.in/?gfe_rd=cr&ei=qKgGVPCFBoHC8gfl9oCQCg','istshot.jpg',function(error){
 if(error) console.log(error);
 else{
 var abc = fs.createWriteStream('ab/istshot.jpg',{encoding:'binary'});
 var file = fs.readFileSync('istshot.jpg');
 console.log(file);
 abc.write(file,'binary',function(error){
 if(!error){
 fs.unlink('istshot.jpg',function(err){if(!err) console.log("deleted");});
 }
 });
 }
 });
/*
 webshot('<html><body bgcolor="red">hello this is an exampl</body></html>','ab/second.jpg',{siteType : 'html'},function(err){

 if(err){
 console.log("second" + err);}
 }); */
 
/*  webshot('google.com',"",function(err , renderstream){
 var file = fs.createWriteStream('gog.png' , {encoding:'binary'});
 
   renderstream.on('data' ,function(data){
   file.write(data.toString('binary'),'binary');
   });
 });
 
 var options = {
  screenSize: {
    width: 320
  , height: 480
  }
, shotSize: {
    width: 320
  , height: 'all'
  }
, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
}

webshot('flickr.com', 'flickr.jpeg', options, function(err) {
  // screenshot now saved to flickr.jpeg
});

 */


