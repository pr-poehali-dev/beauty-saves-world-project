import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0efa6046-60ab-493d-b1ee-d40951b213e0/files/467060bb-8aa1-494c-95e1-4faf7b888970.jpg";
const SALON_IMG = "https://cdn.poehali.dev/projects/0efa6046-60ab-493d-b1ee-d40951b213e0/files/257439e2-7c86-46a1-80d5-9b5f99701837.jpg";

const services = [
  {
    category: "Перманентный макияж",
    icon: "Sparkles",
    items: [
      { name: "Брови (пудровая техника)", price: "8 000 ₽", duration: "2–3 часа", desc: "Натуральный эффект пудры, идеальная форма под ваш тип лица" },
      { name: "Брови (волосковая техника)", price: "9 500 ₽", duration: "2–3 часа", desc: "Имитация настоящих волосков, неотличима от природных бровей" },
      { name: "Брови (акварельные)", price: "10 000 ₽", duration: "3 часа", desc: "Градиентный переход, модный мягкий образ" },
      { name: "Губы (контур)", price: "7 000 ₽", duration: "2 часа", desc: "Чёткий контур, визуальное увеличение объёма" },
      { name: "Губы (акварельные)", price: "9 000 ₽", duration: "2–3 часа", desc: "Нежный цвет по всей поверхности, эффект тинта" },
      { name: "Стрелки (классика)", price: "6 500 ₽", duration: "1.5 часа", desc: "Чёткая линия по верхнему веку, выразительный взгляд" },
      { name: "Межресничное пространство", price: "5 000 ₽", duration: "1 час", desc: "Естественное заполнение, взгляд глубже и выразительнее" },
      { name: "Коррекция (до 1 года)", price: "4 000 ₽", duration: "1.5 часа", desc: "Обновление пигмента и формы после заживления" },
    ],
  },
  {
    category: "Аппаратный массаж",
    icon: "Zap",
    items: [
      { name: "LPG-массаж тела", price: "2 500 ₽", duration: "45 мин", desc: "Аппаратная липоскульптура — коррекция фигуры, лифтинг, антицеллюлит" },
      { name: "LPG-массаж лица", price: "3 000 ₽", duration: "30 мин", desc: "Омоложение без инъекций: лифтинг, устранение отёков и морщин" },
      { name: "RF-лифтинг лица", price: "4 500 ₽", duration: "40 мин", desc: "Радиочастотное омоложение, подтяжка контура лица" },
      { name: "RF-лифтинг тела", price: "3 500 ₽", duration: "50 мин", desc: "Укрепление кожи, борьба с растяжками и целлюлитом" },
      { name: "Кавитация", price: "2 800 ₽", duration: "40 мин", desc: "Ультразвуковое разрушение жировых клеток, моделирование силуэта" },
      { name: "Микротоковая терапия", price: "3 200 ₽", duration: "35 мин", desc: "Биоревитализация, восстановление тонуса и упругости кожи" },
      { name: "Курс LPG × 10 сеансов", price: "20 000 ₽", duration: "10 × 45 мин", desc: "Максимальный эффект с накопительной скидкой" },
      { name: "Прессотерапия", price: "1 800 ₽", duration: "40 мин", desc: "Лимфодренаж, снятие отёков, улучшение кровообращения" },
    ],
  },
];

const portfolio = [
  { service: "Брови пудровая техника" },
  { service: "LPG-массаж тела" },
  { service: "Акварельные губы" },
  { service: "RF-лифтинг лица" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen mesh-bg text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(12,8,18,0.75)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,45,120,0.1)" }}>
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span className="gradient-text font-semibold" style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", letterSpacing: "0.03em" }}>
            Красота Спасёт Мир
          </span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {[["services","Услуги"],["portfolio","Портфолио"],["booking","Запись"],["contacts","Контакты"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="text-sm font-medium transition-all duration-200 hover:text-[#ff2d78]"
              style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.05em", fontFamily: "'Golos Text', sans-serif" }}>
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("booking")} className="btn-neon px-6 py-2 rounded-full text-sm">
            Записаться
          </button>
        </div>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
          style={{ background: "rgba(12,8,18,0.97)", backdropFilter: "blur(20px)" }}>
          {[["services","Услуги"],["portfolio","Портфолио"],["booking","Запись"],["contacts","Контакты"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="text-4xl font-light gradient-text"
              style={{ fontFamily: "'Cormorant', serif" }}>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute animate-pulse-glow" style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,45,120,0.18) 0%, transparent 70%)", top: "-15%", left: "-10%" }} />
          <div className="absolute animate-pulse-glow" style={{ width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(178,75,255,0.14) 0%, transparent 70%)", top: "10%", right: "-20%", animationDelay: "1.5s" }} />
          <div className="absolute animate-pulse-glow" style={{ width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)", bottom: "0%", left: "25%", animationDelay: "3s" }} />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <line x1="0" y1="900" x2="600" y2="0" stroke="url(#g1)" strokeWidth="1" />
            <line x1="200" y1="900" x2="800" y2="0" stroke="url(#g1)" strokeWidth="0.5" />
            <line x1="900" y1="0" x2="1440" y2="600" stroke="url(#g2)" strokeWidth="1" />
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff2d78" /><stop offset="100%" stopColor="#b24bff" />
              </linearGradient>
              <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b24bff" /><stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.3)", color: "#ff2d78", letterSpacing: "0.15em", fontFamily: "'Golos Text', sans-serif" }}>
                ✦ СТУДИЯ КРАСОТЫ
              </span>
            </div>
            <h1 className="animate-slide-up-delay-1 mb-6 leading-none"
              style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 300 }}>
              Красота
              <br />
              <em className="gradient-text not-italic font-semibold">спасёт</em>
              <br />
              мир
            </h1>
            <p className="animate-slide-up-delay-2 mb-10 text-lg"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Golos Text', sans-serif", lineHeight: 1.7, maxWidth: 420 }}>
              Перманентный макияж и аппаратный массаж — преображение, которое остаётся с вами
            </p>
            <div className="animate-slide-up-delay-3 flex flex-wrap gap-4">
              <button onClick={() => scrollTo("booking")} className="btn-neon px-8 py-4 rounded-full text-base">
                Записаться на процедуру
              </button>
              <button onClick={() => scrollTo("services")} className="btn-outline-neon px-8 py-4 rounded-full text-base">
                Услуги и цены
              </button>
            </div>
            <div className="animate-slide-up-delay-3 flex gap-8 mt-12">
              {[["500+","клиентов"],["8","лет опыта"],["2","направления"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold neon-text-pink" style={{ fontFamily: "'Cormorant', serif" }}>{n}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.1em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float hidden md:block">
            <div className="relative rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: 580 }}>
              <img src={HERO_IMG} alt="Студия красоты" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,45,120,0.15) 0%, transparent 50%, rgba(0,229,255,0.1) 100%)" }} />
            </div>
            <div className="absolute -left-8 bottom-24 px-5 py-3 rounded-2xl"
              style={{ background: "rgba(12,8,18,0.85)", border: "1px solid rgba(0,229,255,0.3)", backdropFilter: "blur(10px)" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                <span className="text-sm font-medium" style={{ color: "#00e5ff", fontFamily: "'Golos Text', sans-serif" }}>Запись онлайн</span>
              </div>
            </div>
            <div className="absolute -right-6 top-20 px-5 py-3 rounded-2xl"
              style={{ background: "rgba(12,8,18,0.85)", border: "1px solid rgba(255,45,120,0.3)", backdropFilter: "blur(10px)" }}>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text-pink" style={{ fontFamily: "'Cormorant', serif" }}>★ 5.0</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Golos Text', sans-serif" }}>рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 section-mesh">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(178,75,255,0.1)", border: "1px solid rgba(178,75,255,0.3)", color: "#b24bff", letterSpacing: "0.15em", fontFamily: "'Golos Text', sans-serif" }}>
              ✦ ПРАЙС-ЛИСТ
            </span>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300 }}>
              Услуги <span className="gradient-text font-semibold">и цены</span>
            </h2>
          </div>

          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            {services.map((s, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  letterSpacing: "0.05em",
                  background: activeTab === i
                    ? (i === 0 ? "linear-gradient(135deg, #ff2d78, #b24bff)" : "linear-gradient(135deg, #b24bff, #00e5ff)")
                    : "rgba(255,255,255,0.05)",
                  border: activeTab === i ? "none" : "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  boxShadow: activeTab === i ? (i === 0 ? "0 0 20px rgba(255,45,120,0.4)" : "0 0 20px rgba(0,229,255,0.3)") : "none",
                }}>
                <Icon name={s.icon as "Sparkles" | "Zap"} size={14} className="inline mr-2" />
                {s.category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services[activeTab].items.map((item, i) => (
              <div key={i} className="glow-card rounded-2xl p-6 flex flex-col">
                <h3 className="mb-2" style={{ fontFamily: "'Cormorant', serif", fontSize: "18px", fontWeight: 600, lineHeight: 1.3 }}>{item.name}</h3>
                <p className="text-xs mb-4 leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif" }}>{item.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-lg" style={{ fontFamily: "'Cormorant', serif", color: activeTab === 0 ? "#ff2d78" : "#00e5ff" }}>{item.price}</span>
                  <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif" }}>
                    <Icon name="Clock" size={10} />{item.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollTo("booking")} className="btn-neon px-10 py-4 rounded-full text-base">
              Записаться на процедуру
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.25)", color: "#00e5ff", letterSpacing: "0.15em", fontFamily: "'Golos Text', sans-serif" }}>
              ✦ ПОРТФОЛИО
            </span>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300 }}>
              Наши <span className="gradient-text font-semibold">работы</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif" }}>
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-[2rem] overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={SALON_IMG} alt="Наш салон" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(12,8,18,0.85) 100%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-semibold mb-1" style={{ fontFamily: "'Cormorant', serif" }}>Профессиональное оборудование</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Golos Text', sans-serif" }}>Только сертифицированные аппараты</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {portfolio.map((p, i) => (
                <div key={i} className="glow-card rounded-2xl flex flex-col items-center justify-center p-6 text-center" style={{ aspectRatio: "1/1" }}>
                  <div className="w-14 h-14 rounded-full mb-3 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(255,45,120,0.15), rgba(178,75,255,0.15))", border: "1px solid rgba(255,45,120,0.25)" }}>
                    <Icon name="Image" size={22} style={{ color: "#ff2d78" }} />
                  </div>
                  <p className="font-semibold mb-1" style={{ fontFamily: "'Cormorant', serif", fontSize: "15px" }}>{p.service}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Golos Text', sans-serif" }}>фото скоро</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 section-mesh">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.3)", color: "#ff2d78", letterSpacing: "0.15em", fontFamily: "'Golos Text', sans-serif" }}>
                ✦ ОНЛАЙН-ЗАПИСЬ
              </span>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300 }}>
                Записаться <span className="gradient-text font-semibold">онлайн</span>
              </h2>
              <p className="mt-4" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif" }}>
                Заполните форму — мы свяжемся в течение 15 минут
              </p>
            </div>

            <div className="rounded-3xl p-8 gradient-border" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.1em" }}>ВАШЕ ИМЯ</label>
                    <input type="text" placeholder="Имя" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontFamily: "'Golos Text', sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.1em" }}>ТЕЛЕФОН</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontFamily: "'Golos Text', sans-serif" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.1em" }}>УСЛУГА</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(30,20,45,0.95)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontFamily: "'Golos Text', sans-serif" }}>
                    <option value="">Выберите процедуру...</option>
                    <optgroup label="Перманентный макияж">
                      {services[0].items.map(i => <option key={i.name}>{i.name} — {i.price}</option>)}
                    </optgroup>
                    <optgroup label="Аппаратный массаж">
                      {services[1].items.map(i => <option key={i.name}>{i.name} — {i.price}</option>)}
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.1em" }}>ПОЖЕЛАНИЯ</label>
                  <textarea rows={3} placeholder="Любые вопросы или пожелания..." className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontFamily: "'Golos Text', sans-serif" }} />
                </div>
                <button className="btn-neon w-full py-4 rounded-xl text-base font-semibold">
                  Отправить заявку
                </button>
                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Golos Text', sans-serif" }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(178,75,255,0.1)", border: "1px solid rgba(178,75,255,0.3)", color: "#b24bff", letterSpacing: "0.15em", fontFamily: "'Golos Text', sans-serif" }}>
              ✦ КОНТАКТЫ
            </span>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300 }}>
              Как нас <span className="gradient-text font-semibold">найти</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "MapPin", label: "Адрес", value: "ул. Красоты, 1", sub: "Ваш город", color: "#ff2d78" },
              { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00", sub: "Ежедневно 10:00 – 20:00", color: "#b24bff" },
              { icon: "MessageCircle", label: "Соцсети", value: "@krasota_studio", sub: "Instagram · ВКонтакте", color: "#00e5ff" },
            ].map((c, i) => (
              <div key={i} className="glow-card rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${c.color}18`, border: `1px solid ${c.color}35` }}>
                  <Icon name={c.icon as "MapPin" | "Phone" | "MessageCircle"} size={24} style={{ color: c.color }} />
                </div>
                <p className="text-xs mb-2 tracking-widest" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Golos Text', sans-serif" }}>{c.label}</p>
                <p className="font-semibold text-lg mb-1" style={{ fontFamily: "'Cormorant', serif" }}>{c.value}</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif" }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="gradient-text font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", fontSize: "18px" }}>Красота Спасёт Мир</p>
        <p style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Golos Text', sans-serif", fontSize: "13px" }}>
          © 2024 · Все права защищены
        </p>
      </footer>
    </div>
  );
}
