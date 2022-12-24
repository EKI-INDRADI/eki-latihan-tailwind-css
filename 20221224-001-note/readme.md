Reference : https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h


boostrap = ui framwork utility (utility gak lengkap) & component
tailwind = utility-first framework

tailwind css = sebuah utility-first css framework yang di dalamnya terdapat class2
componenet-fist = sebuah tools yang di dalamnya dapat dibuat/sudah ada class2 seperti buatan/custom css sendiri (CSS biasa)
utility-first = css tailwind yang buat (user cuma panggil class dari tailwind) = class yang berfungsi untuk melakukan persis 1 hal saja


p-6 = padding 6
max-w-sm = with maximal dengan lebar small
mx-auto = untuk memberi margin pada sumbu x dengan size auto

```
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-1g flex items-center
space-x-4"> 
<div class="shrink-@"> 
<ing class="h-12 w-12" src="/ing/logo.svg" alt="ChitChat Logo"> 
</div> 
<div> 
<div class="text-x1 font-medium text-black">ChitChat</div> 
<p class="text-gray-500">You have a new message!</p>
</div> 
</div> 
```




tailwind css2 =  sebuah framework yang dapat membuat website tanpa menyentuh CSS



Preflight = reset css default
Layout
Flexbox & Grid
Spacing & Sizing = margin  & padding
typography = untuk ngatur font
background & borders
Effect & Filters
Transition, ransformation & Animation
Tables


Sizing  example :
```
<div class="space-y-4"> 
<div class="w-96 bg-white shadow rounded">
w-96
</div>
<div class="w-80 bg-white shadow rounded"> 
w-80 
</div> 
<div class="w-72 bg-white shadow rounded">
w-72
</div> 
<div class="w-64 bg-white shadow rounded"> 
w-64
</div>
<div class="w-60 bg-white shadow rounded">
w-60 
</div> 
<div class= "w-56 bg-white shadow rounded">
w-56
</div>
```

Colour example :

```
<div class="grid grid-cols-10 gap-2">
<div class="bg-sky-50 aspect-square"></div> 
<div class="bg-sky-100 aspect-square"></div> 
<div class= “bg-sky-200 aspect-square”></div>
<div class="bg-sky-300 aspect-square”></div> 
<0iv class="bg-sky-490 aspect-square"></div>
<div class="bg-sky-500 aspect-square”></div> 
<div class= "bg-sky-600 aspect-square"></div> 
<div class="bg-sky-700 aspect-square"></div>
<div class="bg-sky-800 aspect-square"></div>
<div class="bg-sky-900 aspect-square></div>
</div> 
div class="grid grid-cols-10 gap-2 
div class=“bg-blue-50 aspect-square”></div>
div class="bg-blue-100 aspect-square”></div>
div class="bg-blue-200 aspect-square”></div>
div class="bg-blue-300 aspect-square”></ div:
```

lengkapnya https://tailwindcss.com/docs/installation/framework-guides



features :
interactivy = membuat interaksi menggunakan utility classnya
responsive design = mudah responsive design
dark mode = mudah dark mode
reusability = jika elemnt html kita di jadikan sebuah component, agar dapat digunakan berulang kali gunakan reusability
custom styles = custom tailwind css
functions & Directives = SASS


interactivy : 

button example
```
<button class-"bg-sky-600 hover:bg-sky-700 ...
Save changes
</button>
```

Pseudo-classes
hover,focus,active,first,last, ...

pseudo-element
before, after, placeholder, file , selection, ...

example  class="placeholder:..."