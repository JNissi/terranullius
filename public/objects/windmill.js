{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "windmill1.blend",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 4,
	"geometries"    : 4,
	"materials"     : 2,
	"textures"      : 1
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"door" : {
		"geometry"  : "geo_Cube.002",
		"groups"    : [  ],
		"material"  : "Material.001",
		"position"  : [ 2.35, 0.49, 0 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 0.98, 0.99 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"doorway" : {
		"geometry"  : "geo_Cube",
		"groups"    : [  ],
		"material"  : "Material.001",
		"position"  : [ 2, 0, 0 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"rotor" : {
		"geometry"  : "geo_Cube.001",
		"groups"    : [  ],
		"material"  : "Material.001",
		"position"  : [ -0.0181595, -1.80481, 5.95068 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 0.1, 1, 0.1 ],
		"visible"       : true,
		"castShadow"    : true,
		"receiveShadow" : true,
		"doubleSided"   : true
	},

	"building" : {
		"geometry"  : "geo_Cylinder.001",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ 0, 0, 0 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : true,
		"receiveShadow" : true,
		"doubleSided"   : false
	}
},


"geometries" :
{
	"geo_Cube.002" : {
		"type" : "embedded",
		"id"  : "emb_Cube.002"
	},

	"geo_Cube" : {
		"type" : "embedded",
		"id"  : "emb_Cube"
	},

	"geo_Cube.001" : {
		"type" : "embedded",
		"id"  : "emb_Cube.001"
	},

	"geo_Cylinder.001" : {
		"type" : "embedded",
		"id"  : "emb_Cylinder.001"
	}
},


"textures" :
{
	"untitled" : {
		"url": "windmill_extra_diffuse.png",
        "wrap": ["repeat", "repeat"]
	}
},


"materials" :
{
	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "opacity": 1, "blending": "NormalBlending" }
	},

	"Material.001" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "opacity": 1, "map": "untitled", "blending": "NormalBlending" }
	}
},


