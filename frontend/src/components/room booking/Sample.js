const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.occupied)");
  const count = document.getElementById("count");
  const total = document.getElementById("total");
  const floorSelect = document.getElementById("floor");

  
  let tPrice 
  if(tPrice!=null)
  {
    tPrice=parseInt(floorSelect.value);
  }
  else{
    tPrice=null;
  }
 
  
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .selected");
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * tPrice;
  }
  
  floorSelect.addEventListener("change", (e) => {
    
      tPrice = parseInt(e.target.value);
      updateSelectedCount(); 
    
  });
  
  container.addEventListener("click", (e) => {
    console.log(e);
    if(e===null)
    {
      e.target.classList.toggle("occupied");
      updateSelectedCount();
    }
   else if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      e.target.classList.toggle("selected");
      updateSelectedCount();
    }
  });