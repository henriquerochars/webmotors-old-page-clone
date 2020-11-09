export async function FetchBrands() {
  const response = await fetch(
    'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make'
  )
  return response.json().then(result =>
    result.map(brand => {
      return {
        key: brand.ID,
        label: brand.Name,
        value: brand.ID
      }
    })
  )
}

export async function FetchModelsByMakeId(makeId) {
  const response = await fetch(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${makeId}`
  )
  return response.json().then(result =>
    result.map(model => {
      return {
        key: model.ID,
        makeId: model.MakeID,
        label: model.Name,
        value: model.ID
      }
    })
  )
}

export async function FetchVersionsByModelId(modelId) {
  const response = await fetch(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${modelId}`
  )
  return response.json().then(result =>
    result.map(version => {
      return {
        key: version.ID,
        modelId: version.ModelID,
        label: version.Name,
        value: version.ID
      }
    })
  )
}
