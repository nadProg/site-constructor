
import { mapMutations } from 'vuex';

export default {
  created() {
    this.setValue('blog');
    this.addElement({areaId: 'header-1', tag: 'p', content: ''});
    this.addElement({areaId: 'header-1', tag: 'h1', content: 'Site Constructor'});
    this.addElement({areaId: 'header-1', tag: 'h2', content: 'Create landing, blog or shop you want'});
    this.addElement({areaId: 'content-1', tag: 'img', content: 'https://picsum.photos/1500/1000'});
    this.addElement({areaId: 'content-2', tag: 'img', content: 'https://picsum.photos/1000/1000'});
    this.addElement({areaId: 'content-3', tag: 'img', content: 'https://picsum.photos/500/1000'});
    this.addElement({areaId: 'footer-1', tag: 'p', content: ''});
    this.addElement({areaId: 'footer-1', tag: 'p', content: ''});
    this.addElement({areaId: 'footer-1', tag: 'p', content: ''});
    this.addElement({areaId: 'footer-1', tag: 'p', content: 'Copyright \u00A9 Eugene Skrobov'});
  },
  methods: {
    ...mapMutations('selector', ['setValue']),
    ...mapMutations('areas', ['addElement']),
  },
};

