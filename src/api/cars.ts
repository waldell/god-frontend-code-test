export type BodyType = 'suv' | 'estate' | 'sedan'
export type ModelType = 'plug-in hybrid' | 'pure electric' | 'sedan'
export type Car = {
  id: string
  modelName: string
  bodyType: BodyType
  modelType: ModelType
  imageUrl: string
}

const get = async (): Promise<Car[]> => {
  return (await fetch(`/api/cars.json`)).json();
}
export default { get };