"embeds" :
{
"emb_Cube": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "Material.001",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"mapDiffuse" : "windmill_extra_diffuse.png",
		"mapDiffuseWrap" : ["repeat", "repeat"],
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [0,-0.5,0,0,0.5,0,0.4,0.5,0,0.4,-0.5,0,0,-0.5,1.3536,0,0.5,1.3536,0.4,0.5,1.3536,0.4,-0.5,1.3536,0,-0.3,1.6272,0.4,-0.3,1.6272,0,0.3,1.6272,0.4,0.3,1.6272,0,-0.1,1.7,0.4,-0.1,1.7,0,0.1,1.7,0.4,0.1,1.7,0,-0.6,0,0,0.6,0,0.4,0.6,0,0.4,-0.6,0,0,-0.6,1.3936,0,0.6,1.3936,0.4,0.6,1.3936,0.4,-0.6,1.3936,0,-0.35,1.7072,0.4,-0.35,1.7072,0,0.35,1.7072,0.4,0.35,1.7072,0,-0.1,1.8,0.4,-0.1,1.8,0,0.1,1.8,0.4,0.1,1.8],

	"morphTargets" : [],

	"normals" : [0.63976,-0.725425,0.253761,0,-0.943907,0.33018,0,-1,0,0.707083,-0.707083,0,0,-0.950591,-0.310373,0.784082,-0.589984,-0.192633,0,0.943907,0.33018,0.63976,0.725425,0.253761,0.707083,0.707083,0,0,1,0,0,0.950591,-0.310373,0.784082,0.589984,-0.192633,0.651479,0.444868,0.614521,0,0.586383,0.810022,0.778802,-0.376751,-0.50145,0,-0.600635,-0.799493,0,0.600635,-0.799493,0.778802,0.376751,-0.50145,0.748344,-0.115177,-0.653188,0,-0.17365,-0.984802,0,0.17365,-0.984802,0.748344,0.115177,-0.653188,0.651479,-0.444868,0.614521,0,-0.586383,0.810022,0.669393,0.131321,0.731193,0,0.176763,0.984222,0.669393,-0.131321,0.731193,0,-0.176763,0.984222],

	"colors" : [16777215],

	"uvs" : [[0.734375,1,0.5625,1,0.5625,0.421875,0.734375,0.421875,0.5625,0.4375,0.734375,0.4375,0.5625,0.40625,0.734375,0.40625,0.734375,0.828125,0.5625,0.828125,0.734375,0.59375,0.5625,0.59375,0.5625,0.453125,0.734375,0.453125,0.5625,0.859375,0.734375,0.859375,0.734375,0.6875,0.5625,0.6875,0.5625,0.765625,0.734375,0.765625,0.734375,0.359375,0.734375,0.53125,0.5625,0.53125,0.5625,0.359375,0.734375,0.71875,0.5625,0.71875,0.734375,0.640625,0.5625,0.640625,0.609375,0.5625,0.609375,0.96875,0.5625,0.5625,0.203125,0.953125,0.296875,0.953125,0.296875,1,0.203125,1,0.125,0.921875,0.109375,0.953125,0.6875,0.984375,0.6875,0.5625,0.734375,0.5625,0.375,0.921875,0.390625,0.953125,0.453125,0.8125,0.5,0.828125,0.046875,0.8125,0,0.828125]],

	"faces" : [171,23,20,16,19,0,0,1,2,3,0,1,2,3,0,0,0,0,171,5,1,2,6,0,1,4,5,0,4,2,3,5,0,0,0,0,171,21,22,18,17,0,0,1,6,7,6,7,8,9,0,0,0,0,171,0,4,7,3,0,5,0,1,4,9,10,11,8,0,0,0,0,171,27,22,21,26,0,8,0,1,9,12,7,6,13,0,0,0,0,171,11,10,5,6,0,10,11,12,13,14,15,4,5,0,0,0,0,171,7,4,8,9,0,0,1,14,15,11,10,16,17,0,0,0,0,171,15,14,10,11,0,16,17,11,10,18,19,15,14,0,0,0,0,171,9,8,12,13,0,15,14,18,19,17,16,20,21,0,0,0,0,171,13,12,14,15,0,19,18,17,16,21,20,19,18,0,0,0,0,171,23,25,24,20,0,20,21,22,23,0,22,23,1,0,0,0,0,171,31,27,26,30,0,24,8,9,25,24,12,13,25,0,0,0,0,171,25,29,28,24,0,21,26,27,22,22,26,27,23,0,0,0,0,171,29,31,30,28,0,26,24,25,27,26,24,25,27,0,0,0,0,171,3,7,23,19,0,28,29,1,30,8,11,0,3,0,0,0,0,171,13,15,31,29,0,31,32,33,34,21,18,24,26,0,0,0,0,171,9,13,29,25,0,35,31,34,36,17,21,26,22,0,0,0,0,171,6,2,18,22,0,37,38,39,0,5,3,8,7,0,0,0,0,171,15,11,27,31,0,32,40,41,33,18,14,12,24,0,0,0,0,171,11,6,22,27,0,40,42,43,41,14,5,7,12,0,0,0,0,171,7,9,25,23,0,44,35,36,45,11,17,22,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animation" : {}
},

"emb_Cube.001": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "Material.001",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"mapDiffuse" : "windmill_extra_diffuse.png",
		"mapDiffuseWrap" : ["repeat", "repeat"],
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [-0.5,-0.4,-0.5,-0.5,0.6,-0.5,0.5,0.6,-0.5,0.5,-0.4,-0.5,-0.5,-0.4,0.5,-0.5,0.6,0.5,0.5,0.6,0.5,0.5,-0.4,0.5,-12,-0.405849,2.745,-3.02157,-0.4,-12,-1,-0.405849,-2.75,1,-0.405849,-2.75,12,-0.405849,-54,-1,-0.405849,-54,2.525,-0.4,-1,2.525,-0.4,1,54,-0.4,12,54,-0.4,-1,-1,-0.405849,2.75,-3.025,-0.4,1,-12,-0.405849,54,1,-0.405849,54,-3.025,-0.4,-1,1,-0.405849,2.75,-55,-0.4,-12,-55,-0.4,1,12,-0.405849,-2.74919,2.52783,-0.4,12],

	"morphTargets" : [],

	"normals" : [0,-1,0,0,-0.999969,0,0.707083,0,0.707083,-0.707083,0,0.707083,0.707083,0,-0.707083,-0.707083,0,-0.707083],

	"colors" : [],

	"uvs" : [[0.75,0.140625,0.984375,0.984375,0.75,0.984375,0.984375,0.140625,0.75,0,0.8125,0,0.8125,0.140625,0.9375,0,0.9375,0.0625,0.8125,0.0625,1,0.0625,0.96875,0.03125,1,0]],

	"faces" : [42,8,21,20,0,0,1,2,0,1,0,42,8,23,21,0,0,3,1,0,0,1,42,27,17,16,0,0,1,2,0,1,0,42,14,17,27,0,3,1,0,0,1,0,42,10,11,23,0,4,5,6,1,0,0,42,13,26,10,0,3,2,1,0,0,1,42,12,26,13,0,0,2,3,0,0,0,42,25,9,19,0,3,2,1,0,0,0,42,9,25,24,0,2,3,0,0,0,0,42,14,15,19,0,7,8,9,0,0,0,42,18,10,23,0,0,4,6,0,1,0,42,22,14,19,0,5,7,9,0,0,0,43,7,6,5,4,0,10,11,11,12,2,2,3,3,43,7,3,2,6,0,10,8,11,11,2,4,4,2,43,0,1,2,3,0,7,11,11,8,5,5,4,4,43,1,0,4,5,0,11,7,12,11,5,5,3,3],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animation" : {}
},

