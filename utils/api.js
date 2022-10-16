export const BASE_URL = "https://api.alexandrina.tech/v1";

export async function getContent(params = '', props = {}) {
  try {
    const res = await fetch(`${BASE_URL}/${params}`, props)
    return res.json()
  } catch (e) {
    console.log(e)
  }
}

export async function postQuestion(body) {
  try {
    await fetch(`${BASE_URL}/leads/question`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
    return true
  } catch (e) {
    return new Error(e)
  }
}

export async function postMain(body) {
  try {
    await fetch(`${BASE_URL}/leads/main`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
    return true
  } catch (e) {
    return new Error(e)
  }
}
