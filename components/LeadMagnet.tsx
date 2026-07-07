import Link from '@/components/Link'

// 무료자료 CTA — 홈·글 하단 공용. 이메일 수집 전 단계(다운로드 직제공).
export default function LeadMagnet() {
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800/60">
      <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase">무료 자료</p>
      <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">
        직장인 AI 반복업무 자동화 체크리스트
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        제가 실제로 쓰는 순서 그대로 정리했습니다. 매주 반복하는 일 하나를 골라 AI에게 넘기는 3단계
        — 오늘 퇴근 전에 하나는 자동화할 수 있습니다.
      </p>
      <div className="mt-5">
        <Link
          href="/downloads/ai-automation-checklist.pdf"
          className="bg-primary-500 hover:bg-primary-600 inline-block rounded-lg px-5 py-2.5 font-medium text-white"
        >
          PDF 바로 받기 →
        </Link>
      </div>
      <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
        가입·이메일 없이 바로 내려받으실 수 있습니다.
      </p>
    </div>
  )
}
