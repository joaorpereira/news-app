export type Person = {
  firstname: string
  lastname: string
  middlename: string
  organization: string
  qualifier: any
  rank: number
  role: string
  title: any
}

export type ByLine = {
  organization: any
  original: string
  person: Person[]
}

export type Keywords = {
  major: string
  name: string
  rank: number
  value: string
}

export type HeadLine = {
  content_kicker: null
  kicker: string
  main: string
  name: any
  print_headline: any
  seo: any
  sub: any
}

export type New = {
  abstract: string
  byline: ByLine
  document_type: string
  headline: HeadLine
  keywords: Keywords[]
  lead_paragraph: string
  multimedia: []
  news_desk: string
  pub_date: string
  section_name: string
  snippet: string
  source: string
  type_of_material: string
  uri: string
  web_url: string
  word_count: number
  _id: string
}

export type Response = {
  data: {
    response: {
      docs: any[]
    }
  }
}
