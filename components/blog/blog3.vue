<template lang="md">
## Docker Part Three: How to deploy on a fresh VPS running nginx

We're going to get this new docker image live on the web

### Step 1 - SSH into your machine.
### Step 2 - Run a container of your choice (e.g I'm using my hello world image).
```
docker run -p 3000:3000 -d vohzd/express
```
### Step 3 - Go to your sites-available folder
```
cd /etc/nginx/sites-available
```
### Step 4 - Find the conf for the site you want to change, in my case I have a file called `vohzd.com` which is for this site.
```
nano vohzd.com
```

### Step 5 - Add a `proxy_pass` to route to your Docker image. I added mine under my `location` block.
```
location / {
        try_files $uri $uri/ =404;
}
location /docker {
        proxy_pass http://localhost:3000/;
}
```
### Step 5 - Save your conf (with CTRL + O) + Reboot your server.
```
systemctl restart nginx
```

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
