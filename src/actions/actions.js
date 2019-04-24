import * as constants from './const';

const addProton = (createProton) => ({
  type: constants.ADD_PROTON,
  createProton: createProton
});

const addNeitron = (createNeitron) => ({
  type: constants.ADD_NEITRON,
  createNeitron: createNeitron
});

const addElectron = (createElectron) => ({
  type: constants.ADD_ELECTRON,
  createElectron: createElectron
});

const transformValues = () => ({
  type: constants.TRANSFORM,
});


export {addProton, addNeitron, addElectron, transformValues};
