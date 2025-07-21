// TeamPulse Analytics - Complete Enhanced Version
// Comprehensive team analysis with sociometric data visualization

// ===== Language Translations =====
const translations = {
    uk: {
        'mobile.title': 'Для кращого досвіду',
        'mobile.description': 'Рекомендуємо переглядати на комп\'ютері для повного функціоналу візуалізації',
        'mobile.continue': 'Продовжити на мобільному',
        'logo.subtitle': 'VQ & IM Team Insights',
        'nav.visualizations': 'Візуалізації',
        'nav.3d': '3D Простір',
        'nav.force': 'Силовий граф',
        'nav.circular': 'Кругова',
        'nav.heatmap': 'Теплова карта',
        'nav.development': 'Розвиток команди',
        'nav.analysis': 'Глибокий аналіз',
        'nav.metrics': 'Метрики команди',
        'nav.glossary': 'Глосарій',
        'filters.title': 'Фільтри',
        'filters.positive': 'Позитивні зв\'язки',
        'filters.negative': 'Негативні зв\'язки',
        'filters.incoming': 'Вхідні оцінки',
        'filters.outgoing': 'Вихідні оцінки',
        'filters.focusPerson': 'Фокус на особі:',
        'filters.allMembers': 'Всі учасники',
        'metrics.title': 'Ключові метрики',
        'metrics.teamHealth': 'Здоров\'я команди',
        'metrics.friction': 'Індекс тертя',
        'metrics.clarity': 'Ясність ролей',
        'metrics.engagement': 'Залученість',
        'actions.title': 'Дії',
        'actions.pauseAnimation': 'Пауза анімації',
        'actions.playAnimation': 'Продовжити анімацію',
        'actions.screenshot': 'Скріншот',
        'actions.fullscreen': 'На весь екран',
        'actions.export': 'Експорт даних',
        'actions.toggleLegend': 'Приховати/Показати легенду',
        'titles.3d': '3D Простір команди',
        'titles.force': 'Силова діаграма зв\'язків',
        'titles.circular': 'Кругова візуалізація',
        'titles.heatmap': 'Теплова карта взаємодій',
        'titles.development': 'Розвиток команди',
        'titles.analysis': 'Глибинний аналіз',
        'titles.metrics': 'Детальні метрики команди',
        'titles.glossary': 'Глосарій термінів',
        'legend.title': 'Легенда',
        'legend.positive': 'Позитивний зв\'язок',
        'legend.negative': 'Негативний зв\'язок',
        'legend.leader': 'Лідер/Керівник',
        'legend.mutual': 'Взаємний топ-3',
        'info3d.structure': 'Командна структура',
        'info3d.clickInstruction': 'Клікніть на члена команди для детальної інформації',
        'quick.positive': 'Позитивні',
        'quick.negative': 'Негативні',
        'quick.influence': 'Вплив',
        'quick.details': 'Детальніше',
        'member.competencies': 'Оцінки компетенцій',
        'member.communication': 'Комунікація',
        'member.leadership': 'Лідерство',
        'member.trust': 'Довіра',
        'member.collaboration': 'Співпраця',
        'member.conflict': 'Вирішення конфліктів',
        'member.development': 'Індекси розвитку',
        'member.connections': 'Соціометричні зв\'язки',
        'member.preferredColleagues': 'Бажані колеги',
        'member.leastPreferredColleagues': 'Найменш бажані колеги',
        'member.keyQuote': 'Ключова цитата',
        'member.professionalProfile': 'Професійний профіль',
        'member.strengths': 'Сильні сторони',
        'member.challenges': 'Виклики',
        'member.developmentZone': 'Зона розвитку',
        'member.keyInsight': 'Ключовий інсайт',
        'member.quadrantAnalysis': 'Квадрант-аналіз',
        'member.psychology': 'Психологічний профіль',
        'member.development': 'План розвитку',
        'member.sociometricData': 'Соціометричні дані',
        'member.meanRank': 'Середній ранг',
        'member.stdDev': 'Стандартне відхилення',
        'member.top3Count': 'Входжень в топ-3',
        'member.statusScore': 'Статусний бал',
        'member.selfPerceptionMAE': 'Похибка самосприйняття',
        'member.bias': 'Зміщення оцінки',
        'member.accuracy': 'Точність ±1',
        'quadrant.highPerformers': 'Високопродуктивні',
        'quadrant.developmentNeeded': 'Потребують розвитку',
        'quadrant.underutilized': 'Недовикористані',
        'quadrant.delegationReady': 'Готові до делегування',
        'psychology.motivators': 'Фактори мотивації',
        'psychology.demotivators': 'Фактори демотивації',
        'psychology.conflictStyle': 'Стиль поведінки в конфліктах',
        'psychology.risks': 'Ризики непродуктивної поведінки',
        'development.title': 'Індивідуальний план розвитку',
        'glossary.meanRank': 'Середній ранг',
        'glossary.meanRankDesc': 'Середнє значення рангів (1-8), які людина отримує від інших членів команди. Чим нижче значення, тим вища позиція в ієрархії.',
        'glossary.mae': 'MAE (Mean Absolute Error)',
        'glossary.maeDesc': 'Середня абсолютна похибка між передбаченим і фактичним рангом. Показує, наскільки точно людина оцінює своє сприйняття іншими.',
        'glossary.statusScore': 'Статусний бал',
        'glossary.statusScoreDesc': 'Зважений показник статусу (0-1). Розраховується як сума вхідних ваг поділена на максимум. Чим вище, тим вищий статус.',
        'glossary.bias': 'Bias (Зміщення)',
        'glossary.biasDesc': 'Різниця між фактичним і передбаченим рангом. Позитивне значення = переоцінка свого статусу, негативне = недооцінка.',
        'glossary.top3': 'Топ-3 входження',
        'glossary.top3Desc': 'Кількість разів, коли людина потрапляє в топ-3 за оцінками колег (ранги 1, 2 або 3).',
        'glossary.gini': 'Індекс Джині',
        'glossary.giniDesc': 'Міра нерівності розподілу (0-1). В контексті команди показує ступінь концентрації влади/довіри.',
        'notification.welcome': 'Ласкаво просимо до TeamPulse Analytics! 🚀',
        'notification.viewReset': 'Вигляд скинуто',
        'notification.screenshotCreating': 'Створення скріншоту...',
        'notification.screenshotSaved': 'Скріншот збережено!',
        'notification.screenshotError': 'Помилка створення скріншоту',
        'notification.fullscreenEnabled': 'Повноекранний режим увімкнено',
        'notification.fullscreenDisabled': 'Повноекранний режим вимкнено',
        'notification.dataExported': 'Дані експортовано успішно!',
        'notification.animationPaused': 'Анімацію призупинено',
        'notification.animationResumed': 'Анімацію відновлено',
        'notification.legendToggled': 'Видимість легенди змінено'
    },
    en: {
        'mobile.title': 'For Better Experience',
        'mobile.description': 'We recommend viewing on a computer for full visualization functionality',
        'mobile.continue': 'Continue on Mobile',
        'logo.subtitle': 'VQ & IM Team Insights',
        'nav.visualizations': 'Visualizations',
        'nav.3d': '3D Space',
        'nav.force': 'Force Graph',
        'nav.circular': 'Circular',
        'nav.heatmap': 'Heat Map',
        'nav.development': 'Team Development',
        'nav.analysis': 'Deep Analysis',
        'nav.metrics': 'Team Metrics',
        'nav.glossary': 'Glossary',
        'filters.title': 'Filters',
        'filters.positive': 'Positive Connections',
        'filters.negative': 'Negative Connections',
        'filters.incoming': 'Incoming Ratings',
        'filters.outgoing': 'Outgoing Ratings',
        'filters.focusPerson': 'Focus on Person:',
        'filters.allMembers': 'All Members',
        'metrics.title': 'Key Metrics',
        'metrics.teamHealth': 'Team Health',
        'metrics.friction': 'Friction Index',
        'metrics.clarity': 'Role Clarity',
        'metrics.engagement': 'Engagement',
        'actions.title': 'Actions',
        'actions.pauseAnimation': 'Pause Animation',
        'actions.playAnimation': 'Resume Animation',
        'actions.screenshot': 'Screenshot',
        'actions.fullscreen': 'Fullscreen',
        'actions.export': 'Export Data',
        'actions.toggleLegend': 'Toggle Legend',
        'titles.3d': '3D Team Space',
        'titles.force': 'Force Connection Diagram',
        'titles.circular': 'Circular Visualization',
        'titles.heatmap': 'Interaction Heat Map',
        'titles.development': 'Team Development',
        'titles.analysis': 'Deep Analysis',
        'titles.metrics': 'Detailed Team Metrics',
        'titles.glossary': 'Terms Glossary',
        'legend.title': 'Legend',
        'legend.positive': 'Positive Connection',
        'legend.negative': 'Negative Connection',
        'legend.leader': 'Leader/Manager',
        'legend.mutual': 'Mutual Top-3',
        'info3d.structure': 'Team Structure',
        'info3d.clickInstruction': 'Click on a team member for detailed information',
        'quick.positive': 'Positive',
        'quick.negative': 'Negative',
        'quick.influence': 'Influence',
        'quick.details': 'Details',
        'member.competencies': 'Competency Scores',
        'member.communication': 'Communication',
        'member.leadership': 'Leadership',
        'member.trust': 'Trust',
        'member.collaboration': 'Collaboration',
        'member.conflict': 'Conflict Resolution',
        'member.development': 'Development Indices',
        'member.connections': 'Sociometric Connections',
        'member.preferredColleagues': 'Preferred Colleagues',
        'member.leastPreferredColleagues': 'Least Preferred Colleagues',
        'member.keyQuote': 'Key Quote',
        'member.professionalProfile': 'Professional Profile',
        'member.strengths': 'Strengths',
        'member.challenges': 'Challenges',
        'member.developmentZone': 'Development Zone',
        'member.keyInsight': 'Key Insight',
        'member.quadrantAnalysis': 'Quadrant Analysis',
        'member.psychology': 'Psychological Profile',
        'member.development': 'Development Plan',
        'member.sociometricData': 'Sociometric Data',
        'member.meanRank': 'Mean Rank',
        'member.stdDev': 'Standard Deviation',
        'member.top3Count': 'Top-3 Entries',
        'member.statusScore': 'Status Score',
        'member.selfPerceptionMAE': 'Self-Perception Error',
        'member.bias': 'Bias',
        'member.accuracy': 'Accuracy ±1',
        'quadrant.highPerformers': 'High Performers',
        'quadrant.developmentNeeded': 'Development Needed',
        'quadrant.underutilized': 'Underutilized',
        'quadrant.delegationReady': 'Delegation Ready',
        'psychology.motivators': 'Motivational Factors',
        'psychology.demotivators': 'Demotivational Factors',
        'psychology.conflictStyle': 'Conflict Behavior Style',
        'psychology.risks': 'Unproductive Behavior Risks',
        'development.title': 'Individual Development Plan',
        'glossary.meanRank': 'Mean Rank',
        'glossary.meanRankDesc': 'Average of ranks (1-8) a person receives from other team members. Lower value means higher position in hierarchy.',
        'glossary.mae': 'MAE (Mean Absolute Error)',
        'glossary.maeDesc': 'Average absolute error between predicted and actual rank. Shows how accurately a person estimates their perception by others.',
        'glossary.statusScore': 'Status Score',
        'glossary.statusScoreDesc': 'Weighted status indicator (0-1). Calculated as sum of incoming weights divided by maximum. Higher means higher status.',
        'glossary.bias': 'Bias',
        'glossary.biasDesc': 'Difference between actual and predicted rank. Positive = overestimating status, negative = underestimating.',
        'glossary.top3': 'Top-3 Entries',
        'glossary.top3Desc': 'Number of times a person is in top-3 by colleagues\' ratings (ranks 1, 2, or 3).',
        'glossary.gini': 'Gini Index',
        'glossary.giniDesc': 'Measure of distribution inequality (0-1). In team context shows degree of power/trust concentration.',
        'notification.welcome': 'Welcome to TeamPulse Analytics! 🚀',
        'notification.viewReset': 'View reset',
        'notification.screenshotCreating': 'Creating screenshot...',
        'notification.screenshotSaved': 'Screenshot saved!',
        'notification.screenshotError': 'Screenshot error',
        'notification.fullscreenEnabled': 'Fullscreen mode enabled',
        'notification.fullscreenDisabled': 'Fullscreen mode disabled',
        'notification.dataExported': 'Data exported successfully!',
        'notification.animationPaused': 'Animation paused',
        'notification.animationResumed': 'Animation resumed',
        'notification.legendToggled': 'Legend visibility changed'
    }
};

// ===== Real Sociometric Data =====
const sociometricData = {
    '1001': { // Alex
        meanRankOwnership: 1.50,
        meanRankTrust: 1.63,
        stdOwnership: 0.71,
        stdTrust: 0.86,
        top3CountOwnership: 8,
        top3CountTrust: 8,
        statusScoreOwnership: 0.938,
        statusScoreTrust: 0.922,
        selfMAEOwnership: 0.25,
        selfMAETrust: 0.38,
        biasOwnership: 0.25,
        biasTrust: 0.38,
        accuracyOwnership: 100,
        accuracyTrust: 87.5
    },
    '1004': { // Igor
        meanRankOwnership: 2.38,
        meanRankTrust: 2.00,
        stdOwnership: 1.87,
        stdTrust: 1.00,
        top3CountOwnership: 7,
        top3CountTrust: 7,
        statusScoreOwnership: 0.828,
        statusScoreTrust: 0.875,
        selfMAEOwnership: 0.88,
        selfMAETrust: 0.50,
        biasOwnership: 0.38,
        biasTrust: 0.00,
        accuracyOwnership: 75,
        accuracyTrust: 87.5
    },
    '1006': { // Rami
        meanRankOwnership: 3.50,
        meanRankTrust: 3.50,
        stdOwnership: 1.22,
        stdTrust: 1.66,
        top3CountOwnership: 5,
        top3CountTrust: 5,
        statusScoreOwnership: 0.688,
        statusScoreTrust: 0.688,
        selfMAEOwnership: 0.88,
        selfMAETrust: 1.00,
        biasOwnership: 0.38,
        biasTrust: -0.25,
        accuracyOwnership: 75,
        accuracyTrust: 75
    },
    '1007': { // Nik
        meanRankOwnership: 5.50,
        meanRankTrust: 4.38,
        stdOwnership: 1.58,
        stdTrust: 0.86,
        top3CountOwnership: 2,
        top3CountTrust: 1,
        statusScoreOwnership: 0.493,
        statusScoreTrust: 0.478,
        selfMAEOwnership: 2.25,
        selfMAETrust: 2.25,
        biasOwnership: 2.25,
        biasTrust: 2.25,
        accuracyOwnership: 50,
        accuracyTrust: 37.5
    },
    '1002': { // Oleg
        meanRankOwnership: 4.88,
        meanRankTrust: 5.00,
        stdOwnership: 1.62,
        stdTrust: 1.73,
        top3CountOwnership: 2,
        top3CountTrust: 2,
        statusScoreOwnership: 0.516,
        statusScoreTrust: 0.500,
        selfMAEOwnership: 1.50,
        selfMAETrust: 1.50,
        biasOwnership: 1.25,
        biasTrust: 1.25,
        accuracyOwnership: 50,
        accuracyTrust: 50
    },
    '1009': { // Antonia
        meanRankOwnership: 4.75,
        meanRankTrust: 4.75,
        stdOwnership: 1.79,
        stdTrust: 2.05,
        top3CountOwnership: 2,
        top3CountTrust: 2,
        statusScoreOwnership: 0.531,
        statusScoreTrust: 0.531,
        selfMAEOwnership: 1.63,
        selfMAETrust: 1.75,
        biasOwnership: 0.13,
        biasTrust: 0.50,
        accuracyOwnership: 75,
        accuracyTrust: 62.5
    },
    '1003': { // Maivi
        meanRankOwnership: 5.13,
        meanRankTrust: 5.13,
        stdOwnership: 1.69,
        stdTrust: 1.76,
        top3CountOwnership: 1,
        top3CountTrust: 2,
        statusScoreOwnership: 0.484,
        statusScoreTrust: 0.484,
        selfMAEOwnership: 1.63,
        selfMAETrust: 1.63,
        biasOwnership: -0.38,
        biasTrust: -0.38,
        accuracyOwnership: 50,
        accuracyTrust: 50
    },
    '1008': { // Yana
        meanRankOwnership: 6.38,
        meanRankTrust: 6.75,
        stdOwnership: 1.41,
        stdTrust: 1.20,
        top3CountOwnership: 0,
        top3CountTrust: 0,
        statusScoreOwnership: 0.328,
        statusScoreTrust: 0.281,
        selfMAEOwnership: 0.63,
        selfMAETrust: 0.63,
        biasOwnership: -0.38,
        biasTrust: -0.13,
        accuracyOwnership: 75,
        accuracyTrust: 87.5
    },
    '1005': { // Viktoria
        meanRankOwnership: 7.50,
        meanRankTrust: 7.38,
        stdOwnership: 1.00,
        stdTrust: 0.86,
        top3CountOwnership: 0,
        top3CountTrust: 0,
        statusScoreOwnership: 0.188,
        statusScoreTrust: 0.203,
        selfMAEOwnership: 0.50,
        selfMAETrust: 1.38,
        biasOwnership: -0.50,
        biasTrust: 1.38,
        accuracyOwnership: 87.5,
        accuracyTrust: 37.5
    }
};

// ===== Mutual Top3 Connections =====
const mutualTop3Ownership = [
    ['1001', '1006'], ['1001', '1002'], ['1001', '1004'], 
    ['1002', '1004'], ['1004', '1006'], ['1006', '1007']
];

const mutualTop3Trust = [
    ...mutualTop3Ownership,
    ['1003', '1009']
];

// ===== Enhanced Team Data with Real Metrics =====
const teamData = {
    members: [
        {
            id: '1001',
            code: '1001',
            name: 'Alex Klymenko',
            firstName: 'Alex',
            role: 'Main Sales Manager',
            company: 'Vagoteq',
            department: 'Sales',
            level: 'Senior',
            scores: { communication: 4, leadership: 4, trust: 5, collaboration: 4, conflict: 4 },
            preferred: [],
            leastPreferred: [],
            innovator: false,
            leader: true,
            quote: 'У нас немає структурованих та чітких обов\'язків між колегами, що призводить до проблем у комунікації.',
            insights: {
                strength: 'Лідерство у продажах, глибоке залучення в проекти, дух співпраці',
                challenge: 'Брак "структурованих обов\'язків"; потребує більше часу на управління',
                development: 'Структуроване управління: перехід до справжнього менеджера через чіткі цілі',
                keyInsight: 'Абсолютний лідер команди з надзвичайною концентрацією довіри та очікувань.'
            },
            motivators: ['Team achievement', 'Process improvement', 'Professional growth', 'Trust'],
            demotivators: ['Unclear responsibilities', 'Time pressure', 'Interpersonal conflicts'],
            conflictStyle: 'Accommodating',
            conflictDescription: 'Схильний поступатися заради гармонії, що може накопичувати невирішені питання.',
            risks: [
                { type: 'Надцентралізація', level: 'high', description: '"Горло пляшки" в ухваленні рішень' },
                { type: 'Перфекціонізм', level: 'low', description: 'Затримки через прагнення ідеального результату' }
            ],
            ...sociometricData['1001']
        },
        {
            id: '1004',
            code: '1004',
            name: 'Igor Bordunov',
            firstName: 'Igor',
            role: 'Tender Manager',
            company: 'Intermastra',
            department: 'Operations',
            level: 'Senior',
            scores: { communication: 3, leadership: 4, trust: 4, collaboration: 3, conflict: 3 },
            preferred: [],
            leastPreferred: [],
            innovator: true,
            leader: false,
            quote: 'Колегам потрібно відчувати більше відповідальності за завдання, які вони виконують.',
            insights: {
                strength: 'Інноваційність, системне мислення, управління тендерами',
                challenge: 'Вважає, що колегам бракує відповідальності; його важко переконати',
                development: 'Спільний вплив: розвиток навичок комунікації для впровадження ідей',
                keyInsight: 'Найсильніший міжкомпанійний міст, критичний клей між VQ та IM.'
            },
            motivators: ['Innovation implementation', 'System efficiency', 'Professional expertise', 'Independence'],
            demotivators: ['Resistance to change', 'Lack of accountability', 'Inefficient processes'],
            conflictStyle: 'Competing',
            conflictDescription: 'Наполегливий у відстоюванні своєї позиції, може створювати напругу.',
            risks: [
                { type: 'Перевантаження', level: 'high', description: 'Виснаження від невидимої координації' },
                { type: 'Ригідність', level: 'medium', description: 'Непоступливість у поглядах' }
            ],
            ...sociometricData['1004']
        },
        {
            id: '1006',
            code: '1006',
            name: 'Rami Mando',
            firstName: 'Rami',
            role: 'Sales Manager',
            company: 'Intermastra',
            department: 'Sales',
            level: 'Middle',
            scores: { communication: 5, leadership: 5, trust: 5, collaboration: 5, conflict: 5 },
            preferred: [],
            leastPreferred: [],
            innovator: false,
            leader: false,
            insights: {
                strength: 'Позитивна взаємодія, закупівлі, сильні відносини',
                challenge: 'Не бачить комунікаційних бар\'єрів',
                development: 'Культурний амбасадор: модель позитивної співпраці',
                keyInsight: 'Стабільний топ-3, збалансований міст середнього рівня між компаніями.'
            },
            motivators: ['Positive relationships', 'Team harmony', 'Professional growth', 'Stability'],
            demotivators: ['Conflict', 'Negative atmosphere', 'Lack of support'],
            conflictStyle: 'Collaborating',
            conflictDescription: 'Ефективно знаходить взаємовигідні рішення, сприяє командній гармонії.',
            risks: [
                { type: 'Надмірний оптимізм', level: 'low', description: 'Може не помічати реальних проблем' },
                { type: 'Конформізм', level: 'low', description: 'Уникання непопулярних, але необхідних рішень' }
            ],
            ...sociometricData['1006']
        },
        {
            id: '1007',
            code: '1007',
            name: 'Nik Sakhno',
            firstName: 'Nik',
            role: 'Procurement',
            company: 'Vagoteq',
            department: 'Operations',
            level: 'Middle',
            scores: { communication: 4, leadership: 5, trust: 4, collaboration: 4, conflict: 4 },
            preferred: [],
            leastPreferred: [],
            innovator: false,
            leader: false,
            quote: 'Велике навантаження на багатьох співробітників заважає виконувати роботу ефективно та за планом.',
            insights: {
                strength: 'Закупівлі, координація логістики, використання спільних інструментів',
                challenge: '"Велике навантаження" заважає ефективній роботі',
                development: 'Проактивна комунікація: підвищення прозорості процесів',
                keyInsight: 'Найгірша точність самооцінки (MAE=2.25), потенційний ґрунт для фрустрації.'
            },
            motivators: ['Efficiency', 'Clear timelines', 'Team support', 'Achievement'],
            demotivators: ['Overload', 'Unclear priorities', 'Interpersonal tensions'],
            conflictStyle: 'Compromising',
            conflictDescription: 'Готовий до компромісів, але може поступатися важливими принципами.',
            risks: [
                { type: 'Розчарування', level: 'high', description: 'При корекції завищених очікувань' },
                { type: 'Стрес', level: 'medium', description: 'Перевантаження через намагання всім догодити' }
            ],
            ...sociometricData['1007']
        },
        {
            id: '1002',
            code: '1002',
            name: 'Oleg Faleev',
            firstName: 'Oleg',
            role: 'Sales Manager',
            company: 'Vagoteq',
            department: 'Sales',
            level: 'Middle',
            scores: { communication: 5, leadership: 5, trust: 5, collaboration: 5, conflict: 5 },
            preferred: [],
            leastPreferred: [],
            innovator: true,
            leader: false,
            quote: 'Брак часу на створення детальних інструкцій.',
            insights: {
                strength: 'Управління CRM, створення інструкцій, сильна інтеграція',
                challenge: 'Брак часу на документацію процесів',
                development: 'Документація процесів: формалізація знань для підтримки колег',
                keyInsight: 'Стабільне переоцінювання (+1.25), ризик мікроменеджменту з боку лідера.'
            },
            motivators: ['Excellence', 'System building', 'Autonomy', 'Efficiency'],
            demotivators: ['Time constraints', 'Interruptions', 'Perceived incompetence'],
            conflictStyle: 'Competing',
            conflictDescription: 'Високі стандарти можуть створювати напругу з тими, хто не відповідає очікуванням.',
            risks: [
                { type: 'Нетерпимість', level: 'high', description: 'Критичність до колег з нижчими стандартами' },
                { type: 'Ізоляція', level: 'medium', description: 'Дистанціювання від "слабших" колег' }
            ],
            ...sociometricData['1002']
        },
        {
            id: '1009',
            code: '1009',
            name: 'Antonia Walter',
            firstName: 'Antonia',
            role: 'Internal Calculations',
            company: 'Vagoteq',
            department: 'Finance',
            level: 'Middle',
            scores: { communication: 4, leadership: 4, trust: 4, collaboration: 3, conflict: 2 },
            preferred: [],
            leastPreferred: [],
            innovator: false,
            leader: false,
            quote: 'Незрозумілі ролі та обов\'язки.',
            insights: {
                strength: 'Підтримка у розрахунках/ціноутворенні, готовність допомогти',
                challenge: 'Назвала свого керівника Alex як найменш бажаного колегу',
                development: 'Конструктивний конфлікт: навички формулювання потреб процесу',
                keyInsight: 'Висока поляризація думок (std trust 2.05), нестабільність сприйняття.'
            },
            motivators: ['Clear structure', 'Recognition of expertise', 'Work-life balance', 'Respect'],
            demotivators: ['Role ambiguity', 'Conflicting priorities', 'Lack of appreciation'],
            conflictStyle: 'Avoiding',
            conflictDescription: 'Уникає прямої конфронтації, накопичує фрустрацію всередині.',
            risks: [
                { type: 'Емоційне вигорання', level: 'high', description: 'Накопичення невисловлених претензій' },
                { type: 'Саботаж', level: 'low', description: 'Непряме вираження невдоволення' }
            ],
            ...sociometricData['1009']
        },
        {
            id: '1003',
            code: '1003',
            name: 'Maivi Cap',
            firstName: 'Maivi',
            role: 'Sales Manager',
            company: 'Vagoteq',
            department: 'Sales',
            level: 'Junior',
            scores: { communication: 3, leadership: 5, trust: 5, collaboration: 3, conflict: 3 },
            preferred: [],
            leastPreferred: [],
            innovator: true,
            leader: false,
            quote: 'Depends on with whom I talk...',
            insights: {
                strength: 'Продажі, розрахунки, допомога',
                challenge: 'Комунікаційні бар\'єри через "різні мови"',
                development: 'Чіткість ролі: визначення точної ролі та протоколів комунікації',
                keyInsight: 'Недооцінює себе (-0.38), потенціал для підняття через видимі micro-wins.'
            },
            motivators: ['Learning opportunities', 'Positive feedback', 'Clear communication', 'Belonging'],
            demotivators: ['Communication barriers', 'Feeling excluded', 'Unclear expectations'],
            conflictStyle: 'Accommodating',
            conflictDescription: 'Адаптується під співрозмовника, може втрачати власну позицію.',
            risks: [
                { type: 'Втрата ідентичності', level: 'medium', description: 'Надмірна адаптація під інших' },
                { type: 'Пасивність', level: 'high', description: 'Недостатня ініціативність' }
            ],
            ...sociometricData['1003']
        },
        {
            id: '1008',
            code: '1008',
            name: 'Yana',
            firstName: 'Yana',
            role: 'Personal Assistant',
            company: 'Vagoteq',
            department: 'Administration',
            level: 'Junior',
            scores: { communication: 5, leadership: 5, trust: 5, collaboration: 5, conflict: 5 },
            preferred: [],
            leastPreferred: [],
            innovator: false,
            leader: false,
            insights: {
                strength: 'Діє в інтересах команди, координує зустрічі',
                challenge: 'Жодних не виявлено',
                development: 'Формалізація систем підтримки',
                keyInsight: 'Низька видимість (0 входів в топ-3), ризик невидимості та демотивації.'
            },
            motivators: ['Being helpful', 'Organization', 'Appreciation', 'Clear tasks'],
            demotivators: ['Chaos', 'Being overlooked', 'Conflicting instructions'],
            conflictStyle: 'Accommodating',
            conflictDescription: 'Підтримує всіх, уникає конфліктів, створює позитивну атмосферу.',
            risks: [
                { type: 'Перевантаження', level: 'medium', description: 'Бере на себе забагато завдань' },
                { type: 'Невидимість', level: 'high', description: 'Внесок може бути недооцінений' }
            ],
            ...sociometricData['1008']
        },
        {
            id: '1005',
            code: '1005',
            name: 'Viktoria Hilova',
            firstName: 'Viktoria',
            role: 'Personal Assistant',
            company: 'Intermastra',
            department: 'Administration',
            level: 'Junior',
            scores: { communication: 5, leadership: 5, trust: 5, collaboration: 5, conflict: 5 },
            preferred: [],
            leastPreferred: [],
            innovator: false,
            leader: false,
            quote: 'Потреба в більш сучасних цифрових інструментах.',
            insights: {
                strength: 'Управління пріоритетами, організаційні навички',
                challenge: 'Стислі терміни; потреба в цифрових інструментах',
                development: 'Адвокація покращення процесів',
                keyInsight: 'Найнижча позиція, аномальні шаблонні передбачення (8/6) → потенційна апатія.'
            },
            motivators: ['Modern tools', 'Efficiency', 'Clear processes', 'Team support'],
            demotivators: ['Outdated systems', 'Inefficiency', 'Tight deadlines'],
            conflictStyle: 'Collaborating',
            conflictDescription: 'Конструктивно пропонує покращення, дипломатично вирішує питання.',
            risks: [
                { type: 'Вихід', level: 'high', description: 'Learned helplessness та демотивація' },
                { type: 'Вигорання', level: 'low', description: 'Через постійні стислі терміни' }
            ],
            ...sociometricData['1005']
        }
    ]
};

