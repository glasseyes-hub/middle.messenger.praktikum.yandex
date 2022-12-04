type Options = {
  method?: string,
  timeout?: number,
  retries?:number,
  headers?: Record<string, string>
  data?: object,
}
   
const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export class HTTPTransport {
  defaultTimeout = 3000


  get = (url: string, options: Options = {}) => {
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  };

  post = (url: string, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  put = (url: string, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  delete = (url: string, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };
  
  fetchWithRetry(url:string, options: Options) {  
    const {retries = 1} = options;
        
    let retriesDid = 0
        
    return this
      .get(url, options)
      .catch((e) => {
        if(retriesDid <= retries){
          retriesDid += 1;
          return new HTTPTransport().get(url, options)
        } else {
          throw new Error(e.message)
        }   
      })
  }

  private request = (url: string, options: Options, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const {method, data = {}, headers = {}} = options
      
      if(!method) return

      const xhr = new XMLHttpRequest();

      if(method === METHODS.GET) {
        url = url + this.queryStringify(data)
      }

      xhr.open(method, url);
      xhr.timeout = timeout
      
      Object.entries(headers).forEach(([header, value]) => xhr.setRequestHeader(header, value))
      
      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = () =>  { reject(new Error('Abort')) };
      xhr.onerror = () =>  { reject(new Error('Error')) };
      xhr.ontimeout = () => { reject(new Error('Error timeout')) };

      if (method === METHODS.GET || !data) {
          xhr.send();
      } else {
          xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };

  private queryStringify(data: object) {
    return Object.entries(data).reduce((query, [param, value]) => {
      query += query ? '&' : '?'
      
      query += `${param}=${value.toString()}`
      
      return query
    }, '')
  }
}