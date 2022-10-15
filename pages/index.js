import SearchBox from "../blocks/search-box/search-box.js";
import enableLangSelect from "../blocks/lang/lang.js";
import Menu from "../blocks/menu/menu.js";

const search = new SearchBox({
  onSubmit: (query) => {
    window.open(`https://www.google.com/search?q=${query}`);
  }
});
enableLangSelect();
const menu = new Menu({});
