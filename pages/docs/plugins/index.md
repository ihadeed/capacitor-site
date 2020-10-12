---
title: Capacitor Plugins
description: Capacitor Plugins
contributors:
  - mlynch
  - jcesarmobile
  - dotNetkow
---

# Capacitor Plugins

Plugins in Capacitor enable JavaScript to interface directly with Native APIs.

<style>
  .ui-grid {
    column-gap: 20px;
    margin: 0 20px;
  }
  .ui-card h4, p {
    padding: 0;
    margin: 20px 20px 0 20px;
  }
  .ui-card p {
    padding: 0;
    margin: 10px 20px 20px 20px;
  }
  .ui-card a {
    color: black;
    border: 0;
  }
  .ui-card {
    margin: 0;
    overflow: hidden;
    min-height: 200px;
  }
  .ui-card img {
    margin: 0;
  }
  .ui-card .heading-anchor {
    display: none;
  }
</style>
<ui-grid>
  <ui-card class="ui-col ui-col-12 ui-col-xs-12 ui-col-sm-6 ui-col-md-6">
    <img src="/assets/img/docs/core-plugins.png">
    <h4><a href="#">Core Plugins</a></h4>
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </ui-card>
  <ui-card class="ui-col ui-col-12 ui-col-xs-12 ui-col-sm-6 ui-col-md-6">
    <img src="/assets/img/docs/community-plugins.png">
    <h4><a href="#">Community Plugins</a></h4>
    <p>Dive into Ionic Framework’s beautifylly designed UI component library.</p>
  </ui-card>
</ui-grid>

With Plugins, a web app can access the full power of the Native APIs, doing everything a traditional native app can. Plugins are especially great for wrapping common native operations that might use very different APIs across platforms, while exposing a consistent, cross-platform API to JavaScript.

Additionally, the Plugin capability in Capacitor makes it possible for teams with a mix of traditional native developers and web developers to work together on different parts of the app.

Capacitor auto generates JavaScript hooks on the client, so most plugins only need to build a native Swift/Obj-C plugin for iOS, and/or a Java one for Android. Of course, adding custom JavaScript for a plugin is possible, and is just like providing a JavaScript npm package.
