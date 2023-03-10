const HeaderComponent = ({ profileImgSrc, logoImgSrc, username }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img style={{ width: '150px', marginLeft: '1rem' }} src={logoImgSrc} />
      </a>

      <div class="" id="navbarText">
        <span class="navbar-text">
          <img src={profileImgSrc} />
          {username}
        </span>
      </div>
    </nav>
  );
};

export default HeaderComponent;
