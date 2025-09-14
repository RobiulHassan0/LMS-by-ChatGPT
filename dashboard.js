
// Dummy Data
const coursesData = [{
    title: "ওয়েব ডেভেলপমেন্ট",
    progress: 75
}, {
    title: "জাভাস্ক্রিপ্ট মাস্টারক্লাস",
    progress: 40
}, {
    title: "রিয়্যাক্ট ফর বিগিনার",
    progress: 10
}, {
    title: "পূর্ণ স্ট্যাক ওয়েব ডেভেলপমেন্ট",
    progress: 60
}, {
    title: "রিয়্যাক্ট জেএস বেসিক থেকে প্রফেশনাল",
    progress: 80
}, ];

const quizResultsData = [{
    course: "ওয়েব ডেভেলপমেন্ট",
    score: "৮৫%"
}, {
    course: "জাভাস্ক্রিপ্ট মাস্টারক্লাস",
    score: "৭০%"
}, ];

const certificatesData = ["HTML ফান্ডামেন্টাল", "CSS বেসিকস", "HTML & CSS ব্যাসিক - ✅ প্রাপ্ত"];

const learningHistoryData = [{
    course: "ওয়েব ডিজাইন",
    date: "৫ই আগস্ট, ২০২৫"
}, {
    course: "CSS Animations",
    date: "১০ই আগস্ট, ২০২৫"
}, ];

const liveClassesData = [{
    title: "জাভাস্ক্রিপ্ট ডম ম্যানিপুলেশন",
    date: "১৫ সেপ্টেম্বর, রাত ৮টা"
}, {
    title: "React Props vs State",
    date: "১৭ সেপ্টেম্বর, রাত ৯টা"
}, ];

const renderCourses = () => {
    const container = document.getElementById("courses");
    container.innerHTML = "";
    coursesData.forEach(course => {
        const courseEl = document.createElement("div");
        courseEl.className = "p-4 bg-indigo-50 dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition";
        const isComplete = course.progress === 100;
        courseEl.innerHTML = `
        <div class="flex justify-between mb-1">
            <span class="font-semibold text-lg text-indigo-700 dark:text-indigo-400">${course.title}</span>
            <span class="font-medium">${course.progress}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div class="bg-primary h-2 rounded-full transition-all duration-500" style="width: ${course.progress}%;"></div>
        </div>
        ${isComplete ? `<div class="text-green-500 animate-bounceOnce mt-1">✅ কোর্স সম্পন্ন হয়েছে!</div>` : ''}
    `;
        container.appendChild(courseEl);
    });
};

const renderQuizResults = () => {
    const ul = document.getElementById("quiz-results");
    ul.innerHTML = "";
    quizResultsData.forEach(result => {
        const li = document.createElement("li");
        li.textContent = `${result.course}: ${result.score}`;
        ul.appendChild(li);
    });
};

const renderCertificates = () => {
    const ul = document.getElementById("certificates");
    ul.innerHTML = "";
    certificatesData.forEach(cert => {
        const li = document.createElement("li");
        li.textContent = cert;
        ul.appendChild(li);
    });
};

const renderHistory = () => {
    const ul = document.getElementById("history");
    ul.innerHTML = "";
    learningHistoryData.forEach(entry => {
        const li = document.createElement("li");
        li.className = "ml-2";
        li.innerHTML = `<span class="text-primary font-semibold">${entry.course}</span><br><small class="text-gray-500 dark:text-gray-400">${entry.date}</small>`;
        ul.appendChild(li);
    });
};

const renderLiveClasses = () => {
    const container = document.getElementById("live-classes");
    container.innerHTML = "";
    liveClassesData.forEach(cls => {
        const div = document.createElement("div");
        div.className = "bg-gray-100 dark:bg-gray-700 p-3 rounded";
        div.innerHTML = `<strong class="text-gray-900 dark:text-gray-100">${cls.title}</strong><br><small class="text-gray-600 dark:text-gray-400">${cls.date}</small>`;
        container.appendChild(div);
    });
};

const toggleTheme = () => {
    document.body.classList.toggle("dark");
};

const showToast = () => {
    const toast = document.getElementById("toast");
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 5000);
};

// Init Render
renderCourses();
renderQuizResults();
renderCertificates();
renderHistory();
renderLiveClasses();
showToast();
