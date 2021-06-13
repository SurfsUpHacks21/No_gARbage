const Scene = require('Scene');
const Patches = require('Patches');

(async function() {

  Promise.all([

    // The 3D object or 3D point we want to track
    Scene.root.findFirst('NoseTip3D'),

  ]).then(function(results) {

    // Define variable names for items found
    const nose3D = results[0];

    // Transform the world coords of 3D object to screen coord
    var nose2D = Scene.projectToScreen(nose3D.worldTransform.position)

    // Get Nose3D position, set projectToScreen point hermitcrab
    Patches.outputs.getPoint("NoseTip3D").then(pointSignal => {
      Patches.inputs.setPoint2D('hermitCrab', nose2D);
    });
  });

  // adapted from old broken youtube tutorial: https://www.youtube.com/watch?v=XUCKYUae0m0

})();