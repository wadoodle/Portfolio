let clicks = 0;
window.addEventListener('load', function () {
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('nav');

  hamburger.addEventListener('click', function () {
    clicks += 1;
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');

    if(clicks === 2) {
      console.log('here');
      navigation.classList.add('inactive');
      hamburger.classList.add('inactive');
    } else if(clicks > 2) {
      navigation.classList.toggle('inactive');
      hamburger.classList.toggle('inactive');
    }

  });
})

