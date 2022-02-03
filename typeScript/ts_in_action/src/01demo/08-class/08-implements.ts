export interface Ball {
  ping(): void
}
interface CheckBall {
  isBall(ball: string): boolean
}

class Basket implements Ball, CheckBall {
  ping() {}
  isBall(ball: string): boolean {
    return ball.toLowerCase().includes('ball')
  }
}

const basket: Basket = new Basket()
console.log(basket.isBall('basketBall'))
