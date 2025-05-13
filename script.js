document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
    alert(`You clicked ${link.textContent}`);
    // 링크는 기본 이동하게 둠
  });
});
