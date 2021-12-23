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

---

# Connecting to Worker
### Gatsby Deployment
Gatsby site can be deployed on Cloudflare using [Pages](https://pages.cloudflare.com/). 

### Creating a Worker from Cloudflare Dashboard
From the Cloudflare dashboard, create a new Worker service(`Workers >  Create a Service`). Once created, we can use the online IDE available at `new worker service > Resources > Quick Edit`.

Under Triggers section, we can inform Cloudflare when the worker is to be triggered (on hitting which route). Give example.com/* so that worker is executed on every hit to our site so that we can redirect if needed.