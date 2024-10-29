const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const rowColumns = document.getElementById('row-columns')

// console.log(rowColumns)

// console.log(teamMembers)

for (let i = 0; i < teamMembers.length; i ++) {

  let currentElement = teamMembers[i]

  //console.log(i, currentElement)


  rowColumns.innerHTML += 
  `
            <div class="col-sm-12 col-md-4">
                <div class="card text-bg-dark mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-4">
                        <img src="${currentElement.img}" class="img-fluid rounded-start" alt="">
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h5 class="card-title">${currentElement.name}</h5>
                          <p class="card-text">${currentElement.role}</p>
                          <p class="card-text"><small class="text-body-primary">${currentElement.email}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
`
}

//CONST

const formElement = document.getElementById('new-member-form')

const formName = document.getElementById('name')

const formRole = document.getElementById('role')

const formEmail = document.getElementById('email')

// console.log(formElement, formName, formRole, formEmail)

formElement.addEventListener('submit', function (event){

  

  event.preventDefault()

  

  const newName = formName.value

  const newRole = formRole.value

  const newEmail = formEmail.value

  //console.log(newName, newEmail, newRole)

  const newMember = {

    name: newName,

    role: newRole,

    email: newEmail,

    img: 'https://picsum.photos/200'
  }

  teamMembers.push(newMember)

  console.log(teamMembers)

  rowColumns.innerHTML += 
  `
            <div class="col-sm-12 col-md-4">
                <div class="card text-bg-dark mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-4">
                        <img src="${newMember.img}" class="img-fluid rounded-start" alt="">
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h5 class="card-title">${newMember.name}</h5>
                          <p class="card-text">${newMember.role}</p>
                          <p class="card-text"><small class="text-body-primary">${newMember.email}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
`

})


  