"emb_Cylinder.001": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "Material",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [-0.827931,1.99926,1.67404,-0.873282,2.10877,1.67579,0.828253,1.99912,1.67404,0.873621,2.10863,1.67579,1.99926,0.827931,1.67404,2.10877,0.873282,1.67579,1.99912,-0.828253,1.67404,2.10863,-0.873621,1.67579,0.827931,-1.99926,1.67404,0.873282,-2.10877,1.67579,-0.828253,-1.99912,1.67404,-0.873622,-2.10863,1.67579,-1.99926,-0.827931,1.67404,-2.10877,-0.873282,1.67579,-1.99912,0.828252,1.67404,-2.10863,0.873621,1.67579,-0.537529,1.32954,5.71789,0.537743,1.32945,5.71789,1.29801,0.569061,5.71789,1.29793,-0.506211,5.71789,0.537534,-1.26648,5.71789,-0.537738,-1.26639,5.71789,-1.29801,-0.506002,5.71789,-1.29792,0.56927,5.71789,-0.83061,2.00573,0.00103985,0.830933,2.00559,0.00103985,2.00573,0.83061,0.00103985,2.00559,-0.830933,0.00103985,0.83061,-2.00573,0.00103985,-0.830933,-2.00559,0.00103985,-2.00573,-0.83061,0.00103985,-2.00559,0.830933,0.00103985,-0.000102029,-1.26644,6.21789,-0.591281,1.47232,5.80749,0.591518,1.47223,5.80749,1.42782,0.635794,5.80749,1.42772,-0.547005,5.80749,0.591288,-1.3833,5.80749,-0.591511,-1.38321,5.80749,-1.42781,-0.546775,5.80749,-1.42771,0.636023,5.80749,3.56714e-06,0.0445093,6.40187,-0.00011144,-1.38326,6.35749],

	"morphTargets" : [],

	"normals" : [-0.230934,0.557665,-0.797266,-0.320963,0.773644,-0.546251,0.321085,0.773614,-0.546251,0.231025,0.557634,-0.797266,0.775323,0.31962,-0.544664,0.557665,0.230934,-0.797266,0.775597,-0.322764,-0.542436,0.557634,-0.231025,-0.797266,0.230934,-0.557665,-0.797266,0.321299,-0.777276,-0.54088,-0.231025,-0.557634,-0.797266,-0.321421,-0.777245,-0.54088,-0.557665,-0.230934,-0.797266,-0.775262,0.319773,-0.544664,-0.775628,-0.322611,-0.542436,-0.829341,-0.352519,-0.433454,-0.557634,0.231025,-0.797266,0.38258,-0.923887,0.004181,-0.825831,0.333842,-0.454421,0.825892,0.333689,-0.454421,0.829279,-0.352672,-0.433454,-0.34077,0.815058,-0.46852,0.213324,-0.933897,-0.286905,-0.213477,-0.933836,-0.286905,0.923246,-0.373394,0.090243,0.340892,0.814997,-0.46852,0.918149,0.388653,0.076846,-0.918088,0.388806,0.076846,0.379009,0.922849,0.0683,-0.923307,-0.373241,0.090243,-0.327708,-0.943663,-0.04532,-6.1e-05,-0.884732,-0.466079,0.327555,-0.943724,-0.04532,-0.382733,-0.923826,0.004181,-0.923887,-0.38258,0.004181,-0.923826,0.382733,0.004181,-0.38258,0.923887,0.004181,0.382733,0.923826,0.004181,0.923887,0.38258,0.004181,0,0.04706,0.998871,-6.1e-05,-0.761834,0.647755,-0.378857,0.92291,0.0683,0.923826,-0.382733,0.004181],

	"colors" : [],

	"uvs" : [[0,0,1,0,1,1]],

	"faces" : [42,0,1,3,0,0,1,2,0,1,2,42,2,3,5,0,0,1,2,3,2,4,42,4,5,7,0,0,1,2,5,4,6,42,6,7,8,0,0,1,2,7,6,8,42,8,9,10,0,0,1,2,8,9,10,42,10,11,12,0,0,1,2,10,11,12,42,15,13,22,0,0,1,2,13,14,15,42,15,0,14,0,1,2,0,13,0,16,42,12,13,14,0,0,1,2,12,14,16,42,6,8,28,0,0,1,2,7,8,17,42,1,15,23,0,0,1,2,1,13,18,42,5,3,18,0,0,1,2,4,2,19,42,7,5,19,0,0,1,2,6,4,20,42,3,1,16,0,0,1,2,2,1,21,42,9,7,20,0,0,1,2,9,6,22,42,20,11,9,0,0,1,2,22,11,9,42,13,11,21,0,0,1,2,14,11,23,42,19,18,36,0,0,1,2,20,19,24,42,18,17,35,0,0,1,2,19,25,26,42,16,23,40,0,0,1,2,21,18,27,42,17,16,34,0,0,1,2,25,21,28,42,23,22,39,0,0,1,2,18,15,29,42,22,21,38,0,0,1,2,15,23,30,42,32,20,37,0,0,1,2,31,22,32,42,20,19,37,0,0,1,2,22,20,32,42,8,10,29,0,0,1,2,8,10,33,42,10,12,30,0,0,1,2,10,12,34,42,12,14,31,0,0,1,2,12,16,35,42,14,0,24,0,0,1,2,16,0,36,42,2,4,25,0,0,1,2,3,5,37,42,4,6,26,0,0,1,2,5,7,38,42,0,2,25,0,0,1,2,0,3,37,42,21,32,38,0,0,1,2,23,31,30,42,20,21,11,0,0,1,2,22,23,11,42,32,21,20,0,0,1,2,31,23,22,42,37,36,41,0,0,1,2,32,24,39,42,40,39,41,0,0,1,2,27,29,39,42,36,35,41,0,0,1,2,24,26,39,42,39,38,41,0,0,1,2,29,30,39,42,35,34,41,0,0,1,2,26,28,39,42,38,42,41,0,0,1,2,30,40,39,42,33,40,41,0,0,1,2,41,27,39,42,34,33,41,0,0,1,2,28,41,39,42,41,42,37,0,0,1,2,39,40,32,42,2,0,3,0,0,1,2,3,0,2,42,4,2,5,0,0,1,2,5,3,4,42,6,4,7,0,0,1,2,7,5,6,42,7,9,8,0,0,1,2,6,9,8,42,9,11,10,0,0,1,2,9,11,10,42,11,13,12,0,0,1,2,11,14,12,42,23,15,22,0,0,1,2,18,13,15,42,1,0,15,0,1,2,0,1,0,13,42,13,15,14,0,0,1,2,14,13,16,42,27,6,28,0,0,1,2,42,7,17,42,16,1,23,0,0,1,2,21,1,18,42,3,17,18,0,0,1,2,2,25,19,42,5,18,19,0,0,1,2,4,19,20,42,17,3,16,0,0,1,2,25,2,21,42,7,19,20,0,0,1,2,6,20,22,42,22,13,21,0,0,1,2,15,14,23,42,18,35,36,0,0,1,2,19,26,24,42,17,34,35,0,0,1,2,25,28,26,42,33,16,40,0,0,1,2,41,21,27,42,16,33,34,0,0,1,2,21,41,28,42,40,23,39,0,0,1,2,27,18,29,42,39,22,38,0,0,1,2,29,15,30,42,42,32,37,0,0,1,2,40,31,32,42,19,36,37,0,0,1,2,20,24,32,42,28,8,29,0,0,1,2,17,8,33,42,29,10,30,0,0,1,2,33,10,34,42,30,12,31,0,0,1,2,34,12,35,42,31,14,24,0,0,1,2,35,16,36,42,4,26,25,0,0,1,2,5,38,37,42,6,27,26,0,0,1,2,7,42,38,42,24,0,25,0,0,1,2,36,0,37,42,32,42,38,0,0,1,2,31,40,30],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animation" : {}
},

