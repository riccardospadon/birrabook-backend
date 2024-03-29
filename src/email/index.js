const HTMLVerifyEmail = (token, id) => /*html*/ `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Transactional Email </title>

        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

    </head>
    <body>
        <div class="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
            <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
                <h3 class="text-2xl">Grazie per esserti registrato su Birrabook!!</h3>
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-green-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                </div>

                <p>Siamo felici che tu sia qui. Verifica il tuo indirizzo email:</p>
                <div class="mt-4">
                    <button class="px-2 py-2 text-blue-200 bg-blue-600 rounded">Click to Verify Email</button>
                    <p class="mt-4 text-sm">Se hai problemi a cliccare su "Verifica il tuo indirizzo email, 
                    copia e incolla l'URL qui sotto all'interno del tuo browser
                        <a href="https://birrabook.netlify.app/?token=${token}&userId=${id}" class="text-blue-600 underline">  CLICCA QUI</a>
                        <!-- INSERIRE QUI IL LINK DOPO IL DEPLOY DENTRO <a href=""></a> -->
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>
`

export default HTMLVerifyEmail