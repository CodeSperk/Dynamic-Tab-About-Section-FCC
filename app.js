const btns = document.querySelectorAll('.tab-btn');
const sectionDetails = document.querySelector('.sec-details');
const tabDetails = document.querySelectorAll('.tab-details')


sectionDetails.addEventListener('click', function (e){
  const id = e.target.dataset.id;
  if(id){
    btns.forEach(btn => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    })
    //hide other articles
    tabDetails.forEach((article) =>{
      article.classList.add('hidden');  
    })
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
})
