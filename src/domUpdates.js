let domUpdates = {
  displayGreetUser(user){
    // const userName = document.getElementById('userGreeting');
    // userName.innerHTML = `Welcome ${user.name}!`;
    userInfo.insertAdjacentHTML('afterbegin',
    `<h3 class="user-greeting" id="userGreeting">Welcome ${user.name}!</h3>
    <p class="total-spent" id="totalSpent">You have spent a total of: ${user.hotelTotalSpent} !</p>`)
  },
  displayCurrentDate(date) {
    hotelInfo.insertAdjacentHTML('afterbegin',
    `<h1>Overlook Hotel</h1>
    <p>${date}</p>`)
  }
  // displayTotalSpent(user){
  //   const userTotalSpent = document.getElementById('totalSpent');
  //   userTotalSpent.innerHTML = `You have spent a total of: $ ${user.hotelTotalSpent}`;
  // },
  // populateCardsView(recipes, cardArea, ) {
  // cardArea.innerHTML = '';
  // if (cardArea.classList.contains('all')) {
  //   cardArea.classList.remove('all')
  // }
  // recipes.forEach(recipe => {
  //   cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
  //   class='card'>
  //       <header id='${recipe.id}' class='card-header'>
  //         <label for='add-button' class='hidden'>Click to add recipe</label>
  //         <button id='${recipe.id}' aria-label='add-button' class='add-button card${recipe.id} card-button'>
  //           <img id='${recipe.id} favorite' class='add'
  //           src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
  //           recipes to cook'>
  //         </button>
  //         <label for='favorite-button' class='hidden'>Click to favorite recipe
  //         </label>
  //         <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
  //       </header>
  //         <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
  //         <img id='${recipe.id}' tabindex='0' class='card-picture'
  //         src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
  //   </div>`)
  // })
  // }
}

export default  domUpdates;