"emb_Cube.002": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "Material.001",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"mapDiffuse" : "windmill_extra_diffuse.png",
		"mapDiffuseWrap" : ["repeat", "repeat"],
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [-0.0500001,-1,0,-0.0500001,0,0,-1.19209e-07,0,0,-1.19209e-07,-1,0,-0.0500001,-1,1.3536,-0.0500001,0,1.3536,-1.19209e-07,0,1.3536,-1.19209e-07,-1,1.3536,-0.0500001,-0.8,1.6272,-1.19209e-07,-0.8,1.6272,-0.0500001,-0.2,1.6272,-1.19209e-07,-0.2,1.6272,-0.0500001,-0.6,1.7,-1.19209e-07,-0.6,1.7,-0.0500001,-0.4,1.7,-1.19209e-07,-0.4,1.7],

	"morphTargets" : [],

	"normals" : [-0.647084,-0.45793,0.609516,-0.670003,-0.12891,0.73104,-0.670003,0.12891,0.73104,-0.647084,0.45793,0.609516,-0.643452,-0.727653,0.237587,-0.643452,0.727653,0.237587,-0.707083,-0.707083,0,-0.707083,0.707083,0,0.643452,0.727653,0.237587,0.707083,0.707083,0,0.670003,0.12891,0.73104,0.670003,-0.12891,0.73104,0.647084,-0.45793,0.609516,0.647084,0.45793,0.609516,0.643452,-0.727653,0.237587,0.707083,-0.707083,0],

	"colors" : [16777215,0],

	"uvs" : [[0.40625,0.796875,0.3125,0.828125,0.21875,0.828125,0.109375,0.796875,0.5,0.65625,0.015625,0.65625,0.5,0.015625,0.015625,0.015625,0.546875,0.359375,0.5,0.359375,0.546875,0.015625,0.546875,0.484375,0.546875,0.640625,0.5,0.640625,0.5,0.484375,0.546875,0.171875,0.5,0.171875,0.546875,0.375,0.5,0.375,0.546875,0.28125,0.5,0.28125]],

	"faces" : [170,8,12,14,0,0,1,2,0,1,2,0,0,0,170,8,14,10,0,0,2,3,0,2,3,0,0,0,170,4,8,10,0,4,0,3,4,0,3,0,0,0,170,4,10,5,0,4,3,5,4,3,5,0,0,0,170,5,0,4,0,5,6,4,5,6,4,0,0,0,170,1,0,5,0,7,6,5,7,6,5,0,0,0,171,5,6,2,1,0,8,9,6,10,5,8,9,7,0,0,0,0,170,15,13,9,0,2,1,0,10,11,12,0,0,0,170,11,15,9,0,3,2,0,13,10,12,0,0,0,170,11,9,7,0,3,0,4,13,12,14,0,0,0,170,6,11,7,0,5,3,4,8,13,14,0,0,0,170,6,7,3,0,5,4,6,8,14,15,0,0,0,170,6,3,2,0,5,6,7,8,15,9,0,0,0,171,0,3,7,4,0,6,10,8,9,6,15,14,4,0,0,0,0,171,11,6,5,10,0,11,12,13,14,13,8,5,3,0,0,0,0,171,7,9,8,4,0,10,15,16,6,14,12,0,4,0,0,0,0,171,15,11,10,14,0,17,11,14,18,10,13,3,2,0,0,0,0,171,9,13,12,8,0,15,19,20,16,12,11,1,0,0,0,0,0,171,13,15,14,12,0,19,17,18,20,11,10,2,1,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animation" : {}
}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ -1.5708, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : ""
}

}
