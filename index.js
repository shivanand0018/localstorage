function submit1(event)
{
    event.preventDefault();
    console.log(document.getElementById('FirstName').value)
    localStorage.setItem('firstName',document.getElementById('FirstName').value)
    console.log(localStorage.getItem('firstName'))
    localStorage.setItem('Email',document.getElementById('Email').value)
    console.log(localStorage.getItem('Email'))
    localStorage.setItem('lastName',document.getElementById('lastName').value)
    console.log(localStorage.getItem('lastName'))
    
}

