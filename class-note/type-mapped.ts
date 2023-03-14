type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [ K in Heroes ]: number }

const ages: HeroAges = {
  Hulk: 40,
  Capt: 1000,
  Thor: 10000
}