Reference : https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h

https://tailwindcss.com/docs/installation/framework-guides

npm init
npm install -D tailwindcss  (-D akan di simpan ke depedency development)
npx tailwindcss init (inisialisasi tailwind config) (node package execute)
---- optional jika error
npm install -D tailwindcss postcss autoprefixer
---- optional jika error



build (for prod)
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch


D:\__________________CODE\GIT\eki-latihan-tailwind-css\package.json
    "start:minify" : "npx tailwindcss -o ./public/css/final.css --minify",
    "start:dev" : "npx tailwindcss -i ./src/input.css -o ./public/css/style.css --watch",
    "start:dev-default" : "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
    "start:dev-root" : "npx tailwindcss -i ./input.css -o ./output.css --watch",