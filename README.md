My Logs
=======

A custom non persistent logging website that can be used as a simple and quickly accessible alternative of AWS cloudwatch for monitoring realtime logs.

### Steps to setup your custom Logging site
1. Download this project and host it somewhere.
2. Send post request to this hosted url with the log data as the body of the request.
```
Example using axios: 
axios.post( url_of_the_hosted_website, {logs data} )
```

### Website Preview
![Logs](https://user-images.githubusercontent.com/47289788/89121403-51e3d200-d4dc-11ea-8ae2-9dc6a19c9a1d.png)
