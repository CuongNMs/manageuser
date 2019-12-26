

export async function getUsers() {
    try {
      let response = await fetch('http://192.168.0.128:3000/users')
      let responseJson = await response.json()
      let arrayUsers = [];
      for(let i = 0; i <responseJson.length; i++){
        arrayUsers.push(responseJson[i])
      }
      return arrayUsers;
    } catch (error) {
      console.error(error);
    }
  }