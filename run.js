

var api_key = ''
var mediumUserID = ''

var url = `https://medium.com/feed/@${mediumUserID}`
var options = {
    uri: `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${api_key}`,
    method: 'GET',
    json:true
};


const { exec } = require('child_process');
var request = require('request');


function makePost(){

    request(options, function (error, response, body) {
        if (!error) {
            console.log(response.statusCode)
            
            body.items.forEach(post => {
   
                exec(`mediumexporter ${post.guid} > './post/${post.title}.md'`, (err, stdout, stderr) => {
                    if (err) {   
                      console.log(`stderr: ${stderr}`);
                    return;
                    }
                      console.log(`stdout: ${stdout}`);    
                });

                var meta = `---\ntitle: ${post.title}\ndate: ${post.pubDate}\n---\n`;
                const fs = require('fs');

                setTimeout(function() {
                
                    fs.readFile(`./post/${post.title}.md`, function (err, data) {
                        if (err) throw err;
                        console.log('meta');
                        fs.writeFile(`./post/${post.title}.md`,meta, function (err) {
                            if (err)
                                console.log(err);
                            else
                            { console.log('Write operation complete.');
                                    fs.appendFile(`./post/${post.title}.md`,data.toString(), function (err) {
                                        if (err)
                                            console.log(err);
                                        else
                                            console.log('Append operation complete.');
                                    });
                                }
                        });

                    }); 
                }, 3000);
            })
  
        }else
        {
         
        }
        
})}




makePost()