import * as constants from './const';

const addProton = (createProton) => ({
  type: constants.ADD_PROTON,
  createProton: createProton
});

const addNeutron = (createNeutron) => ({
  type: constants.ADD_NEITRON,
  createNeutron: createNeutron
});

const addElectron = (createElectron) => ({
  type: constants.ADD_ELECTRON,
  createElectron: createElectron
});

const transformValues = () => ({
  type: constants.TRANSFORM,
});


export {addProton, addNeutron, addElectron, transformValues};
