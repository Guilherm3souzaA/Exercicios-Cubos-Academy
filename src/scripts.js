const cepInput = document.querySelector('#cep-input');
const ufInput = document.querySelector('#uf-input');
const cidadeInput = document.querySelector('#cidade-input');
const ruaInput = document.querySelector('#rua-input');




cepInput.addEventListener('change', function () {
    const promiseResposta = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);
    if (cepInput.value.length !== 8) {
        console.log('Erro');
        return;
    }
    promiseResposta.then(function (resposta) {

        if (!resposta.ok) {
            console.log('erro2');
            return;
        }

        const promiseBody = (resposta.json());

        promiseBody.then(function (body) {

            if (body.erro) {
                console.log("erro");
                return;
            }

            ufInput.value = body.uf;
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        });
    });
});




// bairro: "Sé"
// cep: "01001-000"
// complemento: "lado ímpar"
// ddd: "11"
// gia: "1004"
// ibge: "3550308"
// localidade: "São Paulo"
// logradouro: "Praça da Sé"
// siafi: "7107"
// uf: "SP"