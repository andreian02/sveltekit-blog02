---
layout: mds
title: Building this Sveltekit Blog App
date: 2022-05-08
description: A blog post where I document how I managed to put this Sveltekit Blog App together.
isCompleted: true
slug: lets-start-building
tags: [svelte • sveltekit • vercel • tailwind]
---

![sveltekit](https://user-images.githubusercontent.com/36339564/165979218-1f9dbf95-d63d-4cd0-86d2-9d7d4b732fb9.jpg)

## Introduction

Part of my goals for 2022 was to learn and grow within the space of web development.
Although I generally work as a data analyst in advertising, running code snippets, fetching data from APIs, connecting to databases etc. <br>
I always wanted to be able to create an highly interactive site where data collected is used to story tell.

<p></p>

What better way to start by building a basic blog site.

## Inspirations

Although I was previously introduced to the MERN Stack in a web dev course, <br>
I heard of Svelte/Sveltekit from the authors at **[the pudding](https://pudding.cool/)** and I was curious to check out what they were using.

With only a very short introduction to Svelte/Sveltekit, I feel in love with it instantly.

<p></p>

The syntax was very straightforward and I liked it a lot. With a basic knowledge of html, css and javascript, I could already write and build some basic components with this framework.

<p></p>

Working with Svelte/Sveltekit really brings alot of "joy" and the development experience is really great. This is something that was mention quite a number of times from the community when they are interviewed about their development experience.

## Resources

Here is a list of resources that I referred to while putting this blog together.
Without the generosity of these developers and the open source community, I wouldn't have managed to this together.

<p></p>

&nbsp;&nbsp; • Basic Blog Design Layout -> https://github.com/sw-yx/swyxkit

&nbsp;&nbsp; • Details in Blog Pages -> https://eugeneyan.com/

&nbsp;&nbsp; • Tailwindcss -> https://tailwindcss.com/

&nbsp;&nbsp; • Markdown blogposts -> https://github.com/K-Sato1995/sveltekit-blog-template

&nbsp;&nbsp; • Page Transition -> https://github.com/evanwinter/sveltekit-page-transitions

<p></p>

## Hosting

I use **[vercel](https://vercel.com/)** to host this blog. Hosting was extremely simple and fast. Setting the custom domain also was easy. Probably the best hosting service I've used so far for a beginner like myself. <br>
Here is an **[article](https://blog.hdks.org/Deploy-SvelteKit-App-with-Vercel/)** that I referred to as a guide.

## What I learnt

If I could try to describle it, it feel like I went straight to photoshop to develop a photo and never had to worry about developing photos in a traditional dark room.
While I only have such a short experience with web dev, working on svelte made me feel that I didn't had to go through the changes in tech that web stack may go through.

## Other stuff

I adapted a [randomQuote Generator](https://github.com/andreian02/svelte-randomQuotes) that returns a random quote based on the raw data in a JSON file.
As of this writing, I am still considering adding this feature to the homepage of this blog.

<p></p>

While exploring how to incorporate data into a potential web dev project, I chanced upon an **[article](https://hdoro.dev/sanity-io-to-svelte-kit)** about using sanity.io data in Sveltekit projects. This is defintely something I will look into while working toward my 2022 data goal.

<style>
	h2 {
		font-weight: bold;
        margin: 10px 5px 10px 0px;
	}

	p {
		padding: 5px;
	}
</style>
