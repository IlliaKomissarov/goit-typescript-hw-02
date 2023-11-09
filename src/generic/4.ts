/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

// export {};

/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PageProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {
  }
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { };