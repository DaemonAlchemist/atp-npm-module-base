/**
 * Created by Andy on 9/18/2017.
 */

const prompt = require('prompt');
const fs = require('fs');

prompt.message = "";
prompt.delimiter = ":";
prompt.start();

prompt.get({properties: {
        name: {description: "Module name", required: true},
        description: {description: "Module description", required: false, default: ""},
        author: {description: "Author", required: true},
        repoType: {description: "Repo type", required: false, default: "git"},
        repoUrl: {description: "Repo URL", required: false, default: ""}
    }},
    (err, response) => {
        prompt.stop();
        const data = {
            name: response.name,
            description: response.description,
            author: response.author,
            repository: {
                type: response.repoType,
                url: response.repoUrl
            }
        };

        fs.readFile('./package.json', (err, packageData) => {
            if(err) throw err;
            fs.writeFile(
                './package.json',
                JSON.stringify(Object.assign({}, JSON.parse(packageData), data), null, 2),
                err => {
                    if(err) throw err;
                }
            )
        });
    }
);
