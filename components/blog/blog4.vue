<template lang="md">
## Cheaper Heroku: how to get automated deployments for 4x less cost

[Caprover](https://caprover.com) is an open source Docker management system that has one-click apps, Netdata monitoring, a lovely GUI, and for the purposes of this tutorial, **a way of automating your docker deployments but pushing straight to GitHub**.

### Step 1
Follow the [tutorial](https://caprover.com/docs/get-started.html) on getting Caprover installed (takes about 15 min).
### Step 2
Get your Docker container from the 1st tutorial on vohzd.com and create a `captain-definition` file (no file extention). Place this in it;
```
  {
   "schemaVersion": 2,
   "dockerfilePath": "./Dockerfile"
  }
```
### Step 3
Go to your Caprover dashboard, create a new app (the name will be the subdomain).
### Step 4
Click the deployment tab, and scroll down to the Deploy from GitHub section and put in your GitHub repo details. Save and you'll get a long webhook URL.
### Step 5
Go to your repo in GH > Settings > Webhooks > Paste in the URL.
### Step 6
In caprover, if it doesn't automatically start building, click "Force build".
### Step 7
Wait a bit, then your app should be live on the subdomain given!
### Step 8
Push a change to your GH repo, and watch it auto-build! Magic!



</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
