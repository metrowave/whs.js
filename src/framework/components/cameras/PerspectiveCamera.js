import {PerspectiveCamera as PerspectiveCameraNative} from 'three';
import {CameraComponent} from '../../core/CameraComponent';

class PerspectiveCamera extends CameraComponent {
  static defaults = {
    ...CameraComponent.defaults,

    camera: {
      near: 1,
      far: 1000,
      fov: 45,
      aspect: window.innerWidth / window.innerHeight
    }
  };

  constructor(params = {}) {
    super(params, PerspectiveCamera.defaults);
  }

  build(params = {}) {
    return new PerspectiveCameraNative(
      params.camera.fov,
      params.camera.aspect,
      params.camera.near,
      params.camera.far
    );
  }
}

export {
  PerspectiveCamera
};
