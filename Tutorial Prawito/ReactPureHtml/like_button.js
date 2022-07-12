const e = React.createElement;

// Display a "Like" <button>
const LikeButton = () => {
    return e(
    'button',
    { onClick: () => alert("Button Clicked")},
    'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));