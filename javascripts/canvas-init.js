window.TJSMeshSample = window.TJSMeshSample === undefined ? {} : window.TJSMeshSample

window.TJSMeshSample.canvasGenerate = function(parameters){
  var insertTarget = document.querySelector(parameters.selector)

  window.TJSMeshSample.generated = window.TJSMeshSample.generated === undefined ? new Array() : window.TJSMeshSample.generated

  var generated = {}

  generated.scene = new THREE.Scene()

  if(parameters.ortho === true){
    generated.camera = new THREE.OrthographicCamera(-parameters.width, parameters.width, parameters.height, -parameters.height, 0.1, 1000 )
  }else{
    generated.camera = new THREE.PerspectiveCamera( 75, parameters.width/parameters.height, 0.1, 1000 )
  }

  generated.scene.add(generated.camera)


  generated.renderer = new THREE.WebGLRenderer({alpha : (parameters.transparent === true)})
  generated.renderer.setSize( parameters.width, parameters.height)
  generated.renderer.setClearColor( parameters.backgroundColor ? parseInt(parameters.backgroundColor) : 0xffffff, 0 )

  insertTarget.appendChild(generated.renderer.domElement)

  generated.render = function(){
    requestAnimationFrame(generated.render)
    generated.renderer.render(generated.scene,generated.camera)
  }

  generated.render()

  window.TJSMeshSample.generated.push(generated)

  return generated
}
