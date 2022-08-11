class MyCube extends THREE.Group {
    constructor(parent, node) {
    super();
         
    var x = parseFloat(node.attributes['x'].value);
    var y = parseFloat(node.attributes['y'].value);
    var z = parseFloat(node.attributes['z'].value);
    var w = parseFloat(node.attributes['w'].value);
    var h = parseFloat(node.attributes['h'].value);
    var d = parseFloat(node.attributes['d'].value);
    var c = node.attributes['c'].value;
    var px = parseFloat(node.attributes['px'].value);
    var r1 = parseFloat(node.attributes['r1'].value);
    var pz = parseFloat(node.attributes['pz'].value);
    var t = parseFloat(node.attributes['t'].value);
    var r2 = parseFloat(node.attributes['r2'].value);
    var i = parseFloat(node.attributes['i'].value);
    
    var geometr1 = new THREE.BoxGeometry(w, h, d);
    var material = new THREE.MeshPhongMaterial({ color: c });
    var cube = new THREE.Mesh(geometr1, material);
    scene.add(cube);
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;

    if (i == 1) {
    globalThis.lanim = new TWEEN.Tween(cube.position);
    globalThis.lanim.to({ x: px, z: pz }, t);
    globalThis.lanimb = new TWEEN.Tween(cube.position);
    globalThis.lanimb.to({ x: x, z: z }, t);
    globalThis.lanimc = new TWEEN.Tween(cube.rotation);
    globalThis.lanimc.to({ y: r1 }, t);
    globalThis.lanimd = new TWEEN.Tween(cube.rotation);
    globalThis.lanimd.to({ y: r2 }, t);
    }
    else if (i == 2) {
    globalThis.anim = new TWEEN.Tween(cube.position);
    globalThis.anim.to({ x: px, z: pz }, t);
    globalThis.animb = new TWEEN.Tween(cube.position);
    globalThis.animb.to({ x: x, z: z }, t);
    globalThis.animc = new TWEEN.Tween(cube.rotation);
    globalThis.animc.to({ y: r1 }, t);
    globalThis.animd = new TWEEN.Tween(cube.rotation);
    globalThis.animd.to({ y: r2 }, t);
    }
    else if (i == 3) {
    globalThis.lanim2 = new TWEEN.Tween(cube.position);
    globalThis.lanim2.to({ x: px, z: pz }, t);
    globalThis.lanimb2 = new TWEEN.Tween(cube.position);
    globalThis.lanimb2.to({ x: x, z: z }, t);
    globalThis.lanimc2 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimc2.to({ y: r1 }, t);
    globalThis.lanimd2 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimd2.to({ y: r2 }, t);
    }
    else if (i == 4) {
    globalThis.lanim4 = new TWEEN.Tween(cube.position);
    globalThis.lanim4.to({ x: px, z: pz }, t);
    globalThis.lanimb4 = new TWEEN.Tween(cube.position);
    globalThis.lanimb4.to({ x: x, z: z }, t);
    globalThis.lanimc4 = new TWEEN.Tween(cube.rotation);    
    globalThis.lanimc4.to({ y: r1 }, t);   
    globalThis.lanimd4 = new TWEEN.Tween(cube.rotation);    
    globalThis.lanimd4.to({ y: r2 }, t);    
    }
    else if (i == 5) {   
    globalThis.lanim3 = new TWEEN.Tween(cube.position);    
    globalThis.lanim3.to({ x: px, z: pz }, t);    
    globalThis.lanimb3 = new TWEEN.Tween(cube.position);    
    globalThis.lanimb3.to({ x: x, z: z }, t);    
    globalThis.lanimc3 = new TWEEN.Tween(cube.rotation);    
    globalThis.lanimc3.to({ y: r1 }, t);    
    globalThis.lanimd3 = new TWEEN.Tween(cube.rotation);    
    globalThis.lanimd3.to({ y: r2 }, t);    
    }
    else if (i == 6) {
    globalThis.anim2 = new TWEEN.Tween(cube.position);
    globalThis.anim2.to({ x: px, z: pz }, t);
    globalThis.animb2 = new TWEEN.Tween(cube.position); 
    globalThis.animb2.to({ x: x, z: z }, t); 
    globalThis.animc2 = new TWEEN.Tween(cube.rotation);
    globalThis.animc2.to({ y: r1 }, t);  
    globalThis.animd2 = new TWEEN.Tween(cube.rotation);
    globalThis.animd2.to({ y: r2 }, t);
    }
    else if (i == 7) {
    globalThis.anim4 = new TWEEN.Tween(cube.position);
    globalThis.anim4.to({ x: px, z: pz }, t);
    globalThis.animb4 = new TWEEN.Tween(cube.position);
    globalThis.animb4.to({ x: x, z: z }, t);
    globalThis.animc4 = new TWEEN.Tween(cube.rotation);
    globalThis.animc4.to({ y: r1 }, t);
    globalThis.animd4 = new TWEEN.Tween(cube.rotation);
    globalThis.animd4.to({ y: r2 }, t);
    }
    else if (i == 8) {
    globalThis.anim3 = new TWEEN.Tween(cube.position);
    globalThis.anim3.to({ x: px, z: pz }, t);
    globalThis.animb3 = new TWEEN.Tween(cube.position);
    globalThis.animb3.to({ x: x, z: z }, t);
    globalThis.animc3 = new TWEEN.Tween(cube.rotation);
    globalThis.animc3.to({ y: r1 }, t);
    globalThis.animd3 = new TWEEN.Tween(cube.rotation);
    globalThis.animd3.to({ y: r2 }, t);
    }
    else if (i == 9) {
    globalThis.animi = new TWEEN.Tween(cube.position);
    globalThis.animi.to({ z: pz }, t);
    globalThis.animib = new TWEEN.Tween(cube.position);
    globalThis.animib.to({ z: z }, t);
    }
    else if (i == 10) {
    globalThis.animi2 = new TWEEN.Tween(cube.position);
    globalThis.animi2.to({ z: pz }, t);
    globalThis.animib2 = new TWEEN.Tween(cube.position);
    globalThis.animib2.to({ z: z }, t);
    }
    else if (i == 11) {
    globalThis.animi3 = new TWEEN.Tween(cube.position);
    globalThis.animi3.to({ z: pz }, t);
    globalThis.animib3 = new TWEEN.Tween(cube.position);
    globalThis.animib3.to({ z: z }, t);
    }
    else if (i == 12) {
    globalThis.l2anim = new TWEEN.Tween(cube.position);
    globalThis.l2anim.to({ x: px, z: pz }, t);
    globalThis.l2animb = new TWEEN.Tween(cube.position);
    globalThis.l2animb.to({ x: x, z: z }, t);
    globalThis.l2animc = new TWEEN.Tween(cube.rotation);
    globalThis.l2animc.to({ y: r1 }, t);
    globalThis.l2animd = new TWEEN.Tween(cube.rotation);
    globalThis.l2animd.to({ y: r2 }, t);
    }
    else if (i == 13) {
    globalThis.animr2 = new TWEEN.Tween(cube.position);   
    globalThis.animr2.to({ x: px, z: pz }, t);  
    globalThis.animr2b = new TWEEN.Tween(cube.position);  
    globalThis.animr2b.to({ x: x, z: z }, t);  
    globalThis.animr2c = new TWEEN.Tween(cube.rotation);  
    globalThis.animr2c.to({ y: r1 }, t); 
    globalThis.animr2d = new TWEEN.Tween(cube.rotation);
    globalThis.animr2d.to({ y: r2 }, t);
    }
    else if (i == 14) {
    globalThis.animo = new TWEEN.Tween(cube.position);
    globalThis.animo.to({ y: px, z: pz }, t);
    globalThis.animob = new TWEEN.Tween(cube.position);
    globalThis.animob.to({ z: z, y: y }, t);
    globalThis.animoc = new TWEEN.Tween(cube.rotation);
    globalThis.animoc.to({ x: r1 }, t);
    globalThis.animod = new TWEEN.Tween(cube.rotation);
    globalThis.animod.to({ x: r2 }, t);
    }
    else if (i == 15) {
    globalThis.animo2 = new TWEEN.Tween(cube.position);
    globalThis.animo2.to({ y: px, z: pz }, t);
    globalThis.animob2 = new TWEEN.Tween(cube.position);
    globalThis.animob2.to({ z: z, y: y }, t);
    globalThis.animoc2 = new TWEEN.Tween(cube.rotation);
    globalThis.animoc2.to({ x: r1 }, t);
    globalThis.animod2 = new TWEEN.Tween(cube.rotation);
    globalThis.animod2.to({ x: r2 }, t);
    }
    else if (i == 16) {
    globalThis.animo3 = new TWEEN.Tween(cube.position);
    globalThis.animo3.to({ y: px, z: pz }, t);
    globalThis.animob3 = new TWEEN.Tween(cube.position);
    globalThis.animob3.to({ z: z, y: y }, t);
    globalThis.animoc3 = new TWEEN.Tween(cube.rotation);
    globalThis.animoc3.to({ x: r1 }, t);
    globalThis.animod3 = new TWEEN.Tween(cube.rotation);
    globalThis.animod3.to({ x: r2 }, t);
    }
    else if (i == 17) {   
    globalThis.animo4 = new TWEEN.Tween(cube.position);   
    globalThis.animo4.to({ y: px, z: pz }, t);   
    globalThis.animob4 = new TWEEN.Tween(cube.position);   
    globalThis.animob4.to({ z: z, y: y }, t);    
    globalThis.animoc4 = new TWEEN.Tween(cube.rotation);    
    globalThis.animoc4.to({ x: r1 }, t);    
    globalThis.animod4 = new TWEEN.Tween(cube.rotation); 
    globalThis.animod4.to({ x: r2 }, t);
    }
    else if (i == 18) { 
    globalThis.l2anim2 = new TWEEN.Tween(cube.position);
    globalThis.l2anim2.to({ x: px, z: pz }, t);   
    globalThis.l2animb2 = new TWEEN.Tween(cube.position);  
    globalThis.l2animb2.to({ x: x, z: z }, t);  
    globalThis.l2animc2 = new TWEEN.Tween(cube.rotation); 
    globalThis.l2animc2.to({ y: r1 }, t);  
    globalThis.l2animd2 = new TWEEN.Tween(cube.rotation);   
    globalThis.l2animd2.to({ y: r2 }, t);    
    } 
    else if (i == 19) {   
    globalThis.l2anim3 = new TWEEN.Tween(cube.position);    
    globalThis.l2anim3.to({ x: px, z: pz }, t);   
    globalThis.l2animb3 = new TWEEN.Tween(cube.position);    
    globalThis.l2animb3.to({ x: x, z: z }, t);   
    globalThis.l2animc3 = new TWEEN.Tween(cube.rotation);    
    globalThis.l2animc3.to({ y: r1 }, t);    
    globalThis.l2animd3 = new TWEEN.Tween(cube.rotation);   
    globalThis.l2animd3.to({ y: r2 }, t);
    }
    else if (i == 20) {
    globalThis.l2anim4 = new TWEEN.Tween(cube.position);
    globalThis.l2anim4.to({ x: px, z: pz }, t);
    globalThis.l2animb4 = new TWEEN.Tween(cube.position);
    globalThis.l2animb4.to({ x: x, z: z }, t);
    globalThis.l2animc4 = new TWEEN.Tween(cube.rotation);
    globalThis.l2animc4.to({ y: r1 }, t);
    globalThis.l2animd4 = new TWEEN.Tween(cube.rotation);
    globalThis.l2animd4.to({ y: r2 }, t);
    }
    else if (i == 21) {
    globalThis.animr22 = new TWEEN.Tween(cube.position);
    globalThis.animr22.to({ x: px, z: pz }, t);
    globalThis.animr2b2 = new TWEEN.Tween(cube.position);
    globalThis.animr2b2.to({ x: x, z: z }, t);
    globalThis.animr2c2 = new TWEEN.Tween(cube.rotation);
    globalThis.animr2c2.to({ y: r1 }, t);
    globalThis.animr2d2 = new TWEEN.Tween(cube.rotation);
    globalThis.animr2d2.to({ y: r2 }, t);
    }
    else if (i == 22) {
    globalThis.animr23 = new TWEEN.Tween(cube.position);
    globalThis.animr23.to({ x: px, z: pz }, t);
    globalThis.animr2b3 = new TWEEN.Tween(cube.position);
    globalThis.animr2b3.to({ x: x, z: z }, t);
    globalThis.animr2c3 = new TWEEN.Tween(cube.rotation);
    globalThis.animr2c3.to({ y: r1 }, t);
    globalThis.animr2d3 = new TWEEN.Tween(cube.rotation);
    globalThis.animr2d3.to({ y: r2 }, t);
    }
    else if (i == 23) {
    globalThis.animr24 = new TWEEN.Tween(cube.position);
    globalThis.animr24.to({ x: px, z: pz }, t);
    globalThis.animr2b4 = new TWEEN.Tween(cube.position);
    globalThis.animr2b4.to({ x: x, z: z }, t);
    globalThis.animr2c4 = new TWEEN.Tween(cube.rotation);
    globalThis.animr2c4.to({ y: r1 }, t);
    globalThis.animr2d4 = new TWEEN.Tween(cube.rotation);
    globalThis.animr2d4.to({ y: r2 }, t);
    }
    parent.add(cube);
    }
}
    