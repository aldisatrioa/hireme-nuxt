<template>
  <div class="bg-gray-300 flex">
    <aside
      class="
        basis-1/4
        bg-white
        h-screen
        flex
        sticky
        top-0
        bottom-0
        flex-col
        space-y-7
        p-8
        shadow-lg
      "
    >
      <SideNavigation />
    </aside>
    <section class="basis-3/4 bg-[#fafafa] container mx-auto p-8">
      <Content />
    </section>
    <aside
      class="basis-2/4 bg-white h-screen sticky top-0 bottom-0 overflow-auto"
    >
      <SideJobDetail />
    </aside>
  </div>
</template>
