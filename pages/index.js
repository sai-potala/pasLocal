

export default function Home() {

  return (
    <>
      <div className="grid-container">
        <header>Header</header>
        <main>
          <div className="main-grid-container">
            <section className="fixed-nav-bar">nav bar</section>
            <section className="name-widgets">name-widgets</section>
            <section className="work-area">
              <div className="work-grid-container">
                <section className="get-next-case">get next case</section>
                <section className="cases-assigned">cases assigned</section>
                <section className="cases-worked">cases worked</section>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
