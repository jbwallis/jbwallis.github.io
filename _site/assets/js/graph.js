
var vertAxis = new Path();
vertAxis.strokeColor = 'black';
vertAxis.add(new Point(view.center.x, view.center.y-400));
vertAxis.add(new Point(view.center.x,view.center.y+300));
vertAxis.strokeWidth = 3;

var horAxis = new Path();
horAxis.strokeColor = 'black';
horAxis.add(new Point(view.center.x-400, view.center.y));
horAxis.add(new Point(view.center.x+400, view.center.y));
horAxis.strokeWidth = 3;

var engineering = new PointText(new Point(horAxis.bounds.x-110, horAxis.bounds.y+4))
engineering.fontFamily = 'courier new';
engineering.fontWeight = 'bold';
engineering.fontSize = 15;
engineering.fillColor = 'black';
engineering.content = 'ENGINEERING';

var design = new PointText(new Point(horAxis.bounds.x+870, horAxis.bounds.y+4))
design.content = "DESIGN";
design.justification = "right";
design.style = engineering.style;

var physical = new PointText(new Point(vertAxis.bounds.x, vertAxis.bounds.y-10))
physical.content = "PHYSICAL";
physical.justification = 'center';
physical.style = engineering.style;

var digital = new PointText(new Point(vertAxis.bounds.x, vertAxis.bounds.y+720));
digital.content = "DIGITAL";
digital.style = physical.style;

// myPath.closed = true;
// myPath.fullySelected = true;

var graph = new Path();

formula = new Point(view.center.x-380, view.center.y-200);
turbine = new Point(view.center.x-200, view.center.y-290);
iol = new Point(view.center.x-175, view.center.y+100);
stomper = new Point(view.center.x+5, view.center.y-200);
sentry = new Point(view.center.x+200, view.center.y-50);
ppp = new Point(view.center.x+350, view.center.y+280);


var img1 = new Raster('/projects/media/cooling/thumb.jpg');
img1.position = formula;
img1.scale(0.1);
var img2 = new Raster('/projects/media/turbine/thumb.jpg');
img2.position = turbine;
img2.scale(0.05);
var img3 = new Raster('/projects/media/IoL/Front.jpg');
img3.position = iol;
img3.scale(0.03);
var img4 = new Raster('/projects/media/stomper/thumb.jpg');
img4.position = stomper;
img4.scale(0.02);
var img5 = new Raster('/projects/media/sentry/hero.jpg');
img5.position = sentry;
img5.scale(0.02);
var img6 = new Raster('/projects/media/ppp/brochure.png');
img6.position = ppp;
img6.scale(0.05);


var p1 = new Path.Circle(formula, 30);
p1.strokeColor = 'blue';
// p1.fillColor = 'white';
p1.strokeWidth = 7;
p1.applyMatrix = false;

var p2 = new Path.Circle(turbine, 30);
p2.style = p1.style;
var p3 = new Path.Circle(iol, 30);
p3.style = p1.style;
var p4 = new Path.Circle(stomper, 30);
p4.style = p1.style;
var p5 = new Path.Circle(sentry,30);
p5.style = p1.style;
var p6 = new Path.Circle(ppp,30);
p6.style = p1.style;

out1 = p1.clone();
out2 = p2.clone();
out3 = p3.clone();
out4 = p4.clone();
out5 = p5.clone();
out6 = p6.clone();


graph.add(formula, turbine, stomper, sentry,ppp,iol)
graph.smooth();

graph.strokeColor = 'blue';
graph.strokeWidth = 5;

group1 = new Group(p1,img1);
group1.clipped = true;
group2 = new Group(p2,img2);
group2.clipped = true;
group3 = new Group(p3,img3);
group3.clipped = true;
group4 = new Group(p4,img4);
group4.clipped = true;
group5 = new Group(p5,img5);
group5.clipped = true;
group6 = new Group(p6,img6);
group6.clipped = true;

var out1 = p1.clone();
out1.radius = 10;


// group1.onMouseEnter = function(event) {
//     this.tween(
//         //   { scaling: 1, fillColor: 'blue' },
//           { scaling: group1.scaling + 1 }//, strokeWidth: 1 },
//           { duration: 100 }
//       );
//       // img1.tween(
// //           {scaling: 1},
// //           {duration: 500}
// //           )
// }
// 
// 
// 
// group1.onMouseLeave = function(event) {
//     this.tween(
//         //   { scaling: 1, fillColor: 'blue' },
//           { scaling: group1.scaling - 1 }// ,strokeWidth: 5},
//           { duration: 1000 }
//       );
// }



function onMouseMove(event) {
	var point = event.point.clone();
	// Constrain the event point, to not cut off the text:
	if (point.y < 22)
		point.y = 22;
	if (point.y > view.size.height - 24)
		point.y = view.size.height - 24;
	var delta = point - view.center;
	for (var i = 0; i < 5; i++) {
		var curve = graph.curves[i];
		curve.handle1.y = curve.handle2.y = delta.y * (i % 2 ? 1 : -1);
		var firstPoint = curve.point1 + curve.handle1;
		var secondPoint = curve.point2 + curve.handle2;
	}
}

p1.bringToFront();
console.log(project.layers);
// console.log(project.layers[0].children)
// console.log(graph.layer);
// console.log(raster.layer);


// console.log(graph.segments[0])
// console.log(graph.segments[1].handleIn);
// console.log(graph.segments[1].handleOut);