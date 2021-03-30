let number = 0
let area = 0
let circumference = 0
const Pi = 3.14159265

document.getElementById('button').addEventListener('click', click)
function click () {
  number = document.getElementById('input').value
  number = parseInt(number)
  if (isNaN(number) || (isNaN(area)) || (isNaN(circumference))) output.textContent = 'you did not enter the diameter'
  area = number / 2 ** 2 * Pi
  circumference = number / 2 * Pi * 2
  output.textContent = 'Area =' + area
  output2.textContent = 'Circumference =' + circumference
}
