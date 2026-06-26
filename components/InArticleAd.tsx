'use client'
import { useEffect } from 'react'

// 본문 삽입 광고 (글 읽는 중 노출)
export default function InArticleAd() {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogle injected by AdSense script
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      /* AdSense 미로드 시 무시 */
    }
  }, [])
  return (
    <div className="my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1690002331948394"
        data-ad-slot="2295112535"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
