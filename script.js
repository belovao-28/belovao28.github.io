/* ============================================================
   Алексей Белов — Senior PM · Portfolio
   ============================================================ */

(function(){
  'use strict';

  // ----- YEAR -----
  const yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();

  // ============================================================
  // I18N — RU / EN
  // ============================================================
  const I18N = {
    ru: {
      meta_title: "Алексей Белов — Senior Project Manager · AI-Driven Delivery",
      meta_desc: "Senior Project Manager в IT. AI-Driven Delivery. Кейсы: Rightway, Rostic's, ВТБ, Открытие, QIWI, Совкомбанк, DMG MORI.",
      brand_role: "Senior Project Manager",

      nav_about: "Обо мне", nav_approach: "Подход", nav_cases: "Кейсы",
      nav_reviews: "Отзывы", nav_contacts: "Контакты",
      btn_discuss: "Обсудить проект",

      hero_eyebrow: '<span>●</span> Senior Project Manager · AI-Driven Delivery',
      hero_h1: "Проекты срываются<br>не из‑за людей —<br><em>из‑за процессов.</em><br>Я их перестраиваю.",
      hero_sub: "Внедряю AI в команды разработки.<br>Меньше рутины — больше доставки.",
      hero_cta_cases: "Смотреть кейсы →",
      hero_cta_discuss: "Обсудить проект",
      hero_stat_1: "лет в IT‑управлении",
      hero_stat_2: "портфель в год",
      hero_stat_3: "человек в командах",
      hero_stat_4: "Time‑to‑Market",
      hero_scroll: "прокрутите",

      about_tag: "01 — Обо мне",
      about_h2: "Кто я и чем помогу",
      about_p1: "<strong>11 лет управляю IT‑проектами</strong> — от цифровизации производства <em>DMG MORI</em> до реализации компании‑единорога <em>Healthcare B2B SaaS</em> на международном рынке.",
      about_p2: "Фокус — ускорение процесса Delivery без потери качества за счёт AI‑инструментов и настройки SDLC. Внедряю AI в реальные команды: тесты, документация, code review, аналитика. Не теория — конкретные цифры по каждому внедрению.",
      about_p3: "Работал с крупными игроками: <em>Rightway, Rostic's, ВТБ, Открытие, Совкомбанк, QIWI</em>.",
      about_p4: "Берусь за проекты с высокой неопределённостью. Когда непонятно, как дойти до финиша — это то, с чем могу помочь.",
      about_m1: "Time‑to‑Market после AI SDLC",
      about_m2: "размер QA‑команды после автоматизации",
      about_m3: "предсказуемость поставок (было 68%)",
      about_m4: "удовлетворённость стейкхолдеров",
      about_m5: "MAU сервиса донатов",
      about_m6: "рост контрактов с ВТБ после NPS 8.4",
      about_m7: "рост аккаунта SimbirSoft (до $2M/год)",
      tools_label: "Инструментарий",

      approach_tag: "02 — Мой подход",
      approach_h2: "Как я работаю",
      approach_lead: "Принципы, которые отличают мой подход от стандартного PM‑а с Jira и Excel.",
      approach_1_t: "AI вместо рутины",
      approach_1_d: "Автоматизирую то, что съедает время: генерация тестов, документация, конспекты встреч, code review.",
      approach_2_t: "Метрики, а не интуиция",
      approach_2_d: "Lead Time, Cycle Time, CFD — с первых недель. Решения по данным. Предсказуемость: 68% → 92% за полгода.",
      approach_3_t: "Discovery перед разработкой",
      approach_3_d: "Не беру спринт без понимания «зачем». Discovery‑фаза сокращает change‑requests на 40%.",
      approach_4_t: "Один язык с бизнесом и инженерами",
      approach_4_d: "PMP/PRINCE2 — для стратегии и governance. Углубление в технику — чтобы не терять доверие команды.",
      approach_5_t: "Команда — не ресурс",
      approach_5_d: "Регулярные 1‑on‑1, прозрачные треки развития. Текучесть ключевых специалистов: 18% → 8%.",
      approach_6_t: "Pre‑sale как часть работы",
      approach_6_d: "Оценка трудоёмкости, защита КП перед заказчиком. Расширение аккаунта до x10.",

      cases_tag: "03 — Кейсы",
      cases_h2: "Проекты и результаты",
      cases_lead: "Каждый кликабелен — внутри полная карточка проекта.",

      case_rightway_marker: "🏥 HealthCare · Mobile / Web · USA",
      case_rightway_name: "Rightway Healthcare",
      case_rightway_one: "Healthcare B2B SaaS‑единорог ($1.1B) на рынке США. AI‑SDLC и автоматизация тестов.",
      kpi_qa: "QA‑команда",
      case_rostics_marker: "🍔 Fast Food · Mobile · Russia",
      case_rostics_name: "Новое приложение Rostic's",
      case_rostics_one: "Highload‑мобильное приложение сети ~1 300 ресторанов, 5M+ MAU. Запуск с нуля.",
      kpi_predictability: "предсказуемость",
      case_vtb_marker: "🏦 Fintech · Data / BI",
      case_vtb_name: "DWH‑миграция и BI для банков",
      case_vtb_one: "20+ проектов Data/BI для банков Топ‑10 (ВТБ, Открытие). Миграция DDS‑слоя ВТБ.",
      kpi_projects: "проектов",
      kpi_portfolio_growth: "рост портфеля",
      case_donate_marker: "⚡ Fintech · Streaming",
      case_donate_one: "Сервис донатов для стримеров. 31% рынка РФ, TPV 7 млрд ₽. Запуск с нуля.",
      kpi_tpv_val: "7 млрд ₽",
      case_qampus_marker: "🎓 HR tools · LMS",
      case_qampus_one: "Корпоративный LMS для 3000+ сотрудников QIWI, который вышел в отдельный B2B‑продукт.",
      kpi_ontime: "On‑time",
      kpi_onbudget: "On‑budget",
      case_sovcom_marker: "🏦 Fintech · Portfolio",
      case_sovcom_name: "Портфель проектов Совкомбанк",
      case_sovcom_one: "С одного лендинга — до портфеля из 10 проектов. Рост аккаунта в 10 раз.",
      kpi_account_growth: "рост аккаунта",
      kpi_per_year: "в год",
      kpi_ontime_onbudget: "On‑time, On‑budget",
      case_dmg_marker: "🏭 Manufacturing · Digitalization",
      case_dmg_name: "DMG MORI — цифровизация производства",
      case_dmg_one: "80+ станков в MES. Первое в России шпиндельное производство. 120+ человек.",
      kpi_downtime: "простой",
      kpi_savings: "сэкономленный бюджет",

      reviews_tag: "04 — Отзывы",
      reviews_h2: "Что говорят заказчики",
      review_rightway_role: "CTO · [имя]",
      review_placeholder: "«— отзыв будет добавлен —»",
      review_read: "Читать →",
      review_read_simbir: "Читать кейс на SimbirSoft →",
      review_read_media: "Читать в Ritm Magazine →",
      review_donate_role: "Product Owner",
      review_donate_text: "«Компания SimbirSoft по заказу платёжного сервиса QIWI разработала сервис QIWI Donate для перечисления денежной помощи без комиссии стрим‑платформе. Для нас это уже восьмой совместный проект с QIWI, и мы гордимся успешным сотрудничеством на протяжении более чем двух лет.»",
      review_qampus_role: "Александр · Product Manager, QIWI",
      review_qampus_text: "«Мы сделали классный портал — портал для наших сотрудников, портал развития и обучения. Делали вместе с коллегами из SimbirSoft. Ребята очень классно нам помогли с реализацией, полностью взяв на себя разработку и запуск. Сделали быстро — за три месяца, и сейчас мы продолжаем его активно развивать. Очень довольны ребятами из SimbirSoft. Классно поработали и сделали реально качественный продукт.»",
      review_dmg_role: "СМИ · Ritm Magazine",
      review_dmg_text: "«Уникальное для России производство шпинделей запустил ульяновский станкостроительный завод концерна „ДМГ Мори“. Шпиндели — самая ответственная и важная часть фрезерного станка. Чтобы локализовать производство этих деталей, концерн инвестировал 600 тысяч евро, рассчитывая выпускать на ульяновском заводе не менее 600 единиц в год. Ранее поставки шпинделей осуществлялись из‑за рубежа, теперь же, чтобы соответствовать требованиям локализации, этот узел станков будет производиться в Ульяновске.»",
      review_rostics_arch_role: "Chief Architect · Олег Шешин",
      review_rostics_pm_role: "Product Manager · Женя Фокина",

      contacts_tag: "05 — Контакты",
      contacts_h2: "Обсудим <em>ваш проект</em>",
      contacts_lead: "Если у вас есть проект с высокой неопределённостью, команда, которой нужно ускориться, или вы хотите внедрить AI в процессы разработки — напишите.",
      form_h3: "Оставить заявку",
      form_name_label: "Ваше имя",
      form_name_ph: "Как к вам обращаться",
      form_phone_label: "Телефон <i>*</i>",
      form_contact_label: "Email или Telegram",
      form_contact_ph: "email@domain.com или @username",
      form_msg_label: "Задача или вопрос",
      form_msg_ph: "Коротко о проекте: цель, сроки, команда",
      form_submit: "Отправить заявку",
      form_note: "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.",
      form_err_fields: "Проверьте поля: имя, телефон и email/Telegram.",
      form_sending: "Отправляем…",
      form_ok: "✓ Заявка отправлена. Свяжусь в течение дня.",
      form_fail: "Не удалось отправить. Напишите в Telegram @Belovao28 или на belovao28@gmail.com",
      tg_new_request: "🟡 Новая заявка с сайта",
      tg_name: "👤 Имя",
      tg_phone: "📞 Телефон",
      tg_contact: "✉️ Контакт",
      tg_task: "📝 Задача",

      footer_copy: "© <span id=\"year\"></span> Алексей Белов · Senior Project Manager",

      mod_context: "Контекст проекта",
      mod_period: "Период",
      mod_team: "Команда",
      mod_methodology: "Методология",
      mod_tools: "Инструменты",
      mod_did: "Что делал",
      mod_stack: "Стек",

      mod_rightway_one: "Healthcare B2B SaaS‑платформа (единорог, $1.1B) в системе здравоохранения на рынке США.",
      mod_rightway_ctx: "Rightway — американская HealthTech‑компания‑единорог с оценкой $1.1B, радикально меняющая то, как люди получают медицинскую помощь и покупают лекарства. В конце 2025 года Rightway заняла 42‑е место в рейтинге Deloitte Fast 500 самых быстрорастущих технологических компаний Северной Америки.",
      mod_rightway_period: "Март 2022 — Декабрь 2025",
      mod_rightway_team: "50 человек · 7 стран: Back, Front Web (React), Front Mobile (RN), QA, SDET, DevOps",
      kpi_prd_speed: "скорость PRD",
      kpi_churn: "текучесть",
      mod_rightway_b1: "Перевёл команду на AI SDLC (Claude Code, Cursor). <b>Velocity +27%, TTM −30%</b>.",
      mod_rightway_b2: "Заменил ручное тестирование AI‑генерацией unit / e2e / интеграционных тестов. <b>QA −70%</b>.",
      mod_rightway_b3: "Собрал AI‑ассистента для встреч: конспекты, agenda, action items в Google Drive автоматически. <b>Follow‑up −40%</b>.",
      mod_rightway_b4: "Разработали RAG‑модель для PRD и спецификаций. <b>Скорость документации +60%</b>.",
      mod_rightway_b5: "Снизил текучесть ключевых специалистов <b>с 18% до 8%</b>: регулярные 1‑on‑1 и треки развития.",

      mod_rostics_h2: "Новое мобильное приложение Rostic's",
      mod_rostics_one: "Разработка с нуля highload‑приложения в сфере Fast Food. ~1 300 ресторанов, 5M+ MAU.",
      mod_rostics_ctx: "Разработка с нуля нового highload‑мобильного приложения Rostic's — Fast Food сеть с ежемесячной аудиторией более 5M человек, ~1 300 ресторанов.",
      mod_rostics_period: "Июнь 2025 — н. в.",
      mod_rostics_team: "15 человек: Back, iOS, Android, Analyst, QA, DevOps",
      kpi_release_pred: "предсказуемость релизов",
      kpi_feature_time: "время выпуска фич",
      mod_rostics_b1: "Руководил полным циклом разработки и вывода в сторы (App Store / Google Play) для сети ~1 300 ресторанов.",
      mod_rostics_b2: "Оптимизировал SDLC, внедрив Scrum + Waterfall. <b>Время выпуска новых фич −35%</b>.",
      mod_rostics_b3: "Решил проблему плохо проработанных требований. <b>Cycle Time −45%</b>.",
      mod_rostics_b4: "Внедрил прозрачную систему работы с метриками и визуализацию. <b>Предсказуемость релизов 92%</b>.",

      mod_vtb_h2: "DWH‑миграция и BI для банков Топ‑10",
      mod_vtb_one: "20+ проектов Data/BI для ВТБ, Открытия и других банков. Миграция DDS‑слоя ВТБ.",
      mod_vtb_ctx: "Реализация проектов по подготовке витрин данных, миграции хранилища и построению BI‑отчётности для банков Топ‑10.",
      mod_vtb_team: "15 человек: Data Analysts, ETL‑разработчики, архитекторы",
      kpi_data_projects: "проектов Data/BI",
      kpi_client_nps: "NPS заказчика",
      kpi_on_budget_time: "в бюджете и сроках",
      kpi_incidents: "инцидентов",
      kpi_vtb_team: "человек в команде ВТБ",
      mod_vtb_b1: "Закрыл <b>20+ проектов Data/BI</b> для банков Топ‑10. Качество, сроки и бюджет — <b>&gt;90%</b>.",
      mod_vtb_b2: "Мигрировал хранилище ВТБ (DDS‑слой), 15 человек в команде. В бюджете и сроках.",
      mod_vtb_b3: "Разработал стандарты ведения проектов — компания приняла их как корпоративные. <b>Инциденты −18%</b>.",
      mod_vtb_b4: "Рост портфеля проектов <b>+60%</b>.",
      mod_vtb_b5: "Pre‑sale: оценивал трудоёмкость, собирал КП, защищал проекты перед заказчиком.",

      mod_donate_one: "Финтех‑сервис для стримеров. 31% всех донатов на российском рынке. TPV 7 млрд ₽.",
      mod_donate_ctx: "Специализированный финтех‑сервис от группы QIWI для стримеров и создателей контента. Позволяет авторам принимать пожертвования во время прямых трансляций на Twitch, YouTube и VK Play. Прямой конкурент DonationAlerts с глубокой интеграцией в экосистему QIWI — максимально быстрый и выгодный вывод средств.",
      mod_donate_team: "10 человек: аналитики, дизайнеры, Front, Back, архитектор, DevOps",
      kpi_ru_share: "доля рынка РФ",
      mod_donate_b1: "Запустил с нуля сервис донатов: <b>MAU 1.2M, uptime 99.9%</b>. Микросервисы, Kubernetes.",
      mod_donate_b2: "Выстроил процессы интеграции и поддержания совместимости с большим количеством сервисов.",
      mod_donate_b3: "Реализация проекта в срок и бюджет.",
      mod_donate_b4: "Совмещение роли Product и Project Manager, работа со стейкхолдерами, формирование бэклога.",

      mod_qampus_one: "Корпоративный LMS QIWI для 3 000+ сотрудников. Вышел в отдельный B2B‑продукт.",
      mod_qampus_link: "Лендинг Qampus ↗",
      mod_qampus_ctx: "Корпоративный LMS и система управления знаниями для сотрудников QIWI. Построен на методологии непрерывного обучения 70/20/10: индивидуальные треки развития, hard/soft skills, онбординг, доступ к внутренней библиотеке. Изначально внутренний инструмент — вышел как отдельный B2B‑продукт со своей монетизацией.",
      mod_qampus_team: "12 человек: Analyst, Front, Back, SDET, QA, DevOps, Designer",
      kpi_dev_util: "утилизация разработчиков",
      mod_qampus_b1: "Проводил интервью с сотрудниками компании для выявления гипотез по улучшению продукта.",
      mod_qampus_b2: "Внедрил прозрачный процесс триажа и приоритизации бэклога со стороны заказчика, используя data‑driven скоринговые модели. Хаотичные запросы в спринтах снижены.",
      mod_qampus_b3: "Запустил систему планирования и трекинга аллокации ресурсов. Конфликты в команде минимизированы, <b>утилизация разработчиков +11%</b>.",
      mod_qampus_b4: "Управлял экономикой проекта (P&amp;L, маржинальность). Релизные планы On‑time / On‑budget.",

      mod_sovcom_one: "С одного лендинга — до портфеля из 10 проектов. Рост аккаунта в 10 раз до $2M/год.",
      mod_sovcom_ctx: "Заказчик пришёл с проектом по реализации одного лендингового сайта. Благодаря чёткой работе и налаживанию прозрачных процессов взаимодействия удалось забрать больше проектов и зарекомендовать компанию как надёжного партнёра.",
      mod_sovcom_team: "25 человек: Analyst, Front, Back, SDET, QA, DevOps, Designer",
      kpi_projects_in_portfolio: "проектов в портфеле",
      mod_sovcom_b1: "Вырастил аккаунт с 1 проекта до <b>$2M/год</b>.",
      mod_sovcom_b2: "Реализовал все проекты в срок и бюджет <b>без исключения</b>.",
      mod_sovcom_b3: "Зарекомендовал компанию как надёжного стратегического партнёра для проектов, требующих вызовов.",

      mod_dmg_one: "80+ станков в MES. Первое в России шпиндельное производство. Команда 120+ человек.",
      mod_dmg_ctx: "Подключение металлообрабатывающих станков в единую систему цифровизации для отслеживания цепочки производства, поиска узких мест и оптимизации процесса для повышения КПД и пропускной способности. Запуск первого в России шпиндельного производства.",
      mod_dmg_team: "30+ человек (стержневой состав), 120+ участников в проекте",
      kpi_machines_mes: "станков в MES",
      kpi_prod_lines: "производственные линии",
      kpi_people_project: "человек в проекте",
      mod_dmg_b1: "Подключил <b>80+ станков</b> к MES, построил сквозной контур цифровизации.",
      mod_dmg_b2: "Запустил с нуля <b>первое в России шпиндельное производство</b>, бюджет €0.6M.",
      mod_dmg_b3: "Перенимание опыта шпиндельного производства в Польше и Германии — лучшие практики.",
      mod_dmg_b4: "OEE вырос <b>с 62% до 78%</b>, простой <b>−25%</b>."
    },

    en: {
      meta_title: "Alexey Belov — Senior Project Manager · AI-Driven Delivery",
      meta_desc: "Senior Project Manager in IT. AI-Driven Delivery. Cases: Rightway, Rostic's, VTB, Otkritie, QIWI, Sovcombank, DMG MORI.",
      brand_role: "Senior Project Manager",

      nav_about: "About", nav_approach: "Approach", nav_cases: "Cases",
      nav_reviews: "Reviews", nav_contacts: "Contacts",
      btn_discuss: "Start a project",

      hero_eyebrow: '<span>●</span> Senior Project Manager · AI-Driven Delivery',
      hero_h1: "Projects fail<br>not because of people —<br><em>but because of processes.</em><br>I rebuild them.",
      hero_sub: "I embed AI into delivery teams.<br>Less routine — more shipping.",
      hero_cta_cases: "See cases →",
      hero_cta_discuss: "Start a project",
      hero_stat_1: "years in IT management",
      hero_stat_2: "annual portfolio",
      hero_stat_3: "people in teams",
      hero_stat_4: "Time-to-Market",
      hero_scroll: "scroll",

      about_tag: "01 — About",
      about_h2: "Who I am and how I can help",
      about_p1: "<strong>11 years managing IT projects</strong> — from digitalizing <em>DMG MORI</em> manufacturing to delivering a <em>Healthcare B2B SaaS</em> unicorn on the international market.",
      about_p2: "Focus: accelerating Delivery without quality loss through AI tools and SDLC tuning. I embed AI into real teams: tests, documentation, code review, analytics. Not theory — concrete numbers for every rollout.",
      about_p3: "Worked with major players: <em>Rightway, Rostic's, VTB, Otkritie, Sovcombank, QIWI</em>.",
      about_p4: "I take on projects with high uncertainty. When it's unclear how to reach the finish line — that's where I can help.",
      about_m1: "Time-to-Market after AI SDLC",
      about_m2: "QA team size after automation",
      about_m3: "delivery predictability (was 68%)",
      about_m4: "stakeholder satisfaction",
      about_m5: "MAU of the donations service",
      about_m6: "VTB contract growth after NPS 8.4",
      about_m7: "SimbirSoft account growth (to $2M/year)",
      tools_label: "Toolkit",

      approach_tag: "02 — My approach",
      approach_h2: "How I work",
      approach_lead: "Principles that set me apart from a standard PM with Jira and Excel.",
      approach_1_t: "AI instead of routine",
      approach_1_d: "I automate what eats time: test generation, documentation, meeting notes, code review.",
      approach_2_t: "Metrics, not intuition",
      approach_2_d: "Lead Time, Cycle Time, CFD — from week one. Data-driven decisions. Predictability: 68% → 92% in six months.",
      approach_3_t: "Discovery before development",
      approach_3_d: "I don't start a sprint without understanding the \"why\". Discovery cuts change requests by 40%.",
      approach_4_t: "One language for business and engineers",
      approach_4_d: "PMP/PRINCE2 for strategy and governance. Deep tech literacy to keep the team's trust.",
      approach_5_t: "A team, not a resource",
      approach_5_d: "Regular 1-on-1s, transparent growth tracks. Key-specialist churn: 18% → 8%.",
      approach_6_t: "Pre-sale as part of the job",
      approach_6_d: "Estimation, defending proposals in front of the client. Account expansion up to 10x.",

      cases_tag: "03 — Cases",
      cases_h2: "Projects and results",
      cases_lead: "Each card is clickable — full project details inside.",

      case_rightway_marker: "🏥 HealthCare · Mobile / Web · USA",
      case_rightway_name: "Rightway Healthcare",
      case_rightway_one: "Healthcare B2B SaaS unicorn ($1.1B) on the US market. AI-SDLC and test automation.",
      kpi_qa: "QA team",
      case_rostics_marker: "🍔 Fast Food · Mobile · Russia",
      case_rostics_name: "New Rostic's app",
      case_rostics_one: "High-load mobile app for a chain of ~1,300 restaurants, 5M+ MAU. Built from scratch.",
      kpi_predictability: "predictability",
      case_vtb_marker: "🏦 Fintech · Data / BI",
      case_vtb_name: "DWH migration and BI for banks",
      case_vtb_one: "20+ Data/BI projects for Top-10 banks (VTB, Otkritie). Migration of VTB's DDS layer.",
      kpi_projects: "projects",
      kpi_portfolio_growth: "portfolio growth",
      case_donate_marker: "⚡ Fintech · Streaming",
      case_donate_one: "Donations service for streamers. 31% of the Russian market, TPV 7B RUB. Built from scratch.",
      kpi_tpv_val: "7B RUB",
      case_qampus_marker: "🎓 HR tools · LMS",
      case_qampus_one: "Corporate LMS for 3,000+ QIWI employees — spun off as a separate B2B product.",
      kpi_ontime: "On-time",
      kpi_onbudget: "On-budget",
      case_sovcom_marker: "🏦 Fintech · Portfolio",
      case_sovcom_name: "Sovcombank project portfolio",
      case_sovcom_one: "From a single landing page to a portfolio of 10 projects. 10x account growth.",
      kpi_account_growth: "account growth",
      kpi_per_year: "per year",
      kpi_ontime_onbudget: "On-time, On-budget",
      case_dmg_marker: "🏭 Manufacturing · Digitalization",
      case_dmg_name: "DMG MORI — manufacturing digitalization",
      case_dmg_one: "80+ machines in MES. Russia's first spindle production line. 120+ people.",
      kpi_downtime: "downtime",
      kpi_savings: "budget saved",

      reviews_tag: "04 — Reviews",
      reviews_h2: "What clients say",
      review_rightway_role: "CTO · [name]",
      review_placeholder: "«— review to be added —»",
      review_read: "Read →",
      review_read_simbir: "Read the case on SimbirSoft →",
      review_read_media: "Read on Ritm Magazine →",
      review_donate_role: "Product Owner",
      review_donate_text: "«SimbirSoft developed QIWI Donate for the QIWI payment service — a zero-commission donations service for streaming platforms. For us, this is already the eighth joint project with QIWI, and we take pride in a successful partnership of more than two years.»",
      review_qampus_role: "Alexander · Product Manager, QIWI",
      review_qampus_text: "«We built a great portal — a portal for our employees, a portal for growth and learning. We did it together with colleagues from SimbirSoft. The team helped us brilliantly with the implementation, fully taking on development and launch. We shipped it fast — in three months — and we're still actively evolving it. Very happy with SimbirSoft. Great work and a genuinely quality product.»",
      review_dmg_role: "Media · Ritm Magazine",
      review_dmg_text: "«The Ulyanovsk machine-tool plant of the DMG MORI Group has launched a spindle production line unique for Russia. Spindles are the most critical part of a milling machine. To localize production of these parts, the group invested 600,000 euros, aiming to produce at least 600 units per year at the Ulyanovsk plant. Previously, spindles were supplied from abroad; now, to meet localization requirements, this machine component will be produced in Ulyanovsk.»",
      review_rostics_arch_role: "Chief Architect · Oleg Sheshin",
      review_rostics_pm_role: "Product Manager · Zhenya Fokina",

      contacts_tag: "05 — Contacts",
      contacts_h2: "Let's discuss <em>your project</em>",
      contacts_lead: "If you have a project with high uncertainty, a team that needs to move faster, or you want to embed AI into your delivery process — drop a line.",
      form_h3: "Submit a request",
      form_name_label: "Your name",
      form_name_ph: "How should I address you",
      form_phone_label: "Phone <i>*</i>",
      form_contact_label: "Email or Telegram",
      form_contact_ph: "email@domain.com or @username",
      form_msg_label: "Task or question",
      form_msg_ph: "Brief project description: goal, timeline, team",
      form_submit: "Send request",
      form_note: "By clicking the button, you agree to personal data processing.",
      form_err_fields: "Please check: name, phone and email/Telegram.",
      form_sending: "Sending…",
      form_ok: "✓ Request sent. I'll get back within a day.",
      form_fail: "Couldn't send. Ping me on Telegram @Belovao28 or at belovao28@gmail.com",
      tg_new_request: "🟡 New request from the website",
      tg_name: "👤 Name",
      tg_phone: "📞 Phone",
      tg_contact: "✉️ Contact",
      tg_task: "📝 Task",

      footer_copy: "© <span id=\"year\"></span> Alexey Belov · Senior Project Manager",

      mod_context: "Project context",
      mod_period: "Period",
      mod_team: "Team",
      mod_methodology: "Methodology",
      mod_tools: "Tools",
      mod_did: "What I did",
      mod_stack: "Stack",

      mod_rightway_one: "Healthcare B2B SaaS platform (unicorn, $1.1B) in the US healthcare system.",
      mod_rightway_ctx: "Rightway is a US HealthTech unicorn valued at $1.1B, radically changing how people receive medical care and buy medication. In late 2025, Rightway ranked 42nd in the Deloitte Fast 500 — the fastest-growing tech companies in North America.",
      mod_rightway_period: "March 2022 — December 2025",
      mod_rightway_team: "50 people · 7 countries: Back, Front Web (React), Front Mobile (RN), QA, SDET, DevOps",
      kpi_prd_speed: "PRD speed",
      kpi_churn: "churn",
      mod_rightway_b1: "Moved the team to AI SDLC (Claude Code, Cursor). <b>Velocity +27%, TTM −30%</b>.",
      mod_rightway_b2: "Replaced manual testing with AI-generated unit / e2e / integration tests. <b>QA −70%</b>.",
      mod_rightway_b3: "Built an AI meeting assistant: notes, agenda, action items in Google Drive automatically. <b>Follow-up −40%</b>.",
      mod_rightway_b4: "Built a RAG model for PRDs and specifications. <b>Documentation speed +60%</b>.",
      mod_rightway_b5: "Reduced key-specialist churn <b>from 18% to 8%</b>: regular 1-on-1s and growth tracks.",

      mod_rostics_h2: "New Rostic's mobile app",
      mod_rostics_one: "Built a high-load Fast Food app from scratch. ~1,300 restaurants, 5M+ MAU.",
      mod_rostics_ctx: "Built a new high-load mobile app for Rostic's from scratch — a Fast Food chain with 5M+ MAU and ~1,300 restaurants.",
      mod_rostics_period: "June 2025 — present",
      mod_rostics_team: "15 people: Back, iOS, Android, Analyst, QA, DevOps",
      kpi_release_pred: "release predictability",
      kpi_feature_time: "feature release time",
      mod_rostics_b1: "Led the full dev cycle and store release (App Store / Google Play) for a chain of ~1,300 restaurants.",
      mod_rostics_b2: "Optimized SDLC, introducing Scrum + Waterfall. <b>Feature release time −35%</b>.",
      mod_rostics_b3: "Fixed the poorly-specified requirements problem. <b>Cycle Time −45%</b>.",
      mod_rostics_b4: "Introduced a transparent metrics and visualization system. <b>Release predictability 92%</b>.",

      mod_vtb_h2: "DWH migration and BI for Top-10 banks",
      mod_vtb_one: "20+ Data/BI projects for VTB, Otkritie and other banks. VTB DDS layer migration.",
      mod_vtb_ctx: "Delivered data mart preparation, warehouse migration and BI reporting projects for Top-10 banks.",
      mod_vtb_team: "15 people: Data Analysts, ETL engineers, architects",
      kpi_data_projects: "Data/BI projects",
      kpi_client_nps: "client NPS",
      kpi_on_budget_time: "on budget & on time",
      kpi_incidents: "incidents",
      kpi_vtb_team: "people in VTB team",
      mod_vtb_b1: "Delivered <b>20+ Data/BI projects</b> for Top-10 banks. Quality, timeline and budget — <b>&gt;90%</b>.",
      mod_vtb_b2: "Migrated VTB's warehouse (DDS layer), 15 people in the team. On budget and on time.",
      mod_vtb_b3: "Defined project management standards — adopted by the company as corporate standards. <b>Incidents −18%</b>.",
      mod_vtb_b4: "Project portfolio growth <b>+60%</b>.",
      mod_vtb_b5: "Pre-sale: estimated effort, built proposals, defended projects in front of clients.",

      mod_donate_one: "Fintech service for streamers. 31% of all donations in the Russian market. TPV 7B RUB.",
      mod_donate_ctx: "A specialized fintech service by QIWI Group for streamers and content creators. Allows authors to accept donations during live streams on Twitch, YouTube and VK Play. A direct competitor to DonationAlerts with deep QIWI ecosystem integration — the fastest and most favorable payout.",
      mod_donate_team: "10 people: analysts, designers, Front, Back, architect, DevOps",
      kpi_ru_share: "RU market share",
      mod_donate_b1: "Launched the donations service from scratch: <b>MAU 1.2M, uptime 99.9%</b>. Microservices, Kubernetes.",
      mod_donate_b2: "Set up integration and compatibility processes with a large number of services.",
      mod_donate_b3: "Project delivered on time and on budget.",
      mod_donate_b4: "Combined Product and Project Manager roles, stakeholder work, backlog shaping.",

      mod_qampus_one: "Corporate LMS for 3,000+ QIWI employees. Spun off as a separate B2B product.",
      mod_qampus_link: "Qampus landing ↗",
      mod_qampus_ctx: "Corporate LMS and knowledge management system for QIWI employees. Built on the 70/20/10 continuous-learning methodology: individual growth tracks, hard/soft skills, onboarding, access to the internal library. Originally an internal tool — released as a separate B2B product with its own monetization.",
      mod_qampus_team: "12 people: Analyst, Front, Back, SDET, QA, DevOps, Designer",
      kpi_dev_util: "developer utilization",
      mod_qampus_b1: "Ran interviews with employees to surface product improvement hypotheses.",
      mod_qampus_b2: "Introduced a transparent triage and backlog prioritization process on the client side using data-driven scoring models. Chaotic in-sprint requests dropped.",
      mod_qampus_b3: "Launched a resource planning and allocation tracking system. Team conflicts minimized, <b>developer utilization +11%</b>.",
      mod_qampus_b4: "Managed project economics (P&amp;L, margin). Release plans On-time / On-budget.",

      mod_sovcom_one: "From a single landing page to a portfolio of 10 projects. Account grew 10x to $2M/year.",
      mod_sovcom_ctx: "The client came in with a single landing-page project. Thanks to tight execution and transparent collaboration processes, we took on more projects and established the company as a reliable partner.",
      mod_sovcom_team: "25 people: Analyst, Front, Back, SDET, QA, DevOps, Designer",
      kpi_projects_in_portfolio: "projects in portfolio",
      mod_sovcom_b1: "Grew the account from 1 project to <b>$2M/year</b>.",
      mod_sovcom_b2: "Delivered every project on time and on budget — <b>without exception</b>.",
      mod_sovcom_b3: "Positioned the company as a reliable strategic partner for challenging projects.",

      mod_dmg_one: "80+ machines in MES. Russia's first spindle production line. 120+ people.",
      mod_dmg_ctx: "Connected metalworking machines into a unified digitalization system to track the production chain, find bottlenecks and optimize the process for higher efficiency and throughput. Launched Russia's first spindle production line.",
      mod_dmg_team: "30+ people (core), 120+ project participants",
      kpi_machines_mes: "machines in MES",
      kpi_prod_lines: "production lines",
      kpi_people_project: "people in the project",
      mod_dmg_b1: "Connected <b>80+ machines</b> to MES, built an end-to-end digitalization loop.",
      mod_dmg_b2: "Launched <b>Russia's first spindle production line</b> from scratch, budget €0.6M.",
      mod_dmg_b3: "Transferred spindle-production experience from Poland and Germany — best practices.",
      mod_dmg_b4: "OEE grew <b>from 62% to 78%</b>, downtime <b>−25%</b>."
    }
  };

  const LS_KEY = 'ab_lang';
  const getInitialLang = () => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if(saved === 'ru' || saved === 'en') return saved;
    } catch(e){}
    const nav = (navigator.language || 'ru').toLowerCase();
    return nav.startsWith('ru') ? 'ru' : 'en';
  };

  let currentLang = getInitialLang();

  const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || (I18N.ru && I18N.ru[key]) || '';

  const applyI18nWithin = (root) => {
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if(val !== '') el.innerHTML = val;
    });
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // Format: "attrName:key[, attrName:key]"
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if(attr && key){
          const val = t(key);
          if(val) el.setAttribute(attr, val);
        }
      });
    });
  };

  const applyLang = (lang) => {
    currentLang = (lang === 'en' ? 'en' : 'ru');
    document.documentElement.setAttribute('lang', currentLang);
    try { localStorage.setItem(LS_KEY, currentLang); } catch(e){}

    // Title
    const titleEl = document.querySelector('title[data-i18n]');
    if(titleEl) titleEl.textContent = t(titleEl.getAttribute('data-i18n'));

    // All data-i18n / data-i18n-attr nodes (head + body, incl. <meta>)
    applyI18nWithin(document.documentElement);

    // Re-set year span (innerHTML replacement may have wiped it)
    const y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();

    // Switcher buttons — visual state
    document.querySelectorAll('.lang-switch').forEach(sw => {
      sw.querySelectorAll('.lang-opt').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
      });
    });
  };

  // Wire switcher buttons (multiple instances: desktop header + mobile menu)
  document.querySelectorAll('.lang-switch .lang-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  // Initial apply
  applyLang(currentLang);

  // ----- STICKY HEADER (hide on scroll down, show on scroll up) -----
  const header = document.getElementById('siteHeader');
  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY || 0;
    header.classList.toggle('scrolled', y > 10);
    if(y > 140 && y > lastScroll){
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScroll = y;
  };
  window.addEventListener('scroll', onScroll, {passive:true});

  // ----- CURSOR HALO -----
  const halo = document.querySelector('.cursor-halo');
  if(halo && matchMedia('(hover:hover)').matches){
    let tx=0,ty=0,cx=0,cy=0;
    window.addEventListener('mousemove', e=>{tx=e.clientX;ty=e.clientY});
    const tick = () => {
      cx += (tx-cx)*.12;
      cy += (ty-cy)*.12;
      halo.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    tick();
  }

  // ----- MOBILE MENU -----
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !menu.classList.contains('open');
    menu.classList.toggle('open', isOpen);
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  if(burger){
    burger.addEventListener('click', ()=> toggleMenu());
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> toggleMenu(false)));
  }

  // ----- REVEAL ON SCROLL -----
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, {threshold:.08, rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // ----- CASE MODAL -----
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  let lastFocus = null;

  const openCase = (key) => {
    const tpl = document.getElementById('tpl-' + key);
    if(!tpl) return;
    modalBody.innerHTML = '';
    modalBody.appendChild(tpl.content.cloneNode(true));
    // Apply current language to freshly cloned template
    applyI18nWithin(modalBody);
    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    // scroll to top of body
    requestAnimationFrame(()=>{ modalBody.scrollTop = 0; });
  };
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if(lastFocus) lastFocus.focus();
  };

  document.querySelectorAll('.case-card').forEach(card => {
    const key = card.getAttribute('data-case');
    card.addEventListener('click', ()=>openCase(key));
    card.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openCase(key); }
    });
  });
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  // ----- LIGHTBOX -----
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lightboxClose');
  const openLightbox = (src, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  };
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    setTimeout(()=>{ lbImg.src = ''; }, 300);
  };
  // Delegate — gallery items inside dynamic templates
  modalBody.addEventListener('click', (e)=>{
    const item = e.target.closest('.m-gallery-item');
    if(!item) return;
    const img = item.querySelector('img');
    if(img) openLightbox(img.src, img.alt);
  });
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });

  // ----- PHONE MASK -----
  const phoneInput = document.getElementById('phone');
  const formatPhone = (raw) => {
    // Keep digits; if starts with 8, convert to 7
    let d = raw.replace(/\D/g, '');
    if(d.length && d[0] === '8') d = '7' + d.slice(1);
    if(d.length && d[0] !== '7') d = '7' + d;
    d = d.slice(0, 11);
    const p = {c:d[0]||'', a:d.slice(1,4), b:d.slice(4,7), c2:d.slice(7,9), d:d.slice(9,11)};
    let out = '+7';
    if(p.a) out += ' (' + p.a;
    if(p.a && p.a.length === 3) out += ')';
    if(p.b) out += ' ' + p.b;
    if(p.c2) out += '‑' + p.c2;
    if(p.d) out += '‑' + p.d;
    return out;
  };
  if(phoneInput){
    phoneInput.addEventListener('focus', ()=>{ if(!phoneInput.value) phoneInput.value = '+7 '; });
    phoneInput.addEventListener('input', (e)=>{ e.target.value = formatPhone(e.target.value); });
    phoneInput.addEventListener('blur', ()=>{ if(phoneInput.value.trim() === '+7') phoneInput.value = ''; });
  }

  // ----- FORM → TELEGRAM -----
  const TG_TOKEN = '8608999245:AAGt_xX0xLIo1bZV7SXcW4JOaBM7SOH7BPQ';
  const TG_CHAT  = '189806722';

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  const validEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
  const validTelegram = (s) => /^@?[A-Za-z0-9_]{4,32}$/.test(s.replace(/^https?:\/\/(t|telegram)\.me\//,''));

  const setError = (name, on) => {
    const input = form.querySelector(`[name="${name}"]`);
    if(input) input.closest('.field').classList.toggle('error', on);
  };
  const clearErrors = () => form.querySelectorAll('.field.error').forEach(f=>f.classList.remove('error'));

  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      clearErrors();
      status.textContent = '';
      status.className = 'form-status';

      const data = Object.fromEntries(new FormData(form).entries());
      const name = (data.name || '').trim();
      const phoneDigits = (data.phone || '').replace(/\D/g,'');
      const contact = (data.contact || '').trim();
      const message = (data.message || '').trim();

      let bad = false;
      if(!name){ setError('name', true); bad = true; }
      if(phoneDigits.length < 11){ setError('phone', true); bad = true; }
      if(contact && !(validEmail(contact) || validTelegram(contact))){ setError('contact', true); bad = true; }

      if(bad){
        status.className = 'form-status err';
        status.textContent = t('form_err_fields');
        return;
      }

      const btn = form.querySelector('.btn-submit');
      btn.setAttribute('disabled','true');
      status.className = 'form-status';
      status.textContent = t('form_sending');

      const locale = currentLang === 'en' ? 'en-US' : 'ru-RU';
      const text =
`${t('tg_new_request')}
━━━━━━━━━━━━━━━━
${t('tg_name')}: ${name}
${t('tg_phone')}: ${data.phone}
${t('tg_contact')}: ${contact || '—'}
${t('tg_task')}: ${message || '—'}
━━━━━━━━━━━━━━━━
🕒 ${new Date().toLocaleString(locale)}
🌐 ${currentLang.toUpperCase()}`;

      try{
        const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({chat_id: TG_CHAT, text, disable_web_page_preview:true})
        });
        const json = await res.json();
        if(!json.ok) throw new Error(json.description || 'Telegram error');

        status.className = 'form-status ok';
        status.textContent = t('form_ok');
        form.reset();
      } catch(err){
        console.error(err);
        status.className = 'form-status err';
        status.textContent = t('form_fail');
      } finally {
        btn.removeAttribute('disabled');
      }
    });
  }

  // ----- Smooth anchor scrolling compensates sticky header -----
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if(href.length < 2) return;
      const el = document.querySelector(href);
      if(!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top, behavior:'smooth'});
    });
  });

})();
