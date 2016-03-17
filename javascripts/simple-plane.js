window.TJSMeshSample = window.TJSMeshSample === undefined ? {} : window.TJSMeshSample

window.TJSMeshSample.simplePlaneGen = function(parameters){
  var width = parameters.width
  var height = parameters.height

  var oneOfWidth = parameters.oneOfWidth !== undefined ? parameters.oneOfWidth : 1
  var oneOfHeight = parameters.oneOfHeight !== undefined ? parameters.oneOfHeight : 1

  var squareSize = width * height
  var fasesSize = (width - 1) * (height - 1) * 20//What's number of '20'? Search docs 'Faces Array'
  var vertices = new Array(squareSize * 3) //A vertex has x,y and z elements. So vertices array size is vertices size * 3
  var uvs = new Array(squareSize * 2) //A UV has u and v elements. So UVs array size is vertices size * 2
  var faces = new Array()
  var faceType = 40;//not quad,hasFaceVertexUv,hasFaceVertexNormal
  var fi = 0
  for(var i=0;i<squareSize;i++){
    var x = i % width
    var y = (i - x) / width
    var xCoordinate = x * oneOfWidth
    var yCoordinate = y * oneOfHeight
    uvs[i*2] = (x / width)
    uvs[i*2+1] = 1 - (y / height)
    vertices[i*3] = xCoordinate;
    vertices[i*3+1] = yCoordinate;
    vertices[i*3+2] = 0;

    if(!(x + 1 >= width || y + 1 >= height)){
      var topOfI  = i + width;
      var rightOfI  = i + 1;
      var diagonalI = i + 1 + width;
      faces[fi++] =  faceType
      faces[fi++] =  i
      faces[fi++] =  rightOfI
      faces[fi++] =  topOfI
      faces[fi++] =  i
      faces[fi++] =  rightOfI
      faces[fi++] =  topOfI
      faces[fi++] =  0
      faces[fi++] =  0
      faces[fi++] =  0
      faces[fi++] =  faceType
      faces[fi++] =  topOfI
      faces[fi++] =  rightOfI
      faces[fi++] =  diagonalI
      faces[fi++] =  topOfI
      faces[fi++] =  rightOfI
      faces[fi++] =  diagonalI
      faces[fi++] =  0
      faces[fi++] =  0
      faces[fi++] =  0
    }
  }


  return{
    name: 'Sample',
    vertices: vertices,
    faces: faces,
    uvs: [uvs],
    normals: [0,0,-1],
    materials: [],
    metadata: {
      version: 3,
      generator: "SampleGenerator",
      faces: squareSize * 2,
      vertices: squareSize,
      materials: 1,
      type: "Geometry",
      normals: 1,
      uvs: 1
    }
  }
}
