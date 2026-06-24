'use client'
import { useEffect } from 'react'

// 모바일 상단 작은 배너 광고 (AdSense)
export default function TopAd() {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogle injected by AdSense script
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      /* AdSense 미로드 시 무시 */
    }
  }, [])
  return (
    <div className="overflow-hidden py-1 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '320px', height: '50px' }}
        data-ad-client="ca-pub-1690002331948394"
        data-ad-slot="2295112535"
      />
    </div>
  )
}
