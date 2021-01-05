<template>
  <div>
    <div class="container">
      <div class="py-4 px-2 my-5 mx-auto text-center">
        <h1 class="text-2xl tracking-wider Font-semibold placeholder-gray-700::placeholder">Our Menu</h1>
        <h3 class="text-sm tracking-wider font-thin">Best Food on your Plate with miliion of taste</h3>
        <div class="invisible md:visible sorting h-30 w-auto">
          <div class="mb-3 pt-0 mx-2 mt-2">
            <input type="text" placeholder="Name"
              class="px-2 py-1 placeholder-gray-900 placeholder-opacity-100 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline " />
            <select
              class="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline">
              <option>Category</option>
              <option>Indonesian Food</option>
              <option>Italian Food</option>
              <option>Beverage</option>
            </select>
            <select
              class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline">
              <option>Price</option>
              <option>50.000</option>
              <option>100.000</option>
              <option>200.000</option>
            </select>
            <button
            class="inline-block px-8 py-1 text-xs font-medium leading-6 text-center text-black transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-green-200 focus:outline-none"
          >
            Sort
          </button>
          </div>
        </div>

        <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow md:hidden h-10">
          <div id="tabs" class="flex justify-between px-3 lg:px-5 py-1">
            <input type="text" placeholder="Name"
              class=" w-20 px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline " />
            <select
              class="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline">
              <option>Category</option>
              <option>Indonesian Food</option>
              <option>Italian Food</option>
              <option>Beverage</option>
            </select>
            <select
              class="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline">
              <option>Price</option>
              <option>50.000</option>
              <option>100.000</option>
              <option>200.000</option>
            </select>
          </div>
        </section>
      </div>
    </div>


    <div class=" flex-grow list-menu grid lg:grid-cols-3 lg:gap-4 my-10 mx-10">

      <!-- Menu -->

      <div class="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg  my-2 mx-auto">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <div class="content-cat1 h-48 md:h-full w-full bg-center object-cover md:w-48 ">
              <div class="bg-white py-2 w-4/12 md:w-4/6 rounded-md opacity-40">
                <div class=" text-xs text-center font-bold mx-2 opacity-100">Indonesian</div>
              </div>
            </div>
          </div>
          <div class="p-8">
            <a href="#" class="block mt-1 text-lg md:text-sm leading-tight font-medium text-black hover:underline">Sate
              Ayam
              Madura</a>
            <p class="mt-2 text-gray-500 md:text-xs mb-5 max-w-md">Getting a new business off the ground is a lot of hard work.
              Here
              are five ideas you can use to find your first customers.</p>
            <div class="tracking-wide h-10 w-20 text-lg text-green-500 font-bold ">10K</div>
          </div>
        </div>
      </div>

      <!-- Menu 2-->
      <div class="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg my-2 mx-auto">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <div class="content-cat2 h-48 md:h-full w-full bg-center object-cover md:w-48 ">
              <div class="bg-white py-2 w-4/12 md:w-4/6 rounded-md opacity-40">
                <div class=" text-xs text-center font-bold mx-2 opacity-100">Coffee</div>
              </div>
            </div>
          </div>
          <div class="p-8">
            <a href="#"
              class="block mt-1 text-lg md:text-sm leading-tight font-medium text-black hover:underline">Arabica
              Machiato</a>
            <p class="mt-2 text-gray-500 md:text-xs mb-5 max-w-md">Getting a new business off the ground is a lot of hard work.
              Here
              are five ideas you can use to find your first customers.</p>
            <div class="tracking-wide h-10 w-20 text-lg text-green-500 font-bold ">25K</div>
          </div>
        </div>
      </div>

      <!-- Menu 2-->
      <div class="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg my-2 mx-auto">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <div class="content-cat4 h-48 md:h-full w-full bg-center object-cover md:w-48 ">
              <div class="bg-white py-2 w-4/12 md:w-4/6 rounded-md opacity-40">
                <div class=" text-xs text-center font-bold mx-2 opacity-100">Chinese</div>
              </div>
            </div>
          </div>
          <div class="p-8">
            <a href="#" class="block mt-1 text-lg md:text-sm leading-tight font-medium text-black hover:underline">Bakmi
              ChongYun
            </a>
            <p class="mt-2 text-gray-500 md:text-xs mb-5 max-w-md">Getting a new business off the ground is a lot of hard work.
              Here
              are five ideas you can use to find your first customers.</p>
            <div class="tracking-wide h-10 w-20 text-lg text-green-500 font-bold ">50K</div>
          </div>
        </div>
      </div>

      <!-- Menu 4-->
      <div class="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg my-2 mx-auto">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <div class="content-cat4 h-48 md:h-full w-full bg-center object-cover md:w-48 ">
              <div class="bg-white py-2 w-4/12 md:w-4/6 rounded-md opacity-40">
                <div class=" text-xs text-center font-bold mx-2 opacity-100">Chinese</div>
              </div>
            </div>
          </div>
          <div class="p-8">
            <a href="#" class="block mt-1 text-lg md:text-sm leading-tight font-medium text-black hover:underline">Bakmi
              ChongYun
            </a>
            <p class="mt-2 text-gray-500 md:text-xs mb-5 max-w-md">Getting a new business off the ground is a lot of hard work.
              Here
              are five ideas you can use to find your first customers.</p>
            <div class="tracking-wide h-10 w-20 text-lg text-green-500 font-bold ">50K</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

  .content-cat4 {
    background-image: url('~assets/img/cat4.jpg');
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
    background-size: 700px;
    background-repeat: no-repeat;
  }

</style>
