# Cloudflare Worker for Redirection
Objective: Redirect to appropriate page based on user's location (country). 

| Visiting from | Redirect to |
| --- | --- |
| US | example.com/us/ |
| Japan | example.com/jp/ |
| Indonedia | example.com/id/ |
| Africa or Middle East | example.com/en-mea/ |

References: 
- https://developers.cloudflare.com/workers/
- https://developers.cloudflare.com/workers/examples/redirect
- https://developers.cloudflare.com/workers/platform/environment-variables
- https://developers.cloudflare.com/workers/runtime-apis/request