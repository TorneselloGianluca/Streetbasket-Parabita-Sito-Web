import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient' 
function Risultati() {
  const [partite, setPartite] = useState([])

  useEffect(() => {
    getPartite()
  }, [])

  async function getPartite() {
    // Chiediamo a Supabase i dati della tabella 'partite'
    const { data } = await supabase.from('partite').select('*')


    if (error) {
      console.error("Errore Supabase:", error.message)
    } else {
      console.log("Dati ricevuti:", data)
      setPartite(data)
    }

    
    setPartite(data)
  }

  return (
    <div>
      <h1>Risultati Torneo</h1>
      {partite.map((partita) => (
        <div key={partita.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <p>{partita.squadra_casa} {partita.punti_casa} - {partita.punti_ospite} {partita.squadra_ospite}</p>
        </div>
      ))}
    </div>
  )
}

export default Risultati