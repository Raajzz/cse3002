const mobiles = [
  {
    name: 'POCO X3',
    model: 'surya',
    color: 'Black',
    mobileScreen: '6.25 inches',
    camera: '64MP',
    display_screen_features: function () {
      return this.mobileScreen;
    },
    display_camera_features: function () {
      return this.camera;
    },
  },
  {
    name: 'Poco',
    model: 'F1',
    color: 'Black',
    mobileScreen: '6 inches',
    camera: '20MP',
    display_screen_features: function () {
      return this.mobileScreen;
    },
    display_camera_features: function () {
      return this.camera;
    },
  },
  {
    name: 'Poco',
    model: 'F1',
    color: 'Red',
    mobileScreen: '6.5 inches',
    camera: '25MP',
    display_screen_features: function () {
      return this.mobileScreen;
    },
    display_camera_features: function () {
      return this.camera;
    },
  },
  {
    name: 'Poco',
    model: 'X2',
    color: 'White',
    mobileScreen: '7 inches',
    camera: '30MP',
    display_screen_features: function () {
      return this.mobileScreen;
    },
    display_camera_features: function () {
      return this.camera;
    },
  },
  {
    name: 'Redmi',
    model: 'XMII',
    color: 'Yellow',
    mobileScreen: '7.75 inches',
    camera: '100MP',
    display_screen_features: function () {
      return this.mobileScreen;
    },
    display_camera_features: function () {
      return this.camera;
    },
  },
  {
    name: 'Redmi',
    model: 'XMIII',
    color: 'Silver',
    mobileScreen: '10 inches',
    camera: '50MP',
    display_screen_features: function () {
      return this.mobileScreen;
    },
    display_camera_features: function () {
      return this.camera;
    },
  },
];

const getModels = () => {
  const brandName = document.getElementsByClassName('input-brand')[0].value;
  console.log(brandName);
  const filteredObjects = mobiles.filter((obj) => {
    console.log(obj);
    return obj.name === brandName;
  });
  const modelBtns = document.getElementsByClassName('model-btns')[0];
  filteredObjects.forEach((object) => {
    modelBtns.innerHTML += `<button
      onclick="(function(){
        document.getElementsByClassName('disp-cam')[0].innerText='${object.display_camera_features()}'
      })()"
    >${object.model}</button>`;
  });
  modelBtns;
};
