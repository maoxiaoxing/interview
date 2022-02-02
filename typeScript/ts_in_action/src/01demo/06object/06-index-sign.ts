// 索引签名
export interface StringArr {
  [index: number]: string
}

const arr: StringArr = ['1']

interface StrObj {
  [props: string]: number | string
}

const obj: StrObj = {
  1: '1',
  '2': '2'
}
