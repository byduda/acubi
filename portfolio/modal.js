// portfolio/modal.js
document.addEventListener('DOMContentLoaded', () => {
    // seleciona os elementos que vão abrir o modal
    const gridItems = document.querySelectorAll('.template');
    
    // seleciona os elementos do modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // função para abrir o modal
    function openModal(item) {
        // Pega as informações dos data-attributes do item clicado
        const title = item.getAttribute('modal-title');
        const imgSrc = item.getAttribute('modal-img-src');
        const description = item.getAttribute('modal-description');

        // preenche o modal com as informações
        modalTitle.textContent = title;
        modalImg.src = imgSrc;
        modalImg.alt = `Imagem do projeto ${title}`;
        modalDescription.textContent = description;

        // mostra o modal
        modalOverlay.style.display = 'flex';
    }

    // função para fechar o modal
    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    // adiciona o evento de clique para cada item do template
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item);
        });
        // adiciona um cursor de ponteiro para indicar que é clicável
        item.style.cursor = 'pointer'; 
    });

    // adiciona o evento de clique para o botão de fechar
    closeModalBtn.addEventListener('click', closeModal);

    // adiciona o evento de clique no overlay (fundo) para fechar o modal
    modalOverlay.addEventListener('click', (event) => {
        // fecha o modal apenas se o clique for no fundo (overlay) e não no conteúdo
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});