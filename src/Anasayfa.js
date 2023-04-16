import React, { useEffect, useState } from 'react';
import db from './firebaseConfig';

function AnaSayfa() {
  const [seyahatYerleri, setSeyahatYerleri] = useState([]);

  useEffect(() => {
    db.collection('seyahatYerleri')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSeyahatYerleri(data);
      });
  }, []);

  return (
    <div>
      {seyahatYerleri.map((seyahatYeri) => (
        <div key={seyahatYeri.id}>
          <img src={seyahatYeri.resimUrl} alt={seyahatYeri.ad} />
          <h2>{seyahatYeri.ad}</h2>
          <p>{seyahatYeri.aciklama}</p>
        </div>
      ))}
    </div>
  );
}

export default AnaSayfa;
