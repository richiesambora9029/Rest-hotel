<template>
  <div>
    <section
      class="banner h-auto md:h-full bg-center md:px-10 flex items-center justify-center h-auto md:h-screen mb-12 bg-fixed bg-center bg-cover">
      <!-- h-auto md:h-full bg-center md:px-10 -->
      <div class="container">
        <div class=" px-10 py-16  bg-white bg-opacity-5 max-w-2xl rounded-xl bg-clip-padding"
          style="backdrop-filter: blur(15px);">
          <h1 class="text-2xl md:p-3 md:text-4xl text-white tracking-wider font-semibold">Enjoy a Million Taste With
            The Picasso</h1>
          <button
            class="bg-green-800 md:p-3 md:ml-3 text-white px-5 py-2 mt-2 mb-2 font-semibold transition duration-700 ease-in-out hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110">Tour
            With Us</button>
        </div>
      </div>
    </section>

    <section class="popularls">
      <div class="py-4 px-2 my-5 mx-auto text-center">
        <h1 class="text-2xl tracking-wider Font-semibold placeholder-gray-700::placeholder">Popular Category</h1>
        <h3 class="text-sm tracking-wider font-thin">Best Food on your Plate with miliion of taste</h3>
      </div>
      <div class="swiper-container w-4/5 mx-auto my-20 bg-white text-white">
        <div class="swiper-wrapper">
          <div class="swiper-slide content-cat1 h-48 bg-center mr-4 md::mr-0">
            <h3 class=" text-2xl pt-16 text-center">Indonesian Food</h3>
          </div>
          <div class="swiper-slide content-cat2 h-48 bg-center mr-4 md::mr-0">
            <h3 class=" text-2xl pt-16 text-center"> Coffee</h3>
          </div>
          <div class="swiper-slide content-cat3 h-48 bg-center mr-4 md::mr-0">
            <h3 class=" text-2xl pt-16 text-center">Thailand Food</h3>
          </div>
        </div>
      </div>

    </section>
    <!-- bestdhseh -->
    <section class="best-dishes">
      <div class="py-4 px-2 mt-3 text-center md:ml-4">
        <h1 class="text-2xl tracking-wider Font-semibold placeholder-gray-700::placeholder">Our Best Dishes</h1>
        <h3 class="text-sm tracking-wider font-thin capitalize">Just For you, We Make a food with love</h3>
      </div>
      <div class="content-container grid grid-cols-2 px-5 py-12 text-white capitalize">
        <div class="content-ds1 bg-blue-300 md:ml-56 h-64 md:max-w-2xl bg-center mx-2 bg-cover">
          <a href="/items"><h3 class="text-2xl mt-24 text-center bg-white bg-opacity-5 rounded- items-center justify-center bg-clip-padding"
          style="backdrop-filter: blur(15px);">Sate Ayam Madura</h3></a>
        </div>
        <div class="space-y-3 grid grid-row-2 md:max-w-lg">
          <div class="content-ds2 bg-blue-300 h-8/10 w-auto bg-center ">
            <h3 class=" text-md mt-16 text-center bg-white bg-opacity-5 rounded- items-center justify-center bg-clip-padding"
          style="backdrop-filter: blur(15px);">Americano with milk</h3>
          </div>
          <div class="content-ds3 bg-blue-300 h-8/10 w-auto bg-center">
            <h3 class=" text-md mt-16 text-center bg-white bg-opacity-5 rounded- items-center justify-center bg-clip-padding"
          style="backdrop-filter: blur(15px);">Sup Iga</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="promotion">
      <div class="py-4 px-2 mt-5 text-center md:ml-4">
        <h1 class="text-2xl tracking-wider Font-semibold placeholder-gray-700::placeholder">Promotion</h1>
        <h3 class="text-sm tracking-wider font-thin capitalize">Just For you, Best Offer for you for now and forever
        </h3>
      </div>

      <div class="swiper-container w-4/5 mx-auto my-30 bg-white text-white">
        <div class="swiper-wrapper">
          <!-- slide Start -->
          <div class="swiper-slide flex flex-wrap mx-4 my-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden ">
                <img class=" content-pro1 bg-center object-cover object-center h-full w-full lg:max-w-2xl">
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">All Meat Disc 20%</h2>
              <p class="leading-relaxed text-black">Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.</p>
              <button
                class="flex mx-auto mt-6 text-white bg-green-800 border-0 py-2 px-5 focus:outline-none hover:bg-green-500 rounded">Read More</button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden ">
                <img class=" content-pro2 bg-center object-cover object-center h-full w-full lg:max-w-2xl">
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Cashback 25% for Americano Variants</h2>
              <p class="leading-relaxed text-black">Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.</p>
              <button
                class="flex mx-auto mt-6 text-white bg-green-800 border-0 py-2 px-5 focus:outline-none hover:bg-green-500 rounded">Read More</button>
            </div>
          </div>
          <!-- slide End -->
        </div>
      </div>

    </section>
  </div>
</template>

<script>
  export default {
    mounted() {
      var mySwiper = new Swiper('.swiper-container');
    }
  }

</script>

<style>
  .banner {
    background-image: url('~assets/img/bg1.jpg');
    background-repeat: no-repeat;
    background-size: 2100px;
  }

  .content-cat1 {
    background-image: url('~assets/img/cat1.jpg');
    background-size: 600px;
    background-repeat: no-repeat;
  }

  .content-cat2 {
    background-image: url('~assets/img/cat2.png');
    background-size: 600px;
    background-repeat: no-repeat;
  }

  .content-cat3 {
    background-image: url('~assets/img/cat3.jpg');
    background-size: 600px;
    background-repeat: no-repeat;
  }

  .content-ds1 {
    background-image: url('~assets/img/cat1.jpg');
    background-size: 700px;
    background-repeat: no-repeat;

  }

  .content-ds2 {
    background-image: url('~assets/img/cat2.png');
    background-size: 510px;
    background-repeat: no-repeat;
  }

  .content-ds3 {
    background-image: url('~assets/img/cat3.jpg');
    background-size: 510px;
    background-repeat: no-repeat;
  }

  .content-pro1 {
    background-image: url('~assets/img/pro1.jpg');
    background-size: 670px;
    background-repeat: no-repeat;
  }

  .content-pro2 {
    background-image: url('~assets/img/pro2.jpg');
    background-size: 670px;
    background-repeat: no-repeat;
  }


  /* .container {
margin: 0 auto;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}

.title {
font-family:
'Quicksand',
'Source Sans Pro',
-apple-system,
BlinkMacSystemFont,
'Segoe UI',
Roboto,
'Helvetica Neue',
Arial,
sans-serif;
display: block;
font-weight: 300;
font-size: 100px;
color: #35495e;
letter-spacing: 1px;
}

.subtitle {
font-weight: 300;
font-size: 42px;
color: #526488;
word-spacing: 5px;
padding-bottom: 15px;
}

.links {
padding-top: 15px;
} */

</style>
