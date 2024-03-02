//CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
      display.value += input;
}

function clearDisplay(){
    display.value="";

}

function calculate() {
    try {
        // Kullanıcı girdisi bir fonksiyon oluşturmak için kullanılıyor
        const calculationFunction = new Function('return ' + display.value);
        // Oluşturulan fonksiyon çağrılıyor ve sonuç alınıyor
        const result = calculationFunction();
        // Sonuç ekranda gösteriliyor
        display.value = result;
    } catch (error) {
        // Hata durumunda "Error" mesajı gösteriliyor
        display.value = "Error";
    }
}