// Process mutual connections
mutualTop3Ownership.forEach(([id1, id2]) => {
    const member1 = teamData.members.find(m => m.id === id1);
    const member2 = teamData.members.find(m => m.id === id2);
    if (member1 && member2) {
        if (!member1.preferred.includes(id2)) member1.preferred.push(id2);
        if (!member2.preferred.includes(id1)) member2.preferred.push(id1);
    }
});

// Add remaining connections based on top3 count
teamData.members.forEach(member => {
    const targetCount = member.top3CountOwnership;
    while (member.preferred.length < Math.min(targetCount, 3)) {
        const potentialTarget = teamData.members.find(m => 
            m.id !== member.id && 
            !member.preferred.includes(m.id) &&
            m.meanRankOwnership < 4
        );
        if (potentialTarget) {
            member.preferred.push(potentialTarget.id);
        } else {
            break;
        }
    }
});

// Add some negative connections based on analysis
const negativeConnections = {
    'stas': ['1003', '1009'], // Stas → Maivi, Antonia
    'alex': ['1007'], // Alex → Nik
    'antonia': ['1001', '1002'], // Antonia → Alex, Oleg
    'oleg': ['1009', '1003'], // Oleg → Antonia, Maivi
    'igor': ['1002', '1007'], // Igor → Oleg, Nik
    'dany': ['1003', '1004'], // Dany → Maivi, Igor
    'nik': ['1004'], // Nik → Igor
    'maivi': ['1002'], // Maivi → Oleg
    'rami': ['1003'] // Rami → Maivi
};

// Add C-Level leaders
teamData.members.unshift(
    {
        id: 'stas',
        code: 'stas',
        name: 'Stas Sakhno',
        firstName: 'Stas',
        role: 'Shareholder / Strategy',
        company: 'Vagoteq',
        department: 'Management',
        level: 'C-Level',
        scores: { communication: 4, leadership: 3, trust: 5, collaboration: 3, conflict: 5 },
        preferred: ['1001', '1004'], // Alex, Igor
        leastPreferred: negativeConnections.stas || [],
        innovator: true,
        leader: true,
        quote: 'Відсутність відчуття відповідальності за свою сферу.',
        insights: {
            strength: 'Стратегічне бачення, інновації, юридична координація',
            challenge: 'Сприймає "відсутність відчуття відповідальності" в команді',
            development: 'Операціоналізація стратегії: перетворення високорівневих цілей на чіткі структури',
            keyInsight: 'Головний стратег, але вказав Maivi та Antonia як найменш бажаних.'
        },
        motivators: ['Innovation', 'Strategic impact', 'Autonomy', 'Results'],
        demotivators: ['Micromanagement', 'Lack of accountability', 'Slow decision-making'],
        conflictStyle: 'Competing',
        conflictDescription: 'Прямий, рішучий підхід. Швидко приймає рішення, може здаватись авторитарним.',
        risks: [
            { type: 'Авторитарність', level: 'medium', description: 'Може придушувати ініціативу інших' },
            { type: 'Ізоляція', level: 'low', description: 'Дистанціювання від операційних питань' }
        ],
        meanRankOwnership: 2.0,
        meanRankTrust: 2.2,
        stdOwnership: 0.9,
        stdTrust: 1.0,
        top3CountOwnership: 6,
        top3CountTrust: 6,
        statusScoreOwnership: 0.85,
        statusScoreTrust: 0.82,
        selfMAEOwnership: 0.5,
        selfMAETrust: 0.6,
        biasOwnership: 0.3,
        biasTrust: 0.4,
        accuracyOwnership: 85,
        accuracyTrust: 80
    },
    {
        id: 'dany',
        code: 'dany',
        name: 'Dany Mandou',
        firstName: 'Dany',
        role: 'External Sales Support',
        company: 'Intermastra',
        department: 'Sales',
        level: 'C-Level',
        scores: { communication: 3, leadership: 3, trust: 4, collaboration: 3, conflict: 4 },
        preferred: ['1001', '1006'], // Alex, Rami
        leastPreferred: negativeConnections.dany || [],
        innovator: false,
        leader: true,
        quote: 'Проблематично, що люди мають завдання від обох компаній... іноді незрозуміло, хто що має робити... трохи хаос.',
        insights: {
            strength: 'Відносини з клієнтами, операційний драйв, підтримка команди',
            challenge: 'Відчуває себе недооціненим; розчарований "хаосом" від злиття VQ/IM',
            development: 'Розширення повноважень: перехід від вирішувача проблем до коуча команди',
            keyInsight: 'Розчарований залежністю від нього, але його стиль керівництва сприяє цій залежності.'
        },
        motivators: ['Team success', 'Client satisfaction', 'Clear processes', 'Recognition'],
        demotivators: ['Unclear roles', 'Organizational chaos', 'Dependency burden'],
        conflictStyle: 'Collaborating',
        conflictDescription: 'Шукає win-win рішення, але може затягувати процес через прагнення консенсусу.',
        risks: [
            { type: 'Вигорання', level: 'high', description: 'Перевантаження через відчуття відповідальності за всіх' },
            { type: 'Пасивна агресія', level: 'medium', description: 'Непряме вираження фрустрації' }
        ],
        meanRankOwnership: 2.5,
        meanRankTrust: 2.3,
        stdOwnership: 1.1,
        stdTrust: 0.9,
        top3CountOwnership: 5,
        top3CountTrust: 6,
        statusScoreOwnership: 0.78,
        statusScoreTrust: 0.81,
        selfMAEOwnership: 0.7,
        selfMAETrust: 0.6,
        biasOwnership: 0.4,
        biasTrust: 0.2,
        accuracyOwnership: 75,
        accuracyTrust: 82
    }
);

// Apply negative connections
Object.entries(negativeConnections).forEach(([fromId, toIds]) => {
    const member = teamData.members.find(m => m.id === fromId);
    if (member) {
        member.leastPreferred = toIds;
    }
});

// Calculate CORRECT ownership and trust indices
teamData.members.forEach(member => {
    // High status score = high position = low index value for quadrant
    member.ownershipIndex = Math.round(member.statusScoreOwnership * 100);
    member.trustIndex = Math.round(member.statusScoreTrust * 100);
});

// ===== Global State with Performance Optimizations =====
let currentView = 'metrics';
let currentLang = 'uk';
let scene, camera, renderer, controls;
let forceSimulation;
let selectedPerson = null;
let filters = {
    positive: true,
    negative: true,
    vagoteq: true,
    intermastra: true,
    incoming: true,
    outgoing: true
};
let quickInfoPerson = null;
let raycaster, mouse;
let animationPaused = false;
let animationId = null;
let legendVisible = false; // Start with legend hidden
let sceneObjects = {
    nodes: new Map(),
    nodeObjects: [],
    sprites: [],
    connections: [],
    levelRings: []
};

// Performance optimization
let renderRequested = false;
const preferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function requestRender() {
    if (!renderRequested && !preferReducedMotion) {
        renderRequested = true;
        requestAnimationFrame(() => {
            renderRequested = false;
            if (renderer && scene && camera) {
                renderer.render(scene, camera);
            }
        });
    }
}

// ===== Initialize Application =====
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    checkMobile();
    setupEventListeners();
    populatePersonFilter();
    updateMetrics();
    addGlossaryButton();
    updateVisualization();
    showNotification(t('notification.welcome'), 'success');
});

// ===== Add Glossary Button =====
function addGlossaryButton() {
    const navButtons = document.querySelector('.nav-buttons');
    const glossaryBtn = document.createElement('button');
    glossaryBtn.className = 'nav-btn';
    glossaryBtn.dataset.view = 'glossary';
    glossaryBtn.innerHTML = `<i class="fas fa-book"></i><span data-i18n="nav.glossary">${t('nav.glossary')}</span>`;
    navButtons.appendChild(glossaryBtn);
    glossaryBtn.addEventListener('click', () => switchView('glossary'));
}

// ===== Language Functions =====
function initializeLanguage() {
    const savedLang = localStorage.getItem('teamPulseLang') || 'uk';
    currentLang = savedLang;
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    
    updatePageTitle();
}

function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

function updatePageTitle() {
    const titles = {
        '3d': 'titles.3d',
        'force': 'titles.force',
        'circular': 'titles.circular',
        'heatmap': 'titles.heatmap',
        'development': 'titles.development',
        'analysis': 'titles.analysis',
        'metrics': 'titles.metrics',
        'glossary': 'titles.glossary'
    };
    document.getElementById('pageTitle').textContent = t(titles[currentView]);
}

// ===== Mobile Check =====
function checkMobile() {
    if (window.innerWidth <= 768) {
        document.getElementById('mobileWarning').style.display = 'flex';
    }
}

function closeMobileWarning() {
    document.getElementById('mobileWarning').style.display = 'none';
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentLang = e.target.dataset.lang;
            localStorage.setItem('teamPulseLang', currentLang);
            updateLanguage();
            updateVisualization();
        });
    });
    
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            switchView(view);
        });
    });

    // Filters
    document.getElementById('filterPositive').addEventListener('change', updateFilters);
    document.getElementById('filterNegative').addEventListener('change', updateFilters);
    document.getElementById('filterVQ').addEventListener('change', updateFilters);
    document.getElementById('filterIM').addEventListener('change', updateFilters);
    document.getElementById('filterIncoming').addEventListener('change', updateFilters);
    document.getElementById('filterOutgoing').addEventListener('change', updateFilters);
    document.getElementById('personFilter').addEventListener('change', updateFilters);

    // Controls
    document.getElementById('zoomIn').addEventListener('click', () => zoomView(1.2));
    document.getElementById('zoomOut').addEventListener('click', () => zoomView(0.8));
    document.getElementById('resetView').addEventListener('click', resetView);
    document.getElementById('playPauseBtn').addEventListener('click', toggleAnimation);
    document.getElementById('screenshotBtn').addEventListener('click', takeScreenshot);
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    
    // Toggle legend button
    const toggleLegendBtn = document.createElement('button');
    toggleLegendBtn.className = 'control-btn';
    toggleLegendBtn.id = 'toggleLegend';
    toggleLegendBtn.title = 'Toggle Legend';
    toggleLegendBtn.innerHTML = '<i class="fas fa-list"></i>';
    toggleLegendBtn.addEventListener('click', toggleLegend);
    document.querySelector('.zoom-controls').appendChild(toggleLegendBtn);

    // Modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('detailsModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Quick info popup close on click outside
    document.addEventListener('click', (e) => {
        const quickInfo = document.getElementById('quickInfo');
        if (!quickInfo.contains(e.target) && !e.target.closest('.node') && !e.target.closest('circle')) {
            quickInfo.classList.remove('active');
        }
    });

    // Window resize
    window.addEventListener('resize', debounce(handleResize, 250));
}

// Performance helper - debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== View Management =====
function switchView(view) {
    currentView = view;
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    updatePageTitle();
    
    document.getElementById('infoPanel3D').style.display = view === '3d' ? 'block' : 'none';
    document.getElementById('forceFilters').style.display = view === 'force' ? 'block' : 'none';
    
    updateVisualization();
}

// ===== Data Filtering =====
function updateFilters() {
    filters.positive = document.getElementById('filterPositive').checked;
    filters.negative = document.getElementById('filterNegative').checked;
    filters.vagoteq = document.getElementById('filterVQ').checked;
    filters.intermastra = document.getElementById('filterIM').checked;
    filters.incoming = document.getElementById('filterIncoming').checked;
    filters.outgoing = document.getElementById('filterOutgoing').checked;
    
    updateVisualization();
}

function getFilteredData() {
    let members = [...teamData.members];
    
    if (!filters.vagoteq) {
        members = members.filter(m => m.company !== 'Vagoteq');
    }
    if (!filters.intermastra) {
        members = members.filter(m => m.company !== 'Intermastra');
    }
    
    const personFilter = document.getElementById('personFilter').value;
    if (personFilter !== 'all') {
        const person = members.find(m => m.id === personFilter);
        if (person) {
            const relatedIds = new Set([person.id]);
            person.preferred.forEach(id => relatedIds.add(id));
            person.leastPreferred.forEach(id => relatedIds.add(id));
            
            members.forEach(m => {
                if (m.preferred.includes(person.id) || m.leastPreferred.includes(person.id)) {
                    relatedIds.add(m.id);
                }
            });
            
            members = members.filter(m => relatedIds.has(m.id));
        }
    }
    
    return members;
}

// ===== Update Metrics =====
function updateMetrics() {
    const members = getFilteredData();
    
    // Calculate team health based on mean ranks
    const avgMeanRank = members.reduce((sum, m) => 
        sum + (m.meanRankOwnership + m.meanRankTrust) / 2, 0
    ) / members.length;
    const teamHealth = Math.round((1 - avgMeanRank / 8) * 100);
    
    // Calculate Gini coefficient (inequality)
    const giniOwnership = 0.217 * 100;
    const giniTrust = 0.226 * 100;
    const frictionIndex = Math.round((giniOwnership + giniTrust) / 2);
    
    // Role clarity (based on quotes analysis)
    const clarityScore = 35;
    
    // Engagement score based on accuracy
    const avgAccuracy = members.reduce((sum, m) => 
        sum + (m.accuracyOwnership + m.accuracyTrust) / 2, 0
    ) / members.length;
    const engagementScore = Math.round(avgAccuracy);
    
    document.getElementById('teamHealthScore').textContent = teamHealth + '%';
    document.getElementById('frictionIndex').textContent = frictionIndex + '%';
    document.getElementById('clarityScore').textContent = clarityScore + '%';
    document.getElementById('engagementScore').textContent = engagementScore + '%';
}

// ===== Populate Person Filter =====
function populatePersonFilter() {
    const select = document.getElementById('personFilter');
    
    teamData.members.forEach(member => {
        const option = document.createElement('option');
        option.value = member.id;
        option.textContent = `${member.name} (${member.company})`;
        select.appendChild(option);
    });
}

