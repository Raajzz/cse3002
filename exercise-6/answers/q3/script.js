const poco = {
  name: 'POCO X3',
  model: 'surya',
  color: 'Black',
  mobileScreen: '6.25 inches',
  camera: '64MP',
  display_screen_features: function () {
    console.log(this.mobileScreen);
  },
  display_camera_features: function () {
    console.log(this.camera);
  },
};

const redmi = {
  name: 'Redmi',
  model: 'XMI',
  color: 'Blue',
  mobileScreen: '7 inches',
  camera: '30MP',
  display_screen_features: function () {
    console.log(this.mobileScreen);
  },
  display_camera_features: function () {
    console.log(this.camera);
  },
};

console.log(poco.model);
poco.display_camera_features();
poco.display_screen_features();

console.log(redmi.model);
redmi.display_camera_features();
redmi.display_screen_features();
