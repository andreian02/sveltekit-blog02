---
layout: mds
title: Building this Sveltekit Blog App
date: 2022-05-08
description: This is a entry where I try to document down how I managed to put this Sveltekit Blog App together.
isCompleted: true
slug: lets-start-building
tags: [svelte • sveltekit • vercel • tailwind]
---

![sveltekit](https://user-images.githubusercontent.com/36339564/165979218-1f9dbf95-d63d-4cd0-86d2-9d7d4b732fb9.jpg)

## Introduction

Part of my goals for 2022 was to learn and grow within the space of web development.
Although I generally work as a data analyst in advertising, running code snippets, fetching data from APIs, connecting to databases etc, I thought it would be cool to be able to build web application to interface with the data collected.

## Inspirations

There are already many posts about [Svelte](https://svelte.dev/) by other people and reading the official document should be enough to start making stuff with it.

The syntax was very straightforward and I liked it a lot.

## Frameworks

According to the [official document](https://kit.svelte.dev/),

> SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

## Resources

Sveltekit internally uses [Vite](https://vitejs.dev/) as its build tool.

## Hosting

I also tried [vercel](https://vercel.com/) to host this blog. Hosting was extremely simple and easy. Setting the custom domain also was easy. Probably the best hosting service I've used so far.

## Other stuff

I made a [package](https://github.com/K-Sato1995/md-to-json-converter) that converts markdown files into JSON for this.

<style>
	h2 {
		font-weight: bold;
        margin: 10px 5px 10px 0px;
	}

	p {
		padding: 5px;
	}
</style>
