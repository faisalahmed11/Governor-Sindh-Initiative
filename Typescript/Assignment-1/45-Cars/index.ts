interface CarInfo {
  manufacturer: string;
  modelName: string;
}
const carInfo = (manufacturer: string, modelName: string, ...args): CarInfo => {
  args.lenght;
  return { manufacturer, modelName };
};
