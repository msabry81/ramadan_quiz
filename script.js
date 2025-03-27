// قائمة الأسئلة الكاملة
let originalQuestions = [
    { q: "من لُقب بـ أول سفراء الإسلام؟", options: ["مصعب بن عمير", "سلمان الفارسي", "بلال بن رباح", "عبد الله بن عمرو"], a: "مصعب بن عمير" },
    { q: "من كان يُعرف بـ الباحث عن الحقيقة؟", options: ["سلمان الفارسي", "أبو ذر الغفاري", "معاذ بن جبل", "عبد الله بن عمر"], a: "سلمان الفارسي" },
    { q: "من هو زعيم المعارضة وعدو الثروات؟", options: ["أبو ذر الغفاري", "بلال بن رباح", "سعد بن أبي وقاص", "عبد الله بن عمر"], a: "أبو ذر الغفاري" },
    { q: "من هو الساخر من الأهوال؟", options: ["بلال بن رباح", "سعيد بن عامر", "حمزة بن عبد المطلب", "عبد الله بن مسعود"], a: "بلال بن رباح" },
    { q: "من هو المثابر، الأواب؟", options: ["عبد الله بن عمر", "معاذ بن جبل", "سعيد بن عامر", "عبد الله بن مسعود"], a: "عبد الله بن عمر" },
    { q: "من هو الأسد في براثنه؟", options: ["سعد بن أبي وقاص", "صهيب بن سنان", "معاذ بن جبل", "المقداد بن عمرو"], a: "سعد بن أبي وقاص" },
    { q: "من قال له النبي: ربح البيع يا أبا يحيى؟", options: ["صهيب بن سنان", "عبد الله بن رواحة", "حذيفة بن اليمان", "عمار بن ياسر"], a: "صهيب بن سنان" },
    { q: "من هو أعلمهم بالحلال والحرام؟", options: ["معاذ بن جبل", "حذيفة بن اليمان", "زيد بن ثابت", "سعيد بن عامر"], a: "معاذ بن جبل" },
    { q: "من هو أول فرسان الإسلام؟", options: ["المقداد بن عمرو", "الزبير بن العوام", "خالد بن الوليد", "طلحة بن عبيد الله"], a: "المقداد بن عمرو" },
    { q: "من هو العظمة تحت الأسمال؟", options: ["سعيد بن عامر", "بلال بن رباح", "زيد بن ثابت", "أبو عبيدة بن الجراح"], a: "سعيد بن عامر" },
    { q: "من هو أسد الله وسيد الشهداء؟", options: ["حمزة بن عبد المطلب", "سعد بن معاذ", "عبادة بن الصامت", "جعفر بن أبي طالب"], a: "حمزة بن عبد المطلب" },
    { q: "من هو أول صادح بالقرآن؟", options: ["عبد الله بن مسعود", "خباب بن الأرت", "أبي بن كعب", "زيد بن ثابت"], a: "عبد الله بن مسعود" },
    { q: "من هو عدو النفاق وصديق الوضوح؟", options: ["حذيفة بن اليمان", "عمار بن ياسر", "عبد الله بن عمر", "أبو عبيدة بن الجراح"], a: "حذيفة بن اليمان" },
    { q: "من هو رجل من الجنة؟", options: ["عمار بن ياسر", "سعيد بن عامر", "أبو الدرداء", "جعفر بن أبي طالب"], a: "عمار بن ياسر" },
    { q: "من هو نقيب في حزب الله؟", options: ["عبادة بن الصامت", "زيد بن الخطاب", "سعد بن عبادة", "أسامة بن زيد"], a: "عبادة بن الصامت" },
    { q: "من هو أستاذ فن الفداء؟", options: ["خباب بن الأرت", "زيد بن الخطاب", "عبد الله بن عباس", "جعفر بن أبي طالب"], a: "خباب بن الأرت" },
    { q: "من هو أمين هذه الأمة؟", options: ["أبو عبيدة بن الجراح", "عثمان بن مظعون", "زيد بن حارثة", "عبد الله بن رواحة"], a: "أبو عبيدة بن الجراح" },
    { q: "من هو راهب صومعته الحياة؟", options: ["عثمان بن مظعون", "عبد الله بن رواحة", "زيد بن حارثة", "حبيب بن زيد"], a: "عثمان بن مظعون" },
    { q: "من هو لم يحب حبه أحد؟", options: ["زيد بن حارثة", "جعفر بن أبي طالب", "عبد الله بن رواحة", "سعد بن معاذ"], a: "زيد بن حارثة" },
    { q: "من هو أشبهت خلقي وخلقي؟", options: ["جعفر بن أبي طالب", "زيد بن حارثة", "عبد الله بن رواحة", "عمير بن سعد"], a: "جعفر بن أبي طالب" },
    { q: "من هو جامع القرآن؟", options: ["زيد بن ثابت", "عبد الله بن عباس", "أبي بن كعب", "سالم مولى أبي حذيفة"], a: "زيد بن ثابت" },
    { q: "من هو الحب بن الحب؟", options: ["أسامة بن زيد", "جعفر بن أبي طالب", "زيد بن حارثة", "عبد الله بن رواحة"], a: "أسامة بن زيد" },
    { q: "من هو حبر هذه الأمة؟", options: ["عبد الله بن عباس", "أبي بن كعب", "عبد الله بن عمرو بن العاص", "سالم مولى أبي حذيفة"], a: "عبد الله بن عباس" },
    { q: "من هو محرر مصر من الرومان؟", options: ["عمرو بن العاص", "عمر بن الخطاب", "الزبير بن العوام", "المقداد بن عمرو"], a: "عمرو بن العاص" },
    { q: "من هو خطيب رسول الله؟", options: ["ثابت بن قيس", "أبو موسى الأشعري", "أبي بن كعب", "سعيد بن عامر"], a: "ثابت بن قيس" }
];



