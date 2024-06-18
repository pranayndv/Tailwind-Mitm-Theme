var scrollingComponent = document.getElementById('scrollingComponent');
var navlogo = document.getElementById('navlogo');
var navitems = document.getElementById('navitems');
var search = document.getElementById('search');
var loaderLine = document.getElementById('loader-line');

window.addEventListener('scroll', function() {
  // Adjust the scroll threshold as needed
  var scrollThreshold = 120;

  if (window.scrollY > scrollThreshold) {
    scrollingComponent.classList.add('fixed');
    scrollingComponent.classList.add('w-[100%]');
    scrollingComponent.classList.add('h-[3rem]');
    scrollingComponent.classList.add('bg-orange-200');
    navitems.classList.add('mt-[-1.5rem]');
    navitems.classList.add('ml-[2rem]');
    navlogo.classList.remove('hidden');
    search.classList.remove('hidden');
    loaderLine.classList.remove('hidden');

  } else {
    scrollingComponent.classList.remove('fixed');
    scrollingComponent.classList.remove('bg-orange-200');
    scrollingComponent.classList.remove('w-[100%]');
    scrollingComponent.classList.remove('h-[3rem]');
    navitems.classList.remove('mt-[-1.5rem]');
    navitems.classList.remove('ml-[2rem]');
    navlogo.classList.add('hidden');
    search.classList.add('hidden');
    loaderLine.classList.add('hidden');
  }
});
 
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