// ===== Clear Visualizations =====
function clearVisualizations() {
    // Cancel any pending animation
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    // Clear Three.js
    if (renderer) {
        // Dispose of all geometries and materials
        scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(material => material.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
        
        renderer.dispose();
        const container = document.getElementById('threeContainer');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        renderer = null;
        scene = null;
        camera = null;
    }
    
    // Clear objects
    sceneObjects.nodes.clear();
    sceneObjects.nodeObjects = [];
    sceneObjects.sprites = [];
    sceneObjects.connections = [];
    sceneObjects.levelRings = [];
    
    // Clear SVG
    d3.select('#svgCanvas').selectAll('*').remove();
    
    // Clear Canvas
    const canvas = document.getElementById('heatmapCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Clear other containers
    document.getElementById('analysisContainer').innerHTML = '';
    document.getElementById('developmentContainer').innerHTML = '';
    
    // Hide all canvases
    document.getElementById('threeContainer').style.display = 'none';
    document.getElementById('svgCanvas').style.display = 'none';
    document.getElementById('heatmapCanvas').style.display = 'none';
    document.getElementById('analysisContainer').style.display = 'none';
    document.getElementById('developmentContainer').style.display = 'none';
    
    // Hide side info
    hideSideInfo();
}

// ===== Update Visualization =====
function updateVisualization() {
    clearVisualizations();
    const filteredData = getFilteredData();
    
    switch (currentView) {
        case '3d':
            render3DVisualization(filteredData);
            break;
        case 'force':
            renderForceGraph(filteredData);
            break;
        case 'circular':
            renderCircularLayout(filteredData);
            break;
        case 'heatmap':
            renderHeatmap(filteredData);
            break;
        case 'development':
            renderDevelopmentView(filteredData);
            break;
        case 'analysis':
            renderTextAnalysis(filteredData);
            break;
        case 'metrics':
            renderMetricsView(filteredData);
            break;
        case 'glossary':
            renderGlossary();
            break;
    }
}

// ===== Team Metrics View =====
function renderMetricsView(members) {
    const container = document.getElementById('analysisContainer');
    container.style.display = 'block';
    
    // Sort members by mean rank
    const sortedByOwnership = [...members].sort((a, b) => a.meanRankOwnership - b.meanRankOwnership);
    const sortedByTrust = [...members].sort((a, b) => a.meanRankTrust - b.meanRankTrust);
    
    container.innerHTML = `
        <div class="metrics-header">
            <h1>${currentLang === 'uk' ? 'Детальні метрики команди' : 'Detailed Team Metrics'}</h1>
            <p>${currentLang === 'uk' ? 
                'Комплексний аналіз на основі соціометричних даних' : 
                'Comprehensive analysis based on sociometric data'}</p>
        </div>
        
        <div class="metrics-sections">
            ${generateMetricsOverview(members)}
            ${generateRankingTables(sortedByOwnership, sortedByTrust)}
            ${generatePerceptionAnalysis(members)}
            ${generateClusterAnalysis(members)}
            ${generateRiskMatrix(members)}
        </div>
    `;
}

function generateMetricsOverview(members) {
    const totalTop3Ownership = members.reduce((sum, m) => sum + m.top3CountOwnership, 0);
    const totalTop3Trust = members.reduce((sum, m) => sum + m.top3CountTrust, 0);
    const avgMAEOwnership = members.reduce((sum, m) => sum + m.selfMAEOwnership, 0) / members.length;
    const avgMAETrust = members.reduce((sum, m) => sum + m.selfMAETrust, 0) / members.length;
    
    return `
        <section class="metrics-section">
            <h2>${currentLang === 'uk' ? 'Загальний огляд' : 'General Overview'}</h2>
            <div class="overview-grid">
                <div class="overview-card">
                    <h3>${currentLang === 'uk' ? 'Статусна нерівність' : 'Status Inequality'}</h3>
                    <div class="metric-large">
                        <span class="value">21.7%</span>
                        <span class="label">Ownership Gini</span>
                    </div>
                    <div class="metric-large">
                        <span class="value">22.6%</span>
                        <span class="label">Trust Gini</span>
                    </div>
                    <p>${currentLang === 'uk' ? 
                        'Помірна стратифікація - не критична, але відчутна' : 
                        'Moderate stratification - not critical but noticeable'}</p>
                </div>
                
                <div class="overview-card">
                    <h3>${currentLang === 'uk' ? 'Топ-3 входження' : 'Top-3 Entries'}</h3>
                    <div class="metric-large">
                        <span class="value">${totalTop3Ownership}</span>
                        <span class="label">Ownership</span>
                    </div>
                    <div class="metric-large">
                        <span class="value">${totalTop3Trust}</span>
                        <span class="label">Trust</span>
                    </div>
                </div>
                
                <div class="overview-card">
                    <h3>${currentLang === 'uk' ? 'Точність самооцінки' : 'Self-Assessment Accuracy'}</h3>
                    <div class="metric-large">
                        <span class="value">${avgMAEOwnership.toFixed(2)}</span>
                        <span class="label">MAE Ownership</span>
                    </div>
                    <div class="metric-large">
                        <span class="value">${avgMAETrust.toFixed(2)}</span>
                        <span class="label">MAE Trust</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function generateRankingTables(sortedByOwnership, sortedByTrust) {
    const createTable = (data, criterion) => {
        const meanRankKey = criterion === 'ownership' ? 'meanRankOwnership' : 'meanRankTrust';
        const stdKey = criterion === 'ownership' ? 'stdOwnership' : 'stdTrust';
        const top3Key = criterion === 'ownership' ? 'top3CountOwnership' : 'top3CountTrust';
        const statusKey = criterion === 'ownership' ? 'statusScoreOwnership' : 'statusScoreTrust';
        const maeKey = criterion === 'ownership' ? 'selfMAEOwnership' : 'selfMAETrust';
        const biasKey = criterion === 'ownership' ? 'biasOwnership' : 'biasTrust';
        const accuracyKey = criterion === 'ownership' ? 'accuracyOwnership' : 'accuracyTrust';
        
        return `
            <table class="metrics-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>${currentLang === 'uk' ? 'Ім\'я' : 'Name'}</th>
                        <th>${currentLang === 'uk' ? 'Код' : 'Code'}</th>
                        <th>${t('member.meanRank')}</th>
                        <th>${t('member.stdDev')}</th>
                        <th>${t('member.top3Count')}</th>
                        <th>${t('member.statusScore')}</th>
                        <th>MAE</th>
                        <th>${t('member.bias')}</th>
                        <th>${t('member.accuracy')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map((member, i) => `
                        <tr class="${i < 3 ? 'top-performer' : i >= data.length - 2 ? 'low-performer' : ''}">
                            <td>${i + 1}</td>
                            <td>${member.name}</td>
                            <td>${member.code}</td>
                            <td class="numeric">${member[meanRankKey].toFixed(2)}</td>
                            <td class="numeric">${member[stdKey].toFixed(2)}</td>
                            <td class="numeric">${member[top3Key]}</td>
                            <td class="numeric">${member[statusKey].toFixed(3)}</td>
                            <td class="numeric">${member[maeKey].toFixed(2)}</td>
                            <td class="numeric ${member[biasKey] > 0 ? 'positive' : member[biasKey] < 0 ? 'negative' : ''}">${member[biasKey] > 0 ? '+' : ''}${member[biasKey].toFixed(2)}</td>
                            <td class="numeric">${member[accuracyKey].toFixed(1)}%</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    };
    
    return `
        <section class="metrics-section">
            <h2>${currentLang === 'uk' ? 'Рейтингові таблиці' : 'Ranking Tables'}</h2>
            
            <div class="table-container">
                <h3>Ownership Rankings</h3>
                ${createTable(sortedByOwnership, 'ownership')}
            </div>
            
            <div class="table-container">
                <h3>Trust Rankings</h3>
                ${createTable(sortedByTrust, 'trust')}
            </div>
            
            <div class="spearman-correlation">
                <p><strong>Spearman ρ = 1.0</strong></p>
                <p>${currentLang === 'uk' ? 
                    'Ієрархія майже ідентична за обома критеріями (сильне структурне накладання)' : 
                    'Hierarchy almost identical by both criteria (strong structural overlap)'}</p>
            </div>
        </section>
    `;
}

function generatePerceptionAnalysis(members) {
    // Group by perception patterns
    const highAccuracy = members.filter(m => m.selfMAEOwnership < 0.5 && m.selfMAETrust < 0.5);
    const overestimators = members.filter(m => m.biasOwnership > 1 || m.biasTrust > 1);
    const underestimators = members.filter(m => m.biasOwnership < -0.3 || m.biasTrust < -0.3);
    const poorAccuracy = members.filter(m => m.selfMAEOwnership > 1.5 || m.selfMAETrust > 1.5);
    
    return `
        <section class="metrics-section">
            <h2>${currentLang === 'uk' ? 'Аналіз самосприйняття' : 'Self-Perception Analysis'}</h2>
            
            <div class="perception-grid">
                <div class="perception-card">
                    <h3>${currentLang === 'uk' ? 'Висока точність' : 'High Accuracy'}</h3>
                    <div class="member-list">
                        ${highAccuracy.map(m => `
                            <div class="member-item">
                                <span>${m.name}</span>
                                <span class="badge">MAE: ${((m.selfMAEOwnership + m.selfMAETrust) / 2).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="perception-card warning">
                    <h3>${currentLang === 'uk' ? 'Системне переоцінювання' : 'Systematic Overestimation'}</h3>
                    <div class="member-list">
                        ${overestimators.map(m => `
                            <div class="member-item">
                                <span>${m.name}</span>
                                <span class="badge negative">Bias: +${Math.max(m.biasOwnership, m.biasTrust).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="perception-card info">
                    <h3>${currentLang === 'uk' ? 'Системне недооцінювання' : 'Systematic Underestimation'}</h3>
                    <div class="member-list">
                        ${underestimators.map(m => `
                            <div class="member-item">
                                <span>${m.name}</span>
                                <span class="badge positive">Bias: ${Math.min(m.biasOwnership, m.biasTrust).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="perception-card critical">
                    <h3>${currentLang === 'uk' ? 'Найгірша точність' : 'Worst Accuracy'}</h3>
                    <div class="member-list">
                        ${poorAccuracy.map(m => `
                            <div class="member-item">
                                <span>${m.name}</span>
                                <span class="badge negative">MAE: ${Math.max(m.selfMAEOwnership, m.selfMAETrust).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="anomaly-note">
                <h4>${currentLang === 'uk' ? 'Аномалії' : 'Anomalies'}</h4>
                <p>Viktoria: ${currentLang === 'uk' ? 
                    'У Ownership дала всім "8", у Trust – всім "6": сигнал низької диференціації й/або втоми, формальної участі.' : 
                    'Gave everyone "8" in Ownership, "6" in Trust: signal of low differentiation and/or fatigue, formal participation.'}</p>
            </div>
        </section>
    `;
}

function generateClusterAnalysis(members) {
    const core1 = members.filter(m => m.meanRankOwnership <= 2);
    const core2 = members.filter(m => m.meanRankOwnership > 2 && m.meanRankOwnership <= 3.5);
    const quasiCore = members.filter(m => m.meanRankOwnership > 3.5 && m.meanRankOwnership <= 5);
    const periphery = members.filter(m => m.meanRankOwnership > 5);
    
    return `
        <section class="metrics-section">
            <h2>${currentLang === 'uk' ? 'Кластерний аналіз' : 'Cluster Analysis'}</h2>
            
            <div class="cluster-grid">
                <div class="cluster-card core">
                    <h3>${currentLang === 'uk' ? 'Ядро 1-го рівня' : 'Core Level 1'}</h3>
                    <div class="member-chips">
                        ${core1.map(m => `
                            <div class="member-chip">
                                <strong>${m.name}</strong>
                                <span>${m.role}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p>${currentLang === 'uk' ? 
                        'Надзвичайна концентрація довіри та очікувань' : 
                        'Extraordinary concentration of trust and expectations'}</p>
                </div>
                
                <div class="cluster-card core2">
                    <h3>${currentLang === 'uk' ? 'Ядро 2-го рівня' : 'Core Level 2'}</h3>
                    <div class="member-chips">
                        ${core2.map(m => `
                            <div class="member-chip">
                                <strong>${m.name}</strong>
                                <span>${m.role}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p>${currentLang === 'uk' ? 
                        'Високий статус + міжкомпанійні мости' : 
                        'High status + cross-company bridges'}</p>
                </div>
                
                <div class="cluster-card quasi">
                    <h3>${currentLang === 'uk' ? 'Квазі-ядро' : 'Quasi-Core'}</h3>
                    <div class="member-chips">
                        ${quasiCore.map(m => `
                            <div class="member-chip">
                                <strong>${m.name}</strong>
                                <span>${m.role}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p>${currentLang === 'uk' ? 
                        'Середина з різними проблемами самосприйняття' : 
                        'Middle with various self-perception issues'}</p>
                </div>
                
                <div class="cluster-card periphery">
                    <h3>${currentLang === 'uk' ? 'Периферія' : 'Periphery'}</h3>
                    <div class="member-chips">
                        ${periphery.map(m => `
                            <div class="member-chip">
                                <strong>${m.name}</strong>
                                <span>${m.role}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p>${currentLang === 'uk' ? 
                        'Низька видимість, ризик ізоляції' : 
                        'Low visibility, risk of isolation'}</p>
                </div>
            </div>
            
            <div class="polarization-metric">
                <h4>${currentLang === 'uk' ? 'Поляризація' : 'Polarization'}</h4>
                <p>${currentLang === 'uk' ? 
                    `Розрив між Alex (1.5) та Viktoria (7.5) = 6 позицій із 8 можливих → досить крута градієнтна драбина очікувань.` : 
                    `Gap between Alex (1.5) and Viktoria (7.5) = 6 positions out of 8 possible → quite steep gradient ladder of expectations.`}</p>
            </div>
        </section>
    `;
}

function generateRiskMatrix(members) {
    return `
        <section class="metrics-section">
            <h2>${currentLang === 'uk' ? 'Матриця ризиків' : 'Risk Matrix'}</h2>
            
            <div class="risk-grid">
                <div class="risk-card high">
                    <h3>${currentLang === 'uk' ? 'Високий ризик' : 'High Risk'}</h3>
                    <div class="risk-item">
                        <strong>${currentLang === 'uk' ? 'Надцентралізація' : 'Over-centralization'}</strong>
                        <p>Alex: ${currentLang === 'uk' ? 
                            'Абсолютний №1, "горло пляшки" в ухваленні рішень' : 
                            'Absolute #1, bottleneck in decision making'}</p>
                    </div>
                    <div class="risk-item">
                        <strong>${currentLang === 'uk' ? 'Перевантажений міст' : 'Overloaded Bridge'}</strong>
                        <p>Igor: ${currentLang === 'uk' ? 
                            'Всі крос-входи, одноточковий провал при відсутності' : 
                            'All cross-entries, single point of failure if absent'}</p>
                    </div>
                </div>
                
                <div class="risk-card medium">
                    <h3>${currentLang === 'uk' ? 'Середній ризик' : 'Medium Risk'}</h3>
                    <div class="risk-item">
                        <strong>${currentLang === 'uk' ? 'Перцептивні розриви' : 'Perceptual Gaps'}</strong>
                        <p>Nik, Oleg, Antonia: ${currentLang === 'uk' ? 
                            'Високий позитивний bias, конфлікти очікувань' : 
                            'High positive bias, expectation conflicts'}</p>
                    </div>
                    <div class="risk-item">
                        <strong>${currentLang === 'uk' ? 'Поляризованість думок' : 'Opinion Polarization'}</strong>
                        <p>Igor, Antonia: ${currentLang === 'uk' ? 
                            'Високий std, нестабільність сприйняття' : 
                            'High std, perception instability'}</p>
                    </div>
                </div>
                
                <div class="risk-card low">
                    <h3>${currentLang === 'uk' ? 'Потенційні можливості' : 'Potential Opportunities'}</h3>
                    <div class="risk-item">
                        <strong>${currentLang === 'uk' ? 'Недовикористаний потенціал' : 'Underutilized Potential'}</strong>
                        <p>Maivi, Yana: ${currentLang === 'uk' ? 
                            'Недооцінка себе, можливості для росту' : 
                            'Self-underestimation, growth opportunities'}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ===== Text Analysis View =====
function renderTextAnalysis(members) {
    const container = document.getElementById('analysisContainer');
    container.style.display = 'block';
    
    const analysisTitle = currentLang === 'uk' ? 
        'Глибинний аналіз команди VQ & IM' : 
        'Deep Analysis of VQ & IM Team';
    const analysisSubtitle = currentLang === 'uk' ? 
        'Комплексне дослідження організаційної динаміки на основі соціометричних даних' : 
        'Comprehensive Study of Organizational Dynamics Based on Sociometric Data';
    
    container.innerHTML = `
        <div class="analysis-header">
            <h1 class="analysis-title">${analysisTitle}</h1>
            <p class="analysis-subtitle">${analysisSubtitle}</p>
        </div>
        
        <div class="analysis-sections">
            ${generateExecutiveSummary()}
            ${generateCriticalFindings()}
            ${generateEmployeeAnalysis(members)}
            ${generateStrategicInterventions()}
            ${generateSystemRecommendations()}
        </div>
    `;
    
    // Add interaction to employee cards
    container.querySelectorAll('.employee-card').forEach(card => {
        card.addEventListener('click', () => {
            const memberId = card.dataset.memberId;
            const member = members.find(m => m.id === memberId);
            if (member) showMemberDetails(member);
        });
    });
}

// Generate analysis sections with real data
function generateExecutiveSummary() {
    if (currentLang === 'uk') {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-chart-line"></i>
                    Виконавче резюме
                </h2>
                <p>Аналіз соціометричних даних виявляє чітко виражене централізоване ядро (Alex–Igor–Rami) 
                з критичною концентрацією довіри та очікувань. Spearman ρ = 1.0 між Ownership та Trust 
                вказує на сильне структурне накладання ієрархій.</p>
                
                <div class="key-metrics">
                    <div class="metric-card-summary">
                        <div class="metric-value">0.217</div>
                        <div class="metric-label">Gini Ownership</div>
                    </div>
                    <div class="metric-card-summary">
                        <div class="metric-value">0.226</div>
                        <div class="metric-label">Gini Trust</div>
                    </div>
                    <div class="metric-card-summary">
                        <div class="metric-value">6/8</div>
                        <div class="metric-label">Поляризація рангів</div>
                    </div>
                </div>
                
                <p><strong>Ключовий висновок:</strong> Помірна стратифікація (Gini ~0.22) вже створює відчутну нерівність. 
                Alex має mean rank 1.50 з 8 входами в топ-3, що створює "горло пляшки" в прийнятті рішень. 
                Igor як єдиний міжкомпанійний міст несе критичне навантаження.</p>
            </section>
        `;
    } else {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-chart-line"></i>
                    Executive Summary
                </h2>
                <p>Sociometric data analysis reveals a clearly expressed centralized core (Alex–Igor–Rami) 
                with critical concentration of trust and expectations. Spearman ρ = 1.0 between Ownership and Trust 
                indicates strong structural overlap of hierarchies.</p>
                
                <div class="key-metrics">
                    <div class="metric-card-summary">
                        <div class="metric-value">0.217</div>
                        <div class="metric-label">Gini Ownership</div>
                    </div>
                    <div class="metric-card-summary">
                        <div class="metric-value">0.226</div>
                        <div class="metric-label">Gini Trust</div>
                    </div>
                    <div class="metric-card-summary">
                        <div class="metric-value">6/8</div>
                        <div class="metric-label">Rank Polarization</div>
                    </div>
                </div>
                
                <p><strong>Key Conclusion:</strong> Moderate stratification (Gini ~0.22) already creates noticeable inequality. 
                Alex has mean rank 1.50 with 8 top-3 entries, creating a decision-making bottleneck. 
                Igor as the sole cross-company bridge carries critical load.</p>
            </section>
        `;
    }
}

function generateCriticalFindings() {
    if (currentLang === 'uk') {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    Критичні виявлення з даних
                </h2>
                
                <div class="findings-grid">
                    <div class="finding-card critical">
                        <h3>1. Системні перцептивні розриви</h3>
                        <p>Nik: MAE = 2.25, Bias = +2.25 - найгірша точність самооцінки</p>
                        <p>Oleg: Bias = +1.25 - стабільне переоцінювання</p>
                        <p>Viktoria: Аномальні передбачення (всім "8" в Ownership)</p>
                    </div>
                    
                    <div class="finding-card warning">
                        <h3>2. Міжкомпанійна залежність</h3>
                        <p>Igor: 6/6 топ-3 входів від Vagoteq - критичний клей</p>
                        <p>Rami: 4 крос-компанійні входи - стабільний міст</p>
                        <p>Viktoria: 0 крос-входів - повна ізоляція</p>
                    </div>
                    
                    <div class="finding-card warning">
                        <h3>3. Взаємні топ-3 зв'язки</h3>
                        <p>Серцевинний трикутник: Alex–Igor–Rami</p>
                        <p>Ізольовані: Yana, Viktoria (0 взаємних топ-3)</p>
                        <p>Maivi-Antonia: взаємність тільки в Trust</p>
                    </div>
                </div>
            </section>
        `;
    } else {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    Critical Data Findings
                </h2>
                
                <div class="findings-grid">
                    <div class="finding-card critical">
                        <h3>1. Systemic Perceptual Gaps</h3>
                        <p>Nik: MAE = 2.25, Bias = +2.25 - worst self-assessment accuracy</p>
                        <p>Oleg: Bias = +1.25 - stable overestimation</p>
                        <p>Viktoria: Anomalous predictions (everyone "8" in Ownership)</p>
                    </div>
                    
                    <div class="finding-card warning">
                        <h3>2. Cross-Company Dependency</h3>
                        <p>Igor: 6/6 top-3 entries from Vagoteq - critical glue</p>
                        <p>Rami: 4 cross-company entries - stable bridge</p>
                        <p>Viktoria: 0 cross-entries - complete isolation</p>
                    </div>
                    
                    <div class="finding-card warning">
                        <h3>3. Mutual Top-3 Connections</h3>
                        <p>Core triangle: Alex–Igor–Rami</p>
                        <p>Isolated: Yana, Viktoria (0 mutual top-3)</p>
                        <p>Maivi-Antonia: mutuality only in Trust</p>
                    </div>
                </div>
            </section>
        `;
    }
}

function generateEmployeeAnalysis(members) {
    const title = currentLang === 'uk' ? 'Індивідуальний аналіз команди' : 'Individual Team Analysis';
    
    const employeeCards = members.map(member => {
        const strengthLabel = currentLang === 'uk' ? 'Сила:' : 'Strength:';
        const challengeLabel = currentLang === 'uk' ? 'Виклик:' : 'Challenge:';
        const dataLabel = currentLang === 'uk' ? 'Дані:' : 'Data:';
        
        return `
            <div class="employee-card" data-member-id="${member.id}">
                <div class="employee-header">
                    <div class="employee-avatar">${member.firstName || member.name.split(' ')[0]}</div>
                    <div class="employee-info">
                        <h4>${member.name}</h4>
                        <p>${member.role} • ${member.company}</p>
                    </div>
                </div>
                
                <div class="employee-metrics">
                    <div class="metric">
                        <div class="metric-value">${member.meanRankOwnership.toFixed(2)}</div>
                        <div class="metric-label">${t('member.meanRank')}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${member.top3CountOwnership}</div>
                        <div class="metric-label">${t('member.top3Count')}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value ${member.biasOwnership > 0 ? 'negative' : 'positive'}">${member.biasOwnership > 0 ? '+' : ''}${member.biasOwnership.toFixed(2)}</div>
                        <div class="metric-label">${t('member.bias')}</div>
                    </div>
                </div>
                
                <div class="employee-insights">
                    <p><strong>${dataLabel}</strong> Status: ${member.statusScoreOwnership.toFixed(3)}, MAE: ${member.selfMAEOwnership.toFixed(2)}, Accuracy: ${member.accuracyOwnership}%</p>
                    <p><strong>${strengthLabel}</strong> ${currentLang === 'uk' ? member.insights.strength : getEnglishInsight(member.insights.strength)}</p>
                    <p><strong>${challengeLabel}</strong> ${currentLang === 'uk' ? member.insights.challenge : getEnglishInsight(member.insights.challenge)}</p>
                    ${member.quote ? `<p class="employee-quote">"${member.quote}"</p>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <section class="analysis-section">
            <h2 class="section-title">
                <i class="fas fa-users"></i>
                ${title}
            </h2>
            
            <div class="employee-grid">
                ${employeeCards}
            </div>
        </section>
    `;
}

function generateStrategicInterventions() {
    if (currentLang === 'uk') {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-tasks"></i>
                    Стратегічні командні інтервенції
                </h2>
                
                <div class="intervention-timeline">
                    <div class="timeline-phase">
                        <h3>0–30 днів (швидкі кроки)</h3>
                        <ul>
                            <li><strong>Прозорий зворотний зв'язок 1:1</strong> з Nik (MAE=2.25), Oleg (+1.25), Antonia: 
                            показати анонімізовані агрегати + погодити поведінкові маркери</li>
                            
                            <li><strong>Peer-mentoring "міст":</strong>
                                <ul>
                                    <li>Maivi ↔ Igor (видимість + структурна підтримка)</li>
                                    <li>Yana ↔ Rami (включення в ядро через мікропроекти)</li>
                                </ul>
                            </li>
                            
                            <li><strong>Quick Wins Делегування:</strong> Alex (1.50) передає 2 рутинні зони до Rami (3.50) та Oleg (4.88)</li>
                        </ul>
                    </div>
                    
                    <div class="timeline-phase">
                        <h3>30–60 днів</h3>
                        <ul>
                            <li><strong>Калібруюча сесія критеріїв:</strong> Перевизначити "Ownership" та "Trust" через поведінкові індикатори</li>
                            <li><strong>Мультиплікативні мікроролі:</strong>
                                <ul>
                                    <li>Nik → "Procurement Efficiency Champion"</li>
                                    <li>Oleg → "CRM Data Quality Steward"</li>
                                </ul>
                            </li>
                            <li><strong>Видимість для периферії:</strong> Yana & Viktoria - спільні міні-ініціативи</li>
                        </ul>
                    </div>
                    
                    <div class="timeline-phase">
                        <h3>60–90 днів</h3>
                        <ul>
                            <li>Другий раунд соціометрії з поведінковими шкалами</li>
                            <li>Пілот матриці рішень: RACI з відходом Alex від "Responsible"</li>
                            <li>Формальний скрипт зворотного зв'язку по самопередбаченнях</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    } else {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-tasks"></i>
                    Strategic Team Interventions
                </h2>
                
                <div class="intervention-timeline">
                    <div class="timeline-phase">
                        <h3>0–30 days (quick steps)</h3>
                        <ul>
                            <li><strong>Transparent 1:1 feedback</strong> with Nik (MAE=2.25), Oleg (+1.25), Antonia: 
                            show anonymized aggregates + agree on behavioral markers</li>
                            
                            <li><strong>Peer-mentoring "bridge":</strong>
                                <ul>
                                    <li>Maivi ↔ Igor (visibility + structural support)</li>
                                    <li>Yana ↔ Rami (core inclusion through microprojects)</li>
                                </ul>
                            </li>
                            
                            <li><strong>Quick Wins Delegation:</strong> Alex (1.50) transfers 2 routine zones to Rami (3.50) and Oleg (4.88)</li>
                        </ul>
                    </div>
                    
                    <div class="timeline-phase">
                        <h3>30–60 days</h3>
                        <ul>
                            <li><strong>Criteria calibration session:</strong> Redefine "Ownership" and "Trust" through behavioral indicators</li>
                            <li><strong>Multiplicative micro-roles:</strong>
                                <ul>
                                    <li>Nik → "Procurement Efficiency Champion"</li>
                                    <li>Oleg → "CRM Data Quality Steward"</li>
                                </ul>
                            </li>
                            <li><strong>Periphery visibility:</strong> Yana & Viktoria - joint mini-initiatives</li>
                        </ul>
                    </div>
                    
                    <div class="timeline-phase">
                        <h3>60–90 days</h3>
                        <ul>
                            <li>Second sociometry round with behavioral scales</li>
                            <li>Decision matrix pilot: RACI with Alex moving from "Responsible"</li>
                            <li>Formal self-prediction feedback script</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }
}

function generateSystemRecommendations() {
    if (currentLang === 'uk') {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-cogs"></i>
                    Системні рекомендації (над рівнем індивідів)
                </h2>
                
                <div class="recommendations-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Ціль</th>
                                <th>Інструмент</th>
                                <th>Як вимірюємо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Зменшити залежність від Alex</td>
                                <td>RACI + ротація фасилітаторів</td>
                                <td>% мітингів без фасилітації Alex → ≥50% за 60 днів</td>
                            </tr>
                            <tr>
                                <td>Знизити перцептивні bias</td>
                                <td>Регулярний "Prediction Review"</td>
                                <td>Зниження середнього MAE групи ≥20% за 2 хвилі</td>
                            </tr>
                            <tr>
                                <td>Посилити периферію</td>
                                <td>Парні мікропроекти</td>
                                <td>Кількість нових топ-3 входів периферії через 90 днів</td>
                            </tr>
                            <tr>
                                <td>Зберегти міст Igor</td>
                                <td>Делегувати 30% координації</td>
                                <td>Зниження Std Rank Igor < 1.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="final-recommendations">
                    <h4>Наступний раунд аналітики</h4>
                    <ul>
                        <li><strong>Weighted Reciprocity Index:</strong> відстежити суму взаємних (9−rank) пар</li>
                        <li><strong>Network Constraint (Burt):</strong> формалізувати роль Igor як брокера</li>
                        <li><strong>Time-Series Drift:</strong> чи зменшується крутизна ієрархії через 60-90 днів</li>
                        <li><strong>Behavioral Anchoring:</strong> додати 5-7 поведінкових тверджень Likert</li>
                    </ul>
                </div>
            </section>
        `;
    } else {
        return `
            <section class="analysis-section">
                <h2 class="section-title">
                    <i class="fas fa-cogs"></i>
                    System Recommendations (Above Individual Level)
                </h2>
                
                <div class="recommendations-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Goal</th>
                                <th>Tool</th>
                                <th>How We Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Reduce Alex dependency</td>
                                <td>RACI + facilitator rotation</td>
                                <td>% meetings without Alex facilitation → ≥50% in 60 days</td>
                            </tr>
                            <tr>
                                <td>Lower perceptual bias</td>
                                <td>Regular "Prediction Review"</td>
                                <td>Group average MAE reduction ≥20% in 2 waves</td>
                            </tr>
                            <tr>
                                <td>Strengthen periphery</td>
                                <td>Paired microprojects</td>
                                <td>Number of new top-3 entries for periphery after 90 days</td>
                            </tr>
                            <tr>
                                <td>Preserve Igor bridge</td>
                                <td>Delegate 30% coordination</td>
                                <td>Reduce Igor Std Rank < 1.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="final-recommendations">
                    <h4>Next Round Analytics</h4>
                    <ul>
                        <li><strong>Weighted Reciprocity Index:</strong> track sum of mutual (9−rank) pairs</li>
                        <li><strong>Network Constraint (Burt):</strong> formalize Igor's broker role</li>
                        <li><strong>Time-Series Drift:</strong> does hierarchy steepness decrease after 60-90 days</li>
                        <li><strong>Behavioral Anchoring:</strong> add 5-7 Likert behavioral statements</li>
                    </ul>
                </div>
            </section>
        `;
    }
}

// ===== Glossary View =====
function renderGlossary() {
    const container = document.getElementById('analysisContainer');
    container.style.display = 'block';
    
    const glossaryTerms = [
        {
            term: t('glossary.meanRank'),
            description: t('glossary.meanRankDesc'),
            example: currentLang === 'uk' ? 
                'Приклад: Alex має середній ранг 1.50, що означає що в середньому колеги ставлять його на 1-2 місце.' :
                'Example: Alex has mean rank 1.50, meaning colleagues on average rank him 1st-2nd place.',
            visual: `<div class="glossary-visual">
                <div class="rank-scale">
                    <span class="rank-value high">1</span>
                    <span class="rank-label">${currentLang === 'uk' ? 'Найвище' : 'Highest'}</span>
                    <span class="rank-value low">8</span>
                    <span class="rank-label">${currentLang === 'uk' ? 'Найнижче' : 'Lowest'}</span>
                </div>
            </div>`
        },
        {
            term: t('glossary.mae'),
            description: t('glossary.maeDesc'),
            example: currentLang === 'uk' ? 
                'Приклад: Nik має MAE 2.25 - він думає що займає 2-3 місце, але реально має 4-5.' :
                'Example: Nik has MAE 2.25 - he thinks he\'s ranked 2-3 but actually ranked 4-5.',
            formula: 'MAE = Σ|Actual Rank - Predicted Rank| / N'
        },
        {
            term: t('glossary.statusScore'),
            description: t('glossary.statusScoreDesc'),
            example: currentLang === 'uk' ? 
                'Приклад: Alex має статус 0.938 (93.8%) - майже максимальний вплив у команді.' :
                'Example: Alex has status 0.938 (93.8%) - almost maximum influence in team.',
            formula: 'Status = Σ(9 - rank) / 64'
        },
        {
            term: t('glossary.bias'),
            description: t('glossary.biasDesc'),
            example: currentLang === 'uk' ? 
                'Приклад: Nik має bias +2.25 (переоцінює), Maivi має -0.38 (недооцінує).' :
                'Example: Nik has bias +2.25 (overestimates), Maivi has -0.38 (underestimates).'
        },
        {
            term: t('glossary.top3'),
            description: t('glossary.top3Desc'),
            example: currentLang === 'uk' ? 
                'Приклад: Alex має 8 входжень - всі 8 колег поставили його в свій топ-3.' :
                'Example: Alex has 8 entries - all 8 colleagues put him in their top-3.'
        },
        {
            term: t('glossary.gini'),
            description: t('glossary.giniDesc'),
            example: currentLang === 'uk' ? 
                'Приклад: Gini 0.22 означає помірну нерівність - є лідери, але не критична концентрація.' :
                'Example: Gini 0.22 means moderate inequality - there are leaders but not critical concentration.'
        },
        {
            term: 'RACI Matrix',
            description: currentLang === 'uk' ? 
                'Матриця розподілу відповідальності: Responsible (виконує), Accountable (відповідає), Consulted (консультує), Informed (інформується).' :
                'Responsibility assignment matrix: Responsible (does), Accountable (owns), Consulted (advises), Informed (notified).',
            example: currentLang === 'uk' ? 
                'Приклад: В процесі продажів Alex = A (відповідає), Oleg = R (виконує), Igor = C (консультує).' :
                'Example: In sales process Alex = A (accountable), Oleg = R (responsible), Igor = C (consulted).'
        },
        {
            term: 'SOP (Standard Operating Procedure)',
            description: currentLang === 'uk' ? 
                'Стандартна операційна процедура - покроковий опис виконання завдання.' :
                'Standard Operating Procedure - step-by-step description of task execution.',
            example: currentLang === 'uk' ? 
                'Приклад: SOP для обробки тендеру включає 7 кроків від отримання запиту до подачі пропозиції.' :
                'Example: Tender processing SOP includes 7 steps from request receipt to proposal submission.'
        }
    ];
    
    container.innerHTML = `
        <div class="glossary-container">
            <h1>${t('titles.glossary')}</h1>
            <p class="glossary-subtitle">${currentLang === 'uk' ? 
                'Детальне пояснення термінів та метрик, що використовуються в аналізі' :
                'Detailed explanation of terms and metrics used in analysis'}</p>
            
            <div class="glossary-grid">
                ${glossaryTerms.map(term => `
                    <div class="glossary-card">
                        <h3>${term.term}</h3>
                        <p class="description">${term.description}</p>
                        ${term.formula ? `<div class="formula">Formula: <code>${term.formula}</code></div>` : ''}
                        ${term.example ? `<div class="example"><strong>${currentLang === 'uk' ? 'Приклад:' : 'Example:'}</strong> ${term.example}</div>` : ''}
                        ${term.visual || ''}
                    </div>
                `).join('')}
            </div>
            
            ${generateRACIExample()}
            ${generateSOPExample()}
        </div>
    `;
}

function generateRACIExample() {
    return `
        <div class="glossary-section">
            <h2>${currentLang === 'uk' ? 'Приклад RACI матриці для VQ & IM' : 'RACI Matrix Example for VQ & IM'}</h2>
            <table class="raci-table">
                <thead>
                    <tr>
                        <th>${currentLang === 'uk' ? 'Процес / Завдання' : 'Process / Task'}</th>
                        <th>Alex<br>(Sales)</th>
                        <th>Igor<br>(Tender)</th>
                        <th>Oleg<br>(CRM)</th>
                        <th>Rami<br>(Sales IM)</th>
                        <th>Nik<br>(Procurement)</th>
                        <th>Stas<br>(Strategy)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${currentLang === 'uk' ? 'Нові клієнти' : 'New Clients'}</td>
                        <td class="raci-a">A</td>
                        <td class="raci-c">C</td>
                        <td class="raci-r">R</td>
                        <td class="raci-r">R</td>
                        <td class="raci-i">I</td>
                        <td class="raci-i">I</td>
                    </tr>
                    <tr>
                        <td>${currentLang === 'uk' ? 'Тендерні пропозиції' : 'Tender Proposals'}</td>
                        <td class="raci-c">C</td>
                        <td class="raci-a">A/R</td>
                        <td class="raci-i">I</td>
                        <td class="raci-c">C</td>
                        <td class="raci-r">R</td>
                        <td class="raci-i">I</td>
                    </tr>
                    <tr>
                        <td>${currentLang === 'uk' ? 'CRM оновлення' : 'CRM Updates'}</td>
                        <td class="raci-i">I</td>
                        <td class="raci-i">I</td>
                        <td class="raci-a">A/R</td>
                        <td class="raci-r">R</td>
                        <td class="raci-i">I</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>${currentLang === 'uk' ? 'Ціноутворення' : 'Pricing'}</td>
                        <td class="raci-a">A</td>
                        <td class="raci-c">C</td>
                        <td class="raci-i">I</td>
                        <td class="raci-c">C</td>
                        <td class="raci-c">C</td>
                        <td class="raci-c">C</td>
                    </tr>
                    <tr>
                        <td>${currentLang === 'uk' ? 'Стратегічні рішення' : 'Strategic Decisions'}</td>
                        <td class="raci-c">C</td>
                        <td class="raci-c">C</td>
                        <td class="raci-i">I</td>
                        <td class="raci-i">I</td>
                        <td class="raci-i">I</td>
                        <td class="raci-a">A/R</td>
                    </tr>
                </tbody>
            </table>
            <div class="raci-legend">
                <span><strong>R</strong> - Responsible (${currentLang === 'uk' ? 'Виконує' : 'Does'})</span>
                <span><strong>A</strong> - Accountable (${currentLang === 'uk' ? 'Відповідає' : 'Owns'})</span>
                <span><strong>C</strong> - Consulted (${currentLang === 'uk' ? 'Консультує' : 'Advises'})</span>
                <span><strong>I</strong> - Informed (${currentLang === 'uk' ? 'Інформується' : 'Notified'})</span>
            </div>
        </div>
    `;
}

function generateSOPExample() {
    return `
        <div class="glossary-section">
            <h2>${currentLang === 'uk' ? 'Приклад SOP: Обробка тендерного запиту' : 'SOP Example: Tender Request Processing'}</h2>
            <div class="sop-container">
                <div class="sop-header">
                    <p><strong>${currentLang === 'uk' ? 'Власник процесу:' : 'Process Owner:'}</strong> Igor Bordunov</p>
                    <p><strong>${currentLang === 'uk' ? 'Учасники:' : 'Participants:'}</strong> Igor, Nik, Rami, Alex</p>
                    <p><strong>${currentLang === 'uk' ? 'Час виконання:' : 'Execution Time:'}</strong> 2-3 ${currentLang === 'uk' ? 'дні' : 'days'}</p>
                </div>
                
                <div class="sop-steps">
                    <div class="sop-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>${currentLang === 'uk' ? 'Отримання запиту' : 'Request Receipt'}</h4>
                            <p><strong>${currentLang === 'uk' ? 'Відповідальний:' : 'Responsible:'}</strong> Igor</p>
                            <p>${currentLang === 'uk' ? 
                                'Реєстрація в CRM протягом 2 годин, присвоєння ID, первинна оцінка складності.' :
                                'CRM registration within 2 hours, ID assignment, initial complexity assessment.'}</p>
                        </div>
                    </div>
                    
                    <div class="sop-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>${currentLang === 'uk' ? 'Технічний аналіз' : 'Technical Analysis'}</h4>
                            <p><strong>${currentLang === 'uk' ? 'Відповідальний:' : 'Responsible:'}</strong> Igor + Nik</p>
                            <p>${currentLang === 'uk' ? 
                                'Визначення вимог, перевірка наявності, оцінка термінів поставки.' :
                                'Requirements definition, availability check, delivery timeline estimation.'}</p>
                        </div>
                    </div>
                    
                    <div class="sop-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>${currentLang === 'uk' ? 'Комерційна пропозиція' : 'Commercial Proposal'}</h4>
                            <p><strong>${currentLang === 'uk' ? 'Відповідальний:' : 'Responsible:'}</strong> Rami</p>
                            <p>${currentLang === 'uk' ? 
                                'Розрахунок вартості, підготовка КП за шаблоном, узгодження з Alex.' :
                                'Cost calculation, proposal preparation using template, approval with Alex.'}</p>
                        </div>
                    </div>
                    
                    <div class="sop-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>${currentLang === 'uk' ? 'Фінальне затвердження' : 'Final Approval'}</h4>
                            <p><strong>${currentLang === 'uk' ? 'Відповідальний:' : 'Responsible:'}</strong> Alex</p>
                            <p>${currentLang === 'uk' ? 
                                'Перевірка маржинальності, умов оплати, стратегічної відповідності.' :
                                'Margin check, payment terms, strategic alignment verification.'}</p>
                        </div>
                    </div>
                    
                    <div class="sop-step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h4>${currentLang === 'uk' ? 'Відправка клієнту' : 'Client Submission'}</h4>
                            <p><strong>${currentLang === 'uk' ? 'Відповідальний:' : 'Responsible:'}</strong> Igor</p>
                            <p>${currentLang === 'uk' ? 
                                'Відправка через офіційні канали, підтвердження отримання, встановлення дати follow-up.' :
                                'Submission through official channels, receipt confirmation, follow-up date setting.'}</p>
                        </div>
                    </div>
                </div>
                
                <div class="sop-metrics">
                    <h4>${currentLang === 'uk' ? 'KPI процесу:' : 'Process KPIs:'}</h4>
                    <ul>
                        <li>${currentLang === 'uk' ? 'Час відповіді < 48 годин' : 'Response time < 48 hours'}</li>
                        <li>${currentLang === 'uk' ? 'Конверсія тендер → контракт > 25%' : 'Tender → contract conversion > 25%'}</li>
                        <li>${currentLang === 'uk' ? 'Точність розрахунків 98%' : 'Calculation accuracy 98%'}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// ===== Enhanced 3D Visualization with Correct Hierarchy =====
function render3DVisualization(members) {
    const container = document.getElementById('threeContainer');
    container.style.display = 'block';
    
    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 100, 500);
    
    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(0, 150, 300);
    camera.lookAt(0, 0, 0);
    
    // Renderer with performance settings
    renderer = new THREE.WebGLRenderer({ 
        antialias: !preferReducedMotion, // Disable antialiasing for reduced motion
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true // For screenshots
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.shadowMap.enabled = !preferReducedMotion;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = !preferReducedMotion;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -200;
    directionalLight.shadow.camera.right = 200;
    directionalLight.shadow.camera.top = 200;
    directionalLight.shadow.camera.bottom = -200;
    scene.add(directionalLight);
    
    // Colored lights for atmosphere
    if (!preferReducedMotion) {
        const lights = [
            { color: 0x00d4ff, position: [100, 50, 100] },
            { color: 0xa855f7, position: [-100, 50, -100] },
            { color: 0xff0080, position: [0, 100, 0] }
        ];
        
        lights.forEach(light => {
            const pointLight = new THREE.PointLight(light.color, 0.8, 300);
            pointLight.position.set(...light.position);
            scene.add(pointLight);
        });
    }
    
    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(600, 600);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0a0a0a,
        metalness: 0.5,
        roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -150;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Level configurations - C-Level at TOP
    const levels = [
        { name: 'C-Level', minRank: 0, maxRank: 2.5, y: 150, color: 0xff0080, radius: 100 }, // Highest
        { name: 'Senior', minRank: 0, maxRank: 2.5, y: 100, color: 0xff6b35, radius: 120 },
        { name: 'Middle', minRank: 2.5, maxRank: 5, y: 50, color: 0xffea00, radius: 140 },
        { name: 'Junior', minRank: 5, maxRank: 10, y: 0, color: 0x00ff88, radius: 160 } // Lowest
    ];
    
    // Create level platforms
    levels.forEach(level => {
        // Outer ring
        const ringGeometry = new THREE.TorusGeometry(level.radius, 3, 8, 32);
        const ringMaterial = new THREE.MeshStandardMaterial({ 
            color: level.color,
            emissive: level.color,
            emissiveIntensity: 0.3
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = level.y;
        ring.receiveShadow = true;
        ring.castShadow = true;
        scene.add(ring);
        sceneObjects.levelRings.push(ring);
        
        // Platform disc with transparency
        const platformGeometry = new THREE.CylinderGeometry(
            level.radius - 5, 
            level.radius - 5, 
            2, 
            32
        );
        const platformMaterial = new THREE.MeshStandardMaterial({ 
            color: level.color,
            transparent: true,
            opacity: 0.1,
            emissive: level.color,
            emissiveIntensity: 0.1
        });
        const platform = new THREE.Mesh(platformGeometry, platformMaterial);
        platform.position.y = level.y;
        scene.add(platform);
    });
    
    // Group members by actual level
    const membersByLevel = {
        'C-Level': members.filter(m => m.level === 'C-Level'),
        'Senior': members.filter(m => m.level === 'Senior'),
        'Middle': members.filter(m => m.level === 'Middle'),
        'Junior': members.filter(m => m.level === 'Junior')
    };
    
    // Create nodes
    Object.entries(membersByLevel).forEach(([levelName, levelMembers]) => {
        const level = levels.find(l => l.name === levelName);
        if (!level) return;
        
        levelMembers.forEach((member, index) => {
            const totalInLevel = levelMembers.length;
            const angle = (index / totalInLevel) * Math.PI * 2;
            
            // Node sphere - size based on status score
            const size = 6 + member.statusScoreOwnership * 12;
            const geometry = new THREE.SphereGeometry(size, 32, 32);
            
            const color = member.company === 'Vagoteq' ? 0x00d4ff : 0xa855f7;
            const material = new THREE.MeshPhongMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 0.3,
                shininess: 100
            });
            
            const mesh = new THREE.Mesh(geometry, material);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            
            // Position on level ring
            const radiusVariation = (Math.random() - 0.5) * 20;
            const actualRadius = level.radius + radiusVariation - 20;
            mesh.position.x = Math.cos(angle) * actualRadius;
            mesh.position.y = level.y;
            mesh.position.z = Math.sin(angle) * actualRadius;
            
            // Add floating animation data
            mesh.userData = {
                ...member,
                floatOffset: Math.random() * Math.PI * 2,
                floatSpeed: 0.5 + Math.random() * 0.5,
                originalY: level.y
            };
            
            scene.add(mesh);
            sceneObjects.nodes.set(member.id, mesh);
            sceneObjects.nodeObjects.push(mesh);
            
            // Text label with NAME not code
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 512;
            canvas.height = 128;
            
            // Gradient background
            const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
            gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.9)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            // Text with NAME
            context.font = 'Bold 32px Inter';
            context.fillStyle = '#ffffff';
            context.textAlign = 'center';
            context.fillText(member.firstName || member.name.split(' ')[0], 256, 45);
            
            context.font = '24px Inter';
            context.fillStyle = member.company === 'Vagoteq' ? '#00d4ff' : '#a855f7';
            context.fillText(`${member.role}`, 256, 80);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            const spriteMaterial = new THREE.SpriteMaterial({ 
                map: texture,
                transparent: true
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(50, 12.5, 1);
            sprite.position.copy(mesh.position);
            sprite.position.y += size + 10;
            scene.add(sprite);
            sceneObjects.sprites.push({ sprite, node: mesh, size });
        });
    });
    
    // Create connections
    members.forEach(member => {
        const sourceNode = sceneObjects.nodes.get(member.id);
        if (!sourceNode) return;
        
        if (filters.positive) {
            member.preferred.forEach(targetId => {
                const targetNode = sceneObjects.nodes.get(targetId);
                if (targetNode) {
                    const isMutual = mutualTop3Ownership.some(([id1, id2]) => 
                        (id1 === member.id && id2 === targetId) || 
                        (id2 === member.id && id1 === targetId)
                    );
                    const connection = createEnhanced3DConnection(sourceNode, targetNode, 0x00ff88, isMutual ? 0.9 : 0.6);
                    sceneObjects.connections.push(connection);
                    scene.add(connection);
                }
            });
        }
        
        if (filters.negative) {
            member.leastPreferred.forEach(targetId => {
                const targetNode = sceneObjects.nodes.get(targetId);
                if (targetNode) {
                    const connection = createEnhanced3DConnection(sourceNode, targetNode, 0xff0080, 0.4);
                    sceneObjects.connections.push(connection);
                    scene.add(connection);
                }
            });
        }
    });
    
    // Mouse interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    renderer.domElement.addEventListener('mousemove', onMouseMove3D, false);
    renderer.domElement.addEventListener('click', onMouseClick3D, false);
    
    function onMouseMove3D(event) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(sceneObjects.nodeObjects);
        
        renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'grab';
        
        if (intersects.length > 0) {
            const member = intersects[0].object.userData;
            showTooltip(event, member);
        } else {
            hideTooltip();
        }
    }
    
    function onMouseClick3D(event) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(sceneObjects.nodeObjects);
        
        if (intersects.length > 0) {
            const member = intersects[0].object.userData;
            selectNode3D(member, intersects[0].object);
        }
    }
    
    // Camera controls
    setupEnhancedCameraControls();
    
    // Animation loop
    if (!preferReducedMotion) {
        animate3D();
    } else {
        // Single render for reduced motion
        renderer.render(scene, camera);
    }
}

function createEnhanced3DConnection(source, target, color, opacity) {
    const points = [];
    const segments = preferReducedMotion ? 10 : 30; // Less segments for performance
    
    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = source.position.x * (1 - t) + target.position.x * t;
        const y = source.position.y * (1 - t) + target.position.y * t;
        const z = source.position.z * (1 - t) + target.position.z * t;
        
        // Add curve
        const curve = Math.sin(t * Math.PI) * 20;
        points.push(new THREE.Vector3(x, y + curve, z));
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: color,
        opacity: opacity,
        transparent: true,
        linewidth: 2
    });
    
    const line = new THREE.Line(geometry, material);
    return line;
}

function animate3D() {
    animationId = requestAnimationFrame(animate3D);
    
    if (!animationPaused) {
        // Rotate scene slowly
        scene.rotation.y += 0.001;
        
        // Animate nodes floating
        const time = Date.now() * 0.001;
        sceneObjects.nodeObjects.forEach((node) => {
            const userData = node.userData;
            const floatY = Math.sin(time * userData.floatSpeed + userData.floatOffset) * 3;
            node.position.y = userData.originalY + floatY;
        });
        
        // Update sprite positions
        sceneObjects.sprites.forEach(({ sprite, node, size }) => {
            sprite.position.copy(node.position);
            sprite.position.y += size + 12;
        });
    }
    
    renderer.render(scene, camera);
}

function selectNode3D(member, mesh) {
    // Update info panel
    const infoPanel = document.getElementById('selectedInfo3D');
    
    infoPanel.innerHTML = `
        <h5>${member.name}</h5>
        <p>${member.role} • ${member.company}</p>
        <div class="node-metrics">
            <div class="metric-small">
                <span class="label">${t('member.meanRank')}:</span>
                <span class="value">${member.meanRankOwnership.toFixed(2)}</span>
            </div>
            <div class="metric-small">
                <span class="label">${t('member.top3Count')}:</span>
                <span class="value">${member.top3CountOwnership}</span>
            </div>
            <div class="metric-small">
                <span class="label">${t('member.statusScore')}:</span>
                <span class="value">${member.statusScoreOwnership.toFixed(3)}</span>
            </div>
            <div class="metric-small">
                <span class="label">${t('quick.positive')}:</span>
                <span class="value">${member.preferred.length}</span>
            </div>
            <div class="metric-small">
                <span class="label">${t('quick.negative')}:</span>
                <span class="value">${member.leastPreferred.length}</span>
            </div>
            <div class="metric-small">
                <span class="label">${t('member.bias')}:</span>
                <span class="value ${member.biasOwnership > 0 ? 'negative' : 'positive'}">${member.biasOwnership > 0 ? '+' : ''}${member.biasOwnership.toFixed(2)}</span>
            </div>
        </div>
        <button class="detail-btn" onclick="showQuickInfo(teamData.members.find(m => m.id === '${member.id}'), event)">
            ${t('quick.details')}
        </button>
    `;
    
    // Highlight node
    sceneObjects.nodeObjects.forEach(node => {
        if (node === mesh) {
            node.scale.set(1.2, 1.2, 1.2);
        } else {
            node.scale.set(1, 1, 1);
        }
    });
}

function setupEnhancedCameraControls() {
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    renderer.domElement.addEventListener('mousedown', () => {
        isDragging = true;
        renderer.domElement.style.cursor = 'grabbing';
    });
    
    renderer.domElement.addEventListener('mouseup', () => {
        isDragging = false;
        renderer.domElement.style.cursor = 'grab';
    });
    
    renderer.domElement.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            const rotationSpeed = 0.005;
            scene.rotation.y += deltaMove.x * rotationSpeed;
            camera.position.y -= deltaMove.y * 0.5;
            camera.position.y = Math.max(-50, Math.min(250, camera.position.y));
        }
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    renderer.domElement.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.position.z += e.deltaY * 0.1;
        camera.position.z = Math.max(150, Math.min(500, camera.position.z));
    });
}

// ===== Enhanced Force Graph with Better Spacing =====
function renderForceGraph(members) {
    const svg = d3.select('#svgCanvas');
    svg.style('display', 'block');
    
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    
    svg.attr('viewBox', `0 0 ${width} ${height}`);
    
    // Prepare data
    const nodes = members.map(m => ({ ...m }));
    const links = [];
    
    members.forEach(member => {
        if (filters.positive && filters.outgoing) {
            member.preferred.forEach(targetId => {
                const target = members.find(m => m.id === targetId);
                if (target) {
                    const isMutual = mutualTop3Ownership.some(([id1, id2]) => 
                        (id1 === member.id && id2 === targetId) || 
                        (id2 === member.id && id1 === targetId)
                    );
                    links.push({
                        source: member.id,
                        target: targetId,
                        type: 'positive',
                        direction: 'outgoing',
                        strength: isMutual ? 0.9 : 0.7,
                        mutual: isMutual
                    });
                }
            });
        }
        
        if (filters.negative && filters.outgoing) {
            member.leastPreferred.forEach(targetId => {
                const target = members.find(m => m.id === targetId);
                if (target) {
                    links.push({
                        source: member.id,
                        target: targetId,
                        type: 'negative',
                        direction: 'outgoing',
                        strength: 0.5,
                        mutual: false
                    });
                }
            });
        }
    });
    
    // Add incoming links if filter is active
    if (filters.incoming) {
        const incomingLinks = [];
        links.forEach(link => {
            if (!links.find(l => l.source === link.target && l.target === link.source)) {
                incomingLinks.push({
                    source: link.target,
                    target: link.source,
                    type: link.type,
                    direction: 'incoming',
                    strength: link.strength,
                    mutual: link.mutual
                });
            }
        });
        incomingLinks.forEach(il => {
            if (!links.find(l => l.source === il.source && l.target === il.target)) {
                links.push(il);
            }
        });
    }
    
    // Create simulation with increased spacing
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
            const source = nodes.find(n => n.id === d.source.id || n.id === d.source);
            const target = nodes.find(n => n.id === d.target.id || n.id === d.target);
            if (source && target) {
                // Increase distance for better spacing
                return 180 + Math.abs(source.meanRankOwnership - target.meanRankOwnership) * 40;
            }
            return 250;
        }).strength(d => d.mutual ? 0.8 : 0.5))
        .force('charge', d3.forceManyBody().strength(-1500)) // Increased repulsion
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => 70 + (8 - d.meanRankOwnership) * 10)) // Increased collision radius
        .force('y', d3.forceY(d => {
            // Position nodes vertically based on mean rank
            return height * (d.meanRankOwnership / 8);
        }).strength(0.5));
    
    const g = svg.append('g');
    
    // Zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });
    
    svg.call(zoom);
    
    // Create arrow markers
    svg.append('defs').selectAll('marker')
        .data(['positive-arrow', 'negative-arrow', 'positive-mutual-arrow', 'negative-mutual-arrow'])
        .enter().append('marker')
        .attr('id', d => d)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 45) // Adjusted for larger nodes
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', d => d.includes('positive') ? '#00ff88' : '#ff0080');
    
    // Create links
    const link = g.append('g')
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('stroke', d => d.type === 'positive' ? '#00ff88' : '#ff0080')
        .attr('stroke-opacity', d => d.strength)
        .attr('stroke-width', d => d.mutual ? 3 : 2)
        .attr('class', d => `link ${d.direction} ${d.mutual ? 'mutual' : ''}`)
        .attr('marker-end', d => `url(#${d.type}-${d.mutual ? 'mutual-' : ''}arrow)`);
    
    // Style incoming vs outgoing
    link.filter(d => d.direction === 'incoming')
        .attr('stroke-dasharray', '5,5');
    
    // Create nodes
    const node = g.append('g')
        .selectAll('g')
        .data(nodes)
        .enter().append('g')
        .attr('class', 'node')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
    
    // Node circles - size based on status score
    node.append('circle')
        .attr('r', d => 30 + d.statusScoreOwnership * 30) // Larger nodes
        .attr('fill', d => d.company === 'Vagoteq' ? '#00d4ff' : '#a855f7')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer');
    
    // Leader indicator
    node.filter(d => d.leader)
        .append('circle')
        .attr('r', d => 35 + d.statusScoreOwnership * 30)
        .attr('fill', 'none')
        .attr('stroke', '#ffea00')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,5');
    
    // Node text - show NAME not code
    node.append('text')
        .text(d => d.firstName || d.name.split(' ')[0])
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold')
        .attr('font-size', '14px')
        .style('pointer-events', 'none');
    
    // Labels with role
    node.append('text')
        .text(d => d.role)
        .attr('text-anchor', 'middle')
        .attr('dy', d => 45 + d.statusScoreOwnership * 30)
        .attr('fill', '#fff')
        .attr('font-size', '11px')
        .style('pointer-events', 'none');
    
    // Rank indicator
    node.append('text')
        .text(d => `#${d.meanRankOwnership.toFixed(1)}`)
        .attr('text-anchor', 'middle')
        .attr('dy', d => -(35 + d.statusScoreOwnership * 30))
        .attr('fill', d => d.company === 'Vagoteq' ? '#00d4ff' : '#a855f7')
        .attr('font-size', '12px')
        .attr('font-weight', 'bold')
        .style('pointer-events', 'none');
    
    // Interaction
    node.on('mouseover', function(event, d) {
        // Highlight connections
        link.classed('highlighted', l => 
            l.source.id === d.id || l.target.id === d.id
        );
        link.classed('dimmed', l => 
            !(l.source.id === d.id || l.target.id === d.id)
        );
        
        node.classed('highlighted', n => {
            if (n.id === d.id) return true;
            return links.some(l => 
                (l.source.id === d.id && l.target.id === n.id) ||
                (l.target.id === d.id && l.source.id === n.id)
            );
        });
        
        showTooltip(event, d);
    })
    .on('mouseout', function() {
        link.classed('highlighted', false);
        link.classed('dimmed', false);
        node.classed('highlighted', false);
        hideTooltip();
    })
    .on('click', function(event, d) {
        event.stopPropagation();
        showQuickInfo(d, event);
    });
    
    // Update positions
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}

// ===== Fixed Circular Layout =====
function renderCircularLayout(members) {
    const svg = d3.select('#svgCanvas');
    svg.style('display', 'block');
    
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    const radius = Math.min(width, height) / 2 - 180;
    const centerX = width / 2;
    const centerY = height / 2;
    
    svg.attr('viewBox', `0 0 ${width} ${height}`);
    
    const g = svg.append('g')
        .attr('transform', `translate(${centerX}, ${centerY})`);
    
    // Company colors
    const companyColors = {
        'Vagoteq': '#00d4ff',
        'Intermastra': '#a855f7'
    };
    
    // Sort members by mean rank for better positioning
    members.sort((a, b) => a.meanRankOwnership - b.meanRankOwnership);
    
    // Position nodes in circle
    const angleStep = (2 * Math.PI) / members.length;
    members.forEach((member, i) => {
        const angle = i * angleStep - Math.PI / 2;
        member.x = Math.cos(angle) * radius;
        member.y = Math.sin(angle) * radius;
        member.angle = angle;
    });
    
    // Create links
    const links = [];
    members.forEach(member => {
        if (filters.positive) {
            member.preferred.forEach(targetId => {
                const target = members.find(m => m.id === targetId);
                if (target) {
                    const isMutual = mutualTop3Ownership.some(([id1, id2]) => 
                        (id1 === member.id && id2 === targetId) || 
                        (id2 === member.id && id1 === targetId)
                    );
                    links.push({
                        source: member,
                        target: target,
                        type: 'positive',
                        mutual: isMutual
                    });
                }
            });
        }
        if (filters.negative) {
            member.leastPreferred.forEach(targetId => {
                const target = members.find(m => m.id === targetId);
                if (target) {
                    links.push({
                        source: member,
                        target: target,
                        type: 'negative',
                        mutual: false
                    });
                }
            });
        }
    });
    
    // Draw company arcs
    const arc = d3.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius + 20);
    
    let currentAngle = -Math.PI / 2;
    ['Vagoteq', 'Intermastra'].forEach(company => {
        const companyMembers = members.filter(m => m.company === company);
        const angleSize = (companyMembers.length / members.length) * 2 * Math.PI;
        
        g.append('path')
            .attr('d', arc({
                startAngle: currentAngle,
                endAngle: currentAngle + angleSize
            }))
            .attr('fill', companyColors[company])
            .attr('opacity', 0.2);
        
        // Company label
        const midAngle = currentAngle + angleSize / 2;
        const labelRadius = radius + 60;
        g.append('text')
            .attr('x', Math.cos(midAngle) * labelRadius)
            .attr('y', Math.sin(midAngle) * labelRadius)
            .attr('text-anchor', 'middle')
            .attr('fill', companyColors[company])
            .attr('font-size', '20px')
            .attr('font-weight', 'bold')
            .text(company);
        
        currentAngle += angleSize;
    });
    
    // Draw links with curves
    const linkGroup = g.append('g');
    links.forEach(link => {
        const path = d3.path();
        path.moveTo(link.source.x, link.source.y);
        path.quadraticCurveTo(0, 0, link.target.x, link.target.y);
        
        linkGroup.append('path')
            .attr('d', path.toString())
            .attr('stroke', link.type === 'positive' ? '#00ff88' : '#ff0080')
            .attr('stroke-opacity', link.mutual ? 0.9 : 0.6)
            .attr('stroke-width', link.mutual ? 3 : 2)
            .attr('fill', 'none')
            .attr('class', `circular-link ${link.mutual ? 'mutual' : ''}`)
            .datum(link);
    });
    
    // Draw nodes
    const nodeGroup = g.append('g');
    const nodes = nodeGroup.selectAll('g')
        .data(members)
        .enter().append('g')
        .attr('transform', d => `translate(${d.x}, ${d.y})`)
        .attr('class', 'circular-node');
    
    // Node circles - size based on status score
    nodes.append('circle')
        .attr('r', d => 25 + d.statusScoreOwnership * 25)
        .attr('fill', d => companyColors[d.company])
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer');
    
    // Leader indicator
    nodes.filter(d => d.leader)
        .append('circle')
        .attr('r', d => 30 + d.statusScoreOwnership * 25)
        .attr('fill', 'none')
        .attr('stroke', '#ffea00')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,5');
    
    // Node text - show NAME
    nodes.append('text')
        .text(d => d.firstName || d.name.split(' ')[0])
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold')
        .attr('font-size', '14px');
    
    // External labels with rank
    nodes.append('text')
        .text(d => `${d.name} (#${d.meanRankOwnership.toFixed(1)})`)
        .attr('x', d => Math.cos(d.angle) * 60)
        .attr('y', d => Math.sin(d.angle) * 60)
        .attr('text-anchor', d => {
            if (d.angle > -Math.PI/2 && d.angle < Math.PI/2) return 'start';
            return 'end';
        })
        .attr('fill', '#fff')
        .attr('font-size', '12px');
    
    // Interaction
    nodes.on('mouseover', function(event, d) {
        // Highlight connections
        const connectedNodes = new Set([d.id]);
        links.forEach(link => {
            if (link.source.id === d.id) connectedNodes.add(link.target.id);
            if (link.target.id === d.id) connectedNodes.add(link.source.id);
        });
        
        linkGroup.selectAll('.circular-link')
            .classed('highlighted', link => 
                link.source.id === d.id || link.target.id === d.id
            )
            .classed('dimmed', link => 
                !(link.source.id === d.id || link.target.id === d.id)
            );
        
        nodes.style('opacity', n => connectedNodes.has(n.id) ? 1 : 0.3);
        
        showSideInfo(d);
    })
    .on('mouseout', function() {
        linkGroup.selectAll('.circular-link')
            .classed('highlighted', false)
            .classed('dimmed', false);
        nodes.style('opacity', 1);
        hideSideInfo();
    })
    .on('click', function(event, d) {
        event.stopPropagation();
        showQuickInfo(d, event);
    });
}

// ===== Heat Map =====
function renderHeatmap(members) {
    const canvas = document.getElementById('heatmapCanvas');
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Sort members by mean rank for better visibility
    members.sort((a, b) => a.meanRankOwnership - b.meanRankOwnership);
    
    const cellSize = Math.min(
        (canvas.width - 300) / members.length,
        (canvas.height - 300) / members.length,
        50
    );
    
    const offsetX = (canvas.width - cellSize * members.length) / 2;
    const offsetY = 150;
    
    // Clear canvas
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Title
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(t('titles.heatmap'), canvas.width / 2, 40);
    
    // Create interaction matrix
    const matrix = [];
    members.forEach((member, i) => {
        matrix[i] = new Array(members.length).fill(0);
        member.preferred.forEach(targetId => {
            const targetIndex = members.findIndex(m => m.id === targetId);
            if (targetIndex !== -1) {
                const isMutual = mutualTop3Ownership.some(([id1, id2]) => 
                    (id1 === member.id && id2 === targetId) || 
                    (id2 === member.id && id1 === targetId)
                );
                matrix[i][targetIndex] = isMutual ? 2 : 1;
            }
        });
        member.leastPreferred.forEach(targetId => {
            const targetIndex = members.findIndex(m => m.id === targetId);
            if (targetIndex !== -1) matrix[i][targetIndex] = -1;
        });
    });
    
    // Store current highlight state
    let highlightedRow = -1;
    let highlightedCol = -1;
    
    // Draw function
    function drawHeatmap() {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Title
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(t('titles.heatmap'), canvas.width / 2, 40);
        
        // Draw cells
        members.forEach((rowMember, i) => {
            members.forEach((colMember, j) => {
                const x = offsetX + j * cellSize;
                const y = offsetY + i * cellSize;
                const value = matrix[i][j];
                
                // Cell color based on value and top3 status
                if (value === 2) {
                    // Mutual top-3
                    ctx.fillStyle = 'rgba(0, 255, 136, 1)';
                } else if (value === 1) {
                    // Regular positive
                    ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
                } else if (value < 0) {
                    ctx.fillStyle = 'rgba(255, 0, 128, 0.8)';
                } else if (i === j) {
                    // Diagonal - show mean rank with gradient
                    const rank = rowMember.meanRankOwnership;
                    const intensity = 1 - (rank - 1) / 7;
                    ctx.fillStyle = `rgba(0, 212, 255, ${intensity})`;
                } else {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
                }
                
                // Highlight effect
                if (i === highlightedRow || j === highlightedCol) {
                    ctx.globalAlpha = 1;
                } else if (highlightedRow !== -1 || highlightedCol !== -1) {
                    ctx.globalAlpha = 0.3;
                } else {
                    ctx.globalAlpha = 1;
                }
                
                ctx.fillRect(x, y, cellSize - 2, cellSize - 2);
                ctx.globalAlpha = 1;
                
                // Text for significant links or diagonal
                if ((Math.abs(value) > 0 || i === j) && cellSize > 30) {
                    ctx.fillStyle = '#fff';
                    ctx.font = 'bold 12px Inter';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    if (i === j) {
                        ctx.fillText(rowMember.meanRankOwnership.toFixed(1), x + cellSize/2, y + cellSize/2);
                    } else if (value === 2) {
                        ctx.fillText('⟷', x + cellSize/2, y + cellSize/2);
                    } else {
                        ctx.fillText(value > 0 ? '+' : '-', x + cellSize/2, y + cellSize/2);
                    }
                }
            });
        });
        
        // Highlight borders
        if (highlightedRow >= 0) {
            ctx.strokeStyle = '#ffea00';
            ctx.lineWidth = 3;
            ctx.strokeRect(offsetX - 1, offsetY + highlightedRow * cellSize - 1, 
                          members.length * cellSize + 2, cellSize + 2);
        }
        
        if (highlightedCol >= 0) {
            ctx.strokeStyle = '#ffea00';
            ctx.lineWidth = 3;
            ctx.strokeRect(offsetX + highlightedCol * cellSize - 1, offsetY - 1, 
                          cellSize + 2, members.length * cellSize + 2);
        }
        
        // Draw labels with NAMES
        ctx.save();
        ctx.fillStyle = '#fff';
        ctx.font = '11px Inter';
        
        // Row labels
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        members.forEach((member, i) => {
            ctx.fillText(member.firstName || member.name.split(' ')[0], offsetX - 10, offsetY + i * cellSize + cellSize/2);
        });
        
        // Column labels
        ctx.save();
        members.forEach((member, i) => {
            ctx.translate(offsetX + i * cellSize + cellSize/2, offsetY - 10);
            ctx.rotate(-Math.PI/4);
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(member.firstName || member.name.split(' ')[0], 0, 0);
            ctx.restore();
            ctx.save();
        });
        ctx.restore();
        
        // Legend (smaller and in corner)
        if (legendVisible) {
            const legendX = 20;
            const legendY = canvas.height - 170;
            
            // Background for legend
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(legendX - 10, legendY - 30, 200, 160);
            
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px Inter';
            ctx.fillText(t('legend.title'), legendX, legendY);
            
            const items = [
                { color: 'rgba(0, 255, 136, 1)', label: t('legend.mutual') },
                { color: 'rgba(0, 255, 136, 0.5)', label: t('legend.positive') },
                { color: 'rgba(255, 0, 128, 0.8)', label: t('legend.negative') },
                { color: 'rgba(0, 212, 255, 0.8)', label: 'Mean Rank (Diagonal)' }
            ];
            
            items.forEach((item, i) => {
                ctx.fillStyle = item.color;
                ctx.fillRect(legendX, legendY + 10 + i * 30, 20, 20);
                ctx.fillStyle = '#fff';
                ctx.font = '11px Inter';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillText(item.label, legendX + 25, legendY + 20 + i * 30);
            });
        }
    }
    
    // Initial draw
    drawHeatmap();
    
    // Mouse interaction
    canvas.onmousemove = function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const col = Math.floor((x - offsetX) / cellSize);
        const row = Math.floor((y - offsetY) / cellSize);
        
        if (col >= 0 && col < members.length && row >= 0 && row < members.length) {
            if (row !== highlightedRow || col !== highlightedCol) {
                highlightedRow = row;
                highlightedCol = col;
                drawHeatmap();
            }
            
            // Show tooltip with more data
            const member = members[row];
            const target = members[col];
            const value = matrix[row][col];
            
            let tooltipText = `${member.name} → ${target.name}`;
            if (row === col) {
                tooltipText = `${member.name}<br>Mean Rank: ${member.meanRankOwnership.toFixed(2)}<br>Status Score: ${member.statusScoreOwnership.toFixed(3)}`;
            } else if (value === 2) {
                tooltipText += ` (${t('legend.mutual')})`;
            } else if (value === 1) {
                tooltipText += ` (${t('legend.positive')})`;
            } else if (value < 0) {
                tooltipText += ` (${t('legend.negative')})`;
            } else {
                tooltipText += ' (Neutral)';
            }
            
            const tooltip = document.getElementById('tooltip');
            tooltip.innerHTML = tooltipText;
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY - 30 + 'px';
            tooltip.classList.add('active');
        } else {
            highlightedRow = -1;
            highlightedCol = -1;
            drawHeatmap();
            hideTooltip();
        }
    };
    
    canvas.onmouseleave = function() {
        highlightedRow = -1;
        highlightedCol = -1;
        drawHeatmap();
        hideTooltip();
    };
    
    canvas.onclick = function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const col = Math.floor((x - offsetX) / cellSize);
        const row = Math.floor((y - offsetY) / cellSize);
        
        if (col >= 0 && col < members.length && row >= 0 && row < members.length) {
            const member = members[row];
            showQuickInfo(member, event);
        }
    };
}

// ===== Enhanced Development View with Correct Quadrants =====
function renderDevelopmentView(members) {
    const container = document.getElementById('developmentContainer');
    container.style.display = 'block';
    
    // Filter out C-Level members for quadrant analysis
    const nonLeaderMembers = members.filter(m => m.level !== 'C-Level');
    
    const titleKey = currentLang === 'uk' ? 
        'Аналіз розвитку команди: Ownership vs Trust' : 
        'Team Development Analysis: Ownership vs Trust';
    const subtitleKey = currentLang === 'uk' ?
        'Квадрантний аналіз для визначення готовності до делегування та розвитку' :
        'Quadrant analysis for delegation readiness and development needs';
    
    container.innerHTML = `
        <div class="development-header">
            <h2>${titleKey}</h2>
            <p>${subtitleKey}</p>
        </div>
        <div class="development-grid">
            <div class="chart-container">
                <h3 class="chart-title">${currentLang === 'uk' ? 'Матриця Ownership-Trust' : 'Ownership-Trust Matrix'}</h3>
                <svg id="scatterPlot"></svg>
            </div>
            <div class="chart-container">
                <h3 class="chart-title">${currentLang === 'uk' ? 'Рекомендації розвитку' : 'Development Recommendations'}</h3>
                <div id="developmentRecommendations"></div>
            </div>
        </div>
        <div class="delegation-analysis" id="delegationAnalysis"></div>
    `;
    
    renderScatterPlot(nonLeaderMembers);
    generateDevelopmentRecommendations(nonLeaderMembers);
}

function renderScatterPlot(members) {
    const svg = d3.select('#scatterPlot');
    const margin = { top: 90, right: 200, bottom: 100, left: 80 };
    const container = svg.node().parentElement;
    const width = container.clientWidth - margin.left - margin.right;
    const height = 650 - margin.top - margin.bottom;
    
    svg.attr('width', width + margin.left + margin.right)
       .attr('height', height + margin.top + margin.bottom);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Scales
    const xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width]);
    
    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
    
    // Grid lines
    g.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .tickSize(-height)
            .tickFormat('')
        )
        .style('stroke-dasharray', '3,3')
        .style('opacity', 0.3);
    
    g.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(yScale)
            .tickSize(-width)
            .tickFormat('')
        )
        .style('stroke-dasharray', '3,3')
        .style('opacity', 0.3);
    
    // Axes
    g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('fill', '#fff')
        .style('text-anchor', 'middle')
        .text('Ownership Index →');
    
    g.append('g')
        .call(d3.axisLeft(yScale))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -40)
        .attr('x', -height / 2)
        .attr('fill', '#fff')
        .style('text-anchor', 'middle')
        .text('Trust Index →');
    
    // Quadrant lines
    g.append('line')
        .attr('x1', width / 2)
        .attr('x2', width / 2)
        .attr('y1', 0)
        .attr('y2', height)
        .attr('stroke', '#666')
        .attr('stroke-dasharray', '5,5');
    
    g.append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', height / 2)
        .attr('y2', height / 2)
        .attr('stroke', '#666')
        .attr('stroke-dasharray', '5,5');
    
    // Quadrant labels - CORRECTED
    const quadrants = [
        { x: width * 0.75, y: height * 0.25, text: `Q1: ${t('quadrant.highPerformers')}` }, // Top right
        { x: width * 0.25, y: height * 0.25, text: `Q2: ${t('quadrant.underutilized')}` }, // Top left
        { x: width * 0.25, y: height * 0.75, text: `Q3: ${t('quadrant.developmentNeeded')}` }, // Bottom left
        { x: width * 0.75, y: height * 0.75, text: `Q4: ${t('quadrant.delegationReady')}` } // Bottom right
    ];
    
    quadrants.forEach(q => {
        g.append('text')
            .attr('x', q.x)
            .attr('y', q.y)
            .attr('text-anchor', 'middle')
            .attr('fill', '#666')
            .attr('font-style', 'italic')
            .text(q.text);
    });
    
    // Highlight zones
    // High performers zone (Q1 - top right)
    g.append('rect')
        .attr('x', width / 2)
        .attr('y', 0)
        .attr('width', width / 2)
        .attr('height', height / 2)
        .attr('fill', '#00d4ff')
        .attr('fill-opacity', 0.05)
        .attr('stroke', '#00d4ff')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');
    
    // Delegation ready zone (Q4 - bottom right)
    g.append('rect')
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('width', width / 2)
        .attr('height', height / 2)
        .attr('fill', '#00ff88')
        .attr('fill-opacity', 0.1)
        .attr('stroke', '#00ff88')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5');
    
    // Create tooltip div
    const tooltip = d3.select('body').append('div')
        .attr('class', 'scatter-tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('background', 'rgba(0, 0, 0, 0.9)')
        .style('padding', '10px')
        .style('border-radius', '8px')
        .style('pointer-events', 'none')
        .style('font-size', '12px')
        .style('color', '#fff');
    
    // Plot points
    const points = g.selectAll('.point')
        .data(members)
        .enter().append('g')
        .attr('class', 'point')
        .attr('transform', d => `translate(${xScale(d.ownershipIndex)},${yScale(d.trustIndex)})`)
        .style('opacity', 0);
    
    points.append('circle')
        .attr('r', d => 10 + d.statusScoreOwnership * 15)
        .attr('fill', d => {
            const isHighOwnership = d.ownershipIndex > 50;
            const isHighTrust = d.trustIndex > 50;
            if (isHighOwnership && isHighTrust) return '#00d4ff'; // Q1: High performers
            if (!isHighOwnership && isHighTrust) return '#a855f7'; // Q2: Underutilized
            if (!isHighOwnership && !isHighTrust) return '#ff0080'; // Q3: Development needed
            return '#00ff88'; // Q4: Delegation ready
        })
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer');
    
    // Labels with NAMES
    points.append('text')
        .text(d => d.firstName || d.name.split(' ')[0])
        .attr('x', 0)
        .attr('y', d => -(12 + d.statusScoreOwnership * 15))
        .attr('text-anchor', 'middle')
        .attr('fill', '#fff')
        .attr('font-size', '12px')
        .attr('font-weight', '600');
    
    // Role labels
    points.append('text')
        .text(d => d.role)
        .attr('x', 0)
        .attr('y', d => 12 + d.statusScoreOwnership * 15 + 10)
        .attr('text-anchor', 'middle')
        .attr('fill', '#aaa')
        .attr('font-size', '10px');
    
    // Animate points to position
    points.transition()
        .duration(800)
        .delay((d, i) => i * 50)
        .style('opacity', 1);
    
    // Interaction
    points.on('mouseover', function(event, d) {
        d3.select(this).select('circle')
            .transition()
            .duration(200)
            .attr('r', d => 14 + d.statusScoreOwnership * 15);
        
        tooltip.transition()
            .duration(200)
            .style('opacity', .9);
        
        const quadrant = getQuadrant(d.ownershipIndex, d.trustIndex);
        tooltip.html(`
            <strong>${d.name}</strong><br/>
            ${d.role}<br/>
            Ownership: ${d.ownershipIndex}<br/>
            Trust: ${d.trustIndex}<br/>
            Status Score: ${d.statusScoreOwnership.toFixed(3)}<br/>
            Mean Rank: ${d.meanRankOwnership.toFixed(2)}<br/>
            ${t('quadrant.' + quadrant)}
        `)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseout', function(event, d) {
        d3.select(this).select('circle')
            .transition()
            .duration(200)
            .attr('r', d => 10 + d.statusScoreOwnership * 15);
        
        tooltip.transition()
            .duration(500)
            .style('opacity', 0);
    })
    .on('click', function(event, d) {
        showQuickInfo(d, event);
    });
    
    // Clean up tooltip on component unmount
    return () => tooltip.remove();
}

// Helper function to get quadrant
function getQuadrant(ownership, trust) {
    if (ownership > 50 && trust > 50) return 'highPerformers';
    if (ownership < 50 && trust > 50) return 'underutilized';
    if (ownership < 50 && trust < 50) return 'developmentNeeded';
    return 'delegationReady';
}

function generateDevelopmentRecommendations(members) {
    const recommendationsEl = document.getElementById('developmentRecommendations');
    const analysisEl = document.getElementById('delegationAnalysis');
    
    // Find people in each quadrant
    const q1Members = members.filter(m => m.ownershipIndex > 50 && m.trustIndex > 50); // High performers
    const q2Members = members.filter(m => m.ownershipIndex < 50 && m.trustIndex > 50); // Underutilized
    const q3Members = members.filter(m => m.ownershipIndex < 50 && m.trustIndex < 50); // Development needed
    const q4Members = members.filter(m => m.ownershipIndex > 50 && m.trustIndex < 50); // Delegation ready
    
    // Recommendations HTML
    let recHtml = '<div class="recommendations-list">';
    
    // Based on real data analysis
    recHtml += `
        <div class="recommendation-item critical">
            <i class="fas fa-exclamation-triangle"></i>
            <div>
                <h4>${currentLang === 'uk' ? 'Критична централізація' : 'Critical Centralization'}</h4>
                <p>${currentLang === 'uk' ? 
                    'Alex має mean rank 1.5 - профіцит довіри. Необхідне вирощування кандидатів на делегування.' : 
                    'Alex has mean rank 1.5 - excessive unused trust concentration. Immediate task delegation needed.'}</p>
            </div>
        </div>
    `;
    
    if (q1Members.length > 0) {
        const highPerformersText = currentLang === 'uk' ? 
            'Високопродуктивні (висока довіра та володіння):' : 
            'High performers (high trust and ownership):';
        
        recHtml += `
            <div class="recommendation-item success">
                <i class="fas fa-star"></i>
                <div>
                    <h4>${highPerformersText}</h4>
                    <ul>
                        ${q1Members.map(m => `<li>${m.name} - ${m.role} (Rank: ${m.meanRankOwnership.toFixed(2)})</li>`).join('')}
                    </ul>
                    <p>${currentLang === 'uk' ? 
                        'Рекомендація: Використовувати як менторів для розвитку інших.' : 
                        'Recommendation: Use as mentors for developing others.'}</p>
                </div>
            </div>
        `;
    }
    
    if (q4Members.length > 0) {
        const delegationText = currentLang === 'uk' ? 
            'Готові прийняти делегування (високе володіння, низька довіра):' : 
            'Ready for delegation (high ownership, low trust):';
        
        recHtml += `
            <div class="recommendation-item info">
                <i class="fas fa-share"></i>
                <div>
                    <h4>${delegationText}</h4>
                    <ul>
                        ${q4Members.map(m => `<li>${m.name} - ${m.role} (Status: ${m.statusScoreOwnership.toFixed(3)})</li>`).join('')}
                    </ul>
                    <p>${currentLang === 'uk' ? 
                        'Рекомендація: Передати більше відповідальності, створити простір для росту.' : 
                        'Recommendation: Transfer more responsibility, create space for growth.'}</p>
                </div>
            </div>
        `;
    }
    
    // High bias members
    const highBiasMembers = members.filter(m => m.biasOwnership > 1 || m.biasTrust > 1);
    if (highBiasMembers.length > 0) {
        recHtml += `
            <div class="recommendation-item warning">
                <i class="fas fa-user-graduate"></i>
                <div>
                    <h4>${currentLang === 'uk' ? 'Потребують калібрування очікувань' : 'Need expectation calibration'}</h4>
                    <p>${currentLang === 'uk' ? 
                        'Високий позитивний bias - переоцінюють свій статус:' : 
                        'High positive bias - overestimate their status:'}</p>
                    <ul>
                        ${highBiasMembers.map(m => `<li>${m.name} - Bias: +${Math.max(m.biasOwnership, m.biasTrust).toFixed(2)}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    recHtml += '</div>';
    recommendationsEl.innerHTML = recHtml;
    
    // Delegation analysis
    const analysisTitle = currentLang === 'uk' ? 'Детальний аналіз делегування' : 'Detailed Delegation Analysis';
    const distributionTitle = currentLang === 'uk' ? 'Розподіл по квадрантах' : 'Quadrant Distribution';
    const conclusionsTitle = currentLang === 'uk' ? 'Ключові висновки' : 'Key Conclusions';
    
    const bridgeRisk = currentLang === 'uk' ? 
        'Igor - критичний міст між компаніями (всі крос-входи). Ризик одноточкового провалу.' : 
        'Igor - critical bridge between companies (all cross-entries). Single point of failure risk.';
    
    const peripheryRisk = currentLang === 'uk' ? 
        'Yana та Viktoria - 0 входів в топ-3. Ризик ізоляції та демотивації.' : 
        'Yana and Viktoria - 0 top-3 entries. Risk of isolation and demotivation.';
    
    let analysisHtml = `
        <h3>${analysisTitle}</h3>
        <div class="analysis-grid">
            <div class="analysis-card">
                <h4>${distributionTitle}</h4>
                <ul>
                    <li>Q1 (${t('quadrant.highPerformers')}): ${q1Members.length} ${currentLang === 'uk' ? 'осіб' : 'people'}</li>
                    <li>Q2 (${t('quadrant.underutilized')}): ${q2Members.length} ${currentLang === 'uk' ? 'осіб' : 'people'}</li>
                    <li>Q3 (${t('quadrant.developmentNeeded')}): ${q3Members.length} ${currentLang === 'uk' ? 'осіб' : 'people'}</li>
                    <li>Q4 (${t('quadrant.delegationReady')}): ${q4Members.length} ${currentLang === 'uk' ? 'осіб' : 'people'}</li>
                </ul>
            </div>
            <div class="analysis-card">
                <h4>${conclusionsTitle}</h4>
                <p><strong>${bridgeRisk}</strong></p>
                <p><strong>${peripheryRisk}</strong></p>
                <p>${currentLang === 'uk' ? 
                    'Поляризація: розрив між Alex (1.5) та Viktoria (7.5) = 6 позицій.' : 
                    'Polarization: gap between Alex (1.5) and Viktoria (7.5) = 6 positions.'}</p>
            </div>
        </div>
        
        <div class="development-matrix">
            <h4>${currentLang === 'uk' ? 'Матриця розвитку по квадрантах' : 'Development Matrix by Quadrant'}</h4>
            <table class="development-table">
                <thead>
                    <tr>
                        <th>${currentLang === 'uk' ? 'Квадрант' : 'Quadrant'}</th>
                        <th>${currentLang === 'uk' ? 'Характеристика' : 'Characteristics'}</th>
                        <th>${currentLang === 'uk' ? 'Стратегія розвитку' : 'Development Strategy'}</th>
                        <th>${currentLang === 'uk' ? 'Члени команди' : 'Team Members'}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>${currentLang === 'uk' ? 'Високі Trust + Ownership' : 'High Trust + Ownership'}</td>
                        <td>${currentLang === 'uk' ? 
                            'Менторство, лідерські ролі, стратегічні проекти' : 
                            'Mentoring, leadership roles, strategic projects'}</td>
                        <td>${q1Members.map(m => m.name).join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td>${currentLang === 'uk' ? 'Високий Trust, низький Ownership' : 'High Trust, low Ownership'}</td>
                        <td>${currentLang === 'uk' ? 
                            'Розширення повноважень, залучення до прийняття рішень' : 
                            'Expand authority, involve in decision making'}</td>
                        <td>${q2Members.map(m => m.name).join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td>${currentLang === 'uk' ? 'Низькі Trust + Ownership' : 'Low Trust + Ownership'}</td>
                        <td>${currentLang === 'uk' ? 
                            'Навчання, коучинг, поступове збільшення відповідальності' : 
                            'Training, coaching, gradual responsibility increase'}</td>
                        <td>${q3Members.map(m => m.name).join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td>${currentLang === 'uk' ? 'Високий Ownership, низький Trust' : 'High Ownership, low Trust'}</td>
                        <td>${currentLang === 'uk' ? 
                            'Делегування, автономія, видимість досягнень' : 
                            'Delegation, autonomy, achievement visibility'}</td>
                        <td>${q4Members.map(m => m.name).join(', ') || '-'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    analysisEl.innerHTML = analysisHtml;
}

// ===== Helper Functions =====
function getEnglishInsight(insight) {
    // Translation mapping for insights
    const translations = {
        'Стратегічне бачення, інновації, юридична координація': 'Strategic vision, innovation, legal coordination',
        'Лідерство у продажах, глибоке залучення в проекти, дух співпраці': 'Sales leadership, deep project engagement, collaborative spirit',
        'Інноваційність, системне мислення, управління тендерами': 'Innovation, systems thinking, tender management',
        'Позитивна взаємодія, закупівлі, сильні відносини': 'Positive interaction, procurement, strong relationships',
        'Закупівлі, координація логістики, використання спільних інструментів': 'Procurement, logistics coordination, shared tools usage',
        'Управління CRM, створення інструкцій, сильна інтеграція': 'CRM management, instruction creation, strong integration',
        'Підтримка у розрахунках/ціноутворенні, готовність допомогти': 'Support in calculations/pricing, willingness to help',
        'Продажі, розрахунки, допомога': 'Sales, calculations, assistance',
        'Діє в інтересах команди, координує зустрічі': 'Acts in team interests, coordinates meetings',
        'Управління пріоритетами, організаційні навички': 'Priority management, organizational skills',
        'Відносини з клієнтами, операційний драйв, підтримка команди': 'Client relationships, operational drive, team support',
        // Challenges
        'Сприймає "відсутність відчуття відповідальності" в команді': 'Perceives "lack of sense of responsibility" in team',
        'Брак "структурованих обов\'язків"; потребує більше часу на управління': 'Lack of "structured responsibilities"; needs more management time',
        'Вважає, що колегам бракує відповідальності; його важко переконати': 'Believes colleagues lack responsibility; hard to convince',
        'Не бачить комунікаційних бар\'єрів': 'Doesn\'t see communication barriers',
        '"Велике навантаження" заважає ефективній роботі': '"Heavy workload" hinders effective work',
        'Брак часу на документацію процесів': 'Lack of time for process documentation',
        'Назвала свого керівника Alex як найменш бажаного колегу': 'Named her manager Alex as least preferred colleague',
        'Комунікаційні бар\'єри через "різні мови"': 'Communication barriers due to "different languages"',
        'Жодних не виявлено': 'None identified',
        'Стислі терміни; потреба в цифрових інструментах': 'Tight deadlines; need for digital tools',
        'Відчуває себе недооціненим; розчарований "хаосом" від злиття VQ/IM': 'Feels undervalued; frustrated by merger "chaos"',
        // Development
        'Структуроване управління: перехід до справжнього менеджера через чіткі цілі': 'Structured management: transition to true manager through clear goals',
        'Спільний вплив: розвиток навичок комунікації для впровадження ідей': 'Collaborative influence: develop communication skills for idea implementation',
        'Культурний амбасадор: модель позитивної співпраці': 'Cultural ambassador: model of positive collaboration',
        'Проактивна комунікація: підвищення прозорості процесів': 'Proactive communication: increase process transparency',
        'Документація процесів: формалізація знань для підтримки колег': 'Process documentation: formalize knowledge to support colleagues',
        'Конструктивний конфлікт: навички формулювання потреб процесу': 'Constructive conflict: skills for articulating process needs',
        'Чіткість ролі: визначення точної ролі та протоколів комунікації': 'Role clarity: define exact role and communication protocols',
        'Формалізація систем підтримки': 'Formalize support systems',
        'Адвокація покращення процесів': 'Process improvement advocacy',
        'Операціоналізація стратегії: перетворення високорівневих цілей на чіткі структури': 'Operationalize strategy: transform high-level goals into clear structures',
        'Розширення повноважень: перехід від вирішувача проблем до коуча команди': 'Expand authority: transition from problem solver to team coach'
    };
    return translations[insight] || insight;
}

function getEnglishConflictDescription(description) {
    const translations = {
        'Прямий, рішучий підхід. Швидко приймає рішення, може здаватись авторитарним.': 
            'Direct, decisive approach. Makes quick decisions, may appear authoritarian.',
        'Схильний поступатися заради гармонії, що може накопичувати невирішені питання.':
            'Tends to accommodate for harmony, which can accumulate unresolved issues.',
        'Наполегливий у відстоюванні своєї позиції, може створювати напругу.':
            'Persistent in defending position, can create tension.',
        'Ефективно знаходить взаємовигідні рішення, сприяє командній гармонії.':
            'Effectively finds mutually beneficial solutions, promotes team harmony.',
        'Готовий до компромісів, але може поступатися важливими принципами.':
            'Ready for compromises, but may concede important principles.',
        'Високі стандарти можуть створювати напругу з тими, хто не відповідає очікуванням.':
            'High standards can create tension with those who don\'t meet expectations.',
        'Уникає прямої конфронтації, накопичує фрустрацію всередині.':
            'Avoids direct confrontation, accumulates frustration internally.',
        'Адаптується під співрозмовника, може втрачати власну позицію.':
            'Adapts to interlocutor, may lose own position.',
        'Підтримує всіх, уникає конфліктів, створює позитивну атмосферу.':
            'Supports everyone, avoids conflicts, creates positive atmosphere.',
        'Конструктивно пропонує покращення, дипломатично вирішує питання.':
            'Constructively proposes improvements, diplomatically resolves issues.',
        'Шукає win-win рішення, але може затягувати процес через прагнення консенсусу.':
            'Seeks win-win solutions, but may prolong process due to consensus seeking.'
    };
    return translations[description] || description;
}

// ===== Side Info Panel =====
function showSideInfo(member) {
    const panel = document.getElementById('sideInfo');
    const body = document.getElementById('sideInfoBody');
    
    body.innerHTML = `
        <div class="side-info-header">
            <div class="side-info-avatar">${member.firstName || member.name.split(' ')[0]}</div>
            <h3>${member.name}</h3>
            <p>${member.role} • ${member.company}</p>
        </div>
        
        <div class="side-info-metrics">
            <div class="metric-item">
                <span class="metric-label">${t('member.meanRank')}:</span>
                <span class="metric-value">${member.meanRankOwnership.toFixed(2)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">${t('member.statusScore')}:</span>
                <span class="metric-value">${member.statusScoreOwnership.toFixed(3)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">${t('member.top3Count')}:</span>
                <span class="metric-value">${member.top3CountOwnership}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">${t('member.bias')}:</span>
                <span class="metric-value ${member.biasOwnership > 0 ? 'negative' : 'positive'}">${member.biasOwnership > 0 ? '+' : ''}${member.biasOwnership.toFixed(2)}</span>
            </div>
        </div>
        
        ${member.quote ? `
            <div class="side-info-quote">
                <i class="fas fa-quote-left"></i>
                <p>${member.quote}</p>
            </div>
        ` : ''}
        
        <div class="side-info-insight">
            <p><strong>${t('member.keyInsight')}:</strong></p>
            <p>${currentLang === 'uk' ? member.insights.keyInsight : getEnglishInsight(member.insights.keyInsight)}</p>
        </div>
        
        <button class="side-info-btn" onclick="showMemberDetails(teamData.members.find(m => m.id === '${member.id}'))">
            ${t('quick.details')} →
        </button>
    `;
    
    panel.classList.add('active');
}

function hideSideInfo() {
    document.getElementById('sideInfo').classList.remove('active');
}

// ===== Tooltip Functions =====
function showTooltip(event, member) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `
        <strong>${member.name}</strong><br>
        ${member.role}<br>
        ${member.company}<br>
        <span style="color: var(--neon-green)">Rank: ${member.meanRankOwnership.toFixed(2)}</span><br>
        <span style="color: var(--neon-yellow)">Top3: ${member.top3CountOwnership}</span><br>
        <span style="color: var(--neon-blue)">Status: ${member.statusScoreOwnership.toFixed(3)}</span><br>
        <span style="color: ${member.biasOwnership > 0 ? 'var(--neon-pink)' : 'var(--neon-green)'}">Bias: ${member.biasOwnership > 0 ? '+' : ''}${member.biasOwnership.toFixed(2)}</span>
    `;
    
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY - 10 + 'px';
    tooltip.classList.add('active');
}

function hideTooltip() {
    document.getElementById('tooltip').classList.remove('active');
}

// ===== Quick Info =====
function showQuickInfo(member, event) {
    quickInfoPerson = member;
    const quickInfo = document.getElementById('quickInfo');
    
    // Update content
    quickInfo.querySelector('.quick-info-avatar').textContent = member.firstName || member.name.split(' ')[0];
    quickInfo.querySelector('.quick-info-name').textContent = member.name;
    quickInfo.querySelector('.quick-info-role').textContent = `${member.role} • ${member.company}`;
    quickInfo.querySelector('.positive-count').textContent = member.preferred.length;
    quickInfo.querySelector('.negative-count').textContent = member.leastPreferred.length;
    
    // Calculate influence based on top3 count
    const influence = member.top3CountOwnership + member.top3CountTrust;
    quickInfo.querySelector('.influence-score').textContent = influence;
    
    // Position near click
    const x = event.pageX || event.clientX;
    const y = event.pageY || event.clientY;
    
    quickInfo.style.left = x + 'px';
    quickInfo.style.top = y + 10 + 'px';
    
    // Adjust if goes off screen
    setTimeout(() => {
        const quickRect = quickInfo.getBoundingClientRect();
        if (quickRect.right > window.innerWidth) {
            quickInfo.style.left = (window.innerWidth - quickRect.width - 20) + 'px';
        }
        if (quickRect.bottom > window.innerHeight) {
            quickInfo.style.top = (y - quickRect.height - 10) + 'px';
        }
    }, 10);
    
    quickInfo.classList.add('active');
}

function showDetailedModal() {
    if (quickInfoPerson) {
        showMemberDetails(quickInfoPerson);
        document.getElementById('quickInfo').classList.remove('active');
    }
}

// ===== Enhanced Member Details Modal =====
function showMemberDetails(member) {
    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    
    const positiveConnections = member.preferred.map(id => {
        const target = teamData.members.find(m => m.id === id);
        return target ? { name: target.name, rank: target.meanRankOwnership } : null;
    }).filter(Boolean);
    
    const negativeConnections = member.leastPreferred.map(id => {
        const target = teamData.members.find(m => m.id === id);
        return target ? { name: target.name, rank: target.meanRankOwnership } : null;
    }).filter(Boolean);
    
    const quadrant = getQuadrant(member.ownershipIndex, member.trustIndex);
    
    modalBody.innerHTML = `
        <div class="modal-header-content">
            <div class="modal-avatar">${member.firstName || member.name.split(' ')[0]}</div>
            <h2 class="modal-name">${member.name}</h2>
            <p class="modal-role">${member.role}</p>
            <span class="modal-company">${member.company}</span>
        </div>
        
        <div class="modal-tabs">
            <button class="tab-btn active" onclick="switchTab('overview')">${currentLang === 'uk' ? 'Огляд' : 'Overview'}</button>
            <button class="tab-btn" onclick="switchTab('sociometric')">${t('member.sociometricData')}</button>
            <button class="tab-btn" onclick="switchTab('quadrant')">${t('member.quadrantAnalysis')}</button>
            <button class="tab-btn" onclick="switchTab('psychology')">${t('member.psychology')}</button>
            <button class="tab-btn" onclick="switchTab('development')">${t('member.development')}</button>
        </div>
        
        <div id="tab-overview" class="tab-content active">
            ${generateOverviewTab(member, positiveConnections, negativeConnections)}
        </div>
        
        <div id="tab-sociometric" class="tab-content">
            ${generateSociometricTab(member)}
        </div>
        
        <div id="tab-quadrant" class="tab-content">
            ${generateQuadrantTab(member, quadrant)}
        </div>
        
        <div id="tab-psychology" class="tab-content">
            ${generatePsychologyTab(member)}
        </div>
        
        <div id="tab-development" class="tab-content">
            ${generateDevelopmentTab(member)}
        </div>
    `;
    
    modal.classList.add('active');
}

function generateOverviewTab(member, positiveConnections, negativeConnections) {
    return `
        <div class="modal-section">
            <h3 class="modal-section-title">
                <i class="fas fa-chart-bar"></i>
                ${t('member.competencies')}
            </h3>
            <div class="scores-grid">
                <div class="score-item">
                    <span>${t('member.communication')}</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${member.scores.communication * 20}%"></div>
                    </div>
                    <span class="score-value">${member.scores.communication}/5</span>
                </div>
                <div class="score-item">
                    <span>${t('member.leadership')}</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${member.scores.leadership * 20}%"></div>
                    </div>
                    <span class="score-value">${member.scores.leadership}/5</span>
                </div>
                <div class="score-item">
                    <span>${t('member.trust')}</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${member.scores.trust * 20}%"></div>
                    </div>
                    <span class="score-value">${member.scores.trust}/5</span>
                </div>
                <div class="score-item">
                    <span>${t('member.collaboration')}</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${member.scores.collaboration * 20}%"></div>
                    </div>
                    <span class="score-value">${member.scores.collaboration}/5</span>
                </div>
                <div class="score-item">
                    <span>${t('member.conflict')}</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${member.scores.conflict * 20}%"></div>
                    </div>
                    <span class="score-value">${member.scores.conflict}/5</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">
                <i class="fas fa-link"></i>
                ${t('member.connections')}
            </h3>
            <div class="connections-grid">
                ${positiveConnections.length > 0 ? `
                    <div>
                        <h4>${t('member.preferredColleagues')}:</h4>
                        ${positiveConnections.map(conn => `
                            <div class="connection-item">
                                <span class="connection-name">${conn.name}</span>
                                <span class="connection-rank">Rank: ${conn.rank.toFixed(2)}</span>
                                <span class="connection-type positive">${t('legend.positive')}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${negativeConnections.length > 0 ? `
                    <div>
                        <h4>${t('member.leastPreferredColleagues')}:</h4>
                        ${negativeConnections.map(conn => `
                            <div class="connection-item">
                                <span class="connection-name">${conn.name}</span>
                                <span class="connection-rank">Rank: ${conn.rank.toFixed(2)}</span>
                                <span class="connection-type negative">${t('legend.negative')}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${positiveConnections.length === 0 && negativeConnections.length === 0 ? `
                    <p class="no-connections">${currentLang === 'uk' ? 
                        'Немає специфічних преференцій зв\'язків' : 
                        'No specific connection preferences'}</p>
                ` : ''}
            </div>
        </div>
        
        ${member.quote ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-quote-left"></i>
                    ${t('member.keyQuote')}
                </h3>
                <p class="insight-text">${member.quote}</p>
            </div>
        ` : ''}
        
        <div class="modal-section">
            <h3 class="modal-section-title">
                <i class="fas fa-lightbulb"></i>
                ${t('member.professionalProfile')}
            </h3>
            <div class="profile-insights">
                <div class="insight-item">
                    <h4>${t('member.strengths')}:</h4>
                    <p>${currentLang === 'uk' ? member.insights.strength : getEnglishInsight(member.insights.strength)}</p>
                </div>
                <div class="insight-item">
                    <h4>${t('member.challenges')}:</h4>
                    <p>${currentLang === 'uk' ? member.insights.challenge : getEnglishInsight(member.insights.challenge)}</p>
                </div>
                <div class="insight-item">
                    <h4>${t('member.developmentZone')}:</h4>
                    <p>${currentLang === 'uk' ? member.insights.development : getEnglishInsight(member.insights.development)}</p>
                </div>
                <div class="insight-item key-insight-item">
                    <h4>${t('member.keyInsight')}:</h4>
                    <p class="key-insight">${currentLang === 'uk' ? member.insights.keyInsight : getEnglishInsight(member.insights.keyInsight)}</p>
                </div>
            </div>
        </div>
    `;
}

function generateSociometricTab(member) {
    return `
        <div class="sociometric-profile">
            <div class="sociometric-grid">
                <div class="sociometric-section">
                    <h4>Ownership ${currentLang === 'uk' ? 'Метрики' : 'Metrics'}</h4>
                    <div class="metric-rows">
                        <div class="metric-row">
                            <span>${t('member.meanRank')}:</span>
                            <span class="value">${member.meanRankOwnership.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.stdDev')}:</span>
                            <span class="value">${member.stdOwnership.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.top3Count')}:</span>
                            <span class="value">${member.top3CountOwnership}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.statusScore')}:</span>
                            <span class="value">${member.statusScoreOwnership.toFixed(3)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.selfPerceptionMAE')}:</span>
                            <span class="value">${member.selfMAEOwnership.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.bias')}:</span>
                            <span class="value ${member.biasOwnership > 0 ? 'negative' : 'positive'}">${member.biasOwnership > 0 ? '+' : ''}${member.biasOwnership.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.accuracy')}:</span>
                            <span class="value">${member.accuracyOwnership}%</span>
                        </div>
                    </div>
                </div>
                
                <div class="sociometric-section">
                    <h4>Trust ${currentLang === 'uk' ? 'Метрики' : 'Metrics'}</h4>
                    <div class="metric-rows">
                        <div class="metric-row">
                            <span>${t('member.meanRank')}:</span>
                            <span class="value">${member.meanRankTrust.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.stdDev')}:</span>
                            <span class="value">${member.stdTrust.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.top3Count')}:</span>
                            <span class="value">${member.top3CountTrust}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.statusScore')}:</span>
                            <span class="value">${member.statusScoreTrust.toFixed(3)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.selfPerceptionMAE')}:</span>
                            <span class="value">${member.selfMAETrust.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.bias')}:</span>
                            <span class="value ${member.biasTrust > 0 ? 'negative' : 'positive'}">${member.biasTrust > 0 ? '+' : ''}${member.biasTrust.toFixed(2)}</span>
                        </div>
                        <div class="metric-row">
                            <span>${t('member.accuracy')}:</span>
                            <span class="value">${member.accuracyTrust}%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="sociometric-analysis">
                <h4>${currentLang === 'uk' ? 'Аналіз позиції' : 'Position Analysis'}</h4>
                <p>${currentLang === 'uk' ? 
                    `З середнім рангом ${member.meanRankOwnership.toFixed(2)} в Ownership та ${member.meanRankTrust.toFixed(2)} в Trust, 
                    ${member.name} знаходиться в ${getPositionDescription(member.meanRankOwnership)} команди.` :
                    `With mean rank ${member.meanRankOwnership.toFixed(2)} in Ownership and ${member.meanRankTrust.toFixed(2)} in Trust, 
                    ${member.name} is in the ${getPositionDescription(member.meanRankOwnership)} of the team.`}
                </p>
                
                ${member.stdOwnership > 1.5 || member.stdTrust > 1.5 ? `
                    <p class="warning">${currentLang === 'uk' ? 
                        'Високе стандартне відхилення вказує на поляризовані думки серед команди.' :
                        'High standard deviation indicates polarized opinions among the team.'}</p>
                ` : ''}
                
                ${member.selfMAEOwnership > 1.5 || member.selfMAETrust > 1.5 ? `
                    <p class="warning">${currentLang === 'uk' ? 
                        'Значна похибка самооцінки вказує на розрив між самосприйняттям та реальністю.' :
                        'Significant self-assessment error indicates gap between self-perception and reality.'}</p>
                ` : ''}
            </div>
        </div>
    `;
}

function generateQuadrantTab(member, quadrant) {
    return `
        <div class="quadrant-analysis">
            <h3>${t('member.quadrantAnalysis')}</h3>
            
            <div class="quadrant-chart" id="memberQuadrantChart">
                <svg width="400" height="400"></svg>
            </div>
            
            <div class="quadrant-info">
                <h4>${currentLang === 'uk' ? 'Поточна позиція' : 'Current Position'}: ${t('quadrant.' + quadrant)}</h4>
                <p>Ownership Index: ${member.ownershipIndex}</p>
                <p>Trust Index: ${member.trustIndex}</p>
            </div>
            
            <div class="quadrant-grid">
                <div class="quadrant-card ${quadrant === 'highPerformers' ? 'active' : ''}">
                    <h4>Q1: ${t('quadrant.highPerformers')}</h4>
                    <p>${currentLang === 'uk' ? 
                        'Високі показники довіри та володіння. Готові до лідерських ролей.' :
                        'High trust and ownership indicators. Ready for leadership roles.'}</p>
                </div>
                
                <div class="quadrant-card ${quadrant === 'underutilized' ? 'active' : ''}">
                    <h4>Q2: ${t('quadrant.underutilized')}</h4>
                    <p>${currentLang === 'uk' ? 
                        'Висока довіра при низькому володінні. Потенціал не використовується.' :
                        'High trust with low ownership. Potential not being utilized.'}</p>
                </div>
                
                <div class="quadrant-card ${quadrant === 'developmentNeeded' ? 'active' : ''}">
                    <h4>Q3: ${t('quadrant.developmentNeeded')}</h4>
                    <p>${currentLang === 'uk' ? 
                        'Потребують розвитку як володіння, так і довіри. Фокус на навчанні.' :
                        'Need development in both ownership and trust. Focus on learning.'}</p>
                </div>
                
                <div class="quadrant-card ${quadrant === 'delegationReady' ? 'active' : ''}">
                    <h4>Q4: ${t('quadrant.delegationReady')}</h4>
                    <p>${currentLang === 'uk' ? 
                        'Високий рівень володіння з помірною довірою. Готові до більшої відповідальності.' :
                        'High ownership level with moderate trust. Ready for more responsibility.'}</p>
                </div>
            </div>
        </div>
    `;
}

function generatePsychologyTab(member) {
    const motivatorsText = member.motivators ? member.motivators.map(m => 
        `<li>${currentLang === 'uk' ? getUkrainianMotivator(m) : m}</li>`
    ).join('') : '';
    
    const demotivatorsText = member.demotivators ? member.demotivators.map(d => 
        `<li>${currentLang === 'uk' ? getUkrainianDemotivator(d) : d}</li>`
    ).join('') : '';
    
    return `
        <div class="psychology-profile">
            <div class="profile-section">
                <h4><i class="fas fa-heart"></i> ${t('psychology.motivators')}</h4>
                <div class="motivators-grid">
                    ${member.motivators ? member.motivators.slice(0, 2).map(m => `
                        <div class="motivator-item">
                            <div class="motivator-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <h5>${currentLang === 'uk' ? getUkrainianMotivator(m) : m}</h5>
                            </div>
                        </div>
                    `).join('') : ''}
                </div>
                <ul class="compact-list">
                    ${motivatorsText}
                </ul>
            </div>
            
            <div class="profile-section">
                <h4><i class="fas fa-exclamation-triangle"></i> ${t('psychology.demotivators')}</h4>
                <div class="motivators-grid">
                    ${member.demotivators ? member.demotivators.slice(0, 2).map(d => `
                        <div class="motivator-item demotivator">
                            <div class="demotivator-icon">
                                <i class="fas fa-times"></i>
                            </div>
                            <div>
                                <h5>${currentLang === 'uk' ? getUkrainianDemotivator(d) : d}</h5>
                            </div>
                        </div>
                    `).join('') : ''}
                </div>
                <ul class="compact-list">
                    ${demotivatorsText}
                </ul>
            </div>
            
            <div class="profile-section">
                <h4><i class="fas fa-fist-raised"></i> ${t('psychology.conflictStyle')}</h4>
                <div class="conflict-style">
                    <div class="conflict-icon">
                        <i class="${getConflictIcon(member.conflictStyle)}"></i>
                    </div>
                    <div>
                        <h5>${currentLang === 'uk' ? getUkrainianConflictStyle(member.conflictStyle) : member.conflictStyle}</h5>
                        <p>${currentLang === 'uk' ? member.conflictDescription : getEnglishConflictDescription(member.conflictDescription)}</p>
                    </div>
                </div>
            </div>
            
            ${member.risks && member.risks.length > 0 ? `
                <div class="profile-section">
                    <h4><i class="fas fa-exclamation-circle"></i> ${t('psychology.risks')}</h4>
                    <div class="risk-indicators">
                        ${member.risks.map(risk => `
                            <div class="risk-item ${risk.level}">
                                <span class="risk-level ${risk.level}">${
                                    risk.level === 'high' ? (currentLang === 'uk' ? 'Високий' : 'High') :
                                    risk.level === 'medium' ? (currentLang === 'uk' ? 'Середній' : 'Medium') :
                                    (currentLang === 'uk' ? 'Низький' : 'Low')
                                }</span>
                                <div>
                                    <strong>${currentLang === 'uk' ? risk.type : getEnglishRiskType(risk.type)}</strong>
                                    <p>${currentLang === 'uk' ? risk.description : getEnglishRiskDescription(risk.description)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function generateDevelopmentTab(member) {
    const developmentSteps = generateDevelopmentSteps(member);
    
    return `
        <div class="development-card">
            <h4>${t('development.title')}</h4>
            <p class="development-overview">${currentLang === 'uk' ? member.insights.development : getEnglishInsight(member.insights.development)}</p>
            
            <div class="development-steps">
                ${developmentSteps.map((step, i) => `
                    <div class="step-item">
                        <div class="step-number">${i + 1}</div>
                        <div>
                            <h5>${step.title}</h5>
                            <p>${step.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="development-timeline">
                <h5>${currentLang === 'uk' ? 'Часова шкала' : 'Timeline'}</h5>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <strong>0-30 ${currentLang === 'uk' ? 'днів' : 'days'}</strong>
                            <p>${developmentSteps[0] ? developmentSteps[0].shortTerm : ''}</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <strong>30-60 ${currentLang === 'uk' ? 'днів' : 'days'}</strong>
                            <p>${developmentSteps[1] ? developmentSteps[1].midTerm : ''}</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <strong>60-90 ${currentLang === 'uk' ? 'днів' : 'days'}</strong>
                            <p>${developmentSteps[2] ? developmentSteps[2].longTerm : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper functions for tabs
function getPositionDescription(meanRank) {
    if (meanRank <= 2) return currentLang === 'uk' ? 'ядрі 1-го рівня' : 'core level 1';
    if (meanRank <= 3.5) return currentLang === 'uk' ? 'ядрі 2-го рівня' : 'core level 2';
    if (meanRank <= 5) return currentLang === 'uk' ? 'квазі-ядрі' : 'quasi-core';
    return currentLang === 'uk' ? 'периферії' : 'periphery';
}

function getConflictIcon(style) {
    const icons = {
        'Competing': 'fas fa-bolt',
        'Collaborating': 'fas fa-handshake',
        'Compromising': 'fas fa-balance-scale',
        'Avoiding': 'fas fa-eye-slash',
        'Accommodating': 'fas fa-heart'
    };
    return icons[style] || 'fas fa-question';
}

function getUkrainianMotivator(motivator) {
    const translations = {
        'Team achievement': 'Командні досягнення',
        'Process improvement': 'Покращення процесів',
        'Professional growth': 'Професійний розвиток',
        'Trust': 'Довіра',
        'Innovation implementation': 'Впровадження інновацій',
        'System efficiency': 'Ефективність систем',
        'Professional expertise': 'Професійна експертиза',
        'Independence': 'Незалежність',
        'Positive relationships': 'Позитивні відносини',
        'Team harmony': 'Гармонія в команді',
        'Stability': 'Стабільність',
        'Efficiency': 'Ефективність',
        'Clear timelines': 'Чіткі терміни',
        'Team support': 'Підтримка команди',
        'Achievement': 'Досягнення',
        'Excellence': 'Досконалість',
        'System building': 'Побудова систем',
        'Autonomy': 'Автономія',
        'Clear structure': 'Чітка структура',
        'Recognition of expertise': 'Визнання експертизи',
        'Work-life balance': 'Баланс роботи та життя',
        'Respect': 'Повага',
        'Learning opportunities': 'Можливості навчання',
        'Positive feedback': 'Позитивний зворотний зв\'язок',
        'Clear communication': 'Чітка комунікація',
        'Belonging': 'Приналежність',
        'Being helpful': 'Бути корисним',
        'Organization': 'Організація',
        'Appreciation': 'Вдячність',
        'Clear tasks': 'Чіткі завдання',
        'Modern tools': 'Сучасні інструменти',
        'Clear processes': 'Чіткі процеси',
        'Strategic impact': 'Стратегічний вплив',
        'Results': 'Результати',
        'Team success': 'Успіх команди',
        'Client satisfaction': 'Задоволеність клієнтів',
        'Recognition': 'Визнання',
        'Innovation': 'Інновації'
    };
    return translations[motivator] || motivator;
}

function getUkrainianDemotivator(demotivator) {
    const translations = {
        'Unclear responsibilities': 'Нечіткі обов\'язки',
        'Time pressure': 'Тиск часу',
        'Interpersonal conflicts': 'Міжособистісні конфлікти',
        'Resistance to change': 'Опір змінам',
        'Lack of accountability': 'Відсутність відповідальності',
        'Inefficient processes': 'Неефективні процеси',
        'Conflict': 'Конфлікт',
        'Negative atmosphere': 'Негативна атмосфера',
        'Lack of support': 'Відсутність підтримки',
        'Overload': 'Перевантаження',
        'Unclear priorities': 'Нечіткі пріоритети',
        'Interpersonal tensions': 'Міжособистісна напруга',
        'Time constraints': 'Обмеження часу',
        'Interruptions': 'Переривання',
        'Perceived incompetence': 'Сприйнята некомпетентність',
        'Role ambiguity': 'Неоднозначність ролі',
        'Conflicting priorities': 'Суперечливі пріоритети',
        'Lack of appreciation': 'Відсутність вдячності',
        'Communication barriers': 'Комунікаційні бар\'єри',
        'Feeling excluded': 'Відчуття виключення',
        'Unclear expectations': 'Нечіткі очікування',
        'Chaos': 'Хаос',
        'Being overlooked': 'Бути непоміченим',
        'Conflicting instructions': 'Суперечливі інструкції',
        'Outdated systems': 'Застарілі системи',
        'Inefficiency': 'Неефективність',
        'Tight deadlines': 'Стислі терміни',
        'Micromanagement': 'Мікроменеджмент',
        'Slow decision-making': 'Повільне прийняття рішень',
        'Unclear roles': 'Нечіткі ролі',
        'Organizational chaos': 'Організаційний хаос',
        'Dependency burden': 'Тягар залежності'
    };
    return translations[demotivator] || demotivator;
}

function getUkrainianConflictStyle(style) {
    const translations = {
        'Competing': 'Конкуренція',
        'Collaborating': 'Співпраця',
        'Compromising': 'Компроміс',
        'Avoiding': 'Уникання',
        'Accommodating': 'Пристосування'
    };
    return translations[style] || style;
}

function getEnglishRiskType(type) {
    const translations = {
        'Надцентралізація': 'Over-centralization',
        'Перфекціонізм': 'Perfectionism',
        'Перевантаження': 'Overload',
        'Ригідність': 'Rigidity',
        'Надмірний оптимізм': 'Excessive optimism',
        'Конформізм': 'Conformism',
        'Розчарування': 'Disappointment',
        'Стрес': 'Stress',
        'Нетерпимість': 'Intolerance',
        'Ізоляція': 'Isolation',
        'Емоційне вигорання': 'Emotional burnout',
        'Саботаж': 'Sabotage',
        'Втрата ідентичності': 'Loss of identity',
        'Пасивність': 'Passivity',
        'Невидимість': 'Invisibility',
        'Вихід': 'Exit',
        'Вигорання': 'Burnout',
        'Авторитарність': 'Authoritarianism',
        'Пасивна агресія': 'Passive aggression'
    };
    return translations[type] || type;
}

function getEnglishRiskDescription(description) {
    const translations = {
        '"Горло пляшки" в ухваленні рішень': 'Bottleneck in decision making',
        'Затримки через прагнення ідеального результату': 'Delays due to pursuit of perfect results',
        'Виснаження від невидимої координації': 'Exhaustion from invisible coordination',
        'Непоступливість у поглядах': 'Inflexibility in views',
        'Може не помічати реальних проблем': 'May not notice real problems',
        'Уникання непопулярних, але необхідних рішень': 'Avoiding unpopular but necessary decisions',
        'При корекції завищених очікувань': 'When correcting inflated expectations',
        'Перевантаження через намагання всім догодити': 'Overload from trying to please everyone',
        'Критичність до колег з нижчими стандартами': 'Critical of colleagues with lower standards',
        'Дистанціювання від "слабших" колег': 'Distancing from "weaker" colleagues',
        'Накопичення невисловлених претензій': 'Accumulation of unspoken grievances',
        'Непряме вираження невдоволення': 'Indirect expression of dissatisfaction',
        'Надмірна адаптація під інших': 'Excessive adaptation to others',
        'Недостатня ініціативність': 'Insufficient initiative',
        'Бере на себе забагато завдань': 'Takes on too many tasks',
        'Внесок може бути недооцінений': 'Contribution may be undervalued',
        'Learned helplessness та демотивація': 'Learned helplessness and demotivation',
        'Через постійні стислі терміни': 'Due to constant tight deadlines',
        'Може придушувати ініціативу інших': 'May suppress others\' initiative',
        'Дистанціювання від операційних питань': 'Distancing from operational issues',
        'Перевантаження через відчуття відповідальності за всіх': 'Overload from feeling responsible for everyone',
        'Непряме вираження фрустрації': 'Indirect expression of frustration'
    };
    return translations[description] || description;
}

function generateDevelopmentSteps(member) {
    // Generate personalized development steps based on member data
    const steps = [];
    
    // Based on bias and accuracy
    if (member.biasOwnership > 1 || member.biasTrust > 1) {
        steps.push({
            title: currentLang === 'uk' ? 'Калібрування самооцінки' : 'Self-assessment calibration',
            description: currentLang === 'uk' ? 
                'Регулярний зворотний зв\'язок з анонімізованими агрегатами для вирівнювання очікувань' :
                'Regular feedback with anonymized aggregates to align expectations',
            shortTerm: currentLang === 'uk' ? '1:1 сесія з прозорим зворотним зв\'язком' : '1:1 session with transparent feedback',
            midTerm: currentLang === 'uk' ? 'Щотижневий review прогресу' : 'Weekly progress review',
            longTerm: currentLang === 'uk' ? 'Зниження MAE на 20%' : 'Reduce MAE by 20%'
        });
    }
    
    // Based on position in hierarchy
    if (member.meanRankOwnership > 5) {
        steps.push({
            title: currentLang === 'uk' ? 'Підвищення видимості' : 'Increase visibility',
            description: currentLang === 'uk' ? 
                'Створення можливостей для демонстрації експертизи та внеску в команду' :
                'Creating opportunities to demonstrate expertise and team contribution',
            shortTerm: currentLang === 'uk' ? 'Презентація micro-wins кожні 2 тижні' : 'Present micro-wins every 2 weeks',
            midTerm: currentLang === 'uk' ? 'Лідерство в міні-проекті' : 'Lead a mini-project',
            longTerm: currentLang === 'uk' ? 'Входження в топ-5 за статусом' : 'Enter top-5 by status'
        });
    }
    
    // Based on top3 count
    if (member.top3CountOwnership < 3) {
        steps.push({
            title: currentLang === 'uk' ? 'Розширення мережі довіри' : 'Expand trust network',
            description: currentLang === 'uk' ? 
                'Побудова міцніших зв\'язків з ключовими членами команди' :
                'Building stronger connections with key team members',
            shortTerm: currentLang === 'uk' ? 'Парні мікропроекти з членами ядра' : 'Paired microprojects with core members',
            midTerm: currentLang === 'uk' ? 'Крос-функціональна співпраця' : 'Cross-functional collaboration',
            longTerm: currentLang === 'uk' ? 'Збільшення топ-3 входів на 50%' : 'Increase top-3 entries by 50%'
        });
    }
    
    // Based on quadrant position
    const quadrant = getQuadrant(member.ownershipIndex, member.trustIndex);
    if (quadrant === 'developmentNeeded') {
        steps.push({
            title: currentLang === 'uk' ? 'Комплексний розвиток навичок' : 'Comprehensive skill development',
            description: currentLang === 'uk' ? 
                'Системний підхід до розвитку базових компетенцій та побудови довіри' :
                'Systematic approach to developing core competencies and building trust',
            shortTerm: currentLang === 'uk' ? 'Визначення 3 ключових навичок для розвитку' : 'Identify 3 key skills for development',
            midTerm: currentLang === 'uk' ? 'Проходження тренінгів та менторинг' : 'Complete training and mentoring',
            longTerm: currentLang === 'uk' ? 'Демонстрація прогресу через проекти' : 'Demonstrate progress through projects'
        });
    }
    
    // Default development step
    if (steps.length === 0) {
        steps.push({
            title: currentLang === 'uk' ? 'Підтримка поточної позиції' : 'Maintain current position',
            description: currentLang === 'uk' ? 
                'Фокус на збереженні сильних сторін та поступовому покращенні' :
                'Focus on maintaining strengths and gradual improvement',
            shortTerm: currentLang === 'uk' ? 'Документування best practices' : 'Document best practices',
            midTerm: currentLang === 'uk' ? 'Менторство колег' : 'Mentor colleagues',
            longTerm: currentLang === 'uk' ? 'Стати експертом в домені' : 'Become domain expert'
        });
    }
    
    return steps;
}

// Switch between tabs in modal
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    // Set active button
    event.target.classList.add('active');
    
    // Special handling for quadrant chart
    if (tabName === 'quadrant' && quickInfoPerson) {
        setTimeout(() => renderMemberQuadrantChart(quickInfoPerson), 100);
    }
}

// Render member's position on quadrant chart
function renderMemberQuadrantChart(member) {
    const svg = d3.select('#memberQuadrantChart svg');
    svg.selectAll('*').remove();
    
    const width = 400;
    const height = 400;
    const margin = 40;
    
    const xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([margin, width - margin]);
    
    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin, margin]);
    
    // Background
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#0a0a0a');
    
    // Grid
    svg.append('line')
        .attr('x1', width / 2)
        .attr('x2', width / 2)
        .attr('y1', margin)
        .attr('y2', height - margin)
        .attr('stroke', '#666')
        .attr('stroke-dasharray', '3,3');
    
    svg.append('line')
        .attr('x1', margin)
        .attr('x2', width - margin)
        .attr('y1', height / 2)
        .attr('y2', height / 2)
        .attr('stroke', '#666')
        .attr('stroke-dasharray', '3,3');
    
    // Quadrant backgrounds
    const quadrants = [
        { x: width / 2, y: margin, w: (width - 2 * margin) / 2, h: (height - 2 * margin) / 2, color: '#00d4ff' }, // Q1
        { x: margin, y: margin, w: (width - 2 * margin) / 2, h: (height - 2 * margin) / 2, color: '#a855f7' }, // Q2
        { x: margin, y: height / 2, w: (width - 2 * margin) / 2, h: (height - 2 * margin) / 2, color: '#ff0080' }, // Q3
        { x: width / 2, y: height / 2, w: (width - 2 * margin) / 2, h: (height - 2 * margin) / 2, color: '#00ff88' } // Q4
    ];
    
    quadrants.forEach(q => {
        svg.append('rect')
            .attr('x', q.x)
            .attr('y', q.y)
            .attr('width', q.w)
            .attr('height', q.h)
            .attr('fill', q.color)
            .attr('fill-opacity', 0.1);
    });
    
    // Member position
    const x = xScale(member.ownershipIndex);
    const y = yScale(member.trustIndex);
    
    // Highlight circle
    svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 15)
        .attr('fill', member.company === 'Vagoteq' ? '#00d4ff' : '#a855f7')
        .attr('stroke', '#fff')
        .attr('stroke-width', 3);
    
    // Label
    svg.append('text')
        .attr('x', x)
        .attr('y', y - 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold')
        .text(member.firstName || member.name.split(' ')[0]);
    
    // Axes labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height - 10)
        .attr('text-anchor', 'middle')
        .attr('fill', '#fff')
        .text('Ownership →');
    
    svg.append('text')
        .attr('transform', `rotate(-90, 20, ${height / 2})`)
        .attr('x', 20)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#fff')
        .text('Trust →');
}

// Close modal
function closeModal() {
    document.getElementById('detailsModal').classList.remove('active');
    quickInfoPerson = null;
}

// ===== Control Functions =====
function zoomView(factor) {
    if (currentView === '3d' && camera) {
        camera.position.multiplyScalar(1 / factor);
        camera.updateProjectionMatrix();
    } else if (currentView === 'force' || currentView === 'circular') {
        const svg = d3.select('#svgCanvas');
        const g = svg.select('g');
        const currentTransform = d3.zoomTransform(svg.node());
        const newK = currentTransform.k * factor;
        
        svg.call(
            d3.zoom().transform,
            d3.zoomIdentity
                .translate(currentTransform.x, currentTransform.y)
                .scale(newK)
        );
    }
}

function resetView() {
    if (currentView === '3d' && camera) {
        camera.position.set(0, 150, 300);
        camera.lookAt(0, 0, 0);
        scene.rotation.y = 0;
    } else if (currentView === 'force' || currentView === 'circular') {
        const svg = d3.select('#svgCanvas');
        svg.call(d3.zoom().transform, d3.zoomIdentity);
    }
    
    showNotification(t('notification.viewReset'), 'info');
}

function toggleAnimation() {
    animationPaused = !animationPaused;
    const btn = document.getElementById('playPauseBtn');
    const icon = btn.querySelector('i');
    const text = btn.querySelector('span');
    
    if (animationPaused) {
        icon.className = 'fas fa-play';
        text.textContent = t('actions.playAnimation');
        showNotification(t('notification.animationPaused'), 'info');
    } else {
        icon.className = 'fas fa-pause';
        text.textContent = t('actions.pauseAnimation');
        showNotification(t('notification.animationResumed'), 'info');
        if (currentView === '3d' && !animationId && !preferReducedMotion) {
            animate3D();
        }
    }
}

function takeScreenshot() {
    showNotification(t('notification.screenshotCreating'), 'info');
    
    let element;
    if (currentView === '3d' && renderer) {
        // For 3D view, use the canvas directly
        const canvas = renderer.domElement;
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `TeamPulse_${currentView}_${Date.now()}.png`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
            showNotification(t('notification.screenshotSaved'), 'success');
        });
    } else {
        // For other views
        element = document.getElementById('vizContainer');
        
        html2canvas(element, {
            backgroundColor: '#0a0a0a',
            scale: 2,
            logging: false,
            useCORS: true
        }).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            link.download = `TeamPulse_${currentView}_${Date.now()}.png`;
            link.href = canvas.toDataURL();
            link.click();
            
            showNotification(t('notification.screenshotSaved'), 'success');
        }).catch(error => {
            console.error('Screenshot error:', error);
            showNotification(t('notification.screenshotError'), 'error');
        });
    }
}

function toggleFullscreen() {
    const container = document.getElementById('vizContainer');
    
    if (!document.fullscreenElement) {
        container.requestFullscreen().then(() => {
            container.classList.add('fullscreen');
            showNotification(t('notification.fullscreenEnabled'), 'info');
            // Trigger resize after fullscreen
            setTimeout(handleResize, 100);
        });
    } else {
        document.exitFullscreen().then(() => {
            container.classList.remove('fullscreen');
            showNotification(t('notification.fullscreenDisabled'), 'info');
            // Trigger resize after exit fullscreen
            setTimeout(handleResize, 100);
        });
    }
}

function exportData() {
    const exportData = {
        metadata: {
            exportDate: new Date().toISOString(),
            teamName: 'VQ & IM Team',
            totalMembers: teamData.members.length,
            currentView: currentView,
            language: currentLang
        },
        metrics: {
            giniOwnership: 0.217,
            giniTrust: 0.226,
            teamHealth: document.getElementById('teamHealthScore').textContent,
            frictionIndex: document.getElementById('frictionIndex').textContent,
            clarityScore: document.getElementById('clarityScore').textContent,
            engagementScore: document.getElementById('engagementScore').textContent
        },
        members: teamData.members.map(member => ({
            id: member.id,
            code: member.code,
            name: member.name,
            role: member.role,
            company: member.company,
            department: member.department,
            level: member.level,
            meanRankOwnership: member.meanRankOwnership,
            meanRankTrust: member.meanRankTrust,
            stdOwnership: member.stdOwnership,
            stdTrust: member.stdTrust,
            top3CountOwnership: member.top3CountOwnership,
            top3CountTrust: member.top3CountTrust,
            statusScoreOwnership: member.statusScoreOwnership,
            statusScoreTrust: member.statusScoreTrust,
            selfMAEOwnership: member.selfMAEOwnership,
            selfMAETrust: member.selfMAETrust,
            biasOwnership: member.biasOwnership,
            biasTrust: member.biasTrust,
            accuracyOwnership: member.accuracyOwnership,
            accuracyTrust: member.accuracyTrust,
            ownershipIndex: member.ownershipIndex,
            trustIndex: member.trustIndex,
            preferredConnections: member.preferred.length,
            negativeConnections: member.leastPreferred.length
        })),
        connections: {
            mutualTop3Ownership: mutualTop3Ownership,
            mutualTop3Trust: mutualTop3Trust
        }
    };
    
    // Create and download JSON file
    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `TeamPulse_Export_${Date.now()}.json`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    
    showNotification(t('notification.dataExported'), 'success');
}

function toggleLegend() {
    legendVisible = !legendVisible;
    const legend = document.getElementById('legend');
    if (legend) {
        legend.style.display = legendVisible ? 'block' : 'none';
    }
    
    // For heatmap, need to redraw
    if (currentView === 'heatmap') {
        renderHeatmap(getFilteredData());
    }
    
    showNotification(t('notification.legendToggled'), 'info');
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icons[type]} notification-icon"></i>
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Window Resize Handler =====
function handleResize() {
    if (currentView === '3d' && renderer) {
        const container = document.getElementById('threeContainer');
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
    
    // Redraw current visualization
    updateVisualization();
}

// ===== Additional CSS for new elements =====
const style = document.createElement('style');
style.textContent = `
    /* Additional styles for enhanced features */
    .scatter-tooltip {
        z-index: 1000;
    }
    
    .metric-row {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid var(--glass-border);
    }
    
    .metric-row:last-child {
        border-bottom: none;
    }
    
    .metric-row .value {
        font-weight: 600;
        color: var(--neon-blue);
    }
    
    .metric-row .value.negative {
        color: var(--neon-pink);
    }
    
    .metric-row .value.positive {
        color: var(--neon-green);
    }
    
    .sociometric-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
    }
    
    .sociometric-section {
        background: var(--bg-tertiary);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .sociometric-analysis {
        margin-top: var(--spacing-lg);
        padding: var(--spacing-md);
        background: var(--glass-bg);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .sociometric-analysis p.warning {
        color: var(--neon-orange);
        font-weight: 500;
        margin-top: var(--spacing-sm);
    }
    
    .compact-list {
        list-style: none;
        padding-left: 0;
        margin-top: var(--spacing-sm);
    }
    
    .compact-list li {
        padding: 4px 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .timeline {
        position: relative;
        padding-left: var(--spacing-lg);
    }
    
    .timeline::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--gradient-primary);
    }
    
    .timeline-item {
        position: relative;
        margin-bottom: var(--spacing-md);
    }
    
    .timeline-marker {
        position: absolute;
        left: -28px;
        top: 5px;
        width: 16px;
        height: 16px;
        background: var(--neon-blue);
        border-radius: 50%;
        border: 3px solid var(--bg-primary);
    }
    
    .timeline-content {
        padding: var(--spacing-sm);
        background: var(--glass-bg);
        border-radius: var(--radius-sm);
    }
    
    .development-timeline {
        margin-top: var(--spacing-lg);
    }
    
    /* Metrics View Styles */
    .metrics-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        padding: var(--spacing-lg);
        background: var(--glass-bg);
        border-radius: var(--radius-lg);
        border: 1px solid var(--glass-border);
    }
    
    .metrics-header h1 {
        font-size: 2rem;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: var(--spacing-sm);
    }
    
    .metrics-sections {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }
    
    .metrics-section {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
    }
    
    .metrics-section h2 {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: 1.5rem;
        margin-bottom: var(--spacing-md);
        color: var(--neon-blue);
    }
    
    .overview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-md);
    }
    
    .overview-card {
        background: var(--bg-tertiary);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
        text-align: center;
    }
    
    .overview-card h3 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .metric-large {
        margin: var(--spacing-sm) 0;
    }
    
    .metric-large .value {
        font-size: 2rem;
        font-weight: 700;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .metric-large .label {
        font-size: 0.9rem;
        color: var(--text-muted);
    }
    
    .metrics-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: var(--spacing-md);
    }
    
    .metrics-table th {
        background: var(--bg-tertiary);
        padding: var(--spacing-sm);
        text-align: left;
        font-weight: 600;
        border-bottom: 2px solid var(--glass-border);
    }
    
    .metrics-table td {
        padding: var(--spacing-sm);
        border-bottom: 1px solid var(--glass-border);
    }
    
    .metrics-table td.numeric {
        text-align: center;
        font-family: 'Monaco', 'Courier New', monospace;
    }
    
    .metrics-table tr.top-performer {
        background: rgba(0, 255, 136, 0.1);
    }
    
    .metrics-table tr.low-performer {
        background: rgba(255, 0, 128, 0.1);
    }
    
    .table-container {
        margin-bottom: var(--spacing-lg);
    }
    
    .table-container h3 {
        margin-bottom: var(--spacing-sm);
        color: var(--neon-purple);
    }
    
    .spearman-correlation {
        text-align: center;
        padding: var(--spacing-md);
        background: var(--gradient-primary);
        border-radius: var(--radius-md);
        color: var(--bg-primary);
        margin-top: var(--spacing-md);
    }
    
    .perception-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-md);
    }
    
    .perception-card {
        background: var(--bg-tertiary);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .perception-card.warning {
        border-color: var(--neon-orange);
        background: rgba(255, 107, 53, 0.1);
    }
    
    .perception-card.info {
        border-color: var(--neon-blue);
        background: rgba(0, 212, 255, 0.1);
    }
    
    .perception-card.critical {
        border-color: var(--neon-pink);
        background: rgba(255, 0, 128, 0.1);
    }
    
    .member-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }
    
    .member-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-xs);
        background: var(--glass-bg);
        border-radius: var(--radius-sm);
    }
    
    .badge {
        font-size: 0.8rem;
        padding: 2px 8px;
        border-radius: var(--radius-full);
        background: var(--gradient-primary);
        color: var(--bg-primary);
        font-weight: 600;
    }
    
    .badge.negative {
        background: var(--gradient-danger);
    }
    
    .badge.positive {
        background: var(--gradient-success);
    }
    
    .anomaly-note {
        margin-top: var(--spacing-md);
        padding: var(--spacing-md);
        background: rgba(255, 234, 0, 0.1);
        border: 1px solid var(--neon-yellow);
        border-radius: var(--radius-md);
    }
    
    .anomaly-note h4 {
        color: var(--neon-yellow);
        margin-bottom: var(--spacing-xs);
    }
    
    .cluster-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-md);
    }
    
    .cluster-card {
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 2px solid;
    }
    
    .cluster-card.core {
        background: rgba(255, 0, 128, 0.1);
        border-color: var(--neon-pink);
    }
    
    .cluster-card.core2 {
        background: rgba(255, 107, 53, 0.1);
        border-color: var(--neon-orange);
    }
    
    .cluster-card.quasi {
        background: rgba(255, 234, 0, 0.1);
        border-color: var(--neon-yellow);
    }
    
    .cluster-card.periphery {
        background: rgba(0, 255, 136, 0.1);
        border-color: var(--neon-green);
    }
    
    .member-chips {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        margin: var(--spacing-sm) 0;
    }
    
    .member-chip {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--glass-bg);
        border-radius: var(--radius-full);
        font-size: 0.85rem;
    }
    
    .member-chip strong {
        color: var(--text-primary);
    }
    
    .polarization-metric {
        margin-top: var(--spacing-lg);
        padding: var(--spacing-md);
        background: var(--gradient-primary);
        border-radius: var(--radius-md);
        color: var(--bg-primary);
        text-align: center;
    }
    
    .risk-grid {
        display: grid;
        gap: var(--spacing-md);
    }
    
    .risk-card {
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border-left: 4px solid;
    }
    
    .risk-card.high {
        background: rgba(255, 51, 102, 0.1);
        border-left-color: var(--neon-red);
    }
    
    .risk-card.medium {
        background: rgba(255, 107, 53, 0.1);
        border-left-color: var(--neon-orange);
    }
    
    .risk-card.low {
        background: rgba(0, 255, 136, 0.1);
        border-left-color: var(--neon-green);
    }
    
    .risk-item {
        margin-bottom: var(--spacing-sm);
    }
    
    .risk-item:last-child {
        margin-bottom: 0;
    }
    
    .risk-item strong {
        color: var(--neon-cyan);
        display: block;
        margin-bottom: var(--spacing-xs);
    }
    
    /* Analysis Content Styles */
    .analysis-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        padding: var(--spacing-xl);
        background: var(--gradient-primary);
        border-radius: var(--radius-lg);
        color: var(--bg-primary);
    }
    
    .analysis-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: var(--spacing-sm);
    }
    
    .analysis-subtitle {
        font-size: 1.1rem;
        opacity: 0.9;
    }
    
    .analysis-sections {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
    }
    
    .analysis-section {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
    }
    
    .section-title {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: 1.8rem;
        margin-bottom: var(--spacing-lg);
        color: var(--neon-blue);
    }
    
    .key-metrics {
        display: flex;
        justify-content: center;
        gap: var(--spacing-lg);
        margin: var(--spacing-lg) 0;
    }
    
    .metric-card-summary {
        text-align: center;
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
        transition: all 0.3s ease;
    }
    
    .metric-card-summary:hover {
        transform: translateY(-5px);
        border-color: var(--neon-cyan);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
    }
    
    .metric-value {
        font-size: 2.5rem;
        font-weight: 700;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .metric-label {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin-top: var(--spacing-xs);
    }
    
    .findings-grid {
        display: grid;
        gap: var(--spacing-md);
    }
    
    .finding-card {
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border-left: 4px solid;
        background: var(--bg-tertiary);
    }
    
    .finding-card.critical {
        border-left-color: var(--neon-red);
        background: rgba(255, 51, 102, 0.05);
    }
    
    .finding-card.warning {
        border-left-color: var(--neon-orange);
        background: rgba(255, 107, 53, 0.05);
    }
    
    .finding-card h3 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .finding-card p {
        margin: var(--spacing-xs) 0;
        color: var(--text-secondary);
    }
    
    .employee-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: var(--spacing-lg);
    }
    
    .employee-card {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-md);
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .employee-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        border-color: var(--neon-cyan);
    }
    
    .employee-header {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-md);
    }
    
    .employee-avatar {
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: var(--bg-primary);
        font-size: 1.2rem;
    }
    
    .employee-info h4 {
        margin: 0;
        color: var(--text-primary);
    }
    
    .employee-info p {
        margin: 0;
        color: var(--text-muted);
        font-size: 0.9rem;
    }
    
    .employee-metrics {
        display: flex;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-md);
    }
    
    .metric {
        text-align: center;
        flex: 1;
    }
    
    .metric-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--neon-blue);
    }
    
    .metric-label {
        font-size: 0.75rem;
        color: var(--text-muted);
    }
    
    .employee-insights {
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    
    .employee-insights p {
        margin: var(--spacing-xs) 0;
    }
    
    .employee-insights strong {
        color: var(--text-primary);
    }
    
    .employee-quote {
        font-style: italic;
        color: var(--neon-purple);
        border-left: 3px solid var(--neon-purple);
        padding-left: var(--spacing-sm);
        margin-top: var(--spacing-sm);
    }
    
    .intervention-timeline {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }
    
    .timeline-phase {
        background: var(--bg-tertiary);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .timeline-phase h3 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .timeline-phase ul {
        margin: 0;
        padding-left: var(--spacing-lg);
    }
    
    .timeline-phase li {
        margin-bottom: var(--spacing-sm);
        color: var(--text-secondary);
    }
    
    .timeline-phase li strong {
        color: var(--text-primary);
    }
    
    .recommendations-table {
        overflow-x: auto;
    }
    
    .recommendations-table table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .recommendations-table th {
        background: var(--bg-tertiary);
        padding: var(--spacing-sm);
        text-align: left;
        font-weight: 600;
        border-bottom: 2px solid var(--glass-border);
        color: var(--neon-cyan);
    }
    
    .recommendations-table td {
        padding: var(--spacing-sm);
        border-bottom: 1px solid var(--glass-border);
        color: var(--text-secondary);
    }
    
    .final-recommendations {
        margin-top: var(--spacing-lg);
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .final-recommendations h4 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-sm);
    }
    
    .final-recommendations ul {
        margin: 0;
        padding-left: var(--spacing-lg);
    }
    
    .final-recommendations li {
        margin-bottom: var(--spacing-xs);
        color: var(--text-secondary);
    }
    
    .final-recommendations li strong {
        color: var(--text-primary);
    }
    
    /* Glossary Styles */
    .glossary-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--spacing-xl);
    }
    
    .glossary-container h1 {
        text-align: center;
        font-size: 2.5rem;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: var(--spacing-sm);
    }
    
    .glossary-subtitle {
        text-align: center;
        color: var(--text-muted);
        margin-bottom: var(--spacing-xl);
    }
    
    .glossary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
    }
    
    .glossary-card {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-md);
        transition: all 0.3s ease;
    }
    
    .glossary-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        border-color: var(--neon-cyan);
    }
    
    .glossary-card h3 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .glossary-card .description {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
    }
    
    .glossary-card .formula {
        background: var(--bg-tertiary);
        padding: var(--spacing-sm);
        border-radius: var(--radius-sm);
        margin-bottom: var(--spacing-sm);
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
    }
    
    .glossary-card .formula code {
        color: var(--neon-green);
    }
    
    .glossary-card .example {
        color: var(--text-muted);
        font-size: 0.9rem;
        font-style: italic;
    }
    
    .glossary-visual {
        margin-top: var(--spacing-sm);
    }
    
    .rank-scale {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--bg-tertiary);
        padding: var(--spacing-sm);
        border-radius: var(--radius-sm);
    }
    
    .rank-value {
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    .rank-value.high {
        color: var(--neon-green);
    }
    
    .rank-value.low {
        color: var(--neon-pink);
    }
    
    .rank-label {
        font-size: 0.8rem;
        color: var(--text-muted);
    }
    
    .glossary-section {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
    }
    
    .glossary-section h2 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-md);
    }
    
    .raci-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: var(--spacing-md);
    }
    
    .raci-table th {
        background: var(--bg-tertiary);
        padding: var(--spacing-sm);
        text-align: left;
        font-weight: 600;
        border: 1px solid var(--glass-border);
        color: var(--neon-cyan);
    }
    
    .raci-table td {
        padding: var(--spacing-sm);
        border: 1px solid var(--glass-border);
        text-align: center;
        font-weight: 600;
        font-size: 1.1rem;
    }
    
    .raci-table td:first-child {
        text-align: left;
        font-weight: normal;
        color: var(--text-secondary);
    }
    
    .raci-a { color: var(--neon-red); }
    .raci-r { color: var(--neon-green); }
    .raci-c { color: var(--neon-blue); }
    .raci-i { color: var(--neon-purple); }
    
    .raci-legend {
        display: flex;
        gap: var(--spacing-lg);
        justify-content: center;
        margin-top: var(--spacing-md);
        flex-wrap: wrap;
    }
    
    .raci-legend span {
        color: var(--text-muted);
    }
    
    .raci-legend strong {
        color: var(--text-primary);
        margin-right: var(--spacing-xs);
    }
    
    .sop-container {
        background: var(--bg-tertiary);
        padding: var(--spacing-lg);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .sop-header {
        display: flex;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
        flex-wrap: wrap;
    }
    
    .sop-header p {
        margin: 0;
        color: var(--text-secondary);
    }
    
    .sop-header strong {
        color: var(--text-primary);
    }
    
    .sop-steps {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .sop-step {
        display: flex;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        background: var(--glass-bg);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
        transition: all 0.3s ease;
    }
    
    .sop-step:hover {
        transform: translateX(10px);
        border-color: var(--neon-cyan);
    }
    
    .step-number {
        width: 40px;
        height: 40px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--bg-primary);
        flex-shrink: 0;
    }
    
    .step-content h4 {
        margin: 0 0 var(--spacing-xs) 0;
        color: var(--neon-cyan);
    }
    
    .step-content p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .sop-metrics {
        margin-top: var(--spacing-lg);
        padding: var(--spacing-md);
        background: var(--glass-bg);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .sop-metrics h4 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-sm);
    }
    
    .sop-metrics ul {
        margin: 0;
        padding-left: var(--spacing-lg);
    }
    
    .sop-metrics li {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-xs);
    }
    
    /* Development View Additional Styles */
    .development-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
    }
    
    .development-header h2 {
        font-size: 2rem;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: var(--spacing-sm);
    }
    
    .development-header p {
        color: var(--text-muted);
    }
    
    .development-grid {
        display: grid;
        grid-template-columns: 1,5fr 1fr;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
    }
    
    @media (max-width: 968px) {
        .development-grid {
            grid-template-columns: 1fr;
        }
    }
    
    .chart-container {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
    }
    
    .chart-title {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-md);
        text-align: center;
    }
    
    .recommendations-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .recommendation-item {
        display: flex;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
        align-items: flex-start;
    }
    
    .recommendation-item.critical {
        border-color: var(--neon-red);
        background: rgba(255, 51, 102, 0.05);
    }
    
    .recommendation-item.success {
        border-color: var(--neon-green);
        background: rgba(0, 255, 136, 0.05);
    }
    
    .recommendation-item.info {
        border-color: var(--neon-blue);
        background: rgba(0, 212, 255, 0.05);
    }
    
    .recommendation-item.warning {
        border-color: var(--neon-orange);
        background: rgba(255, 107, 53, 0.05);
    }
    
    .recommendation-item i {
        font-size: 1.5rem;
        margin-top: 3px;
    }
    
    .recommendation-item.critical i { color: var(--neon-red); }
    .recommendation-item.success i { color: var(--neon-green); }
    .recommendation-item.info i { color: var(--neon-blue); }
    .recommendation-item.warning i { color: var(--neon-orange); }
    
    .recommendation-item h4 {
        margin: 0 0 var(--spacing-xs) 0;
        color: var(--text-primary);
    }
    
    .recommendation-item ul {
        margin: var(--spacing-xs) 0;
        padding-left: var(--spacing-md);
    }
    
    .recommendation-item li {
        color: var(--text-secondary);
    }
    
    .recommendation-item p {
        margin: var(--spacing-xs) 0 0 0;
        color: var(--text-muted);
        font-style: italic;
    }
    
    .delegation-analysis {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
    }
    
    .delegation-analysis h3 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-md);
    }
    
    .analysis-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
    }
    
    @media (max-width: 768px) {
        .analysis-grid {
            grid-template-columns: 1fr;
        }
    }
    
    .analysis-card {
        background: var(--bg-tertiary);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .analysis-card h4 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .analysis-card ul {
        margin: 0;
        padding-left: var(--spacing-md);
    }
    
    .analysis-card li {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-xs);
    }
    
    .analysis-card p {
        margin: var(--spacing-xs) 0;
        color: var(--text-secondary);
    }
    
    .analysis-card p strong {
        color: var(--neon-orange);
    }
    
    .development-matrix {
        margin-top: var(--spacing-lg);
    }
    
    .development-matrix h4 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-md);
    }
    
    .development-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .development-table th {
        background: var(--bg-tertiary);
        padding: var(--spacing-sm);
        text-align: left;
        font-weight: 600;
        border: 1px solid var(--glass-border);
        color: var(--neon-cyan);
    }
    
    .development-table td {
        padding: var(--spacing-sm);
        border: 1px solid var(--glass-border);
        color: var(--text-secondary);
    }
    
    .development-table td:first-child {
        font-weight: 600;
        color: var(--text-primary);
        text-align: center;
    }
    
    /* Quadrant Analysis Styles */
    .quadrant-analysis {
        padding: var(--spacing-lg);
    }
    
    .quadrant-analysis h3 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-md);
        text-align: center;
    }
    
    .quadrant-chart {
        display: flex;
        justify-content: center;
        margin-bottom: var(--spacing-lg);
    }
    
    .quadrant-info {
        text-align: center;
        margin-bottom: var(--spacing-lg);
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
    }
    
    .quadrant-info h4 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .quadrant-info p {
        margin: var(--spacing-xs) 0;
        color: var(--text-secondary);
    }
    
    .quadrant-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-md);
    }
    
    .quadrant-card {
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        border: 2px solid var(--glass-border);
        transition: all 0.3s ease;
    }
    
    .quadrant-card.active {
        border-color: var(--neon-cyan);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
    }
    
    .quadrant-card h4 {
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-sm);
    }
    
    .quadrant-card p {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    /* Psychology Profile Styles */
    .psychology-profile {
        padding: var(--spacing-lg);
    }
    
    .profile-section {
        margin-bottom: var(--spacing-lg);
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .profile-section h4 {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        color: var(--neon-cyan);
        margin-bottom: var(--spacing-md);
    }
    
    .profile-section h4 i {
        font-size: 1.2rem;
    }
    
    .motivators-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-md);
    }
    
    .motivator-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm);
        background: var(--glass-bg);
        border-radius: var(--radius-sm);
    }
    
    .motivator-icon {
        width: 40px;
        height: 40px;
        background: var(--gradient-success);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .motivator-icon i {
        color: var(--bg-primary);
    }
    
    .demotivator-icon {
        width: 40px;
        height: 40px;
        background: var(--gradient-danger);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .demotivator-icon i {
        color: var(--bg-primary);
    }
    
    .motivator-item h5 {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-primary);
    }
    
    .conflict-style {
        display: flex;
        gap: var(--spacing-md);
        align-items: flex-start;
    }
    
    .conflict-icon {
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .conflict-icon i {
        font-size: 1.5rem;
        color: var(--bg-primary);
    }
    
    .conflict-style h5 {
        margin: 0 0 var(--spacing-xs) 0;
        color: var(--neon-purple);
    }
    
    .conflict-style p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .risk-indicators {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .risk-item {
        display: flex;
        gap: var(--spacing-md);
        align-items: flex-start;
        padding: var(--spacing-sm);
        background: var(--glass-bg);
        border-radius: var(--radius-sm);
        border-left: 3px solid;
    }
    
    .risk-item.high {
        border-left-color: var(--neon-red);
    }
    
    .risk-item.medium {
        border-left-color: var(--neon-orange);
    }
    
    .risk-item.low {
        border-left-color: var(--neon-green);
    }
    
    .risk-level {
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: var(--radius-full);
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .risk-level.high {
        background: var(--gradient-danger);
        color: var(--bg-primary);
    }
    
    .risk-level.medium {
        background: var(--gradient-warning);
        color: var(--bg-primary);
    }
    
    .risk-level.low {
        background: var(--gradient-success);
        color: var(--bg-primary);
    }
    
    .risk-item strong {
        display: block;
        color: var(--text-primary);
        margin-bottom: 2px;
    }
    
    .risk-item p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.85rem;
    }
    
    /* Development Card Styles */
    .development-card {
        padding: var(--spacing-lg);
    }
    
    .development-card h4 {
        color: var(--neon-purple);
        margin-bottom: var(--spacing-md);
    }
    
    .development-overview {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-lg);
        font-style: italic;
    }
    
    .development-steps {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-lg);
    }
    
    .step-item {
        display: flex;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        border: 1px solid var(--glass-border);
    }
    
    .step-item .step-number {
        width: 30px;
        height: 30px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: var(--bg-primary);
        flex-shrink: 0;
    }
    
    .step-item h5 {
        margin: 0 0 var(--spacing-xs) 0;
        color: var(--neon-cyan);
    }
    
    .step-item p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .employee-grid {
            grid-template-columns: 1fr;
        }
        
        .overview-grid {
            grid-template-columns: 1fr;
        }
        
        .perception-grid {
            grid-template-columns: 1fr;
        }
        
        .cluster-grid {
            grid-template-columns: 1fr;
        }
        
        .risk-grid {
            grid-template-columns: 1fr;
        }
        
        .glossary-grid {
            grid-template-columns: 1fr;
        }
        
        .motivators-grid {
            grid-template-columns: 1fr;
        }
        
        .quadrant-grid {
            grid-template-columns: 1fr;
        }
        
        .raci-table {
            font-size: 0.8rem;
        }
        
        .development-table {
            font-size: 0.8rem;
        }
        
        .metrics-table {
            font-size: 0.8rem;
        }
        
        .analysis-title {
            font-size: 1.8rem;
        }
        
        .section-title {
            font-size: 1.3rem;
        }
    }
`;

// Append styles to document
document.head.appendChild(style);

// Make functions globally available for onclick handlers
window.showQuickInfo = showQuickInfo;
window.showDetailedModal = showDetailedModal;
window.showMemberDetails = showMemberDetails;
window.switchTab = switchTab;
window.closeMobileWarning = closeMobileWarning;

// Initialize on load
console.log('TeamPulse Analytics loaded successfully!');