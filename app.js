// Получаем элементы музыкантов
const musicians = document.querySelectorAll('.musician');

// Массив звуков
const sounds = ['guitar', 'violin', 'flute'];

let soundInstances = {}; // Объект для хранения экземпляров Audio

musicians.forEach((musician, i) => {
    let isPlaying = false; // Начальное состояние: музыка не играет
    soundInstances[musician.id] = null; // Инициализация пустого значения

    musician.addEventListener('click', () => toggleSound(musician.id));
});

// Функция для включения/отключения звука
function toggleSound(id) {
    if (!soundInstances[id] || !soundInstances[id].currentTime) { // Проверяем, существует ли активный поток
        const audio = new Audio(`./sounds/${sounds[id.slice(-1)]}.wav`);
        audio.loop = true; // Бесконечное воспроизведение
        audio.play(); // Начинаем играть
        soundInstances[id] = audio; // Сохраняем ссылку на текущий поток
    } else { // Иначе останавливаем существующий поток
        soundInstances[id].pause(); // Останавливаем воспроизведение
        soundInstances[id].currentTime = 0; // Возвращаемся в начало трека
        soundInstances[id] = null; // Удаляем ссылку на поток
    }
}
