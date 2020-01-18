class Tree {
	constructor() {
		this.children = [];
	}

	addChildren(x) {
		this.children.push(x);
	}
}

let H = 90

let t1 = new Tree();
t1.addChildren(new Tree());
t1.addChildren(new Tree());
let t2 = new Tree();
t2.addChildren(new Tree());
t2.addChildren(new Tree());
t2.addChildren(new Tree());

let t4 = new Tree();
t4.addChildren(new Tree());
t4.addChildren(new Tree());
t4.addChildren(new Tree());
t4.addChildren(new Tree());

t2.addChildren(t4);
let t = new Tree();
t.addChildren(t1);
t.addChildren(t2);
function setup() {
	createCanvas(400, 400);
}

function paint(t, l, r, h) {
	circle((l+r)/2, h*H, 10);
	let n = t.children.length
	let d = (r - l) / n;

	for (let i = 0; i < n; ++i) {
		let l2 = l +d*i
		let r2 = l2 + d
		line((l+r)/2, h*H, (l2+r2)/2, (h+1)*H)

		paint(t.children[i], l2, r2, h+1)
	}

}

function draw() {
	background(0);
	translate(width/2, 20);

	stroke(255)
	paint(t, -width/2 + 20, width/2 - 20, 0);

	noLoop();
}