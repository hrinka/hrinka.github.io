import type { Locale } from './i18n/config'

type L10n = { ja: string; en: string }

export type Accent = 'mint' | 'violet' | 'amber' | 'orange'

export type Work = {
  id: string
  /** client = 依頼者向け（Works ページ）/ engineering = 採用・業務委託向け（Engineering ページ） */
  kinds: ('client' | 'engineering')[]
  title: L10n
  badge?: L10n
  period?: string
  role?: L10n
  tags: string[]
  desc: L10n
  youtube?: string
  link?: string
  github?: string
  /** 指定があると、ブラウザで遊べるページへのボタンを出す */
  wide?: boolean
  accent: Accent
}

export const works: Work[] = [
  {
    id: 'ai-agent-ops',
    kinds: ['engineering'],
    title: { ja: 'AI Agent を使ったインフラ運用の開発', en: 'Infrastructure operations with AI agents' },
    tags: ['AI Agent', 'Cloud Ops'],
    desc: {
      ja: 'AI Agent を活用したインフラ運用の分野で、開発に携わっています。',
      en: 'I work on development in the field of infrastructure operations using AI agents.',
    },
    accent: 'mint',
    wide: true,
  },
  {
    id: 'new-moon-guild',
    kinds: ['engineering'],
    title: { ja: 'New Moon Guild', en: 'New Moon Guild' },
    badge: { ja: 'ハッカソン最優秀賞', en: 'Hackathon — Grand Prize' },
    period: '2024.12—2025.03',
    role: { ja: '10名チームリード', en: 'Team lead · 10 members' },
    tags: ['React', 'Node.js', 'Unreal Engine 5', 'Pro DJ Link', 'OSC'],
    desc: {
      ja: 'NTTドコモ「MetaMe」上に構築したDJライブ体験空間。DJ機材連携・AI感情解析・ユーザー参加型演出を融合。NTTドコモ主催ハッカソンで最優秀賞を受賞。',
      en: 'A live DJ experience built on NTT Docomo’s “MetaMe”. It combines DJ-gear integration, AI emotion analysis and audience-driven visuals. Won the grand prize at a hackathon hosted by NTT Docomo.',
    },
    youtube: 'https://www.youtube.com/embed/YxXUMXuE68M',
    accent: 'violet',
    wide: true,
  },
  {
    id: 'chocoplai',
    kinds: ['engineering'],
    title: { ja: 'ChocoPLAi', en: 'ChocoPLAi' },
    badge: { ja: 'FinTech · 進行中', en: 'FinTech · ongoing' },
    period: '2025.10—',
    role: { ja: 'メンバー', en: 'Member' },
    tags: ['Next.js 15', 'FastAPI', 'Claude API', 'AWS', 'Terraform'],
    desc: {
      ja: 'キャッシュフローシミュレーション × Claude AI 分析の FinTech Web アプリ。フロントからインフラまで一貫して担当。',
      en: 'A FinTech web app that pairs cash-flow simulation with Claude-powered analysis. I cover everything from the frontend to the infrastructure.',
    },
    accent: 'mint',
  },
  {
    id: 'pong-3d',
    kinds: ['engineering'],
    title: { ja: '3D Multiplayer Pong', en: '3D Multiplayer Pong' },
    badge: { ja: '42Tokyo', en: '42Tokyo' },
    period: '2025.01—2025.03',
    role: { ja: 'リーダー / 4名', en: 'Lead · 4 members' },
    tags: ['TypeScript', 'Three.js', 'Django', 'WebSocket', 'Docker'],
    desc: {
      ja: 'Three.js × WebSocket のリアルタイム対戦 SPA。アーキテクチャ設計をリードし、42Tokyo の最終課題として完成。',
      en: 'A real-time multiplayer SPA built with Three.js and WebSocket. I led the architecture design; it was my final project at 42Tokyo.',
    },
    github: 'https://github.com/hrinka/ft_transcendence',
    accent: 'violet',
  },
  {
    id: 'mfg-site',
    kinds: ['client', 'engineering'],
    title: { ja: '製造業コーポレートサイト', en: 'Manufacturer corporate site' },
    badge: { ja: 'フリーランス', en: 'Freelance' },
    period: '2025.03—',
    role: { ja: '1名完結', en: 'Solo' },
    tags: ['React', 'Nuxt.js', 'v0', 'Figma', 'GitHub Actions'],
    desc: {
      ja: '要件定義から Figma デザイン、実装、CI/CD まで1人で完結。AI ツールの活用で工数を40%削減。',
      en: 'Requirements, Figma design, implementation and CI/CD, all on my own. AI tooling cut the effort by 40%.',
    },
    accent: 'mint',
  },
  {
    id: 'frog',
    kinds: ['client'],
    title: { ja: 'Frog', en: 'Frog' },
    badge: { ja: 'Web制作', en: 'Web production' },
    tags: ['HTML/CSS', 'TypeScript', 'Cloudflare CDN', 'Google Analytics'],
    desc: {
      ja: 'IT業界専門の海外就職エージェントの大型コーポレートサイト。SSG・CDN・SEO・GA 計測設計まで担当。',
      en: 'A large corporate site for an overseas-job agency focused on the IT industry. I handled SSG, CDN, SEO and analytics design.',
    },
    link: 'https://frogagent.com/',
    accent: 'amber',
  },
  {
    id: 'going-jesse',
    kinds: ['client'],
    title: { ja: 'Going Jesse', en: 'Going Jesse' },
    badge: { ja: 'Web制作', en: 'Web production' },
    tags: ['HTML/CSS', 'JavaScript', 'SVG animation', 'YouTube API'],
    desc: {
      ja: '短編ドラマのプロモーション LP。SVG ストロークアニメーション、スクロール連動演出、YouTube 埋め込みモーダルを実装。',
      en: 'A promo landing page for a short drama: SVG stroke animation, scroll-driven effects and a YouTube modal.',
    },
    link: 'https://goingjesse.fixville.co/',
    accent: 'violet',
  },
  {
    id: 'hair-salon',
    kinds: ['client'],
    title: { ja: 'Hair Salon', en: 'Hair salon' },
    badge: { ja: 'Web制作', en: 'Web production' },
    tags: ['WordPress', 'PHP', 'HTML/CSS', 'Local SEO'],
    desc: {
      ja: '個人経営の美容室の公式サイト。WordPress のオリジナルテーマ開発、ローカル SEO、CMS の操作説明まで完結。',
      en: 'The official site for an independent hair salon: a custom WordPress theme, local SEO and CMS training for the owner.',
    },
    link: 'https://ams-hair.site/',
    accent: 'orange',
  },
  {
    id: 'restaurant-site',
    kinds: ['client', 'engineering'],
    title: { ja: '飲食店コーポレートサイト', en: 'Restaurant corporate site' },
    badge: { ja: '業務委託', en: 'Contract' },
    period: '2023.12—2024.01',
    role: { ja: '1名完結', en: 'Solo' },
    tags: ['HTML/CSS', 'JavaScript', 'Three.js', 'MySQL'],
    desc: {
      ja: 'Three.js による3D演出が特徴のコーポレートサイト。デザインから公開まで1人で完結。',
      en: 'A corporate site featuring 3D visuals built with Three.js, from design to launch on my own.',
    },
    accent: 'orange',
  },
  {
    id: 'fashion-ec',
    kinds: ['client', 'engineering'],
    title: { ja: 'ファッション業界 EC', en: 'Fashion e-commerce' },
    badge: { ja: '業務委託', en: 'Contract' },
    period: '2024.01—2024.04',
    role: { ja: 'SE / 2名', en: 'Engineer · 2 members' },
    tags: ['Ruby on Rails', 'jQuery', 'Tableau', 'Python', 'AWS EC2'],
    desc: {
      ja: 'EC サイトの開発・運用。売上・広告データを Tableau と Python で可視化し、経営判断に使えるレポートの仕組みを構築。',
      en: 'Development and operation of an e-commerce site, plus a reporting system that visualizes sales and ad data with Tableau and Python.',
    },
    accent: 'amber',
  },
  {
    id: 'ticket-ec',
    kinds: ['client', 'engineering'],
    title: { ja: 'CtoC チケット販売 EC', en: 'C2C ticket marketplace' },
    badge: { ja: '業務委託', en: 'Contract' },
    period: '2022.03—2024.02',
    role: { ja: 'SE · 約1.5年', en: 'Engineer · ~1.5 years' },
    tags: ['Ruby', 'jQuery', 'HTML/CSS', 'MySQL'],
    desc: {
      ja: 'フリーランスとして参画。検索・決済・入金画面の新規実装と改修、設計書の作成から運用保守まで継続して担当。',
      en: 'Joined as a freelancer. Built and reworked the search, payment and payout screens, and stayed on through design docs and maintenance.',
    },
    accent: 'mint',
  },
  {
    id: 'housework-matching',
    kinds: ['engineering'],
    title: { ja: 'BtoC 家事代行マッチング', en: 'B2C housekeeping marketplace' },
    badge: { ja: '業務委託', en: 'Contract' },
    period: '2024.05—2024.10',
    role: { ja: 'FEリード / 3名', en: 'Frontend lead · 3 members' },
    tags: ['Next.js App Router', 'shadcn/ui', 'NextAuth', 'v0'],
    desc: {
      ja: 'スタッフ・クライアント向けマッチングサービスのフロントエンドを担当。v0 で素早くモックを作り、実装へつなぐ流れを確立。',
      en: 'Frontend for a two-sided matching service. I set up a flow that goes from quick v0 mockups to production code.',
    },
    accent: 'mint',
  },
  {
    id: 'dx-report',
    kinds: ['engineering'],
    title: { ja: 'DX 日報自動集計', en: 'Daily-report automation' },
    badge: { ja: '業務委託', en: 'Contract' },
    period: '2024.11—2025.01',
    role: { ja: 'SE / 3名', en: 'Engineer · 3 members' },
    tags: ['Google Apps Script', 'JavaScript', 'Google Workspace'],
    desc: {
      ja: '月次の日報を自動で集計してスプレッドシートに格納する流れを GAS で構築。担当者の手作業をなくした。',
      en: 'Built a Google Apps Script flow that aggregates monthly reports into a spreadsheet and removed the manual work entirely.',
    },
    accent: 'violet',
  },
  {
    id: 'irc-minishell',
    kinds: ['engineering'],
    title: { ja: 'IRC サーバー / minishell', en: 'IRC server / minishell' },
    badge: { ja: '42Tokyo', en: '42Tokyo' },
    period: '2023.12—2024.02',
    role: { ja: 'SE / 2〜3名', en: 'Engineer · 2–3 members' },
    tags: ['C/C++', 'IRC Protocol', 'Sockets', 'Linux'],
    desc: {
      ja: 'C++ で IRC プロトコルに準拠したサーバーとクライアントをゼロから実装。ソケット通信とプロセス管理を低レイヤから理解。',
      en: 'Implemented an IRC-compliant server and client from scratch in C++, learning socket I/O and process management at the low level.',
    },
    github: 'https://github.com/hrinka',
    accent: 'violet',
  },
]

export function worksFor(kind: 'client' | 'engineering'): Work[] {
  return works.filter((w) => w.kinds.includes(kind))
}

export function pick(text: L10n, locale: Locale): string {
  return text[locale]
}
