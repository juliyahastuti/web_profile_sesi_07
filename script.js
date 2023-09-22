function showTab(tabId) {
    // Semua tab-content di-hide
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Tampilkan tab-content yang sesuai dengan tab yang diklik
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}
