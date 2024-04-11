function contagemDeVezesQueAcessou() {
    let contador = localStorage.getItem('contador');
    if (!contador) {
      contador = { count: 1, lastVisit: new Date() };
    } else {
      contador = JSON.parse(contador);
      contador.count++;
      contador.lastVisit = new Date();
    }
    localStorage.setItem('contador', JSON.stringify(contador));
  }
  
  function obterUltimaVisitaFormatada() {
    const contador = JSON.parse(localStorage.getItem('contador'));
    const data = new Date(contador.lastVisit);
    const formatoData = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
    return formatoData.format(data);
  }
  
  function adicionarInformacoesAoFooter() {
    const footer = document.querySelector('footer');
    const contador = JSON.parse(localStorage.getItem('contador'));
    const paragrafo = document.createElement('p');
    paragrafo.textContent = `Esta página foi visitada ${contador.count} vezes. A última visita foi: ${obterUltimaVisitaFormatada()}.`;
    footer.appendChild(paragrafo);
  }
  
  contagemDeVezesQueAcessou();
  adicionarInformacoesAoFooter();
  