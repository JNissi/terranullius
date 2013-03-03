(function initTerrain(global, three) {
	var tn = global.tn,
		heightAt = function heightAt(ctx, x, z) {
			var p = ctx.getImageData(x, z, 1, 1).data,
				height = 0;

			height += p[0] / 2.56;
			height += p[1] / 25.6;
			height += p[2] / 256;
			return height;
		};

	tn.terrain = function terrain(conf, cb) {
		var terrainObject = tn.gameobject(conf),
			terrainSrc = conf.terrainSrc || '/images/terrain_map.png',
			img;

		img = new Image();

		img.onload = function onTerrainDataLoad() {
			var object3d,
				canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d'),
				i,
				imax = 256,
				max = imax - 1,
				j,
				step = 1.0,
				start = 0 - imax / 2,
				vIdx = 0,
				geom = new three.Geometry(),
				vertices = geom.vertices,
				faces = geom.faces,
				h,
				baseI,
				baseJ,
				base;
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.width, img.height);

			for (i = 0; i < imax; i++) {
				for (j = 0; j < imax; j++) {
					baseI = i * step + start;
					baseJ = j * step + start;
					h = heightAt(ctx, i, j);
					vertices.push(new three.Vector3(baseI, h, baseJ));
				}
			}

			for (i = 0; i < max; i++) {
				for (j = 0; j < max; j++) {
					base = i * imax + j;
					faces.push(new three.Face3(base, base + 1, base + imax));
					faces.push(new three.Face3(base + imax, base + 1, base + imax + 1));
				}
			}


			object3d = new three.Mesh(geom, new three.MeshBasicMaterial({
				wireframe : true,
				transparent : true
			}));
			terrainObject.object3d = object3d;
			cb(terrainObject);
		};

		img.src = terrainSrc;
	};
})(window, THREE);