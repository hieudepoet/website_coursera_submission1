window.onload = function() {
    console.log("Page is fully loaded");
    addTabindex();
};

function upDate(previewPic) {
    const imageDisplay = document.getElementById('image-display');
    const storyContent = document.getElementById('story-content');

    imageDisplay.style.backgroundImage = `url('${previewPic.src}')`;
    imageDisplay.innerHTML = ""; // Giữ nguyên hoặc xóa dòng này nếu không cần nội dung
    storyContent.innerHTML = previewPic.getAttribute('data-story'); // Cập nhật nội dung truyện
    console.log(`Mouse over: ${previewPic.alt}`);
}

function undo() {
    const imageDisplay = document.getElementById('image-display');
    const storyContent = document.getElementById('story-content');

    imageDisplay.style.backgroundImage = 'url("")'; // Xóa ảnh
    imageDisplay.innerHTML = ""; // Xóa nội dung hiển thị
    storyContent.innerHTML = ""; // Xóa nội dung truyện
    console.log("Mouse left image.");
}

function focusImage(previewPic) {
    console.log(`Focused on: ${previewPic.alt}`);
}

function blurImage(previewPic) {
    console.log(`Blurred from: ${previewPic.alt}`);
}

function addTabindex() {
    const images = document.querySelectorAll('#thumbnails img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}
