/* Una variable que contenga el titular de la noticia. ++
Una variable que contenga el cuerpo de la noticia. ++ 
Una variable que contenga un array de categorías. ++
Una variable que contenga un array de "otras cosas".++
Una variable que contenga un valor booleano, indicando si se
debe imprimir el copyright en el footer o no. Si está a true, el texto del footer
 debe ser éste: Texto del footer - Ningún derecho reservado, copia lo que quieras. */
function App() {
  const titular = "Titular Noticia";
  const cuerpo =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam,adipisci commodi quo autem magnam sequi magni odio solutatemporibus velit quas";

  const categoria = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de cultura",
    "Noticias de fiestas",
    "Noticias de politica",
    "Noticias de arregloCommit",
  ];
  const otraCosa = [
    { id: 1, cosa: "Nosequé" },
    { id: 2, cosa: "Talycual" },
    { id: 3, cosa: "Nosecuánto" },
  ];
  const NohayCopy = "no";

  return (
    <>
      <div className="container">
        <header className="cabecera text-white row align-items-center">
          <h1 className="col m-0">Título</h1>
          <nav className="col text-right">
            <ul className="links-navegacion list-inline m-0">
              <li className="list-inline-item">hola</li>
              <li className="list-inline-item">adiós</li>
              <li className="list-inline-item">ciao</li>
            </ul>
          </nav>
        </header>
        <div className="contenedor-principal row">
          <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <h2>{titular}</h2>
            <p>{cuerpo}</p>
            <p>{cuerpo}</p>
          </main>
          <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
            <section className="listado">
              <h3>Categorías</h3>
              <ul className="list-unstyled">
                {categoria.map((categoria) => (
                  <li key={categoria.id}>{categoria.noticia}</li>
                ))}
              </ul>
            </section>
            <section className="listado">
              <h3>Otras cosas</h3>
              <ul className="list-unstyled">
                {otraCosa.map((cosa) => (
                  <li key={cosa.id}>{cosa.cosa}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
        <footer className="pie text-white row align-items-center">
          <p className="col text-center">
            {NohayCopy === "si"
              ? "Texto del footer"
              : "Ningún derecho reservado, copia lo que quieras."}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
