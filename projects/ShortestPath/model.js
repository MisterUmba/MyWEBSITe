/* Author: Henri Umba
 * Email: Umbamw at gmail.com
 * 
 * This is a project representing a graph. I've had lots of fun building this.
 * I build this project as a way to express myself and be creative. I later 
 * used it as my university final project, and used it again to land my first
 * tech job. 
 * 
 * What a joy it is when a labour of love overtakes you and becomes a source of 
 * success. I hope this project brings you as much joy and success it did me. 
 * 
 * 
 */


"use strict";


/*
Edges
 - b: Begining Node
 - e: End Node
*/

class Edge {
    constructor(begin, end) {
        this.b = begin;
        this.e = end;
        this.selected = false;
        this.cost = 0;
    }

    setCost(cost) {
        this.cost = cost;
    }
}

/*
Nodes
 - x: x axis location
   y: y axis location
*/

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.Edges = [];
        this.selected = false;      // Colored red, used in path, 
    }

    addEdge(edge) {
        this.Edges.push(edge);
    }
}



// List of Nodes
// Also an object which holds GOLDen Node
let Graph = [];
Graph.GOLD = undefined;

// Returns random integer including min, but excluding max. 
function rand(min, max) {
    let d = max - min;
    return Math.floor(Math.random() * d) + min;
}

// Returns random float including min, excluding max.
function floatRand(min, max) {
    let d = max - min;
    return Math.random() * d + min;
}

// Returns a float that is the distance between node1 and node2. 
function distance(node1, node2) {
    let a = Math.abs(node1.x - node2.x);
    let b = Math.abs(node1.y - node2.y);

    return (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}


function probability(k) {
    if (k > 1 || k < 0)
        return -1;
    return (Math.random() < k);
}