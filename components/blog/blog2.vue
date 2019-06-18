<template lang="md">
## Docker Part Two: How to provision a VPS, install Nginx, and configure SSL

We're going to provision a fresh server, install Nginx, and auto-configure SSL.

I'll assume you have a domain name for this and a choice of VPS provider. There's loads of choices out there like AWS, DigitalOcean, etc, but for this tutorial I will be using Scaleway.

### Step 1 - Log onto Scaleway &amp; SSH into your machine
### Step 2 - Upgrade system
```bash
apt update && apt upgrade -y
```
### Step 3 - Install Nginx
```bash
apt install nginx -y
```
### Step 4 - Create a test html file to serve

If you want to host multiple domains on one server, ensure you create subdirectories. Replace example.com with your domain
```bash
mkdir -p /var/www/example.com/html
```

Let's now edit said file
```bash
nano /var/www/example.com/html/index.html
```

Add in some basic HTML to start
```html
<html>
    <head>
        <title>Welcome to example.com</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>You have accessed the example.com website.</p>
    </body>
</html>
```
### Step 6 - Create a server to distribute files
```bash
nano /etc/nginx/sites-available/example.com
```

Within this, add in the following
```nginx
server {
        listen 80;
        listen [::]:80;

        root /var/www/example.com/html;
        index index.html index.htm;

        server_name example.com www.example.com;

        location / {
                try_files $uri $uri/ =404;
        }
}
```
Important: Edit the lines root and server_name according to your domain name.
### Step 7 - Symbolic link sites-available to sites-enabled
```
ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
### Step 8 - Verify and reboot server
```
nginx -t
systemctl restart nginx
```
You should now see your server over http
### Step 9 - Install SSL using Certbot
Get the latest package repo
```
add-apt-repository ppa:certbot/certbot
```
Install certbot for nginx
```
apt install python-certbot-nginx -y
```
Launch the wizard
```
certbot --nginx -d example.com -d www.example.com
```
Done!
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
