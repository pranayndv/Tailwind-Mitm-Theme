var scrollingComponent = document.getElementById('scrollingComponent');
var navlogo = document.getElementById('navlogo');
var navitems = document.getElementById('navitems');
var subitems = document.getElementById('subitems');
var search = document.getElementById('search');
var loaderLine = document.getElementById('loader-line');

window.addEventListener('scroll', function() {
  // Adjust the scroll threshold as needed
  var scrollThreshold = 120;

  if (window.scrollY > scrollThreshold) {
    scrollingComponent.classList.add('fixed');
    scrollingComponent.classList.add('w-[100%]');
    scrollingComponent.classList.add('h-[3rem]');
    scrollingComponent.classList.add('bg-blue-600');
    scrollingComponent.classList.add('text-[.9rem]');
    navitems.classList.add('md:mt-[0.7rem]');
    navitems.classList.add('mt-[-2.5rem]');
    navitems.classList.add('md:ml-[2rem]');
    // after responsive
    // subitems.classList.add('space-y-10');
    // subitems.classList.add('mdw-[76vw]');
    // subitems.classList.add('ml-[-13rem]');
    navlogo.classList.remove('hidden');
    search.classList.remove('hidden');
    loaderLine.classList.remove('hidden');

  } else {
    scrollingComponent.classList.remove('fixed');
    scrollingComponent.classList.remove('bg-orange-200');
    scrollingComponent.classList.remove('w-[100%]');
    scrollingComponent.classList.remove('h-[3rem]');
    scrollingComponent.classList.remove('text-[.9rem]');
    navitems.classList.remove('md:mt-[0.7rem]');
    navitems.classList.remove('mt-[-2.5rem]');
    navitems.classList.remove('md:ml-[2rem]');
    // after responsive
    // subitems.classList.remove('space-y-10');
    // subitems.classList.remove('w-[76vw]');
    // subitems.classList.remove('ml-[-13rem]');
    navlogo.classList.add('hidden');
    search.classList.add('hidden');
    loaderLine.classList.add('hidden');

  }
});

//loderline
function loderlineClass() {

}
 
// for hamburger
function changeClass() {
  var element = document.getElementById('navitems');
  if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('block');
  } else {
      element.classList.remove('block');
      element.classList.add('hidden');
  }

  var element = document.getElementById('loader-line');
  if (element.classList.contains('mt-[-2rem]')) {
      element.classList.remove('mt-[-2rem]');
      element.classList.add('mt-[-34rem]');
  } else {
      element.classList.remove('mt-[-34rem]');
      element.classList.add('mt-[-2rem]');
  }
}

var texts = [
        "मेट्रोपॉलिटन इंस्टीट्यूट ऑफ टेक्नोलोजी अँड मॅनेजमेंट",
        "METROPOLITAN INSTITUTE OF TECHNOLOGY & MANAGEMENT",
        // Add more texts as needed
    ];

    var currentIndex = 0;
    var dynamicTextElement = document.getElementById('dynamicText');

    function changeText() {
        dynamicTextElement.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Change text every 3 seconds (adjust as needed)
    setInterval(changeText, 3000);

    // Optional: Stop automatic text change on button click
    dynamicTextElement.addEventListener('click', function() {
        clearInterval(textChangeInterval);
    });

        // JavaScript to pause carousel on hover
