const samsung = {
  name: "Samsung",
  model: "M21",
  color: "Black",
  mobileScreen: "6 inches",
  camera: "20MP",
  display_screen_features: function () {
    console.log(this.mobileScreen);
  },
  display_camera_features: function () {
    console.log(this.camera);
  },
};

const redmi = {
  name: "Redmi",
  model: "XMI",
  color: "Blue",
  mobileScreen: "7 inches",
  camera: "30MP",
  display_screen_features: function () {
    console.log(this.mobileScreen);
  },
  display_camera_features: function () {
    console.log(this.camera);
  },
};

console.log(samsung.model);
samsung.display_camera_features();
samsung.display_screen_features();

console.log(redmi.model);
redmi.display_camera_features();
redmi.display_screen_features();