let questions = [];  // مصفوفة ديناميكية للأسئلة
let currentIndex = 0;
let team1Score = 0;
let team2Score = 0;
let currentTeam = 1;
let selectedAnswer = null;
const TOTAL_ROUNDS = 40;  // 40 سؤال

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function prepareQuestions() {
    // نسخ الأسئلة الأصلية وخلطها
    questions = shuffleArray([...originalQuestions]).slice(0, 40);
}

function loadQuestion() {
    if (currentIndex >= TOTAL_ROUNDS || questions.length === 0) {
        endGame();
        return;
    }

    let questionData = questions[0];
    document.getElementById("question").innerText = questionData.q;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    // خلط الخيارات
    let shuffledOptions = shuffleArray([...questionData.options]);
    
    shuffledOptions.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.className = "option-btn";
        btn.onclick = () => selectAnswer(btn, option);
        optionsDiv.appendChild(btn);
    });

    // تحديث عرض الفريق الحالي
    document.getElementById("current-team").innerText = `دور الفريق ${currentTeam}`;

    // إعادة تعيين الحالة
    selectedAnswer = null;
    document.getElementById("next-btn").disabled = true;
}

function selectAnswer(btnElement, answer) {
    // إزالة التحديد السابق
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
    });

    selectedAnswer = answer;
    
    if (answer === questions[0].a) {
        btnElement.classList.add('correct');
        // إضافة نقطة للفريق الحالي
        if (currentTeam === 1) {
            team1Score++;
            document.getElementById("team1-score").innerText = `الفريق الأول: ${team1Score}`;
        } else {
            team2Score++;
            document.getElementById("team2-score").innerText = `الفريق الثاني: ${team2Score}`;
        }
    } else {
        btnElement.classList.add('incorrect');
        // إظهار الإجابة الصحيحة
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.innerText === questions[0].a) {
                btn.classList.add('correct');
            }
        });
    }
    
    // تمكين زر التالي
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    // إزالة السؤال الأول بعد الإجابة عليه
    questions.shift();
    currentIndex++;
    
    // تبديل الفريق
    currentTeam = currentTeam === 1 ? 2 : 1;

    // تحميل السؤال التالي
    loadQuestion();
}

function endGame() {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("game-end").style.display = "flex";
    
    let winnerText = team1Score > team2Score ? "الفريق الأول" :
                     team2Score > team1Score ? "الفريق الثاني" : "التعادل";
    
    document.getElementById("winner").innerText = `الفائز: ${winnerText}`;
}

function restartGame() {
    // إعادة تجهيز الأسئلة
    prepareQuestions();

    // إعادة تعيين حالة اللعبة
    currentIndex = 0;
    team1Score = 0;
    team2Score = 0;
    currentTeam = 1;

    // إعادة تعيين عرض النقاط
    document.getElementById("team1-score").innerText = "الفريق الأول: 0";
    document.getElementById("team2-score").innerText = "الفريق الثاني: 0";

    // إخفاء شاشة النهاية وإظهار المسابقة
    document.getElementById("game-end").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";

    // تحميل أول سؤال
    loadQuestion();
}

// تجهيز الأسئلة عند بدء اللعبة
prepareQuestions();

// تحميل أول سؤال
loadQuestion();