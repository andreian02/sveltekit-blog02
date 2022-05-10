---
layout: mds
title: What I learnt while preparing for data interviews
date: 2022-04-10
description: While applying for data role, I made a bloody terrible mistake. A total amatuer mistake.
isCompleted: true
slug: lets-start-building
tags: [svelte • sveltekit • vercel • vite]
---

## Introduction

I work as a frontend-engineer and mostly use [React](https://reactjs.org/) at work. I was looking for a different frontend framework that **dose not** use Virtual DOM to have more diverse skills under my belt.

## Svelte

There are already many posts about [Svelte](https://svelte.dev/) by other people and reading the official document should be enough to start making stuff with it.

The syntax was very straightforward and I liked it a lot.

## Sveltekit

According to the [official document](https://kit.svelte.dev/),

> SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

## Vite

Sveltekit internally uses [Vite](https://vitejs.dev/) as its build tool.

This surely provided the `faster and leaner` experince they promised. The `HMR` was absolutely instantaneous.

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
