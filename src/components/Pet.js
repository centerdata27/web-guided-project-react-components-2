import React, {useState} from 'react'

export default function Pet(props) {
  const { pet } = props
  const [fav, setFav] = useState(false)

  return (
    <div className='pet-friends container'>
      <p>{pet.name} ({pet.type})</p>
      <button onClick={() => setFav(!fav)}>{fav ? '❤️' : 'favorite'}</button>
    </div>
  )
}
