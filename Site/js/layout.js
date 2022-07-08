window.onload = function() {
    
    let content = document.getElementById('board-content');
    let post = content.innerHTML;

    // load posts

    for (let i = 0; i < 3; i++) {
        content.insertAdjacentHTML('beforeend', post);
    }

    // load posts styleshit 

    let link = document.createElement('link');

    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = 'css/posts.css';

    document.getElementsByTagName('head')[0].appendChild(link);
}