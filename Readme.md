* Go to [`/main-domain`](main-domain) and run `npm install && npm run dev:watch`
* Go to [`/subdomain-01`](subdomain-01) and run `npm install && npm run dev:watch`
* Go to [`/subdomain-02`](subdomain-02) and run `npm install && npm run dev:watch`
* Remember to mention `auth.application.com`, `api.main.application.com`, `api.reseller.application.com` pointed to `127.0.0.1` in your `hosts` file
* Visit `auth.application.com:3000` in your browser and hit submit button
* Check the cookies in the browser
* Now goto other two servers i.e. `api.reseller.application.com:3001` and `api.main.application.com:3002` and check the cookies in developer console
