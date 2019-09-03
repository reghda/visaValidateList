const PoPap = function () {
    const generatePersons = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    const openModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";

        window.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        }
    };

    const closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    this.init = () => {
        const modalOpenButton = document.getElementById('openModal');
        const modalCloseButton = document.getElementById('closeModal');
        const generate = document.getElementById("generatorPersons");

        modalOpenButton.addEventListener('click', openModal, false);
        modalCloseButton.addEventListener('click', closeModal, false);
        generate.addEventListener('click', generatePersons, false);
    };
};