export type Alojamento = {
  vagasDisponiveis: number,
  camaA: Camas,
  camaB: Camas
}

export type Camas = Cama[]

export type Cama = {
  id: number,
  disponivel: boolean
}
