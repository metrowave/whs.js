import {PerspectiveCamera as TPerspectiveCamera} from 'three';
import Camera from '../core/Camera';

class PerspectiveCamera extends Camera {
  constructor(params = {}) {
    super(params, 'perspectivecamera');

    this.build(params);
    super.wrap();
  }

  build(params = {}) {
    return new Promise((resolve) => {
      this.setNative(new TPerspectiveCamera(
        params.camera.fov,
        params.camera.aspect,
        params.camera.near,
        params.camera.far
      ));

      resolve();
    });
  }
}

export {
  PerspectiveCamera as default
};
