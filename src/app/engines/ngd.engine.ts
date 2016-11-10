import * as path from 'path';
import * as Shelljs from 'shelljs';

import { isGlobal } from '../../utilities';

export class NgdEngine {
    constructor() {

    }
    renderGraph(filepath:String, outputpath: String, type: String) {
        return new Promise(function(resolve, reject) {
           let ngdPath = (isGlobal()) ? __dirname + '/../node_modules/.bin/ngd' : __dirname + '/../../.bin/ngd';
           let finalPath = path.resolve(ngdPath) + ' -' + type + ' ' + filepath + ' -d ' + outputpath + ' -s -t svg'
           Shelljs.exec(finalPath, {
               silent: true
           }, function(code, stdout, stderr) {
               if(code === 0) {
                   resolve();
               } else {
                   reject(stderr);
               }
           });
        });
    }
};
