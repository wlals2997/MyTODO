const quotes=[
    {
        quote:"훌륭한 가르침은 1/4이 준비 과정, 3/4은 현장에서 이루어진다.",
        autor:"Gail Godwin-게일 고드윈",
    },
    {
        quote:"명성을 쌓는 데는 20년이란 세월이 걸리며, 명성을 무너뜨리는 데는 채 5분도 걸리지 않는다. 그걸 명심한다면, 당신의 행동이 달라질 것이다.",
        autor:"Warren Buffett-워런 버핏",
    },
    {
        quote:"공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.",
        autor:"Bill Gates-빌 게이츠",
    },
    {
        quote:"개인적으로 나는 언제나 배울 준비가 되어 있지만 가르침 받는 것을 항상 좋아하는 것은 아니다.",
        autor:"Sir Winston Churchill-윈스턴 처칠",
    },
    {
        quote:"할 수 있는 자는 행한다. 할 수 없는 자는 가르친다.",
        autor:"George Bernard Shaw-조지 버나드 쇼",
    },
    {
        quote:"99도까지 열심히 온도를 올려놓아도 마지막 1도를 넘기지 못하면 물이 끓지 않는다. 물을 끓이는 건 마지막 1도, 포기하고 싶은 바로 그1분이다.",
        autor:"김연아",
    },
    {
        quote:"학생이 되기를 멈춘 자는 한 번도 학생인 적이 없었던 자이다.",
        autor:"George Iles-조르지오 일리스",
    },
    {
        quote:"누구나 다 읽기를 배우게 하면 하면 결국 글쓰기 뿐 아니라 사고도 망쳐버릴 것이다.",
        autor:"Friedrich Nietzsche-프레드리히 니체",
    },
    {
        quote:"많은 공부와 지식이 곧 지혜로 연결되는 것은 아니다.",
        autor:"Heraclitus-헤라클레이토스",
    },
    {
        quote:"행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        autor:"Genghis Khan-칭기즈칸",
    },
]
const quote=document.querySelector('#quote span:first-child');
const author=document.querySelector('#quote span:last-child');


const todayQuotes=quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText =todayQuotes.quote;
author.innerText = todayQuotes.autor;