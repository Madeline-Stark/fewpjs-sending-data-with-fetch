// Add your code here
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };

let configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function(response){
      return response.json() //converts from json to pojo
  })
  .then(function(object) {
      console.log(object)
  })
  .catch(function(error) {
      alert("bad!")
      console.log(error.message)
  })

  function submitData(userName, userEmail){

    const formData = {
        name: userName,
        email: userEmail
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', configObj) //need to return fetch b/c test checking promises
        .then(function(resp) {
            return resp.json()
        })
        .then(function(object){
            const id = object.id
            document.body.innerHTML += id
        })
        .catch(function(error){
            document.body.innerHTML += error.message
        })
  }

