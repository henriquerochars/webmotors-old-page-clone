export async function FetchBrands() {
  const response = await fetch(
    'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make'
  )
  return response.json().then(result =>
    result.map(brand => {
      return {
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
        label: version.Name,
        value: version.ID
      }
    })
  )
}
