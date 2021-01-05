<template>
    <div class="header">
    <nav class="bg-black py-2 md:py-4">
        <div class="px-4 mx-auto md:flex md:items-center">
        <div class="flex justify-between items-center">
            <a href="/"> <img class="h-10 w-20 ml-6" src="../assets/img/logo-putih.png"></a>
            <!-- burger for mobile -->
            <button class="border border-solid border-gray-200 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i class="fas fa-bars"></i></button> 
        </div>
        <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <a href="/" class="p-2 lg:px-4 md:mx-2 text-black text-bold bg-white">Home</a>
            <a href="/menus" class="p-2 lg:px-4 md:mx-2 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors text-bold duration-300">Menus</a>
            <a href="/promotion" class="p-2 lg:px-4 md:mx-2 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors text-bold duration-300">Promotion</a>
        </div>
        </div>
    </nav>
    </div>
</template>

<script>
  export default {
    mounted () {
      let toggleBtn = document.querySelector("#navbar-toggle");
      let collapse = document.querySelector("#navbar-collapse");

        toggleBtn.onclick = () => {
            collapse.classList.toggle("hidden");
            collapse.classList.toggle("flex");
        };
    }
  }
  
</script>

<style>

</style>