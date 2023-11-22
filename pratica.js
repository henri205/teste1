function caulcular(raio) {
    area = Math. PI + Math.pow(raio,2);
    return area;       
}

raio = 100;
area = caulcular(raio);
console.log("area da cincunferencia: " + area);
console.log("valor de PI:  "+ Math.PI);
