import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from the marvel api
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#dddddd'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Jarvis Web Project')

    container.appendChild(title)

    let captainAmericaCard = new Card({
      title: 'Captain America',
      image: '/images/captainamerica1.png',
      description: 'Captain America is the alter ego of Steve Rogers, a frail young man who receives a Super Soldier Serum during World War 2. He is the living symbol of freedom.',
      link: 'http://marvel.com/universe/Captain_America#axzz50aMptXv7',
      linkText: 'More Info on Captain America'
    })
    container.append(captainAmericaCard.getContent())

    let ironManCard = new Card({
      title: 'Iron Man',
      image: '/images/ironman1.png',
      description: 'Tony Stark is the invincible Iron Man, a "cool exec with a heart of steel", fighting for justice as a modern day knight in high-tech armor.',
      link: 'http://marvel.com/universe/Iron_Man_(Anthony_Stark)#axzz50aMptXv7',
      linkText: 'More Info on Iron Man'
    })
    container.append(ironManCard.getContent())

    let magnetoCard = new Card({
      title: 'Magneto',
      image: '/images/magneto1.png',
      description: 'Magneto is a powerful mutant, who has the ability to generate and control magnetic fields. He aims to conquer the world to enable mutants to live as the dominant species.',
      link: 'http://marvel.com/universe/Magneto#axzz50aMptXv7',
      linkText: 'More Info on Magneto'
    })
    container.append(magnetoCard.getContent())

    let professorXCard = new Card({
      title: 'Professor X',
      image: '/images/professorx2.png',
      description: 'Professor Charles Francis Xavier is a mutant. The founder of the X-Men, Xavier is an exceptionally powerful telepath who can read and control the minds of others.',
      ink: 'http://marvel.com/universe/Professor_X#axzz50aMptXv7',
      linkText: 'More Info on Professor X'
    })
    container.append(professorXCard.getContent())

     return container
  }

  animate() {
  }
}
