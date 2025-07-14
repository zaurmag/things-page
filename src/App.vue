<script setup lang="ts"></script>

<template>
  <div class="page">
    <div class="container">
      <header class="header-blocks">
        <!-- User things selected -->
        <div class="block">
          <p class="block__info">Selected: 4/10</p>
        </div>

        <!-- Things available selected -->
        <div class="block"></div>
      </header>

      <main class="main-blocks">
        <!-- User things -->
        <div class="block">
          <div class="block item">Item</div>
          <div class="block block--active item">Item</div>
          <div class="block item">Item</div>
          <div class="block item">Item</div>
        </div>

        <!-- Available things -->
        <div class="block"></div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
$active-color: #8e62b8;

.page {
  display: grid;
  justify-items: center;
  height: 100%;
}

.container {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto 1fr;
  max-width: 1024px;
  width: 100%;
  padding: 15px;
}

.header-blocks {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  justify-content: space-between;
}

.block {
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;
  align-items: start;
  border: 4px solid #222;
  padding: 10px;
  text-align: center;

  &__info {
    font-size: 18px;
    justify-self: end;
  }

  &--active {
    border-color: $active-color;
    color: $active-color;
  }
}

.main-blocks {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}
</style>
