var imagens = 
[
    "eu.jpg",
    "mãe.jpg",
    "pai.jpg",
    "family.jpg"
];

var nomes = 
[
    "EU",
    "MÃE",
    "PAI",
    "FAMÍLIA"
];

var i = 0;
function next()
{
    document.getElementById("membros").innerHTML = nomes[i];
    document.getElementById("familia").src = imagens[i];
    i++;
    
    if (i>=4)
    
    {
      i = 0;
    }
}

