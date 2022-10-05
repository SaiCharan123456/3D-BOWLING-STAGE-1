AFRAME.registerComponent("bowling-balls", {
    init: function () {
      this.shootballs();
    },
    shootballs: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var balls = document.createElement("a-entity");          
  
          balls.setAttribute("gltf-model", "./bowling_ball/scene.gltf");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          balls.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          
  
          //set the velocity and it's direction
          balls.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(balls);
        }
      });
    },
  });
  
  
  