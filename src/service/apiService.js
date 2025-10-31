const api_key = "f36babfbc53080cae424cc75490061b7";
const url = `https://api.openweathermap.org/data/2.5/weather`;

function obterLocalizacao() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocalização não é suportada neste navegador"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => reject(error)
    );
  });
}

export async function obterClima() {
  try {
    const { latitude, longitude } = await obterLocalizacao();

    const response = await fetch(
      `${url}?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=pt_br`
    );

    if (!response.ok) {
      throw new Error(`Erro na resposta: ${response.status}`);
    }

    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error("Erro ao obter clima:", error);
    throw error;
  }
}
