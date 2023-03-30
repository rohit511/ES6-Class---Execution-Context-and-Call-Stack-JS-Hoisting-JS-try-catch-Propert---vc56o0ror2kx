var parser = require('xml-js');

const xml = require('fs').readFileSync('junit.xml', 'utf-8');

const options = {compact: true, ignoreComment: true, spaces: 4};

const result = parser.xml2json(xml, options)

const parsedResult = JSON.stringify(result, '');

console.log(parsedResult);
class API {
    #secure;
    constructor(url, method = 'GET') {
      this.url = url;
      this.method = method;
      this.#secure = url.startsWith('https');
    }
    isSecure() {
      return this.#secure;
    }
    updateUrl(url) {
      this.url = url;
      this.#secure = url.startsWith('https');
    }
  }