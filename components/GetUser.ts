

export async function getUsers() {
    try {
      let response = await fetch('http://192.168.0.128:3000/users')
      let responseJson = await response.json()
      //console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }