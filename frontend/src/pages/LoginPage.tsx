import { useState, useRef, useEffect, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

const REGISTRY_KEY = "histori_registered_users"

type RegisteredUser = {
  id: string
  firstName: string
  lastName: string
  name: string
  code: string
  createdAt: string
  xp: number
  level: number
  status: "active" | "banned"
}

function loadRegistry(): RegisteredUser[] {
  try {
    return JSON.parse(localStorage.getItem(REGISTRY_KEY) || "[]")
  } catch {
    return []
  }
}

function saveToRegistry(u: RegisteredUser) {
  const list = loadRegistry().filter((x) => x.id !== u.id)
  list.unshift(u)
  localStorage.setItem(REGISTRY_KEY, JSON.stringify(list.slice(0, 200)))
}

function genCode() {
  return String(Math.floor(1000 + Math.random() * 9000))
}

export default function LoginPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || "tg").slice(0, 2)
  const { register, login, user } = useAuth()
  const navigate = useNavigate()

  const [step, setStep] = useState<"name" | "otp" | "done">("name")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [otp, setOtp] = useState(["", "", "", ""])
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [resendIn, setResendIn] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (user) navigate("/profile", { replace: true })
  }, [user, navigate])

  useEffect(() => {
    if (resendIn <= 0) return
    const id = setTimeout(() => setResendIn((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [resendIn])

  const L = {
    title: { tg: "Даромад", ru: "Вход", en: "Sign in" }[lang] || "Даромад",
    subtitle: {
      tg: "Ном ва насабатонро нависед — код автоматикӣ меояд",
      ru: "Введите имя и фамилию — код появится автоматически",
      en: "Enter first and last name — a code will appear automatically",
    }[lang],
    first: { tg: "Ном", ru: "Имя", en: "First name" }[lang] || "Ном",
    last: { tg: "Насаб", ru: "Фамилия", en: "Last name" }[lang] || "Насаб",
    continue: { tg: "Давом", ru: "Далее", en: "Continue" }[lang] || "Давом",
    verifyTitle: { tg: "Кодро тасдиқ кунед", ru: "Подтвердите код", en: "Verify the code" }[lang],
    verifyHint: {
      tg: "Рамзи 4-рақамаро ворид кунед",
      ru: "Введите 4-значный код",
      en: "Enter the 4-digit code",
    }[lang],
    fill: { tg: "Пур кардан", ru: "Заполнить", en: "Fill" }[lang] || "Fill",
    msg: { tg: "ПАЁМ · КОД", ru: "СООБЩЕНИЕ · КОД", en: "MESSAGE · OTP" }[lang],
    resend: { tg: "Код нагирифтед?", ru: "Не получили код?", en: "Didn't receive the code?" }[lang],
    resendBtn: { tg: "Боз фиристодан", ru: "Отправить снова", en: "Resend" }[lang],
    success: { tg: "Хуш омадед!", ru: "Добро пожаловать!", en: "Welcome!" }[lang],
    goProfile: { tg: "Ба профил", ru: "В профиль", en: "Go to profile" }[lang],
    noAccount: { tg: "Ҳисоб надоред?", ru: "Нет аккаунта?", en: "No account?" }[lang],
    register: { tg: "Сабти ном", ru: "Регистрация", en: "Register" }[lang],
  }

  const startOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const f = firstName.trim()
    const l = lastName.trim()
    if (f.length < 2 || l.length < 2) {
      setError(lang === "ru" ? "Имя и фамилия обязательны" : lang === "en" ? "First and last name required" : "Ном ва насаб ҳатмист")
      return
    }
    const c = genCode()
    setCode(c)
    setOtp(["", "", "", ""])
    setStep("otp")
    setResendIn(30)
    setTimeout(() => inputs.current[0]?.focus(), 80)
  }

  const finishAuth = useCallback(
    async (entered: string) => {
      if (entered !== code) {
        setError(lang === "ru" ? "Неверный код" : lang === "en" ? "Wrong code" : "Код нодуруст")
        setOtp(["", "", "", ""])
        setTimeout(() => inputs.current[0]?.focus(), 40)
        return
      }
      setError("")
      setSpinning(true)
      setLoading(true)

      const fullName = `${firstName.trim()} ${lastName.trim()}`
      const email = `${firstName.trim().toLowerCase()}.${lastName.trim().toLowerCase()}@histori.local`.replace(/\s+/g, "")
      const password = `otp-${code}`

      let ok = false
      const regRes = await register(fullName, email, password)
      if (regRes.ok) {
        ok = true
      } else {
        const loginRes = await login(email, password)
        if (loginRes.ok) ok = true
        else {
          const force = await register(fullName, email + "." + Date.now().toString(36).slice(-4), password)
          ok = force.ok
        }
      }

      saveToRegistry({
        id: email.toLowerCase(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        name: fullName,
        code,
        createdAt: new Date().toISOString(),
        xp: 0,
        level: 1,
        status: "active",
      })

      setLoading(false)
      setTimeout(() => {
        setSpinning(false)
        setStep("done")
        if (ok) setTimeout(() => navigate("/profile", { replace: true }), 900)
      }, 700)
    },
    [code, firstName, lastName, lang, login, navigate, register]
  )

  const fillCode = () => {
    const digits = code.split("")
    setOtp(digits)
    setTimeout(() => finishAuth(digits.join("")), 150)
  }

  const onDigit = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1)
    const next = [...otp]
    next[i] = d
    setOtp(next)
    if (d && i < 3) inputs.current[i + 1]?.focus()
    if (next.every(Boolean) && next.join("").length === 4) finishAuth(next.join(""))
  }

  const onKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) inputs.current[i - 1]?.focus()
  }

  const onPaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4)
    if (!text) return
    const next = ["", "", "", ""]
    text.split("").forEach((ch, idx) => {
      next[idx] = ch
    })
    setOtp(next)
    if (text.length === 4) finishAuth(text)
  }

  const resend = () => {
    if (resendIn > 0) return
    setCode(genCode())
    setOtp(["", "", "", ""])
    setResendIn(30)
    setError("")
    inputs.current[0]?.focus()
  }

  if (user) return null

  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4 bg-[#0a0a0c]">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-6">
          <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase mb-2">Histori.tj</p>
          <h1 className="text-[28px] font-semibold text-white tracking-tight">{L.title}</h1>
        </div>

        {step === "name" && (
          <form
            onSubmit={startOtp}
            className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#1c1c1e] to-[#121214] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[13px] text-white/45 text-center mb-6">{L.subtitle}</p>
            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-[12px] text-white/40 mb-1.5">{L.first}</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-[15px] outline-none focus:border-[#0a84ff]/60 focus:ring-1 focus:ring-[#0a84ff]/40"
                  placeholder={L.first}
                  required
                  minLength={2}
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-[12px] text-white/40 mb-1.5">{L.last}</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-[15px] outline-none focus:border-[#0a84ff]/60 focus:ring-1 focus:ring-[#0a84ff]/40"
                  placeholder={L.last}
                  required
                  minLength={2}
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-400 mb-3">{error}</p>}
            <Button type="submit" className="w-full h-12 rounded-xl text-[15px] font-semibold">
              {L.continue}
            </Button>
            <p className="text-center text-[13px] text-white/40 mt-5">
              {L.noAccount}{" "}
              <Link to="/register" className="text-[#64b5ff] hover:underline">
                {L.register}
              </Link>
            </p>
          </form>
        )}

        {step === "otp" && (
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#1c1c1e] to-[#121214] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <h2 className="text-xl font-semibold text-white text-center mb-1">{L.verifyTitle}</h2>
            <p className="text-[13px] text-white/45 text-center mb-8">
              {L.verifyHint}
              <br />
              <span className="text-white/60">
                {firstName} {lastName}
              </span>
            </p>

            {spinning ? (
              <div className="flex justify-center py-10">
                <div className="w-16 h-16 rounded-2xl border-2 border-[#30d158]/60 bg-[#30d158]/10 animate-pulse flex items-center justify-center text-[#30d158] text-2xl">
                  ✓
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-center gap-3 mb-6" onPaste={onPaste}>
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        inputs.current[i] = el
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={d}
                      onChange={(e) => onDigit(i, e.target.value)}
                      onKeyDown={(e) => onKeyDown(i, e)}
                      className={[
                        "w-14 h-14 sm:w-16 sm:h-16 text-center text-2xl font-semibold rounded-2xl",
                        "bg-white/[0.06] border text-white outline-none transition",
                        d
                          ? "border-[#0a84ff]/70 ring-2 ring-[#0a84ff]/25"
                          : "border-white/[0.12] focus:border-[#0a84ff]/50",
                      ].join(" ")}
                      autoComplete="one-time-code"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[11px] font-medium text-white/35 shrink-0">{L.msg}</span>
                    <span className="text-[13px] text-white/80 truncate">
                      <span className="font-semibold text-[#64b5ff]">{code}</span>{" "}
                      {lang === "ru" ? "— ваш код" : lang === "en" ? "is your code" : "— коди шумо"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={fillCode}
                    className="shrink-0 text-[13px] font-semibold text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full"
                  >
                    {L.fill}
                  </button>
                </div>

                {error && <p className="text-sm text-red-400 text-center mb-3">{error}</p>}

                <p className="text-center text-[13px] text-white/40">
                  {L.resend}{" "}
                  {resendIn > 0 ? (
                    <span className="text-white/55">
                      {lang === "ru" ? `через ${resendIn}с` : lang === "en" ? `in ${resendIn}s` : `${resendIn}с`}
                    </span>
                  ) : (
                    <button type="button" onClick={resend} className="text-[#64b5ff] hover:underline">
                      {L.resendBtn}
                    </button>
                  )}
                </p>
              </>
            )}

            {loading && !spinning && (
              <p className="text-center text-sm text-white/40 mt-4">{t("common.loading")}</p>
            )}
          </div>
        )}

        {step === "done" && (
          <div className="rounded-3xl border border-[#30d158]/30 bg-gradient-to-b from-[#1c1c1e] to-[#121214] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="text-5xl mb-3 text-[#30d158]">✓</div>
            <h2 className="text-xl font-semibold text-white mb-2">{L.success}</h2>
            <p className="text-white/55 mb-6">
              {firstName} {lastName}
            </p>
            <Button onClick={() => navigate("/profile", { replace: true })} className="w-full h-12 rounded-xl">
              {L.goProfile}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
