window.addEventListener('load', function () {
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('nav');
  hamburger.addEventListener('click', function () {
    navigation.classList.toggle('active');
    navigation.classList.toggle('inactive')
  });
})

