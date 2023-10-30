import express from "express";
import { models } from "mongoose";
import passport from "passport";
import _ from 'lodash';
import { globSync } from "glob";
import path from "path";
import auth from '../middlewares/auth';

/* GET home page. */

function reduceRoute(app) {
	// const routes = [];

	const routeDirs = globSync("/*/**/index.js", {
		root: __dirname,
	});

	console.log(routeDirs, "----");

	routeDirs.forEach(async (js) => {
		// console.log(path.relative(__dirname, js));
        const module = await import(js);
        // const pathArray = dirname.split('/');
        // 取出路径里面的参数
        // const params = _.filter(pathArray, (str) => _.startsWith(':'));
        const dirname = path.dirname(path.relative(__dirname, js));
        // console.log(dirname)
        _.map(_.entries((module)), ([method, callback]) => {
            app[_.lowerCase(method)](`/${dirname}`, callback)
        })
	});
}

export default reduceRoute;
