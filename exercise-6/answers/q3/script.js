const samsung = {
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
display_camera_featu;

const redmi = {
  name: 'Redmi',
  model: 'MIX',
  color: 'Blue',
  mobileScreen: '7 inches',
  camera: '30MP',
  display_screen_features: function () {
    console.log(this.mobileScreen);
  },
  res: function () {
    console.log(this.camera);
  },
};

console.log(samsung.model);
samsung.display_camera_features();
samsung.display_screen_features();

console.log(redmi.model);
redmi.display_camera_features();
redmi.display_screen_features();
